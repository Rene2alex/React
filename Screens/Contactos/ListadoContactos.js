import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { db } from '../../Data/firebase'; //conexion ala base de datos
import { estilos } from '../Contactos/Estilos'; //estilos para el css



export default function Contactos() {
  const Navegacion = useNavigation() //para navegar entre las listas
  const [contactos, setContactos] = useState([]); //listado que trae de la dase de datis
  const [cargando, setcargando] = useState(true); //para cargar los datos al momento de darle para arriva 

  useEffect(() => {
    obtenerContactos();
  }, []);

  const obtenerContactos = async () => {
    try {

      const contactosRef = db.collection('Contacto');
      const snapshot = await contactosRef.get();
      const ContactosData = snapshot.docs.map((doc) => ({
      documentoID: doc.id,
        ...doc.data()

      }));
      console.log(ContactosData)

      setContactos(ContactosData);
      setcargando(false);
      
    } catch (error) {
      console.error('Error al obtener los contactos', error);
    }
  };


  const Listado = ({ item }) => (

    <View style={estilos.Contenedor}>

      <TouchableOpacity onPress={() => {
        console.log('Seleccionado ' + item.Nombre);
        Navegacion.navigate('Detalles', { Contacto: item });
      }}>


        <View style={estilos.Row}>

          <View>
            <Image
              source={{ uri: item.Img }}
              style={estilos.PerfilImage}
            />
          </View>

          <View style={estilos.RayaVert}></View>

          <View style={estilos.infoContacto}>
            <Text style={estilos.NombreContacto}>{item.Nombre}</Text>
            <Text>{item.TEl}</Text>
            <Text>{item.Mail}</Text>
          </View>
        </View>

      </TouchableOpacity>

    </View>

  )

  return (
    <View>
      <FlatList
        data={contactos}
        keyExtractor={(contacto) => contacto.documentoID}
        style={estilos.Lista}
        renderItem={Listado}
        ListEmptyComponent={<Text style={estilos.mensajeVacio}>No hay contactos para mostrar</Text>}
        ItemSeparatorComponent={<View style={{ height: 10 }} />}
        refreshControl={
          <RefreshControl refreshing={cargando} onRefresh={obtenerContactos}/>
        }
      />
    </View>
  );

}
