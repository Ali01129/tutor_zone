import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import tick from '../../images/tick.png';
import { useNavigation,CommonActions } from '@react-navigation/native';


export default function PasswordChanged(){
    const navigation=useNavigation();
    return(
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={{marginTop:200}}>
                <Image source={tick} style={{alignSelf:'center',marginBottom:24}}/>
                <Text style={{textAlign:'center',fontWeight:'bold',fontSize:20,marginBottom:10}}>Password Changed</Text>
                <Text style={{textAlign:'center',color:'#999'}}>Your Password has been changed sucessfully!</Text>
            </View>
            <View>
                <TouchableOpacity style={{backgroundColor:'#054bb4',height:48,borderRadius:12,justifyContent:'center',marginBottom:16}} onPress={() => {navigation.dispatch(CommonActions.reset({index: 0,routes: [{ name: 'Login' }],}));}}>
                    <Text style={{textAlign:'center',color:'white'}}>Go Back To Login Page</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        marginTop:60,
        justifyContent:'space-between',
      },
    });