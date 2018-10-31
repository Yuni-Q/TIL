q = 'abcde'

print len(q)

w = list(q)


a = {'a':6,'b':3}

print a['a']
print w

if 'a' in a:
	a['a'] += 1

print a['a']

if 'c' in a:
	a['c'] += 1
else:
	a['c'] = 1

print a

for i in w:
	if i in a:
		a[i] += 1
	else:
		a[i] = 1

print a