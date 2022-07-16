import { useQuery } from "react-query";
import type { SearchResult } from "./city";
import { useDebounce } from "./useDebounce";

export function useSearchCityQuery(query: string) {
  const debounced = useDebounce(query, 300);
  const url = new URL("api/city/search", window.location.href);
  url.searchParams.append("q", debounced);
  return useQuery<SearchResult>(
    ["city/search", debounced],
    () => fetch(url).then((res) => res.json()),
  );
}
