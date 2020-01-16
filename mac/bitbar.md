# bitbar

- https://getbitbar.com/
- 이 오픈소스를 사용하면 원하는것을 스크립트로 작성하여 맥의 상단 메뉴바에 띄울 수 가 있습니다!
- brew cask install bitbar
- 플러그인 폴더 설정
- https://getbitbar.com/plugins/Dev/GitHub/github-contribution.10m.rb
- 커밋을 안했을 경우 💩 아이콘이 노출 되기때문에 조금 거북한 느낌이 있어서 변경 해서 사용합니다

```ruby
#!/usr/bin/env ruby
# frozen_string_literal: true
# <bitbar.title>Github Contribution</bitbar.title>
# <bitbar.version>v0.0.1</bitbar.version>
# <bitbar.author>mizoR</bitbar.author>
# <bitbar.author.github>mizoR</bitbar.author.github>
# <bitbar.image>https://user-images.githubusercontent.com/1257116/34550684-37da7286-f156-11e7-9299-5873b6bb2fd7.png</bitbar.image>
# <bitbar.dependencies>ruby</bitbar.dependencies>
#
# To setup, create or edit your ~/.bitbarrc file with a new section:
#
# [github_contribution]
# username = mizoR
# max_contributions = 10
require 'erb'
require 'date'
require 'open-uri'
module BitBar
class INIFile
Error = Class.new(StandardError)
INIFileNotFound = Class.new(Error)
SectionNotFound = Class.new(Error)
def self.load(file = "#{ENV['HOME']}/.bitbarrc")
raise INIFileNotFound if !File.exist?(file)
parse(open(file) { |f| f.read })
end
def self.parse(source)
# XXX: This implementation isn't correct, but will work in most cases.
# (Probably `StringScanner` will make code correct and clean.)
sections = {}
section = nil
source.each_line do |line|
if line =~ /^ *;/
# comment
next
end
if line =~ /^\[(.+)\]$/
section = sections[$1.to_sym] = {}
next
end
if line =~ /(.+)=(.+)/
name = $1.strip.to_sym
value = $2.strip
section[name] = value[/^"(.*)"$/, 1] || value[/^'(.*)'$/, 1] || value
next
end
end
new(sections: sections)
end
def initialize(sections:)
@sections = sections
end
def fetch(name)
@sections.fetch(name.to_sym)
rescue KeyError
raise SectionNotFound
end
end
module GitHubContribution
ConfigurationError = Class.new(StandardError)
class Contribution < Struct.new(:username, :contributed_on, :count)
RE_CONTRIBUTION = %r|<rect class="day" .+ data-count="(\d+)" data-date="(\d\d\d\d-\d\d-\d\d)"/>|
def self.find_all_by(username:)
[].tap do |contributions|
html = open(url_for(username: username)) { |f| f.read }
html.scan(RE_CONTRIBUTION) do |count, date|
contributions << Contribution.new(username, Date.parse(date), count.to_i)
end
end
end
def color
count <= 0 ? 'brown' : 'green'
end
def icon
case count
when 0 then ':fire:'
when 1..3 then ':seedling:'
when 4..9 then ':herb:'
else ':deciduous_tree:'
end
end
def self.url_for(username:)
"https://github.com/users/#{username}/contributions"
end
end
class View
TEMPLATE = <<-EOT.gsub(/^ */, '')
<%= @contribution.icon %><%= @contribution.count %> | color=<%= @contribution.color %>
---
<% @contributions.each do |c| -%>
<%= @helper.link_to(@helper.contribution_text_for(c), @helper.contribution_activity_for(c)) %>
<% end -%>
EOT
class Helper
def link_to(text, href)
if text =~ / | /
"#{text} href=#{href}"
else
"#{text} | href=#{href}"
end
end
def contribution_text_for(contribution)
"#{contribution.icon} #{contribution.contributed_on.strftime('%Y-%m-%d (%a)')} \t#{contribution.count} | color=#{contribution.color}"
end
def contribution_activity_for(contribution)
query = "from=#{contribution.contributed_on}"
fragment = "year-link-#{contribution.contributed_on.year}"
"https://github.com/#{contribution.username}?#{query}##{fragment}"
end
end
def initialize(contributions:)
@contribution = contributions.fetch(0)
@contributions = contributions
@helper = Helper.new
end
def render
puts ERB.new(TEMPLATE, nil, '-').result(binding)
end
end
class App
DEFAULT_CONFIG = { max_contributions: 10 }
def initialize(config = {})
config = cast_config(DEFAULT_CONFIG.merge(config))
@username, @max_contributions = config.values_at(:username, :max_contributions)
end
def run
contributions = Contribution.find_all_by(username: @username)
.sort_by(&:contributed_on)
.reverse
.slice(0, @max_contributions)
View.new(contributions: contributions).render
end
private
def cast_config(config)
username = config[:username].to_s
max_contributions = config[:max_contributions].to_i
if username.empty?
raise ConfigurationError, 'GitHub username is not given.'
end
if !max_contributions.positive?
raise ConfigurationError,
"Max contributions should be positive integer, but it was #{max_contributions}"
end
{ username: username, max_contributions: max_contributions }
end
end
end
end
if __FILE__ == $0
begin
config = BitBar::INIFile.load.fetch(:github_contribution)
BitBar::GitHubContribution::App.new(config).run
rescue BitBar::INIFile::Error
puts <<-EOM.gsub(/^ */, '')
⚠️
---
To setup, create or edit your ~/.bitbarrc file with a new section:
|
;# ~/.bitbarrc
[github_contribution]
username = <GITHUB_USERNAME>
max_contributions = 10
EOM
rescue BitBar::GitHubContribution::ConfigurationError => e
puts <<-EOM.gsub(/^ */, '')
⚠️
---
#{e.message}
EOM
end
end
```

- plugin 코드의 이름을 보면 github-contribution.10m.rb 라고 쓰여있는데 여기에도 나름의 규칙이 있습니다. 10m 이라고 표기된 부분은 메뉴바의 데이터 갱신 주기라서 원하는 데로 적어주시면 되는데, 현재는 10분에 한번씩 새로고침되도록 설정이 되어있는 상태입니다.
- ~/.bitbarrc 파일을 생성하고 하단의 내용을 입력해줍니다

```bash
[github_contribution] username = GITHUB_ID_HERE max_contributions = 10
```

출처: https://fernando.kr/20?fbclid=IwAR3qmluQE4E3CQe18IvBIcqi944K3ltKU5-jDjTdl_MZoNaNHBbQkOuBVj4 [Fernando 기술 블로그 👨🏻‍💻]
