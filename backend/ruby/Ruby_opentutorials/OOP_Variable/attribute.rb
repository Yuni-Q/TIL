class Cal

#  attr_reader :value
  #속성_읽는다 :값
  #value를 읽기 가능한 속성으로 하겠다.
  #set/get 없이도 외부에서 접근 가능
#  attr_writer :value
  #쓰기 가능\

  attr_accessor :value
  #일기/쓰기 모두 허용

  def initialize(v)
      @value = v
  end

  def show()
    p @value
  end

end

c1 = Cal.new(10)
p c1.value
c1.value = 20
p c1.value
