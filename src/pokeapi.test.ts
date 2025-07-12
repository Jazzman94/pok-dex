import { assert } from "console";
import { PokeAPI } from "./pokeapi.js";
import { describe, expect, test } from "vitest";

const pokeAPI = new PokeAPI(1000);

describe.each([
  {
    expected: ["canalave-city-area"],
  },
])("PokeApi location-area endpoint", ({ expected }) => {
  test(`Expected: ${expected}`, async () => {
    const response = await pokeAPI.fetchLocations();

    const actual = response.results[0].name;

    expect(actual).toBe(expected[0]);

  });
});

describe.each([
  {
    input: ["canalave-city-area", "eterna-city-area"],
    expected: [1, 2],
  },
])("PokeApi location-area/{name} endpoint $input", ({input, expected }) => {
  test(`Expected: ${expected}`, async () => {
    const responses = await Promise.all(input.map(name => pokeAPI.fetchLocation(name)));
    
    expect(responses[0].id).toBe(expected[0]);
    expect(responses[1].id).toBe(expected[1]);
  });
});