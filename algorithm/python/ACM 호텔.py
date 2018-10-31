a,b,c = map(int, "30 50 30".split(" "))
ans = ""
d =( c // a ) + 1
e = ( c % a )
if e == 0:
	e = a
	d -= 1
if d < 10:
	ans = str(e) + "0" + str(d)
else:
	ans = str(e) + str(d)
print (ans)