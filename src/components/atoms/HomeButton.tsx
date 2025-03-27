import { Button } from "react-native-paper";
import { ViewStyle } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "../../Context/ThemeContext";

type Props = {
  label: string;
  onPress: () => void;
  style?: ViewStyle;
  type: "films" | "people" | "planets";
};

const getIconName = (type: string) => {
  switch (type) {
    case "films":
      return "movie";
    case "people":
      return "account";
    case "planets":
      return "earth";
    default:
      return "help-circle";
  }
};

export default function HomeButton({ label, onPress, style, type }: Props) {
  const { theme } = useTheme();
  const isDarkMode = theme.dark;

  return (
    <Button
      icon={() => (
        <MaterialCommunityIcons
          name={getIconName(type)}
          size={40}
          color={theme.colors.accent}
          testID={`icon-${type}`}
          style={[{ display: "flex", marginRight:32,  }, style]} 
        />
      )}
      onPress={onPress}
      style={[
        styles.buttonBase,
        {
          backgroundColor: isDarkMode ? theme.colors.background :theme.colors.primary ,
          borderColor: isDarkMode ? theme.colors.accent : theme.colors.secondary,
          shadowColor: isDarkMode ? "transparent" : "rgba(0, 0, 0, 0.2)",
          justifyContent: "center" ,
        },
        style,
      ]}
      labelStyle={{ 
        fontSize: 22, 
        fontWeight: "bold", 
        color: isDarkMode ? theme.colors.accent: "#ffffff" , 
      }}
      contentStyle={{ flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 10,}}
    >
      {label}
    </Button>
  );
}

const styles = {
  buttonBase: {
    width: 220,
    height: 120,
   
    borderRadius: 10,
    borderWidth: 2,
    shadowOffset: { width: 8, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 6,
  },

};
