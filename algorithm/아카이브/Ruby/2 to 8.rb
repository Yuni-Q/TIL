s = 11011
n = s.to_s.length
puts s = s.to_s.reverse.split("")
a = 1
ans = ""
i = 0
while i < n
	ans = (s[i].to_i + s[i+1].to_i * 2 + s[i+2].to_i * 4).to_s + ans
	i += 3
end
puts ans