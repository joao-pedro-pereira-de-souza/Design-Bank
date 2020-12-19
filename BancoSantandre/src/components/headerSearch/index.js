import React from 'react';
import { View , TouchableOpacity , TextInput} from 'react-native';
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';
import { Colors , WidthScreen} from '../../styles';

export default function headerSearch(props) {
 return (

   <View style={[styles.container, {backgroundColor: props.bg || '#fff' }]}>

        <AntDesign name="search1" size={25} color={props.color || Colors.color} style={{ marginHorizontal:5}}/>

        <TextInput
        style={{flex:1 , marginVertical: 5}}
        placeholder={props.placeholder || ''}
        value={props.value}
        onChangeText={props.onChangeText}
        
        />

        <TouchableOpacity style={ styles.buttonFilter}>
        <AntDesign name="filter" size={25} color={props.color || Colors.color} />
        </TouchableOpacity>

   </View>

  );
}