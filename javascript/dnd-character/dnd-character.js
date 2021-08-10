//
// This is only a SKELETON file for the 'D&D Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const abilityModifier = (input) => {
  if(!(input >= 3)) throw new Error("Ability scores must be at least 3")
  if(!(input <= 18)) throw new Error("Ability scores can be at most 18")
  return Math.floor((input - 10) / 2)
}

export class Character {
  #stregth
  #dexterity
  #constitution
  #intelligence
  #wisdom
  #charisma
  #hitpoints

  constructor() {
    this.#stregth = this.constructor.rollAbility()
    this.#dexterity = this.constructor.rollAbility()
    this.#constitution = this.constructor.rollAbility()
    this.#intelligence = this.constructor.rollAbility()
    this.#wisdom = this.constructor.rollAbility()
    this.#charisma = this.constructor.rollAbility()
    this.#hitpoints = 10 + abilityModifier(this.#constitution)
  }

  static rollAbility() {
    return Math.floor((Math.random() * 15) + 3)
  }

  get strength() {
    return this.#stregth
  }

  get dexterity() {
    return this.#dexterity
  }

  get constitution() {
    return this.#constitution
  }

  get intelligence() {
    return this.#intelligence
  }

  get wisdom() {
    return this.#wisdom
  }

  get charisma() {
    return this.#charisma
  }

  get hitpoints() {
    return this.#hitpoints
  }

}
