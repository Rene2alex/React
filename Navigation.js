import React from 'react'

//Iconos
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AntDesign } from '@expo/vector-icons';

//TABS  
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

//Vistas
import HomeScreen from './Screens/MainScreens/HomeScreen'

import DetallesContacto from './Screens/Contactos/DetallesContacto'
import ListadoContactos from './Screens/Contactos/ListadoContactos'
import AddContacto from './Screens/Contactos/CrearContacto'
import EditarContacto from './Screens/Contactos/EditarContacto';


//Objeto Bottom-Tabs
const Tab = createBottomTabNavigator()

const ListadoStack = createNativeStackNavigator();

function ContactosStack() {
    return (
      <ListadoStack.Navigator
        initialRouteName='Contacto'
      >
        <ListadoStack.Screen
          name='Contacto'
          component={ListadoContactos}
          options={{
            headerTitleAlign: 'center',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
        <ListadoStack.Screen
          name='Detalles'
          component={DetallesContacto}
        />

        <ListadoStack.Screen
          name='Editar'
          component={EditarContacto}
        />
      </ListadoStack.Navigator>
    )
  }



function MyTabs () {

   return(
    <Tab.Navigator
    initialRouteName='Home'
    screenOptions={{
        tabBarActiveTintColor:'blue',
    }}>

        <Tab.Screen 
        name='inicio' 
        component={HomeScreen} 
        options={{tabBarIcon: ({color}) =>( 
            <FontAwesome5 name="home" size={30} color={color} />  )}}/>
        
        <Tab.Screen 
        name='crear contacto' 
        component={AddContacto} 
        options={{ tabBarIcon: ({color}) =>(
          <AntDesign name="contacts" size={24} color="black" />)}}/>
          

        <Tab.Screen 
        name='listado' 
        component={ContactosStack} 
        options={{ tabBarIcon: ({color}) =>( 
        <Entypo name="list" size={24} color={color} />
        ),
        headerShown: false,
        }}/>

    </Tab.Navigator>
   ) 
}

export default function Navigator(){
    return(
        <NavigationContainer>
            <MyTabs></MyTabs>
        </NavigationContainer>
    )
}
