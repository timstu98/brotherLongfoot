class Character {
  constructor(name, health, strength, range, luck, magic) {
    this._name = name;
    this._health = health;
    this._strength = strength;
    this._range = range;
    this._luck = luck;
    this._magic = magic;
  }

  takeDamage(damage) {
    this.health -= damage;
  }

  increaseHealth(value) {
    this.health += value;
  }

  increaseStrength(value) {
    this.strength += value;
  }
  decreaseStrength(value) {
    this.strength -= value;
  }
  increaseRange(value) {
    this.range += value;
  }
  decreaseRange(value) {
    this.range -= value;
  }
  increaseLuck(value) {
    this.luck += value;
  }
  decreaseLuck(value) {
    this.luck -= value;
  }

  checkBounds(value, upper = 100, lower = 0) {
    if (value > upper) {
      return upper;
    } else if (value < lower) {
      return lower;
    } else {
      return value;
    }
  }

  get name() {
    return this._name;
  }

  get health() {
    return this._health;
  }

  set health(value) {
    this._health = this.checkBounds(value);
  }

  get strength() {
    return this._strength;
  }

  set strength(value) {
    this._strength = this.checkBounds(value);
  }

  get range() {
    return this._range;
  }

  set range(value) {
    this._range = this.checkBounds(value);
  }

  get luck() {
    return this._luck;
  }

  set luck(value) {
    this._luck = this.checkBounds(value);
  }

  get magic() {
    return this._magic;
  }

  get meleeStat() {
    let value = this.strength * 0.6 + this.range * 0.25 + this.luck * 0.15;
    if (this.magic) {
      value *= 0.8;
    }
    return Math.floor(this.checkBounds(value, 90, 10));
  }

  get trickStat() {
    let value = this.strength * 0.15 + this.range * 0.25 + this.luck * 0.6;
    if (this.magic) {
      value *= 1.3;
    }
    return Math.floor(this.checkBounds(value, 90, 10));
  }

  get distanceStat() {
    let value = this.strength * 0.25 + this.range * 0.6 + this.luck * 0.15;
    if (this.magic) {
      value *= 1.1;
    }
    return Math.floor(this.checkBounds(value, 90, 10));
  }
}

export class Human extends Character {
  constructor(name) {
    super(name, 50, 50, 75, 25, false);
  }
}

export class Elf extends Character {
  constructor(name) {
    super(name, 75, 25, 50, 50, true);
  }
}

export class Hobbit extends Character {
  constructor(name) {
    super(name, 50, 50, 25, 75, false);
  }
}
