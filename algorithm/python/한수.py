def num(su):
	su = str(su)
	print (su)
	a = list(su)
	b = len(a)-1
	c = int(a[0]) - int(a[1])
	print (c)
	for i in range(1, b):
		if c != int(a[i]) - int(a[i+1]):
			return 0
	return 1

a = 110
ans = 0
if a < 100:
	ans = a
elif a >= 100:
	ans = 99
	a = a +1
	for i in range(100, a):
		ans = ans + num(i)
print (ans)
