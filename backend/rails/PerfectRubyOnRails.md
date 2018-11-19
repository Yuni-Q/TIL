###### https://luciuschoi.gitbooks.io/exploring_devise/content/

##### devise젬 !!

----

##### <%= …. -%> : 줄바꿈 안하기

----

##### <%# …. %> : 주석

----

##### 코드에 남은 작업 정보를 메모 - TODO, FIXME, OPTIMIZE 어노테이션

```Ruby
# TODO: 무언가를  구현해 주세요.
```

```bash
rake notes
rake notes:todo,rake notes:fixme,rake notes::optimize
```

----

```bash
rake routes
```

----

200 : ok ( 성공 )

201 : created ( 리소스 생성 성공 )

204 : no content

301 : moved_permanently ( 리소스가 영구적으로 이동한 상태)

302 : found (리소스가 일시적으로 이동한 상태 )

303 : see_other ( 리소스가 다른 장소에 존재하는 경우 )

401 : unauthorized ( 인증 요구 )

403 : forbidden ( 요청 거부 )

404 : not_found ( 리소스가 존재하지 않는 경우 )

405 : method_not_allowed ( HTTP 메서드가 허가되지 않는 경우 )

422 : 엔터티(데이터)를 처리하지 못했음

500 : internal_server_error ( 서버 오류 )



----

##### 긴 방법
form_for(@article, url: articles_path)
##### 짧은 방법(레코드 식별을 사용)
form_for(@article)

##### 기존의 글 수정하기
##### 긴 방법
form_for(@article, url: article_path(@article), html: {method: "patch"})
##### 짧은 방법
form_for(@article)

---

Form_for는 controller에서 객체를 new했으면 create로 기존 객체면 update로 보낸다

```html
<input name="_method" type="hidden" value="patch"/>
```

> 이와 같이 post로 보내지만 patch로 되었으면 좋겠다는 추가 정보를 전달해 줍니다.

put은 완전 변경 / patch는 부분 변경 ( 하지만 모든 웹이 호환하지는 않는다 )

이 부분이 update가 patch/put을 모두 대응하지 못하는 이유

----

## test db 만들기

Rake db:fixtures:load

```bash
rails dbconsole #SQLite 클라이언트 실행
sqlite> .tables # 데이터베이스에 포함 된 테이블 목록을 표시
sqlit> .quit # SQLite 클라이언트 종료
```

---

Form_for은 특정 모델 객체를 처리할 때 특화 된 메소드

Form_tag 메소드는 모델과 관계없는, 범용적인 입력 양식을 생성 할 때 사용하는 메소드

----

ex) 

```erb
<%= form_tag ({ controller: :keyword, action: :search}),
	id: :fm, class: :seach do %>
	검색 키워드
	<%= text_field_tag : keywd, '', size: 30 %>
	<%= submit_tag '검색' %>
<% end %>
```

----

```ruby
sleep 3 # 잠시 중단
```

```erb
<div class="actions">
  <%= f.submit '저장', data: { confirm: '저장해도 괜찮습니까?', disable_with: '처리중...' } %>
</div>
```

----

Fields_for 메소드 : form_for 블록 내부에서 사용해야 하는 뷰 헬퍼 입니다. Form_for 내부에서 내부 입력 양식을 생성할 때 사용합니다.

----

simple_format 메소드 : 개행문자를 p와 br 태그로 변환

----

truncate(text [,options])

Length : 남길 글자 갯수

Separator : 어떤 문자까지 잘라버릴지

omission : 생략 부분 대체할 문자

----

Excerpt  : truncate는 처음부터 excerpt는 키워드 기준

----

Cycle 메소드 : 테이블 또는 목록의 배경색을 n행 간격으로 변겅

Current_cycle : 현재 값과 같은 값을 추출

reset_cycle : 초기화

----

Highlight 메소드 : 지정된 키워드를 하이라이트 표시

----

Concat 메소드 : 스크립트 블록 내부에 출력 코드를 포함 ( 간단한 문자열 출력에 활용 )

----

Sanitize 메소드 : 문자열로 부터 태그를 제거

----

Sprint 메소드 : 문자열 출력

----

number_xxxxx 메소드 : 숫자를 다양한 형식으로 가공

----

Strftime 메소드 : 날짜 자료형 ( rails뷰 헬퍼가 아니라 ruby에 있는 Time 객체 메소드 )

ex)

```erb
<% @current = Time.now %>
<%= @current.strftime('%Y년 %m월 %d일 %H:%M:%S') %>
# 2013년 09년 19일 16:36:56
```

----

Link_to 메소드 : 하이퍼링크 생성

ex) 

```erb
<%= link_to 'Top', { contrller: :hello, action: :index}, id: :link class: :menu %>
```

---

Url_for 메소드 : 라우트 정의로 동적 URL 생성

ex)

```erb
<%= url_for(:back) %>
# javascript:history.back()
```

```Ruby
def default_url_options(options = {})
  { charset: 'utf-8'}
end
```

----

Link_to_if

Link_to_unless

