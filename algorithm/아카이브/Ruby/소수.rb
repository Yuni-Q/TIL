n = 6
ans = true
if n < 2
	ans = false
end
i = 2
while i*i >= n
	if n % i 
		ans = false
		break
	end
end
puts ans