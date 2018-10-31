b = 3
c = list("ABC")
d = len(c)
for i in range(d):
	c[i] = c[i] * b

print (''.join(c))