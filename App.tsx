import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as PaperProvider } from 'react-native-paper';
import ListScreen from "./src/screens/ListScreen";
import HomeScreen from "./src/screens/HomeScreen";
import DetailScreen from "./src/screens/DetailScreen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";



const queryClient = new QueryClient();
const Stack = createStackNavigator();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>   
    <PaperProvider> 
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
    
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Navigator>{" "}
    </NavigationContainer>
    </PaperProvider>
    
    </QueryClientProvider>
  );
};

export default App;
