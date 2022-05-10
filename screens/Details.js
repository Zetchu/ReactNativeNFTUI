import React from 'react'
import {  View, Text, SafeAreaView, Image, StatusBar, FlatList } from 'react-native'

import { COLORS, SHADOWS, SIZES, assets, FONTS } from '../constants';

import { CircleButton, RectButton, SubInfo, FocusedStatusBar, DetailsDesc, DetailsBid } from '../components';

const DetailsHeader = ({data, navigation}) => (

    <View style={{width:'100%', height: 373}}>

    <Image source={data.image} resizeMode="cover" style={{width:'100%', height: '100%'}} />
   
   <CircleButton imgUrl={assets.left} handlePress={()=>navigation.goBack()} left={15} top={StatusBar.currentHeight + 10} resizeMode='cover' style={{width: '100%', height: '100%'}}>

   </CircleButton>

   <CircleButton imgUrl={assets.heart}  right={15} top={StatusBar.currentHeight + 10} resizeMode='cover' style={{width: '100%', height: '100%'}}>

   </CircleButton>
   
    </View>

   
)



const Details = ({ route, navigation}) => {
    const {data} = route.params;

  return (
    <SafeAreaView style={{flex:1}}>
        <FocusedStatusBar barStyle='dark-content'
        backgroundColor='transparent'
        transLucent={true} />
 

        <View style={{
            width:'100%',
            position: 'absolute',
            bottom: 0,
            paddingVertical:SIZES.font,
            justifyContent:'center',
            alignItems: 'center',
            backgroundColor: 'rgba(255,255,255,0.5)'
        }}>
            <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
        </View>

        <FlatList data={data.bids}
        renderItem={({item}) => <DetailsBid bid={item}/> }
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: SIZES.extraLarge * 3}}
        ListHeaderComponent={()=>(
            <React.Fragment>
                <DetailsHeader data={data} navigation={navigation}></DetailsHeader>
                <SubInfo></SubInfo>
                <View style={{padding: SIZES.font }}>
                    <DetailsDesc data={data}></DetailsDesc>

                    {data.bids.length > 0 && (
                        <Text style={{fontSize:SIZES.font, fontFamily: FONTS.semiBold, color: COLORS.primary}}>
                            Current Bids
                        </Text>
                    )}
                </View>

            </React.Fragment>
        )}
        
        >
            

        </FlatList>
        </SafeAreaView>
  )
}

export default Details