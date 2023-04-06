const { Pokemon, Fire, Water, Grass } = require('../pokemon');

describe('Pokemon', () => {
  test('return a name when a parameter is passed', () => {
    const testPokemon = new Pokemon('Ratatta');
    expect(testPokemon.name).toEqual('Ratatta');
  });
  
  test('should return the type of Pokemon when type is passed', () => {
    const testPokemon = new Pokemon('name', 'normal');
    expect(testPokemon.type).toBe('normal');
  });

  test('should return a number when hit points is passed', () => {
    const testPokemon = new Pokemon('name', 'normal', 50);
    
    expect(testPokemon.hitPoints).toBe(50);
  });
  test('should return a number when attackDamage is passed', () => {
    const testPokemon = new Pokemon('name', 'normal', 'hitPoints', 10);
    expect(testPokemon.attackDamage).toBe(10);
  });
  test('should return tackle as a default when move is passed ', () => {
    const testPokemon = new Pokemon('name', 'normal', 'hitPoints', 'attackDamage', 'tackle');
    expect(testPokemon.move).toBe('tackle');
  });
  test('should return false if current pokemon is normal type', () => {
    const testPokemon = new Pokemon('name', 'normal', 55, 18, 'headbutt')
    const firePokemon = new Fire('Flareon', 65, 20, 'fireblast')
    expect(testPokemon.isEffectiveAgainst(firePokemon)).toBe(false)
  })
  test('should return false if current pokemon is fire against a water pokemon', () => {
    const firePokemon = new Fire('Flareon', 65, 20, 'fireblast')
    const waterPokemon = new Water('Vaporeon', 70, 19, 'hydro pump')
    expect(firePokemon.isEffectiveAgainst(waterPokemon)).toBe(false);
  })
  test('should return false if current pokemon is water against a grass pokemon', () => {
    const waterPokemon = new Water('Vaporeon', 70, 19, 'hydro pump')
    const grassPokemon = new Grass('Leafeon', 65, 17, 'Giga drain')
    expect(waterPokemon.isEffectiveAgainst(grassPokemon)).toBe(false);
  })
  test('should return false if current pokemon is grass against fire pokemon', () => {
    const grassPokemon = new Grass('Leafeon', 65, 17, 'Giga drain');
    const firePokemon = new Fire('Flareon', 65, 20, 'fireblast');
    expect(grassPokemon.isEffectiveAgainst(firePokemon)).toBe(false);
  })
  test('should return true if current pokemon is fire against a water pokemon', () => {
    const waterPokemon = new Water();
    const firePokemon = new Fire();
    expect(firePokemon.isWeakTo(waterPokemon)).toBe(true);
  })
  test('should return true if current pokemon is grass against a fire pokemon', () => {
    const grassPokemon = new Grass();
    const firePokemon = new Fire();
    expect(grassPokemon.isWeakTo(firePokemon)).toBe(true);
  })
  test('should return true if current pokemon is water against a grass pokemon', () => {
    const waterPokemon = new Water();
    const grassPokemon = new Grass();
    expect(waterPokemon.isWeakTo(grassPokemon)).toBe(true);
  })
  test('should take a number and reduce this by the given amount', () => {
    const firePokemon = new Fire();
    const waterPokemon = new Water();
    const grassPokemon = new Grass();
    firePokemon.takeDamage(10)
    waterPokemon.takeDamage(15)
    grassPokemon.takeDamage(2)
    expect(firePokemon.hitPoints).toBe(40)
    expect(waterPokemon.hitPoints).toBe(35)
    expect(grassPokemon.hitPoints).toBe(48)
  })
  test('should return the attackDamage points when useMove is used', () => {
    const firePokemon = new Fire('Flareon', 65, 20, 'Fire blast')
    expect(firePokemon.useMove('Fire blast')).toBe(20)
  })
  test('should return true if the hitPoints is 0', () => {
    const firePokemon = new Fire ('Flareon', 0, 20, 'Fire blast')
    expect(firePokemon.hasFainted()).toBe(true)
  })
  test('should return false if the hitPoints is not 0', () => {
  const waterPokemon = new Water ('Vaporeon', 70, 19, 'hydro pump')
  waterPokemon.takeDamage(69)
  expect(waterPokemon.hasFainted()).toBe(false)
    })
});


// test('', () => {
//   expect().toBe();