Link_to_unless_current : 현재 액션으로 향하는 액션이 무효화되어 문자만 출력 된다

----

Mail_to 메소드 : 메일 주소로 링크 생성

---

image_tag 메소드 : 이미지 태그를 생성

```erb
<%= image_tag 'asd.git' %>
# /app/assets/images 폴더 내부에서 찾는다
<%= image_tag '/icons/button.git' %>
# /public 폴더 내부에 있는 파일을 출력
```

---

Audio_tag와 video_tag	 메소드 : 음악이나 동영상을 브라우저에서 재생

폴더를 자동으로 생성되지 않아서 직접 별도로 만들어 줘야 합니다. ( audios, videos )

---

auto_discovery_link_tag 메소드 : 브라우저 피드 검출 기능을 활성화

----

Favicon_link_tag 메소드 : 사이트 파비콘 지정

최근 브라우저에서는 .gif 형식을 사용하는 것도 가능하지만, 모든 브라우저에 대응하고자 한다면 .ico 형식을 사용하는 것이 좋습니다.

다른 형식을 사요알 경우에는 매개 변수 opt에서 type 속성을 명시적으로 지정해 줘야 합니다.

----

Path_to_xxxx 메소드 : 외부 리소스 경로 추출

----

데이터를 쉽게 덤프해서 출력 : debug 메소드, inspect 메소드

----

Capture 메소드 : 출력 결과를 변수로 저장, 같은 템플릿을 여러 곳에서 재사용하는 경우 편리

---

Tag 메서드 : 내용없는 태그 생성

Content_tag : 내용이 있는 태그 생성

----

content_for 메소드 : Rayout 나누기 

```erb
<%= yield :extend_menu %>

<% content_for :extend_menu do %>
# 내용
<% end %>
```

---

레이아웃 호출하기

```ruby
render layout: 'child'
```

```erb
<%= render template: 'layouts/application' %>
```

```erb
<%= render 'books/book' %>
# <%= render partial: 'books/book' %>
```

---

쿼리메소드

Where

,(and)

..(범위식)

```ruby
@books = Book.where('pblish = ? AND price >= ?', params[:publish],params["price"])
```

```ruby
@books = Book.where('pblish = :publish AND price >= :price', publish: params[:publish], price: params["price"])
```

----

Group 메소드 : 데이터 그룹화

```ruby
@books = Book.select('publish, AVG(price), AS avg_price').group(:publish)
```

----

unscope 메소드 : 쿼리 메서드로 만든 조건 제거

---

None 메소드 : 아무것도 없는 결과 추출

----

Pluck 메소드 : 지정한 필드 데이터를 배열로 추출

---

exists? 메소드 : 데이터 존재 확인

---

이름있는 스코프 : 자주 사용하는 조건문을 모델에 미리 만들어 놓고 사용

Default_scope : 기본 스코프 정의

---

Find_by_sql 메소드 : SQL에 명령 직접 지정

---

Update_all 메소드 : 여러개의 레코드를 한번에 수정

---

transaction 메소드 : 트랜잭션 처리

```ruby
raise '예외 발생: 모든 처리를 취소합니다.' # 강제로 예외 발생
```

----

옵티미스틱 동시 실행 제어

```ruby
t. imteger :lock_version, default: 0
```

---

Acceptance 유효성 검사 : 수락 유효성 검사 ( 약관 동의 같은 )

Confirmation 검사 : 동일 검사 ( 두번 입력할 때 두 값이 같은지를 확인 )

Uniqueness 검사 : 중복되지 않음을 검사

---

```ruby
render action: 'index' # 액션 이름과 다른 이름의 템플릿 호출
render 'index'
render template: 'hello/view' # 다른 폴더의 템플릿 호출
render 'hello/view'
render file: 'data/template/list' # 애플리케이션 외부의 템플릿 호출
render 'data/template/list'

# 여러번 렌더링 될 수 있으므로
render 'simple_info' and return #처럼 액션을 명시적으로 종료 시켜줘야 한다

render text: '오늘은 좋은 날씨네요.' # 문자열 출력 - text 옵션
render inline: '요청정보:<%= debug request.headers' # 인라인 템플릿 출력 

redirect_to url # 리다이렉트처리
send_file path # 파일의 내용을 출력
send_data data # 바이너리 데이터 출력
```
---

session

```ruby
session[:name] = value # 세션 쓰기
session[:email] = nil # 특정 키로 세션을 제거
reset_session # 모든 세션을 제거
```

---

```ruby
before_action :method
after_method :method
around_action :around_logger
# 중간에 yield로 액션을 실행 !!
```

only와 except : 필터 적용 범위 제한 

Skip_action_callback :my_logging : 상속한 필터를 제외

Skip_before_action :mylogging

----

rescue_from 메소드 : 공통적인 예외 처리

---

resources 메소드 : RESTful 인터페이스 정의

resource 메소드 : 하나의 리소스 정의

> index 액션이 정의되지 않았으므로 show,edit,delete 등에서 id 매ㄷ개 변수를 받지 않는다.

라우트 정의를 확인 : http://localhost3000/rails/info/reutes

---

