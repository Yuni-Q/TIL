num = int(input())
up = []
down = []

for i in range(1, 10000001):
    if i % 2 == 0:
        # 짝수일 경우
        up += [j for j in range(1, i+1)]
        down += [j for j in range(i, 0, -1)]
    else:
        # 홀수일 경우
        down += [j for j in range(1, i+1)]
        up += [j for j in range(i, 0, -1)]

    if len(up) >= num:
        print(str(up[num-1])+'/'+str(down[num-1]))
        break