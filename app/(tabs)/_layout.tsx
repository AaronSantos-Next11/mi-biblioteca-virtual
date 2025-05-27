import { FontAwesome } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'

export default function TabLayout() {
   return (
      <Tabs screenOptions={{tabBarActiveTintColor: "blue"}}>

         <Tabs.Screen 
         name='home'
         options={{
            title: 'Home',
            headerShown: false, // Esto oculta el header por defecto
            tabBarIcon: ({color}) => <FontAwesome size={28} name='home' color={color}/>
         }}
         />

         <Tabs.Screen 
         name='reseña'
         options={{
            title: 'Reseña',
            headerShown: false, // También para las otras pantallas si no quieres header
            tabBarIcon: ({color}) => <FontAwesome size={28} name='cog' color={color}/>
         }}
         />

         <Tabs.Screen 
         name='user'
         options={{
            title: 'User',
            headerShown: false, // También para las otras pantallas si no quieres header
            tabBarIcon: ({color}) => <FontAwesome size={28} name='info-circle' color={color}/>
         }}
         />

      </Tabs>
   )
}