import { Text as PaperText } from "react-native-paper";
import { useTheme } from "../../Context/ThemeContext";
import { TextStyle } from "react-native";

type VariantType = "home" | "lista" | "detalles";

type Props = {
  children: React.ReactNode;
  variant?: VariantType;
  style?: TextStyle;
};

export default function Title({ children, variant = "home", style }: Props) {
  const { theme } = useTheme();

  const baseStyle: TextStyle = {
    color: theme.colors.text,
    fontWeight: "bold",
    marginVertical: 10,
  };

  const variants: Record<VariantType, TextStyle> = {
    home: { fontSize: 28, textAlign: "center" },
    lista: { fontSize: 28, textAlign: "center" },
    detalles: { fontSize: 24, textAlign: "center", padding:10},
  };

  return (
    <PaperText style={[baseStyle, variants[variant], style]}>
      {children}
    </PaperText>
  );
}
