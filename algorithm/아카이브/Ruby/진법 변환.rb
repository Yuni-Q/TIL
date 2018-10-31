n = 10
b = 16
ans = ""
while(n > 0)
	r = n % b
	if r < 10
		ans = (r.to_s) + ans
	else
		ans = (r + 55 ).chr + ans
	end
	n /= b
end
puts ans