import {StyleSheet} from 'react-native'
import {WidthScreen , HeightScreen , Colors} from '../../styles'

const styles = StyleSheet.create({

    container:{

        width:'100%',
        height: HeightScreen * 0.08,
        backgroundColor: Colors.contentColor,
        borderRadius:  HeightScreen * 0.02 / 2,
        flexDirection:'row',
        alignItems:'center',

    },

    buttonFilter:{
       
        marginHorizontal:10

    }

});

export default styles;