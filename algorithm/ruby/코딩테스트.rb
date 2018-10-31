## 개미수열
def solution(n)
  ants = Proc.new { |s| s.gsub(/((\d)\2*)/){$1.size.to_s+$2} }
  series = -> n { (1..n-1).reduce("1",&ants) }
  series.call(n).reverse
end

## 배열에서 가장 많은 수가 과반수를 넘는지
def solution(numbers)
    h = numbers.inject(Hash.new(0)) { |h,v| h[v] += 1; h } 
    result = h.collect { |k, v| k if v > numbers.length/2 }.compact.first
    result ||= -1
    result
end

##중고차
def solution(prices)
    answer = 0
    for i in 0..(prices.length-1)
        for j in (i+1)..(prices.length-1)
            if answer < prices[j]-prices[i]
                answer = prices[j]-prices[i]
            end
        end
    end
    return answer
end

## 카드
def solution(card, word)
    answer = []

    card_h = []
    card_h2 = []
    word_h = Hash.new(0)

    card.each do |c|
       temp = c.split("").inject(Hash.new(0)) { |temp, v| temp[v] += 1; temp }

       card_h2.append(temp)

    end
    card_h = card_h2

    word.each do |w|
       	temp = w.split("")
       	temp.each do |v|
	       	if card_h[0].has_key?(v) or card_h[1].has_key?(v) or card_h[2].has_key?(v)
		        card_h[0].each do |key, value|
		            if key == v
		            	value -= 1
		                if value >= 0

		                    word_h["0"] = 1
		                else
		                    word_h["0"] = 0
		                end
		            end
		       end
		       card_h[1].each do |key, value|
		            if key == v
		            	value -= 1 
		                if value >= 0
		                    word_h["1"] = 1
		                else
		                    word_h["1"] = 0
		                end
		            end
		       end
		       card_h[2].each do |key, value|
		            if key == v 
		            	value -= 1
		                if value >= 0
		                    word_h["2"] = 1
		                else 
		                    word_h["2"] = 0
		                end
		            end
		       end
		  	else
		  		break
		  	end
		end

      if word_h["0"] > 0 and word_h["1"] > 0 and word_h["2"] > 0 
          answer.append(w)
      end
      word_h = Hash.new(0) 
      card_h = card_h2
    end
    return answer
end