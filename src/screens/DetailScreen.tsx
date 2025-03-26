import { ScrollView, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import Detail from "../components/organisms/Details";
import { useTheme } from "../Context/ThemeContext";

export default function DetailScreen({ route }: any) {
  const { item, type } = route.params;
  const { theme } = useTheme();

  return (
    <ScrollView
      contentContainerStyle={[
        styles.scrollContainer,
        { backgroundColor: theme.colors.background },
      ]}
    >
      <Card style={styles.card}>
        <Detail item={item} type={type} />
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
    paddingBottom: 50,
  },
  card: {
    borderRadius: 10,
  },
});
