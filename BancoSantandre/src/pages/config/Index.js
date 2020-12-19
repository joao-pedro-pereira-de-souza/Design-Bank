import React, { useState} from 'react';
import { View , Text , TouchableOpacity , Switch} from 'react-native';
import styles from './Styles'
import {Colors , stylesFill} from '../../styles'

import { MaterialIcons ,  MaterialCommunityIcons , FontAwesome5 , Ionicons } from '@expo/vector-icons';
import CardOptions from '../../components/CardOption/index'

import {useNavigation} from '@react-navigation/native'
export default function config() {

  const Navigation = useNavigation();

  const [temeDarck , setTemeDarck] = useState(false);

  const ActiveSwitch = () =>{
    setTemeDarck(teme => !teme)
  }
 return (
   <View style={styles.container}>

     <View style={styles.contentTop}>

       <TouchableOpacity style={{position:'absolute' , left:10}} onPress={() => Navigation.navigate('home')}>
       <MaterialIcons name="keyboard-arrow-left" size={35} color={Colors.redLight} />
       </TouchableOpacity>

      <Text style={[stylesFill.title, {color: Colors.color }]}>Configurações</Text>

     </View>

     <View style={{padding:10, alignItems:'center', justifyContent:'center'}}>

     <CardOptions Icon={MaterialCommunityIcons} iconName='history' IconArrow={true} name='Atividades' colorIcon={Colors.color}/>

     <CardOptions Icon={FontAwesome5} iconName='user-alt' IconArrow={true} name='Perfil' colorIcon={Colors.color}/>

     <CardOptions Icon={Ionicons} iconName='ios-card' IconArrow={true} name='Cartões' colorIcon={Colors.color}/>

     <CardOptions Icon={MaterialIcons} iconName='notifications' IconArrow={true} name='Notificações' colorIcon={Colors.color}/>

     <CardOptions Icon={FontAwesome5} iconName='qrcode' IconArrow={true} name='QR code' colorIcon={Colors.color}/>

     </View>

     <View style={{alignItems:'center', flexDirection:'row' , padding:10 , justifyContent:'space-between'}}> 
      
      <Text style={[stylesFill.label , {color: Colors.color}]}>Tema</Text>

       <Switch  trackColor={{true: Colors.redLight, false: Colors.color}} thumbColor={Colors.redLight} value={temeDarck} onValueChange={ActiveSwitch}/>

     </View>
  
   </View>
  );
}