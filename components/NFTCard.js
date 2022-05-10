import { View, Text, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { CircleButton, RectButton } from './Button';
import { SubInfo, ETHPrice, NFTTitle } from './SubInfo';

import { COLORS, SHADOWS, SIZES, assets } from '../constants';


const NFTCard = ({ data }) => {
  const navigation = useNavigation();

    return (
    <View style={{backgroundColor: COLORS.white, borderRadius: SIZES.font, marginBottom: SIZES.extraLarge, margin: SIZES.base, ...SHADOWS.dark}}>
      <View style={{width: "100%", height: 250  }}>
        <Image source={data.image} resizeMode="cover" style={{width:"100%", height:"100%", borderTopLeftRadius: SIZES.font, borderTopRightRadius: SIZES.font}} />
            
       
        <CircleButton imgUrl={assets.heart} right={10} top={10}></CircleButton>
      </View>
      
     <SubInfo />

     <View style={{width: "100%", padding: SIZES.font}}>
         <NFTTitle title={data.name} subTitle={data.creator} titleSize={SIZES.small} ></NFTTitle>
     </View>
        <View style={{
          marginTop: SIZES.fomt, 
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: 'center',
      }}>
          <ETHPrice price={data.price}>

          </ETHPrice>

          <RectButton minWidth={120} fontSize={SIZES.font} handlePress={()=> navigation.navigate("Details", {data})} ></RectButton>
      </View>
    </View>
  )
}

export default NFTCard