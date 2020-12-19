import React from 'react';
import { View , Text, TouchableOpacity} from 'react-native';
import { AntDesign , FontAwesome} from '@expo/vector-icons';
 import styles from './styles';
import {stylesFill , Colors} from '../../styles';

import {Activities} from '../../services/api'
const CardActivities = (props) => {

  const DeleteActivities = () =>{

    console.log(props.index)

    Activities.splice(props.index , 1)

    props.getRef(ref => !ref)

    if (Activities.length == 0) {

      props.getText(false)
      
    }


  }

  return (

        <View style={[styles.container , {backgroundColor: props.item.bg || Colors.contentColor}]} key={props.index}>

          <TouchableOpacity style={styles.buttonClose} onPress={DeleteActivities}>

            <FontAwesome name='close' size={10} color={Colors.color} />

          </TouchableOpacity>

          <View style={styles.containerIfons}>

            <View style={styles.containerCicle}>

              <props.item.Icon name={props.item.nameIcon} size={24} color={props.item.bg} />

            </View>

            <Text style={[stylesFill.label , {fontWeight:'bold' , color:'#fff'}]}>{ props.item.title ||'Tilulo'}</Text>

            <Text style={[stylesFill.labelDesc ,{textAlign:'center', maxHeight:55, color:"#fff"} ]}>{ props.item.description ||'Descrição'}</Text>
          </View>
            
        </View>

  );
}

export default CardActivities;