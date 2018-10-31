# N = 100
# count = 0 

# 1.upto(N).each do |n| 
#   loop do
#     q, r = n.divmod(5)
#     if r == 0
#       count += 1
#       if q == 0
#         break
#       else
#         n = q 
#       end 
#     else
#       break
#     end 
#   end 
# end

# p count

n = 100

p n/5 + n/25 + n/125