a = 3
b =list("happy")
c = len(b)
d =[False] * 26 
d[ord(b[0])-97] = True
for i in range(c):
	if i == 0:
		continue
	if b[i-1] != b[i]:
		if d[ord(b[i])-97] == True:
			a -= 1
			print (1)
			break

		d[ord(b[i])-97] = True
	print (d)
print (d)	
print (a)
# print (d[ord("a")-97])
# print (d)