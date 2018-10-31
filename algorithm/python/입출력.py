arr = [4,1,3,2]
a = len(arr)
ans = False
for i in range(a):
        a += i
print (a)
for i in arr:
        a -= i
print (a) 
if a == 0:
    ans = True
    print (ans)
else :
	ans = False
print (ans)