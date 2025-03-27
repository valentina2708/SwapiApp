import { Text as PaperText } from "react-native-paper";
import { useTheme } from "../../Context/ThemeContext";
import { TextStyle } from "react-native";

type VariantType = "home" | "lista" | "detalles" | "name";

type Props = {
  children: React.ReactNode;
  variant?: VariantType;
  style?: TextStyle;
};

export default function Title({ children, variant = "home", style }: Props) {
  const { theme } = useTheme();
  const isDarkMode = theme.dark;

  const baseStyle: TextStyle = {

    color: isDarkMode ? theme.colors.text : theme.colors.accent,
    fontWeight: "bold",
    marginVertical: 10,
  };

  const variants: Record<VariantType, TextStyle> = {
    name: {
      fontSize: 30,
      textAlign: "right",
      display: "flex",
      fontWeight: "bold",
    },
    home: { fontSize: 20, textAlign: "center", fontWeight: "600" },
    lista: { fontSize: 24, textAlign: "center" },
    detalles: { fontSize: 24, textAlign: "center", padding: 10 },
  };

  return (
    <PaperText style={[baseStyle, variants[variant], style]}>
      {children}
    </PaperText>
  );
}
