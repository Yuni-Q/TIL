ants = Proc.new { |s| s.gsub(/((\d)\2*)/){$1.size.to_s+$2} }
series = -> n { (1..n-1).reduce("1",&ants) }
# puts series.call(1).reverse
# puts series.call(2).reverse
# puts series.call(3).reverse
# puts series.call(4).reverse
# puts series.call(5).reverse
# puts series.call(6).reverse
puts "111233".gsub(/((\d)\2*)/){$2+$1.size.to_s}
puts "111233".gsub(/((\d))/){$2+$1.size.to_s}
puts "1121233".gsub(/((\d)\2)/){$2+$1.size.to_s}
puts "111233".gsub(/((\d)\2)/){$2+$1.size.to_s}
#puts "111111111233".gsub(/((\d)\2)/){$2+$1.size.to_s}
#puts "111111111233".gsub(/((\d)\2)/){$2+$1.size.to_s}
# \d : 숫자, [0-9]와 같음
# * : 0번 이상 반복
# 정규식을 /.../로 묶어준다.
# \n : n이 양의 정수인 곳은, 정규식 안 n번 괄호의 최근 일치 부분의 역참조 입니다. (왼쪽 괄호부터 카운트합니다.)
# $n : 정규식 안 n번 괄호의 최근 일치 부분
