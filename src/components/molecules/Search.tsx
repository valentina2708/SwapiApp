import { useState, useCallback, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import { useTheme } from "../../Context/ThemeContext";
import debounce from "lodash/debounce";

type Props = {
  setQuery: (query: string) => void;
};

export default function SearchBar({ setQuery }: Props) {
  const { theme } = useTheme();
  const [search, setSearch] = useState("");

  const debouncedSearch = useCallback(
    debounce((text) => {
      setQuery(text); 
    }, 500),
    [setQuery]
  );

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  return (
    <Searchbar
      placeholder="Buscar personaje..."
      value={search}
      onChangeText={(text) => {
        setSearch(text);
        debouncedSearch(text);
      }}
      style={{
        marginVertical: 12,
        borderRadius: 15,
        backgroundColor: theme.dark ? "#333" : "#F5F5F5",
        elevation: 4,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: theme.dark ? "#555" : theme.colors.primary,
      }}
      inputStyle={{
        fontSize: 16,
        color: theme.dark ? "#FFF" : "#000",
      }}
      iconColor={theme.colors.accent}
      placeholderTextColor={theme.dark ? "#BBB" : "#777"}
    />
  );
}
