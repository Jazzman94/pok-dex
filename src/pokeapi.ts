export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    if (!pageURL) {
        pageURL = `${PokeAPI.baseURL}/location-area?limit=20&offset=0`;
    }
    
    const response = await fetch(pageURL, {
        method: "GET",
        mode: "cors"
    });

    return response.json();
  }

  async fetchLocation(locationName: string): Promise<Location> {
    const respone = await fetch(`${PokeAPI.baseURL}/location-area/${locationName}`, {
        method: "GET",
        mode: "cors"
    });
    return respone.json();
  }
}

export type ShallowLocations = {
    count: number;
    next?: string;
    previous?: string;
    results: {name: string}[]
};

export type Location = {
  id: number;
  name: string;
  game_index: number;

};


/*
async function getUsers(url: string, apiKey: string): Promise<UserProfile[]> {
  const response = await fetch(url, {
    method: "GET",
    mode: "cors",
    headers: {"X-API-KEY": apiKey}
  });
  return response.json();
}

*/