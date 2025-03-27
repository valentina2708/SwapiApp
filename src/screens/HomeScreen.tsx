import { View } from "react-native";
import HomeButton from "../components/atoms/HomeButton";
import Title from "../components/atoms/Title";
import { useTheme } from "../Context/ThemeContext";

export default function HomeScreen({ navigation }: any) {
  const { theme } = useTheme();

  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: theme.colors.background,
          justifyContent: "center",
          alignItems: "center",
          gap: 25,
        }}
      >
        <Title
          style={{
            color: theme.colors.text,        
          }}
          variant="name"
        >
          SWAPI
        </Title>

        <Title
          style={{
            color: theme.colors.text,
            marginBottom: 20,
            padding: 15
          }}
          variant="home"
        >
          Explora el mundo cinematográfico de Star Wars
        </Title>

        <HomeButton
          label="Personajes"
          onPress={() => navigation.navigate("Lista", { type: "people" })}
          type="people"
        />

        <HomeButton
          label="Películas"
          onPress={() => navigation.navigate("Lista", { type: "films" })}
          type="films"
        />
        <HomeButton
          label="Planetas"
          onPress={() => navigation.navigate("Lista", { type: "planets" })}
          type="planets"
        />
      </View>
    </>
  );
}
