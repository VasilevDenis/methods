export default class Character {
  constructor(name, type, attack, defence) {
      if (name.length < 2 || name.length > 10) {
          throw new Error('Name must be between 2 and 10 characters long');
      }

      const validTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
      if (!validTypes.includes(type)) {
          throw new Error('Invalid character type');
      }

      this.name = name;
      this.type = type;
      this.health = 100;
      this.level = 1;
      this.attack = attack;
      this.defence = defence;
  }

  levelUp() {
    if (this.health === 0) {
        throw new Error("Cannot level up a dead character");
    }

    this.level += 1;
    this.attack += Math.round(this.attack * 0.2);
    this.defence += Math.round(this.defence * 0.2);

    if (this.health < 100) {
        this.health = 100;
    }
}

  damage(points) {
    this.health -= points * (1 - this.defence / 100);

    if (this.health < 0) {
        this.health = 0;
    }
}

}


