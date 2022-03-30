import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as appJson from "./app.json";
import * as Updates from "expo-updates";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{`My Android runtime version from app.json is: ${appJson.expo.runtimeVersion}`}</Text>
      <Text>{`My Android runtime version from Expo Updates: ${Updates.runtimeVersion}`}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
