def num(a):
	su = 0
	while a > 0:
		su += a % 10
		a = a // 10
	return su


a = [ False ] * 10109
a[0] = True
for i in range(1,9980):
	ans = i + num(i)
	a[ans] = True
for i in range(1, 10001):
	if a[i] == False:
		print (i)
