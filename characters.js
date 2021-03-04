class Character {
  constructor(name, health, strength, range, luck, magic) {
    this._name = name;
    this._health = health;
    this._strength = strength;
    this._range = range;
    this.luck = luck;
    this.magic = magic;
  }
}

class Human extends Character {
  constructor(name) {
    super(name, 50, 50, 75, 25, false);
  }
}

class Elf extends Character {
  constructor(name) {
    super(name, 75, 25, 50, 50, false);
  }
}

class Hobbit extends Character {
  constructor(name) {
    super(name, 50, 50, 25, 75, true);
  }
}
