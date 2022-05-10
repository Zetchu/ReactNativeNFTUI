import { View, Text, TouchableOpacity, Image } from 'react-native'
import { COLORS, SIZES, FONTS, SHADOWS } from '../constants'
import React from 'react'

export const CircleButton = ( {imgUrl, handlePress, ...props}) => {
  return (
  <TouchableOpacity style={{width:40, height:40, backgroundColor: COLORS.white, position:'absolute',alignItems:'center', 
  justifyContent:'center', ...SHADOWS.light, borderRadius: SIZES.extraLarge, ...props }} onPress={handlePress}>

      <Image source={imgUrl} resizeMode='contain' style={{ width:24, height: 24}} />

     </TouchableOpacity> 
  )
}


export const RectButton = ({minWidth, fontSize, handlePress, ...props}) => {
  return (
  <TouchableOpacity style={{ backgroundColor: COLORS.primary, minWidth:minWidth, padding: SIZES.small,
     borderRadius: SIZES.extraLarge, ...props }} onPress={handlePress}>

      <Text style={{fontFamily: FONTS.semiBold, fontSize: fontSize, color:COLORS.white, textAlign:'center'}}> Place a bid </Text>

     </TouchableOpacity> 
  )
}
