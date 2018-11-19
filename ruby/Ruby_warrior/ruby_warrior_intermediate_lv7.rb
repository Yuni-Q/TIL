
class Player
  def play_turn(warrior)
    # cool code goes here



   #if  warrior.feel(:left).captive?
    #  warrior.rescue!(:left)

    #if warrior.listen
     # warrior.walk!(warrior.direction_of_stairs)
    if warrior.feel(:forward).enemy?
      warrior.attack!(:forward)
    elsif  warrior.feel(:forward).captive?
      warrior.rescue!(:forward)

    #elsif warrior.feel(:left).enemy?
    # warrior.bind!(:left)
    #elsif
    #elsif warrior.feel(warrior.direction_of_stairs).enemy?
    #if warrior.feel(warrior.direction_of_stairs).captive?
       # warrior.rescue!(warrior.direction_of_stairs)
    #   warrior.attack!(warrior.direction_of_stairs)

    else
      warrior.walk!(warrior.direction_of_stairs)
    end




  end
end
  
