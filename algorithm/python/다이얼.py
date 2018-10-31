a = list("UNUCIC")
ans = 0
for i in a:
	b = (ord(i)-65)
	if b <= 2:
		ans += 3
	elif b <= 5:
		ans += 4
	elif b <= 8:
		ans += 5
	elif b <= 11:
		ans += 6
	elif b <= 14:
		ans += 7
	elif b <= 18:
		ans += 8
	elif b <= 21:
		ans += 9
	elif b <= 25:
		ans += 10
	else:
		ans += 11
print (ans)





