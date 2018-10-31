# 줄 서는 방법 Level 5
# N명의 사람이 있을 때, N명의 사람을 서로 다른 방법으로 줄을 세우는 방법은 N!개가 존재합니다.

# 이 때 각각의 사람들에게 번호를 매겨서 줄을 서는 방법을 표시합니다. 예를들어 [1,2,3,4]는 1번 사람이 제일 앞에, 2번 사람이 2두번째에... 서 있는 상태를 나타냅니다.

# 이러한 각각의 방법을 사전순으로 정렬했을때 K번째 방법으로 줄을 세우는 방법을 찾아 보려고 합니다.

# 예를 들어 3명의 사람이 있다면 총 6개의 방법은 다음과 같이 정렬할 수 있습니다.

# 1번째 방법은 [1,2,3]
# 2번째 방법은 [1,3,2]
# 3번째 방법은 [2,1,3]
# 4번째 방법은 [2,3,1]
# 5번째 방법은 [3,1,2]
# 6번째 방법은 [3,2,1]
# 이 때 K가 5이면 [3,1,2]가 그 방법입니다.

# 사람의 수 N과 순서 K를 입력받아 K번째 방법으로 줄을 세우는 setAlign 함수를 완성해 보세요. 예를 들어 setAlign(3,5)를 입력받는다면 [3,1,2]를 리턴해주면 됩니다.
answer = []
sub = -> n { (1..n).inject{|item, total| total = total * item }}
n = 3
k = 5
k = k - 1 
list = []
for i in 1..n
	list << i
end
while list.length() > 1 do
fac = sub.call(list.length-1)
index = k / fac 
answer << list[index]
list.delete_at(index)
k = k % fac
end
answer << list[0]
puts answer.to_s