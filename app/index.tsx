import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";

// Estas son librerias de rutas que usaré
import { useRouter } from "expo-router";
import { navigate } from "expo-router/build/global-state/routing";


export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Text> HOLLAAA </Text>
    </View>
  );
}
