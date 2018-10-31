b = "40 80 60"
b = map(float, b.split(" "))
b = sorted(b, reverse = True)
c = 0
for i in b:
    c = c + i / b[0] * 100
    print (i / b[0] * 100)
print c / len(b)
