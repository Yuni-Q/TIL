n = 3
m = 20
check = Array.new(m+12) { false }
check[0] = check[1] = true
i = 1
while i*i <= m
	i += 1
	if check[i] == true
		next
	end
	j = i+i
	while j <= m
		check[j] = true
		j += i
	end

end
k = n
while k <= m
	if check[k] == false
		puts k
	end
	k += 1
end