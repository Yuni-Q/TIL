def aa(a, b):
	return a+b

def bb(a, b):
	return a-b

c = aa(1, 2)
d = bb(2, 1)

print c
print d

# 딕셔너리 요소 삭제하기
# del a[1]

# Key: Value 쌍 모두 지우기(clear)
# a.clear()

# 해당 Key가 딕셔너리 안에 있는지 조사하기(in)
# 'name' in a

# sorting 할때 key 값을 기준으로 정렬 
# sorted("This is a test string from Andrew".split(), key=str.lower)

# 복잡한 객체를 정렬할 때 자주 사용
# sorted(student_tuples, key=lambda student: student[2])   

# list.sort(), sorted() 를 통한 정렬 시 비교 기준이 되는 key 파라미터를 가질 수 있다.

# list.sort() 는 리스트 내부에서 정렬된다. 그에 비해 sorted() 는 정렬된 값을 돌려준다. 그렇기 때문에 원래 값을 유지하면서 정렬된 결과를 얻고 싶다면 sorted() 를 사용하면 된다. list.sort() 는 값을 돌려주지 않기 때문에 받게 되면 None 을 받게 된다.