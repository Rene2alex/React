import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { estilos } from '../Contactos/Estilos';

import {db} from '../../Data/firebase';

export default function EditarContacto({route}) {


//objecto
const {contactoEditar} = route.params;
const ContactosForm = () => {
    const [img, setImg] = useState(contactoEditar.Img);
    const [mail, setMail] = useState(contactoEditar.Mail);
    const [nombre, setNombre] = useState(contactoEditar.Nombre);
    const [tel, setTEl] = useState(contactoEditar.TEl);
    const [Guardado, setGuardado] = useState(false);
  
    const guardarEnFirebase = () => {
      const datosEditar = {
        Img: img,
        Mail: mail,
        Nombre: nombre,
        TEl: tel,
      };

      const   Ref = db.collection('Contacto');
      const DocEditar = Ref.doc(contactoEditar.documentoID)

      DocEditar.update(datosEditar)
      .then(() => {
        setGuardado(true)
      })
    
    };
  
    const ocultarmensaje = () => {
      setGuardado(false);
    }
  
    return (
      <View style={estilos.ContenedorForm}>
  
  
  
        <TextInput
          placeholder="URL de la imagen"
          value={img}
          onChangeText={setImg}
          style={estilos.FormInput}
        />
        <View style={{ height: 20 }}></View>
        <TextInput
          placeholder="Correo electrónico"
          value={mail}
          onChangeText={setMail}
          style={estilos.FormInput}
        />
        <View style={{ height: 20 }}></View>
        <TextInput
          placeholder="Nombre"
          value={nombre}
          onChangeText={setNombre}
          style={estilos.FormInput}
        />
        <View style={{ height: 20 }}></View>
        <TextInput
          placeholder="Teléfono"
          value={tel.toString()}

          onChangeText={setTEl}
          style={estilos.FormInput}
        />
        <View style={{ height: 20 }}></View>
  
        <TouchableOpacity
          style={estilos.botonGuardar}
          onPress={guardarEnFirebase}
        >
          <Text style={{ fontSize: 18 }}>
            Guardar
          </Text>
        </TouchableOpacity>
        <View style={{ height: 20 }}></View>
        {
          Guardado
            ?
            <View style={estilos.MensajeOperacion}>
              <Text style={{fontSize: 18}}>Se Guardo el contacto</Text>
              <TouchableOpacity
               style={estilos.botonGuardado}
               onPress={ocultarmensaje}
              >
                <Text>
                  OK
                </Text>
              </TouchableOpacity>
            </View>
            :
            <Text></Text>
        }
      </View>
    );
  }

  return (
    <View>
  <ContactosForm></ContactosForm>
    </View>
  )
}