matches? 메소드 : 매개 변수로 요청정도 ( request 객체 )를 받음, 리턴 값으로는 라우트를 유효화할지에 대한 true 또는 false를 리턴

---

namespace와 scope 블록 : 모듈 내부의 컨트롤러를 맵핑

---

```ruby
resoueces :reviews, path_names: { new: :insert, edit: :revise }
# /reviews/insert
#reviews/:id/revise
```

---

resources 메소드 중첩 : 계층 구조를 가진 리소스 표현

```ruby
resources :books do
  resources :reviews, shallow: true # url 긴걸을 방지?
end
```

```ruby
resources :books do
  resources :reviews, only: [ :index, :new, :create ]
end
resources :reviews, except: [ :index, :new, :create ]
```

```ruby
scope shallow_path: :b do
  resources : books do
    resources :reviews, shallow: true
  end
end
```

```ruby
scope shallow_prefix: :b do
  resources : books do
    resources :reviews, shallow: true
  end
end
```

----

라우트 정의 재이용 : concern 메소드와 concerns 옵션

```ruby
concern :additional do
  get :unapproval, on: :collection
  get :draft, on: :memeber
end

resources :reviews, concerns: :addditional
resources :users, concerns: :addditional
```

---

커피스크립트 : 공식 사이트 ( http://coffeescript.org/ )

웹 브라우저에서 동작하는 간단한 인터프리터 사용 ( http://sassmeister.com ) : 실시간 컴파일러 됨 

---

ajax 통신을 위한 템플릿 작성

```ruby
<%= link_to '업데이트', { action: :upanel}, remote: true %>
# link_to 메소드를 ajax로 사용하려면, remote 옵션을 true로 설정해야 합니다.
# <a href="/ajaxupanel" data-remote="true">업데이트 </a>
# ajax 요청에는 템플릿으로 .html.erb가 아니라 .js.erb를 사용한다
```

```ruby
$('result').html(
  "<%= escape_javascript(render 'ajax_result') %>"
);
```

---

slideshare API 사용 ( http://www.slideshare.net ) : 슬라이드 검색 엔진을 마치 자신의 애플리케이션의 일부인 것처럼 이용할 수 있습니다.

---

URL인코딩 : ERB::Util.url_encode

단축형 : ERV::Util.u

---

터보 링크 : 페이지를 이동할때 타이틀과 본문 내용만 변경, 자바스크립트나 스타일시트를 다시 다운받아 분석할 필요가 없어 굉장히 빠르다.

jQuery.read와 window.onload 이벤트가 발생하지 않는다.

커피스크립트에서 보완

```ruby
$ ->
	# 애플리케이션이 실행될 때 실행할 처리 (1)
init = ->
	# 페이지를 일겅 들일 때(이동 포함)에 실해ㅇ할 처리
$(document).read(init) # (2)
$(document).on('page:change',init) #(3)
```

애플리케이션 실행 시점 : 1,2

페이지 이동 시점(터보링크를 사용할 때) : 3

페이지 이동 시점(터보링크를 사용하지 않을 때) : 1,2

---

터보링크 무효화 

1. Gemfile 주석처리

```ruby
# gem 'turbolinks'
```

2. 레이아웃 파일에서 터보링크 설정 변경(layout/application.html.erb)

3. 매니페스트로부터 터보링크를 제거 (assets/javascripts/application.js)

4. 링크 단위로 터보링크 무효화

   ```ruby
   <a href="/books/1" data-no-turbolink>참고</a> 
   <%= link_to '참고', book_path(1), data: { "no-turbolink" => true } %>
   <div data-no-turbolink>
   	<a></a>
   </div>
   ```

   ---

   ### 메일러

   rails generate mailer 메일러이름 메서드이름 [동작옵션]

   메일러를 호출하는 액션 작성

   ```ruby
   @mail = NoticeMailer.sendmail_confirm(user).deliver
   # deliver 메소드를 호출해 줘야한다.
   ```

   첨부 파일을 추가해서 메일 전송

   ```ruby
   attachments['seal.jeg'] =
     File.read(Rails.root.join('tmp/data/seal.jpg'))
   ---
   attachments.inline ['seal.jeg'] =
     File.read(Rails.root.join('tmp/data/seal.jpg'))
   ```

   ---

   Rails 기능 확장

   CarrierWave : 파일 업로드

   Devise : 인증 기능

   Delayed::Job : 비동기 처리

   Haml : 인던트 기법의 템플릿 엔진

   kaminari : 페이징 기능

   mini_magick : 이미지처리

   OminiAuth : 트위터나 페이스북 등을 사용한 인증 처리

   prawn : PDF 문서 처리

   Rspec : RDD 프레임워크

   SettingsLogic : 애플리케이션 설정 관리

   will_paginate : 페이징 기능

   GitHub : (https://github.com/)

   The Ruby Toolbox(http://ruby-toolbox.com/)

   Ready for Rails 4?(http://ready4Rails4.net/)

   ---

   실제 배포 환경

   Thin, Unicorn, Apache HTTP Server + Phusion Passenger

   Heroku !!