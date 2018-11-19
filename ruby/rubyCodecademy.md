Put / print
print "This text will bump right into"
# java에서 print
puts "this text!"
# java에서 println
간단한 연산
Addition (+)
Subtraction (-)
Multiplication (*)
Division (/)
Exponentiation (**)
Modulo (%)
“”안에 변수 출력하기(#{변수})
puts "Your string is: #{user_input}"
Length
puts "Jamie".length
# String의 길이보기 (5)
Reverse 
puts "Jamie".reverse
# 거꾸로 출력하기 (eimaJ)
대문자로 소문자로
puts "Jamie".upcase
puts "Jamie".downcase
주석
# 한 줄 주석
=begin
여러줄 주석
=end
값 받아오기 (gets.chomp)
first_name = gets.chomp
첫 글자 대문자로 (capitalize!)
first_name.capitalize!
If
if 100 > 200
  puts "200!!"
elsif 100 < 200
  puts "100!!"
  else
  puts "no!!"
end
Unless
10-1 unless 1
hungry = false
unless hungrt
  puts "I'm writing Ruby programs!"
else
  puts "Time to eat!"
end
9-1 unless 2
problem = false
print "good to go!" unless problem
Include? Gsub! (판별하기, 값 바꾸기)
if user_input.include? "C"
user_input.gsub!(/C/, "th")
While 
while i < 5
  puts i
  # Add your code here!
  i = i + 1
end
Until
until counter > 10
puts counter
counter = counter + 1
end
For
14-1 ... 미만
for num in 1...10
  puts num
end
14-2 .. 이하
for num in 1..15
  puts num
end
Loop do, next if, break
loop do
  i -= 1
  next if i % 2 == 1 
  print "#{i}"
  break if i <= 0
end
Each
16-1 each
Number.each { |item| put item }
16-2 each do
odds.each do|item|
  print item*2
end
반복 출력
3.times {print "Ruby!"}
#3번 반복
Split
words = text.split(" ")
Hash
pets = Hash.new
pets = {
  "bowser" => "hamster",
  "kevin sorbo" => "fish"
  }
puts pets["kevin sorbo"]
puts pets["bowser"]
2중 배열
20-1
s = [["ham", "swiss"], ["turkey", "cheddar"], ["roast beef", "gruyere"]]
s.each {|sub_array| sub_array.each {|element| puts element}}
20-2
secret_identities = {
  "The Batman" => "Bruce Wayne",
  "Superman" => "Clark Kent",
  "Wonder Woman" => "Diana Prince",
  "Freakazoid" => "Dexter Douglas"
}
  
secret_identities.each do |item, price|
  puts "#{item}: #{price}"
end
Key값 출력 안하기
lunch_order = {
  "Ryan" => "wonton soup",
  "Eric" => "hamburger",
  "Jimmy" => "sandwich",
  "Sasha" => "salad",
  "Cole" => "taco"
}

lunch_order.each do |person, order| 
  puts order
end
Sort and to_s
puts "text!!"
text = gets.chomp

words = text.split(" ")
frequencies = Hash.new(0)
words.each { |word| frequencies[word] += 1 }
frequencies = frequencies.sort_by {|a, b| b }
frequencies.reverse!
frequencies.each { |word, frequency| puts word + " " + frequency.to_s }
Method
def puts_1_to_10
  (1..10).each { |i| puts i }
end
puts_1_to_10 # Ignore this for now. We'll explain it soon!
Splat!
def what_up(greeting, *friends)
  friends.each { |friend| puts "#{greeting}, #{friend}!" }
end
what_up("What up", "Ian", "Zoe", "Zenas", "Eleanor")
결합 비교 연산자 (같으면 0 앞이 크면 1 뒤가 크면 -1)
book_1 <=> book_2
Class 생성자
초기화 할 때 
Def initialize()
End
#함수 호출 할 때 무조건 제일 먼저 실행
 판별
Def setV1(v)
	If v.is_a?(Integer)
@v1 = v
End
end