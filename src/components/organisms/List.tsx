import { FlatList, View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import Card from "../molecules/Card";
import { useTheme } from "../../Context/ThemeContext";

type Props = {
  data: { nombre: string }[];
  onPress: (item: any) => void;
};

export default function List({ data, onPress }: Props) {
  const { theme } = useTheme();
  const isDarkMode = theme.dark;

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.nombre}
        renderItem={({ item }) => (
          <Card title={item.nombre} onPress={() => onPress(item)}>
            <View style={styles.buttonContainer}>
              <Button
                mode="contained"
                icon="eye"
                onPress={() => onPress(item)}
                style={[styles.button, { backgroundColor: isDarkMode ? theme.colors.accent : theme.colors.primary }]}
                labelStyle={[styles.buttonLabel, { color: isDarkMode ? theme.colors.text : theme.colors.accent }]}
              >
               Ver Detalles
              </Button>
            </View>
          </Card>
        )}
        contentContainerStyle={{ paddingVertical: 15 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    marginTop: 8, 
    alignItems: "flex-end", 
  },
  button: {
    borderRadius: 5,
    width: 115,
   
   
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight:600
  },
});
