a = 31
n = a.to_s.length
a = a.to_s.reverse.split("")
ans = ""
for i in 0...n
	b = a[i].to_i
	c = ""
	while b > 0
		c = (b % 2).to_s + c
		b /= 2
	end
	if c.length < 2
		c = '00' + c
	elsif c. length < 3
		c = '0' + c
	end
	ans = c + ans
end
ans = ans.to_i
puts ans