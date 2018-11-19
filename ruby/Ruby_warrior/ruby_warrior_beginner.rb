
class Player
  def play_turn(warrior)
    # cool code goes here
    if @health != nil
      if(warrior.health < @health)
        if warrior.health < 9
          warrior.walk!(:backward)
        elsif(warrior.look(:backward)[1].enemy? || warrior.look(:backward)[2].enemy?)
          warrior.shoot!(:backward)
        elsif warrior.look[1].enemy?
          warrior.shoot!
        elsif warrior.look[0].captive?
          warrior.rescue!
        elsif warrior.feel.empty?
          warrior.walk!
        else
          warrior.attack!
        end
     else
        if warrior.feel.wall?
          warrior.pivot!
        elsif(warrior.look(:backward)[1].enemy? || warrior.look(:backward)[2].enemy?)
          warrior.shoot!(:backward)
        elsif warrior.look[0].captive?
          warrior.rescue!
        elsif warrior.feel.empty?
            if warrior.health<20
              warrior.rest!
            else
              warrior.walk!
            end
          else
            warrior.attack!
        end
      end
    end
    @health = warrior.health
  end
end
  
