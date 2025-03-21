import { Button as PaperButton } from "react-native-paper";
import { ViewStyle } from "react-native";

type Props = {
  label: string;
  onPress: () => void;
  style?: ViewStyle;
};

export default function Button({ label, onPress, style }: Props) {
  return (
    <PaperButton mode="contained" onPress={onPress} style={style}>
      {label}
    </PaperButton>
  );
}
