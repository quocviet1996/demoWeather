import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    container:{
        flex:1,
    },
    footer:{
        flex:1,
        flexDirection:'row',
       
    },
    body : {
        flex:4,
      
    },
    containerItem : {
        flex:1,
        margin : 30,
        backgroundColor:"rgba(0,0,0,0.5)",

    },
    temp:{
        color:'white',
        fontSize:40,
        marginTop:20,
        marginBottom:20,
        marginLeft:20,
    },
});

export default style;