a = ("0 3").split(" ")
gap = int(a[1]) - int(a[0])
pos = 1
i = 2
ans = 1
while pos < gap:
	pos += i / 2
	ans += 1
	i += 1
if pos > gap:
	ans -= 1
print (ans)
