n = 72
i = 2
while i*i <= n
	while n % i == 0
		puts i
		n /= i
	end
	i += 1
end
if n > 1
	puts n
end
