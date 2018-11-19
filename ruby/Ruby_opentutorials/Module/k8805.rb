puts(Math.sqrt(16))

def egoing_a()
  return 'a'
end
#엄청 많은 코드
def k8805_a()
  return 'B'
end
#엄청 많은 코드
puts(egoing_a())

###############################################################################
module Egoing
  module_function()
  def a()
    return 'a'
  end
end

module K8805
  module_function()
  def a()
    return 'B'
  end
end

require_relative 'Egoing'
require_relative 'K8805'
puts(Egoing.a())
puts(K8805.a())
