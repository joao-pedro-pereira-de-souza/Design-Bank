import React from 'react';
import { View , Text , TouchableOpacity} from 'react-native';

import styles from './styles'
import {stylesFill , Colors} from '../../styles'
export default function CardSquad(props) {
  
 return (
   <TouchableOpacity style={[styles.container , {backgroundColor: props.bg || Colors.contentColor}]}>

        <View style={styles.containerIfons}>

        <View style={styles.containerCicle}>

        <props.Icon name={props.nameIcon} size={24} color={props.bg} />

        </View>

        <Text style={[stylesFill.label , {fontWeight:'bold' , color:'#fff'}]}>{ props.title ||'Tilulo'}</Text>

        <Text style={[stylesFill.labelDesc ,{textAlign:'center', maxHeight:55, color:"#fff"} ]}>{ props.description ||'Descrição'}</Text>
        </View>

   </TouchableOpacity>
  );
}