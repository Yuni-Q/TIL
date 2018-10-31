a = list("999")
b = [0] * 10
for i in a:
	# 0 = 48
	b[ord(i)-48] += 1
b[6] += b[9]
b[6] = b[6] // 2 + b[6] % 2
del b[9]
print (max(b))
