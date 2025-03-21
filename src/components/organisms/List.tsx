import { FlatList, View } from "react-native";
import Card from "../molecules/Card";

type Props = {
  data: { nombre: string }[];
  onPress: (item: any) => void;
};

export default function List({ data, onPress }: Props) {
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.nombre}
        renderItem={({ item }) => <Card title={item.nombre} onPress={() => onPress(item)} />}
      />
    </View>
  );
}
