max = 1000000
check = Array.new(max+1) { false  }
prime = Array.new()
check[0] = check[1] = true
i = 1
while i*i <= max
	i += 1
	if check[i] == true
		next
	end
	prime.push(i)
	j = i + i
	while 
		check[j] == true
		j += i
	end
end
n = 42
k = 1
while k <prime.size()
	p = prime[k]
	if check[n-p] == false
		puts "#{n} = #{p} + #{n-p}" 
		break
	end
	
end

#drop매서드는 n번째까지의 원소를 drop 한 후 반환하다.
#arr.drop(3)  #=> [4, 5, 6]