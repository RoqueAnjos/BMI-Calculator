import { StyleSheet} from "react-native";

const styles = StyleSheet.create({

    contextImc: {
        flex:1,
        paddingTop:15,
        alignItems:"center",
        width:"100%",
       },
       resultImc:{
        marginLeft: 7.5,
         fontSize:48,
         color:"#ff0043",
         fontWeight:"bold",
       },
       titleResultImc:{
         fontSize:18,
         color:"#ff0043",
         fontWeight:"bold",
       },
       boxSharebutton:{
         width:"100%",
         alignItems:"center",
         justifyContent: "center",
         marginBottom:10,
       },
       shared:{
         backgroundColor:"#1877f2",
         borderRadius:50,
         paddingBottom: 5,
         paddingTop:5,
         paddingHorizontal: 30,
         marginLeft: 18,
         width:"50%",
         marginTop: 15
       },
       sharedText:{
         color:"#ffffff",
         fontWeight:"bold",
        }
              
});

export default styles