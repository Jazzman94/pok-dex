export class PokeAPI {
    static baseURL = "https://pokeapi.co/api/v2";
    constructor() { }
    async fetchLocations(pageURL) {
        if (!pageURL) {
            pageURL = `${PokeAPI.baseURL}/location-area?limit=20&offset=0`;
        }
        const response = await fetch(pageURL, {
            method: "GET",
            mode: "cors"
        });
        return response.json();
    }
    async fetchLocation(locationName) {
        const respone = await fetch(`${PokeAPI.baseURL}/location-area/${locationName}`, {
            method: "GET",
            mode: "cors"
        });
        return respone.json();
    }
}
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
