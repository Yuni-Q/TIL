def gcd(a, b)
	if(b==0)
		return a
	else
		return gcd(b, a%b)
	end
end

a = 2
b = 7
g = gcd(a, b)
l = a * b / g
puts g
puts l
