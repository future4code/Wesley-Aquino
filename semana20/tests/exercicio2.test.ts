import { performPurchase, verifyAge } from "../src"
import { Casino, LOCATION, NACIONALITY, User, User2 } from "../src/types/types"

test("Testing balance greater than value", () => {
    const user: User = {
        name: "Wesley",
        balance: 100
    }
    const result = performPurchase(user, 50)

    expect(result).toEqual({
        ...user,
        balance: 50
    })
})

test("Testing balance greater than value", () => {
    const user: User = {
        name: "Wesley",
        balance: 50
    }
    const result = performPurchase(user, 50)

    expect(result).toEqual({
        ...user,
        balance: 0
    })
})

test("Testing balance greater than value", () => {
    const user: User = {
        name: "Wesley",
        balance: 30
    }
    const result = performPurchase(user, 50)

    expect(result).toEqual(undefined)
})

test("1 american allowed", () => {
    const brazilian: User2 = {
      name: "Astrodev",
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    };

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.BRAZIL,
    };

    const result = verifyAge(casino, [brazilian]);
    expect(result.americans.allowed).toEqual(["Astrodev"]);
  });

  test("2 american allowed and 2 brazilians unallowed", () => {
    const brazilian: User2 = {
      name: "Astrodev BR",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const american: User2 = {
      name: "Astrodev EUA",
      age: 21,
      nacionality: NACIONALITY.AMERICAN,
    };

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.EUA,
    };

    const result = verifyAge(casino, [
      brazilian,
      brazilian,
      american,
      american,
    ]);
    expect(result.brazilians.unallowed).toEqual(["Astrodev BR", "Astrodev BR"]);
    expect(result.americans.allowed).toEqual(["Astrodev EUA", "Astrodev EUA"]);
  });