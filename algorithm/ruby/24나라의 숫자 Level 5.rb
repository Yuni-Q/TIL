# 24나라의 숫자 Level 5
# 1,2,4 세 개의 숫자만 쓰는 124나라가 있습니다.

# 124나라에서 사용하는 숫자는 다음과 같이 변환됩니다.

# 10진법의 1 → 1
# 10진법의 2 → 2
# 10진법의 3 → 4
# 10진법의 4 → 11
# 10진법의 5 → 12
# 10진법의 6 → 14
# 10진법의 7 → 21
# 10진법의 수 N이 입력될 때, 124나라에서 쓰는 숫자로 변환하여 반환해주는 change124 함수를 완성해 보세요. 예를 들어 N = 10이면 “41”를 반환해주면 됩니다.

# 리턴 타입은 문자열입니다.

answer = ""
n = 10
while(n > 0) do
	if n%3 == 0
		puts answer
		puts answer = "4" + answer
		n-= 1

	else
		answer = (n % 3).to_s + answer
	end
	n = n / 3
end
# answer = (n % 3).to_s + answer
puts answer