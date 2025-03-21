import { View } from "react-native";
import Button from "../components/atoms/Button";
import Text from "../components/atoms/Text";

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 20 }}>
      <Text variant="headlineLarge">Explora el Universo 🌌</Text>

      <Button label="Películas" onPress={() => navigation.navigate("List", { type: "films" })} />
      <Button label="Planetas" onPress={() => navigation.navigate("List", { type: "planets" })} />
      <Button label="Personajes" onPress={() => navigation.navigate("List", { type: "people" })} />
    </View>
  );
}
