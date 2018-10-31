a = "OneTwoThreeFourFiveSixSevenEightNineTen"
while len(a) >= 10:
    print (a[0:10])
    a = a[10:len(a)]
print (a)