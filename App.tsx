import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as PaperProvider,  } from "react-native-paper";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { View } from "react-native";


import ListScreen from "./src/screens/ListScreen";
import HomeScreen from "./src/screens/HomeScreen";
import DetailScreen from "./src/screens/DetailScreen";
import { ThemeProvider, useTheme } from "./src/Context/ThemeContext";
import AppBar from "./src/components/organisms/Appbar";

const queryClient = new QueryClient();
const Stack = createStackNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

function AppContent() {
  const { theme} = useTheme();  

  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider theme={theme}>
      <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
        <NavigationContainer>
        <Stack.Navigator
         initialRouteName="Home"
       
         screenOptions={({ route,  }) => ({
           header: () => <AppBar title={route.name} />, 
         })}
          >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Lista" component={ListScreen} />
            <Stack.Screen name="Detalles" component={DetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
        </View>
      </PaperProvider>
    </QueryClientProvider>
  );
}
