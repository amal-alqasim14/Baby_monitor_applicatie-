import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from "react-native";
import AppNavigator from "./navigation/AppNavigator";

export default function App() {
  return (
    <>
      {/* <View style={{ padding: 10, backgroundColor: "#eee" }}>
        <Text style={{ fontSize: 16 }}>Dit staat boven de hele app</Text>
      </View> */}
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
}
