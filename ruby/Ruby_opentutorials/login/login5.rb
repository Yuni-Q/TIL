module Auth
  module_function()
  def login(_id)
    members = ['egoing', 'k8805', 'leezche']
    for member in members do
        if member == _id
            return true
        end
    end
    return false
  end
end

require_relative 'Auth'
puts("아이디를 입력해주세요")
input_id = gets.chomp()
if Auth.login(input_id)
  puts('Hello, '+input_id)
else
  puts('Who are you?')
end
