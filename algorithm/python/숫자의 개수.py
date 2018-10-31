a = 150
b = 266
c = 427
print (a*b*c)
d = list(str(a*b*c))
print (d)
a0 = 0
a1 = 0
a2 = 0
a3 = 0
a4 = 0
a5 = 0
a6 = 0
a7 = 0
a8 = 0
a9 = 0
for i in d:
	if i == '0':
		a0 +=1
	elif i == '1':
		a1 +=1
	elif i == '2':
		a2 +=1
	elif i == '3':
		a3 +=1
	elif i == '4':
		a4 +=1
	elif i == '5':
		a5 +=1
	elif i == '6':
		a6 +=1
	elif i == '7':
		a7 +=1
	elif i == '8':
		a8 +=1
	elif i == '9':
		a9 +=1
print (a0)
print (a1)
print (a2)
print (a3)
print (a4)
print (a5)
print (a6)
print (a7)
print (a8)
print (a9)
