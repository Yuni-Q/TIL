# fibo = -> n do
#   if (n<2)
#     answer = n
#   else
#     answer=fibo.call(n-1).to_i+fibo.call(n-2).to_i
#   end
#   return answer
# end
# dab = fibo.call(6)
# puts dab
n = 4
a = 1
b = 1
c = 0
answer = 0

if n <= 2
    c = 1
else
  for i in (3..n)
      c = a + b
      a = b
      b = c
  end
end
puts c

# def fib(n)
#   return n if (0..1).include? n
#   fib(n-1) + fib(n-2) if n > 1
# end
