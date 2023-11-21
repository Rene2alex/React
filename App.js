import React, { useEffect } from 'react'

import Navigation from './Navigation'
import { StatusBar } from 'react-native';

export default function App(){
useEffect(() =>{
StatusBar.setBackgroundColor('#3b83bd');

}, []);

  return(
    <Navigation></Navigation>
  )
}