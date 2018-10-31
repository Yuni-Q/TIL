a = [0] * 5
a[0] = 10
a[1] = 65
a[2] = 100
a[3] = 30
a[4] = 95
ans = 0
for i in a:
    if i < 40:
        ans += 40
    else:
        ans += i
print (ans/5)