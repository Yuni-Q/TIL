class Cs
  def Cs.class_method()
    p "class_method"
  end
  def instance_method()
    p "Instance_method"
  end
end

i = Cs.new()

Cs.class_method()
i.instance_method()
#Cs.instance_method
#i.class_method
#둘다 실행 안됨
