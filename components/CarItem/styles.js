import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    carContainer:{
        width:'100%',
        height:'100%',
        backgroundColor:'orange'
    },
    header:{
        marginTop: 50,
        marginLeft: 20,
        marginRight: 20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom: 10
    },
    headerTitle:{
        color:'white',
        fontWeight:'bold',
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon:{
        color:'white'
    },
    backgroundImage:{
        width:'100%',
        height:'100%',
        resizeMode:'cover',
        position:"absolute"
    },
    batterySection:{
        flexDirection:'row',
        justifyContent:"center",
        alignItems:'center',

    },
    batteryImage:{  
        height:26,
        width:70,
        marginRight: 12
    },
    batteryText:{
        color:'white',
        fontSize: 35,
        fontWeight:'bold'
    },
    status:{
        justifyContent:'center',
        alignItems:'center',
        marginBottom: 175
    },
    statusText:{
        fontSize:20,
        fontWeight:"bold",
        color:'white'
    },
    controls:{
        justifyContent:'center',
        flexDirection:'row'
    },
    controlsButton:{
        borderWidth:1,
        borderColor:'white',
        borderRadius:50,
        padding: 18,
        marginLeft: 25
    }
    
})

export default styles;