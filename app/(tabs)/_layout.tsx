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
            tabBarIcon: ({color}) => <FontAwesome size={28} name='home' color={color}/>
         }}
         />

         <Tabs.Screen 
         name='reseña'
         options={{
            title: 'Reseña',
            tabBarIcon: ({color}) => <FontAwesome size={28} name='cog' color={color}/>
         }}
         />

         <Tabs.Screen 
         name='User'
         options={{
            title: 'User',
            tabBarIcon: ({color}) => <FontAwesome size={28} name='info-circle' color={color}/>
         }}
         />

      </Tabs>
   )
}