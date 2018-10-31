a = 190
ans = 0

while (a > 0):
    if  a % 5 == 0:
        ans += a / 5
        break
    a = a - 3
    ans += 1
    if (a < 0):
        ans = -1
        break
print (ans)