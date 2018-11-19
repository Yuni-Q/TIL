class Cal
  attr_reader :v1, :v2
  attr_writer :v1
  @@_history =[]
  def initialize(v1, v2)
    if v1.is_a?(Integer)
      @v1 = v1
    end
    if v2.is_a?(Integer)
      @v2 = v2
    end
  end

  def add()
    result = @v1+@v2
    @@_history.push("add : #{v1}+#{v2}=#{result}")
    return result
  end

  def subtract()
    result = @v1-@v2
    @@_history.push("subract : #{v1}-#{v2}=#{result}")
    return result
  end

  def setV1(v1)
    if v1.is_a?(Integer)
      @v1 = v1
    end
  end

  def getV1()
    return @v1
  end
  def Cal.history
    for item in @@_history
      p item
    end
  end
end

class CalMultiply < Cal
  def multilply()
    result = @v1*@v2
    @@_history.push("multilply : #{v1}*#{v2}=#{result}")
    return result
  end
end

class CalDivide < CalMultiply
  def divide()
    result = @v1/@v2
    @@_history.push("divide : #{v1}/#{v2}=#{result}")
    return result
  end
end

c1 = CalMultiply.new(10,10)
p c1.add()
p c1.multilply()
c2 = CalDivide.new(10,10)
p c2, c2.add()
p c2, c2.multilply()
p c2, c2.divide()
Cal.history()
