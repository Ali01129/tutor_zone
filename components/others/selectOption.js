import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import pic from '../../images/selectopt.png';
import teach from '../../images/teacher.png';
import student from '../../images/student.png';
import { useNavigation } from '@react-navigation/native';
export default function SelectOption() {
    const navigation=useNavigation();
    
    return (
        <View style={{ flex: 1, padding: 16, marginTop: 100, justifyContent: 'space-between' }}>
            <StatusBar style='auto'/>
            <View>
                <Image source={pic} style={{ alignSelf: 'center', marginBottom: 40, aspectRatio: 2, width: 130, height: 65 }} />
                <Text style={{ fontSize: 20, marginBottom: 20, fontWeight: '400' }}>Join as a Teacher or Student</Text>
                <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#ebf0fc', borderColor: '#054bb4', borderWidth: 1, borderRadius: 12, height: 64, width: '100%', alignItems: 'center', marginBottom: 16, paddingHorizontal: 16 }}
                onPress={()=>{navigation.navigate('About')}}>
                    <View style={{ padding: 5, backgroundColor: 'blue', borderRadius: 5, marginRight: 10 }}>
                        <Image source={teach} />
                    </View>
                    <Text style={{ textAlign: 'left' }}>I am a Teacher</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#ebf0fc', borderRadius: 12, height: 64, width: '100%', alignItems: 'center', marginBottom: 16, paddingHorizontal: 16 }}>
                    <View style={{ padding: 5, backgroundColor: 'white', borderRadius: 5, marginRight: 10 }}>
                        <Image source={student} />
                    </View>
                    <Text style={{ textAlign: 'left' }}>I am a Student</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={{ backgroundColor: '#054bb4', height: 48, borderRadius: 12, justifyContent: 'center', marginBottom: 16 }}>
                    <Text style={{ textAlign: 'center', color: 'white' }}>Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
