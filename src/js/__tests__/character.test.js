import Character from '../character';

describe('Character Constructor Test', () => {
  it('should create a new Character with correct properties', () => {
    const testCharacter = new Character('TestName', 'Bowman', 20, 30);

    expect(testCharacter.name).toBe('TestName');
    expect(testCharacter.type).toBe('Bowman');
    expect(testCharacter.health).toBe(100);
    expect(testCharacter.level).toBe(1);
    expect(testCharacter.attack).toBe(20);
    expect(testCharacter.defence).toBe(30);
  });

  it('should throw an error with invalid name length', () => {
    expect(() => new Character('a', 'Bowman', 20, 30)).toThrow('Name must be between 2 and 10 characters long');
  });

  it('should throw an error with invalid type', () => {
    expect(() => new Character('TestName', 'InvalidType', 20, 30)).toThrow('Invalid character type');
  });
});


describe("Character Methods Test", () => {
  let testCharacter;

  beforeEach(() => {
    testCharacter = new Character("TestName", "Bowman", 20, 30);
  });

  it("should level up the character correctly", () => {
    testCharacter.levelUp();
    expect(testCharacter.level).toBe(2);
    expect(testCharacter.attack).toBe(24);
    expect(testCharacter.defence).toBe(36);
  });

  it("should not level up a dead character", () => {
    testCharacter.health = 0;
    expect(() => testCharacter.levelUp()).toThrow("Cannot level up a dead character");
  });

  it("should calculate damage correctly", () => {
    testCharacter.damage(10);
    expect(testCharacter.health).toBe(93);
  });

  it("should not allow health to go below 0 when taking damage", () => {
    testCharacter.damage(200);
    expect(testCharacter.health).toBe(0);
  });

  it("should set health to 100 if it's less than 100 after leveling up", () => {
  testCharacter.health = 80;
  testCharacter.levelUp();
  expect(testCharacter.health).toBe(100);
  });

});







