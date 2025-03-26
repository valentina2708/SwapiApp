import { useState } from "react";
import { View } from "react-native";
import { useFilms } from "../hooks/useFilms";
import { usePeople } from "../hooks/usePeople";
import { usePlanets } from "../hooks/usePlanets";
import Search from "../components/molecules/Search";
import List from "../components/organisms/List";
import Title from "../components/atoms/Title";
import { People } from "../adapters/peopleAdapter";
import { useTheme } from "../Context/ThemeContext";

export default function ListScreen({ route, navigation }: any) {
    const { theme } = useTheme();
    
  const { type } = route.params; 
  const [search, setSearch] = useState("");


  const { data: people } = usePeople();
  const { data: films } = useFilms();
  const { data: planets } = usePlanets();
  const data = type === "films" ? films ?? [] : type === "planets" ? planets ?? [] : people ?? [];

  const titles: Record<string, string> = {
    people: "Lista de Personajes",
    films: "Lista de Películas",
    planets: "Lista de Planetas",
  };
  

  const filteredData =
    type === "people" ? data?.filter((p:People) => p.nombre.toLowerCase().includes(search.toLowerCase())) : data;

  return (
    <View style={{ flex: 1, padding: 10,backgroundColor: theme.colors.background }}>

    <Title variant="lista">{titles[type] || "Lista"}</Title> 

      {type === "people" && <Search value={search} onChangeText={setSearch} />}

      {filteredData.length > 0? (
        <List 
          data={filteredData} 
          onPress={(item) => navigation.navigate("Detalles", { item, type })} 
        />
      ) : (
        <Title>No hay resultados</Title>
      )}
    </View>
  );
}
