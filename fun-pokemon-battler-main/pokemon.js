class Pokemon {
  constructor(name, type, hitPoints = 50, attackDamage = 10, move = 'tackles') {
    this.name = name;
    this.type = type;
    this.hitPoints = hitPoints;
    this.attackDamage = attackDamage;
    this.move = move;
  }
  isEffectiveAgainst() {
    return false;
  }
  isWeakTo() {
    return true;
  }
  takeDamage(health) {
  this.hitPoints -= health
  }
  useMove (move) {
    console.log(this.name +'used' + move)
    return this.attackDamage
  }
  hasFainted () {
    if (this.hitPoints === 0) {
      return true
    }
    return false;
  }
}

  class Fire extends Pokemon {
  constructor(name, hitPoints, attackDamage, move) {
    super(name, 'Fire', hitPoints, attackDamage, move)
  }
  isEffectiveAgainst(poke) {
    if (poke.type === 'Grass') {
    return true;
    } 
    return false
  }
  isWeakTo(poke) {
    if (poke.type === 'Water') {
    return true;
  } 
  return false
}
}
class Water extends Pokemon {
  constructor (name, hitPoints, attackDamage, move) {
    super(name, 'Water', hitPoints, attackDamage, move)
  }
  isEffectiveAgainst(poke) {
    if (poke.type === 'Fire') {
    return true;
  }
  return false
  }
  isWeakTo(poke) {
    if (poke.type === 'Grass') {
    return true;
  }
  return false;
}
}
class Grass extends Pokemon {
  constructor (name, hitPoints, attackDamage, move) {
    super(name, 'Grass', hitPoints, attackDamage, move)
  }
  isEffectiveAgainst(poke) {
    if (poke.type === 'Water') {
    return true;
  }
  return false
}
  isWeakTo(poke) {
    if (poke.type === 'Fire') {
    return true;
  }
  return false
}
}

  const newPokemon = new Pokemon()
  const firePokemon = new Fire()
  const waterPokemon = new Water()
  const grassPokemon = new Grass()
module.exports = { Pokemon, Fire, Water, Grass };
