members = ['egoing', 'leezche', 'graphittie']
i = 0
while i < members.length do
    puts(members[i])
    i = i + 1
end

members = ['egoing', 'leezche', 'graphittie']
for member in members do
    puts(member)
end

for item in (5..10) do
  puts(item)
end

puts("아이디를 입력해주세요")
input_id = gets.chomp()
members = ['egoing', 'k8805', 'leezche']
for member in members do
    if member == input_id
        puts('Hello!, '+member)
        exit
    end
end
puts('Who are you?')
