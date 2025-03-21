import { Searchbar } from "react-native-paper";

type Props = {
  value: string;
  onChangeText: (text: string) => void;
};

export default function SearchBar({ value, onChangeText }: Props) {
  return <Searchbar placeholder="Buscar..." value={value} onChangeText={onChangeText} />;
}
