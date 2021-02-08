import { verifyAge } from "../src";
import { Casino, LOCATION, NACIONALITY, User2 } from "../src/types/types";

test("1 brazilian allowed", () => {
    const brazilian: User2 = {
      name: "Astrodev",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.BRAZIL,
    };

    const result = verifyAge(casino, [brazilian]);
    expect(result.brazilians.allowed).toEqual(["Astrodev"]);
  });