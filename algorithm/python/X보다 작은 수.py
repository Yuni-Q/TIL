a = "10 5    "
b = "10 5 5 5 52 3 7 5 3 6 2 6    "
a = map(int, a.rstrip().split(" "))
b = map(int, b.rstrip().split(" "))
ans = ""
for i in b:
	if a[1] > i:
		ans = ans + str(i) + " "
print (ans.rstrip())
