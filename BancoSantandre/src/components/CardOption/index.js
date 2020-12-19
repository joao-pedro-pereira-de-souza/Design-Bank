import React from 'react';
import { View , Text , TouchableOpacity} from 'react-native';
import styles from './styles'
import {Colors, stylesFill} from '../../styles'
import { MaterialIcons } from '@expo/vector-icons';

export default function CardOption(props) {

    const IconVisible = () =>{

        if(props.Icon){
            return(
                <props.Icon name={props.iconName} size={25} color={props.colorIcon} style={{ marginRight:10 }}/>
            )
        }
        else{
            return null
        }
    }

    const IconArrowVisible = () =>{

        if(props.IconArrow){
            return(
                <MaterialIcons name="keyboard-arrow-right" size={24} color={props.colorIcon} style={{position:'absolute' , right:10}}/>
            )
        }
        else{
            return null
        }
    }

 return (
   <TouchableOpacity style={styles.container} onPress={props.event}>

     <IconVisible/>

     <Text style={[stylesFill.label , {color: Colors.color}]}>{props.name}</Text>

    <IconArrowVisible/>

   </TouchableOpacity>
  );
}