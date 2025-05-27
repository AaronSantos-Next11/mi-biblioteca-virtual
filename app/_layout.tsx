import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#201658',
          
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerShown: false //* Permite ocultar el header, para que sea mas limpia la interfaz
        
      }}
    >
      {/* Nos permite definir la navegación de nuestra app */}
      <Stack.Screen name="index" />
      {/* <Stack.Screen name="crearCuenta"/> */}
      <Stack.Screen name="crearCuenta" options={{headerShown: true}} />
      <Stack.Screen name="(tabs)" options={{headerShown: false}}/>


    </Stack>
  );
}
