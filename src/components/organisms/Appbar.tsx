import React from "react";
import { Appbar, Switch } from "react-native-paper";
import { useTheme } from "../../Context/ThemeContext";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";


type Props = {
  title: string;
};

export default function AppBar({ title }: Props) {
  const { toggleTheme, theme } = useTheme();
  const navigation = useNavigation();
  const textColor = theme.dark ? theme.colors.text : "#FFFFFF";
  return (
    <Appbar.Header style={{ backgroundColor: theme.colors.primary }}>
      {navigation.canGoBack() && (
        <Appbar.BackAction
          onPress={() => navigation.goBack()}
          color={ textColor}
        />
      )}

      <Appbar.Content
        title={title}
        titleStyle={{ color: textColor, fontWeight: "bold" }}
      />
           
          
     
      <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
        <TouchableOpacity onPress={toggleTheme}>
          <MaterialCommunityIcons
            name={theme.dark ? "weather-sunny" : "weather-night"}
            size={24}
            color={textColor}
          />
        </TouchableOpacity>

        <Switch
          value={theme.dark}
          onValueChange={toggleTheme}
          color={theme.colors.accent}
        />
      </View>
    </Appbar.Header>
  );
}
