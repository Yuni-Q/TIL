a = list("baekjoon")
d = len(a)
b = [-1] * 26
for i in range(d):
	if a[i] == "a":
		if(b[0] == -1):
			b[0] = i
	elif a[i] == "b":
		if(b[1] == -1):
			b[1] = i
	elif a[i] == "c":
		if(b[2] == -1):
			b[2] = i
	elif a[i] == "d":
		if(b[3] == -1):
			b[3] = i
	elif a[i] == "e":
		if(b[4] == -1):
			b[4] = i
	elif a[i] == "f":
		if(b[5] == -1):
			b[5] = i
	elif a[i] == "g":
		if(b[6] == -1):
			b[6] = i
	elif a[i] == "h":
		if(b[7] == -1):
			b[7] = i
	elif a[i] == "i":
		if(b[8] == -1):
			b[8] = i
	elif a[i] == "j":
		if(b[9] == -1):
			b[9] = i
	elif a[i] == "k":
		if(b[10] == -1):
			b[10] = i
	elif a[i] == "l":
		if(b[11] == -1):
			b[11] = i
	elif a[i] == "m":
		if(b[12] == -1):
			b[12] = i
	elif a[i] == "n":
		if(b[13] == -1):
			b[13] = i
	elif a[i] == "o":
		if(b[14] == -1):
			b[14] = i
	elif a[i] == "p":
		if(b[15] == -1):
			b[15] = i
	elif a[i] == "q":
		if(b[16] == -1):
			b[16] = i
	elif a[i] == "r":
		if(b[17] == -1):
			b[17] = i
	elif a[i] == "s":
		if(b[18] == -1):
			b[18] = i
	elif a[i] == "t":
		if(b[19] == -1):
			b[19] = i
	elif a[i] == "u":
		if(b[20] == -1):
			b[20] = i
	elif a[i] == "v":
		if(b[21] == -1):
			b[21] = i
	elif a[i] == "w":
		if(b[22] == -1):
			b[22] = i
	elif a[i] == "x":
		if(b[23] == -1):
			b[23] = i
	elif a[i] == "y":
		if(b[24] == -1):
			b[24] = i
	elif a[i] == "z":
		if(b[25] == -1):
			b[25] = i
c = ' '.join(str(v) for v in b)
print (c)