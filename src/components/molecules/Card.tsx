import { Card } from "react-native-paper";
import Text from "../atoms/Text";

type Props = {
  title: string;
  onPress: () => void;
};

export default function InfoCard({ title, onPress }: Props) {
  return (
    <Card onPress={onPress} style={{ margin: 10 }}>
      <Card.Content>
        <Text variant="titleMedium">{title}</Text>
      </Card.Content>
    </Card>
  );
}
