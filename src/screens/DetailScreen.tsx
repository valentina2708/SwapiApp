import { View } from "react-native";
import { Card } from "react-native-paper";
import Text from "../components/atoms/Text";

export default function DetailScreen({ route }: any) {
  const { item } = route.params;

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Card>
        <Card.Content>
          <Text variant="headlineLarge">{item.nombre}</Text>
          <Text variant="bodyMedium">Información detallada:</Text>
          <Text>{JSON.stringify(item, null, 2)}</Text>
        </Card.Content>
      </Card>
    </View>
  );
}
