import { View } from "react-native";
import { Card } from "react-native-paper";
import Text from "../atoms/Text";

export default function Detail({ item }: any) {
  return (
    <View>
      <Card>
        <Card.Content>
          <Text variant="headlineLarge">{item.nombre}</Text>
          <Text variant="bodyMedium">Detalles adicionales...</Text>
        </Card.Content>
      </Card>
    </View>
  );
}
