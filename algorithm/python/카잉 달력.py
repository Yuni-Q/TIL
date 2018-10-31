M,N,x,y = map(int, "13 11 5 6".split(" "))
q = M
w = N
e = M * N
while(True):
	t = q % w
	if t == 0:
		break
	q = w
	w = t
e = e / w
a, b = 0, 0
d = 0
ans = 0
while(True):
	a += 1
	b += 1
	ans += 1
	if a == x:
		d = M
		break
	elif b == y:
		d = N
		break
while(True):
	a = (a+d) % M
	b = (b+d) % N
	ans += d
	if a == x and b == y:
		break
	if ans > e:
		ans = -1
		break 
print (ans)


