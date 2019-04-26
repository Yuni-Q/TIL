interface Charater {
  fight: () => void;
  setWeapon: (w: WeaponBehavior) => void;
}

class Character implements Charater {
  private weapon: WeaponBehavior = null;

  constructor(w: WeaponBehavior) {
    this.weapon = w;
  }
  
  setWeapon = (w: WeaponBehavior) => {
    this.weapon = w;
  }

  getWeapon() {
    return this.weapon;
  }

  fight = () => {}
}

class Queen extends Character {
  // fight = () => {}
}
class King extends Character {
  // fight = () => {}
}

class Troll extends Character {
  // fight = () => {}
}

interface WeaponBehavior {
  userWeapon: () => void;
}

class KnifeBehavior {
  userWeapon = () => {
    // 칼로 베는 것을 구현
  }
}

class AxeBehavior implements WeaponBehavior {
  userWeapon = () => {
    // 도끼로 베는 것을 구현
  }
} 

class SwordBehavior implements WeaponBehavior {
  userWeapon = () => {
    // 검을 휘두르는 것을 구현
  }
}

class BowAndAroowBehavior implements WeaponBehavior {
  userWeapon = () => {
    // 화를 써서 화살을 발사하는 것을 구현
  }
}
