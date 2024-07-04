import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/Ionicons';
import logopic from '../../images/logo.jpeg';
import { useNavigation } from '@react-navigation/native';

export default function Login(){
  const navigation=useNavigation();
    return(
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Image source={logopic} style={{height:40, width:40,marginBottom:20}}/>
            <Text style={styles.title}>Login Now!</Text>
            <Text style={styles.subtitle}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </Text>
            <Text style={styles.text}>Username or Email</Text>
            <View style={{flexDirection:'row',borderColor: '#ccc',borderWidth: 1,borderRadius: 5,height: 50,marginBottom:16,justifyContent:'space-between'}}>
                <TextInput
                    style={styles.input}
                    placeholder="Username or Email"
                    placeholderTextColor="#999"
                />
                <Icon style={styles.inputicon} name="person-outline" size={20} color="#000"/>
            </View>
            
            <Text style={styles.text}>Password</Text>
            <View style={{flexDirection:'row',borderColor: '#ccc',borderWidth: 1,borderRadius: 5,height: 50,marginBottom:16,justifyContent:'space-between'}}>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#999"
                />
                <Icon style={styles.inputicon} name="lock-closed-outline" size={20} color="#000"/>
            </View>
            <Text onPress={()=>{navigation.navigate('ForgetPassword')}} style={{textDecorationLine:'underline',left:240,color:'#808080',marginBottom:20}} >Forget Password?</Text>
            <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('Drawer')}}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <View style={styles.separator}>
                <View style={styles.line} />
                <Text style={styles.orText}>OR</Text>
                <View style={styles.line} />
            </View>

            <TouchableOpacity style={styles.socialButton}>
                <View style={styles.bor}>
                <Image source={{uri: 'https://cdn.iconscout.com/icon/free/png-512/free-google-160-189824.png?f=webp&w=256'}} style={styles.socialIcon} />
                <Text style={styles.socialButtonText}>Continue With Google</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialButton}>
                <View style={styles.bor}>
                    <Image source={{uri: 'https://cdn.iconscout.com/icon/free/png-512/free-facebook-2982020-2489668.png?f=webp&w=256'}} style={styles.socialIcon} />
                    <Text style={styles.socialButtonText}>Continue With Facebook</Text>
                </View>
            </TouchableOpacity>

            <Text style={styles.footerText}>
                Dont have an Account? <Text style={styles.loginText} onPress={()=>{navigation.navigate('SignUp')}}>Sign Up</Text>
            </Text>

        </View>
    );
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        marginTop:60
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
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 15,
        borderRadius: 12,
        marginBottom: 16,
      },
      buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
      },
      separator: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
      },
      line: {
        flex: 1,
        height: 1,
        backgroundColor: '#ccc',
        marginEnd:8,
        marginStart:8,
      },
      orText: {
        marginHorizontal: 10,
        color: '#999',
      },
      socialButton: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingVertical: 10,
        marginBottom: 15,
      },
      bor:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection: 'row',
      },
      socialIcon: {
        width: 20,
        height: 20,
        marginEnd:15,
      },
      footerText: {
        textAlign: 'center',
        color: '#999',
        marginTop: 16,
      },
      loginText: {
        color: '#007bff',
        fontWeight: 'bold',
      },
});