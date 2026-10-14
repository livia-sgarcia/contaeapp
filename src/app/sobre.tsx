import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text>Contaê App</Text>
      <Link href="/" style={styles.button}>Inicio</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#9447c7"
  },

  button: {
    fontSize: 20,
    textDecorationLine: 'none',
    color: '#fff',}
});
