import { Searchbar } from "react-native-paper";
import { useTheme } from "../../Context/ThemeContext";

type Props = {
  value: string;
  onChangeText: (text: string) => void;
};

export default function SearchBar({ value, onChangeText }: Props) {
  const { theme } = useTheme();

  return (
    <Searchbar
      placeholder="Buscar..."
      value={value}
      onChangeText={onChangeText}
      style={{
        marginVertical: 12,
        borderRadius: 15,
        backgroundColor: theme.dark ? "#333" : "#F5F5F5", 
        elevation: 4,
        paddingHorizontal: 10,
        borderWidth: 1, 
        borderColor: theme.dark ? "#555" : theme.colors.primary, 
      }}
      inputStyle={{
        fontSize: 16,
        color: theme.dark ? "#FFF" : "#000",
      }}
      iconColor={theme.colors.accent}
      placeholderTextColor={theme.dark ? "#BBB" : "#777"} 
    />
  );
}
