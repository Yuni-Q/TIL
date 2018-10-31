a = 5
for i in range(a):
    ans = " " * (a-(i+1))
    ans = ans + "*" * (i+1)
    print (ans)