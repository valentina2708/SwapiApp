import { useState } from "react";
import { View } from "react-native";
import { useFilms, usePeople, usePlanets } from "../hooks";
import Search from "../components/molecules/Search";
import List from "../components/organisms/List";
import Text from "../components/atoms/Text";

export default function ListScreen({ route, navigation }: any) {
  const { type } = route.params; // Películas, Planetas o Personajes
  const [search, setSearch] = useState("");

  // Obtener datos según la categoría
  const { data: people } = usePeople();
  const { data: films } = useFilms();
  const { data: planets } = usePlanets();
  const data = type === "films" ? films : type === "planets" ? planets : people;

  // Filtrar personajes si es necesario
  const filteredData =
    type === "people" ? data?.filter((p) => p.nombre.toLowerCase().includes(search.toLowerCase())) : data;

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Text variant="headlineLarge">{type.toUpperCase()}</Text>

      {type === "people" && <Search value={search} onChangeText={setSearch} />}

      {filteredData?.length ? (
        <List data={filteredData} onPress={(item) => navigation.navigate("Details", { item })} />
      ) : (
        <Text>No hay resultados</Text>
      )}
    </View>
  );
}
