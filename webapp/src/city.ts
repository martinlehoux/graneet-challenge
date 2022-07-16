export type City = {
  code: string;
  name: string;
  postalCode: string;
};

export type SearchResult = {
  metropoleCities: City[];
  overseasCities: City[];
};
