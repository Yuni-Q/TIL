a = list("zZa".upper())
dic = {}
for i in a:
	if i in dic:
		dic[i] += 1
	else:
		dic[i] = 1
ans = ""
temp = 0
m = max(dic.values())
for key in dic:
	if dic.get(key) > temp:
		temp = dic.get(key)
		ans = key
	elif dic.get(key) == m:
		ans = "?"
		break
print (ans)

 