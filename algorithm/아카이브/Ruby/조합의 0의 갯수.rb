n = 25
m = 12
two = 0
five = 0
i = 2
while i <= n
	two += n / i
	i *= 2
end
i = 2
while i <= n-m
	two -= (n-m)/i
	i *= 2
end
i = 2
while i<=m
	two -= m/i
	i *= 2
end
i = 5
while i <= n
	five += n / i
	i *= 5
end
i = 5
while i <= n-m
	five -= (n-m)/i
	i *= 5
end
i = 5
while i<=m
	five -= m/i
	i *= 5
end

ans = Array.new
ans.push(two)
ans.push(five)

puts ans.min