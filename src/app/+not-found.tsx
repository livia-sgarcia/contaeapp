import { Text, View, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";

export default function NotFoundScreen() {
  return (
    <>
    <Stack.Screen options={{ title: "Página não encontrada!" }} />
    <View style={styles.container}>
      <Text>Página não encontrada!</Text>
      <Link href="/" style={styles.button}>Início</Link>
    </View>
    </> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0199b4"
  },

  button: {
    fontSize: 20,
    textDecorationLine: 'none',
    color: '#fff',}
});
