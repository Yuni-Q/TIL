a,b,c,d,e,f,g,h = map(int, "2 2 3 4 5 6 7 8".split(" "))
ans = 1
if a == 1:
    if b == 2:
        if c == 3:
            if d == 4:
                if e == 5:
                    if f == 6:
                        if g == 7:
                            if h == 8:
                                print ("ascending")
                                ans += 1
elif a == 8:
    if b == 7:
        if c == 6:
            if d == 5:
                if e == 4:
                    if f == 3:
                        if g == 2:
                            if h == 1:
                                print ("descending")
                                ans += 1
if ans < 2:
    print ("mixed")