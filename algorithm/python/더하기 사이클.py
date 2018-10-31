a = "26"
if int(a) < 10:
    a = "0" + a
b = list(a)
cnt = 1
while True:
	e = int(b[0]) + int(b[1])
	if e >= 10:
		c = list(str(e))
		d = b[1] + c[1]
    else:
		d = b[1] + str(e)
	if a == d:
        break
    b = list(d)
    cnt += 1
print (cnt)