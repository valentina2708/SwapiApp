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
          fontSize: 24,
          color: theme.colors.text,
          textAlign: "center",
          fontWeight: "bold",
          marginBottom:50,
         marginVertical:10
        }}
    variant="home" 
      >
        Explora lo mejor de Star Wars
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
