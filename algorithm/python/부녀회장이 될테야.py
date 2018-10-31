
i = 2+2

n = 3-1

a = [1]*i

for l in range(n):

    for j in range(len(a)-1,-1,-1):

        sum = 0

        for k in range(j,-1,-1):                

            sum += a[k]

        a[j] = sum
        print (a)

print(a[i-1])