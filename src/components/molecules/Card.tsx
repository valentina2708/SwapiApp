import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { useTheme } from "../../Context/ThemeContext";

type Props = {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  children?: React.ReactNode;
};

export default function Card({ title, onPress, style, children }: Props) {
  const { theme } = useTheme();
  const isDarkMode = theme.dark;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.card,
        {
          backgroundColor:
            theme.colors.background,
            borderColor: isDarkMode ? theme.colors.accent : theme.colors.primary,
          shadowColor:  isDarkMode ? theme.colors.accent : theme.colors.secondary,
        },
        style,
      ]}
    >
      <Text
        style={[
          styles.title,
          { color: isDarkMode ? theme.colors.text : theme.colors.primary },
        ]}
      >
        {title}
      </Text>
      {children && <View>{children}</View>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: 15,
    marginVertical: 10,
    elevation: 8,
    position: "relative",
    minHeight: 60,
    borderWidth: 2,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 3,
  
  },
});
