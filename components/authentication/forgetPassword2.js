import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import logopic from '../../images/logo.jpeg';
import { useNavigation,CommonActions } from '@react-navigation/native';

export default function ForgetPassword2(){
    const navigation=useNavigation();
    return(
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View>
                <Image source={logopic} style={{height:40, width:40,marginBottom:20}}/>
                <Text style={styles.title}>Forget Password</Text>
                <Text style={styles.subtitle}>
                    We have sent reset password link to your email
                </Text>
                <Text style={styles.subtitle}>alisonh952@gmail.com</Text>
            </View>
            <View>
                <TouchableOpacity style={{backgroundColor:'#054bb4',height:48,borderRadius:12,justifyContent:'center',marginBottom:16}} onPress={()=>{navigation.navigate('ForgetPassword3')}}>
                    <Text style={{textAlign:'center',color:'white'}}>Continue</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderWidth:1,height:48,borderRadius:12,justifyContent:'center'}} 
                onPress={() => {navigation.dispatch(CommonActions.reset({index: 0,routes: [{ name: 'Login' }],}));}}
                >
                    <Text style={{textAlign:'center'}}>Back To Log In</Text>
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
        justifyContent:'space-between'
      },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
        marginBottom: 8,
      },
      subtitle: {
        fontSize:14,
        textAlign:'left',
        color: '#999',
        marginBottom: 20,
      },
      text:{
        fontSize: 16,
        marginBottom:14,
        textAlign:'left',
      },
      input: {
        borderColor: '#FFFFFF',
        paddingHorizontal: 10,
      },
      inputicon: {
        padding: 13,
        color:'#808080',
    },
});