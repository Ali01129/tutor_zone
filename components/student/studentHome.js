import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import boy from '../../images/man.png';
import icone from '../../images/Glyph.png';
import Card from '../helper/card';
import boy2 from '../../images/profile.png';
import boy3 from '../../images/man2.png';
import boy4 from '../../images/man3.png';


export default function StudentHome() {
    const navigation = useNavigation();

    const nav=()=>{
        navigation.navigate('Teacher');
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 24 }}>
                    <TouchableOpacity onPress={() => { navigation.toggleDrawer(); }}>
                        <Image source={boy} style={{ width: 30, height: 30 }} />
                    </TouchableOpacity>
                    <Text style={styles.text}>Explore Teachers</Text>
                    <Icon name='menu' size={20} style={{ marginTop: 8 }} />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={[styles.upload, { flex: 1 }]}>
                        <Text style={{ color: '#526270', padding: 10 }}>Search Tutor</Text>
                    </TouchableOpacity>
                    <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#edf6f5', width: 48, height: 48, borderRadius: 12 }}>
                        <Image source={icone} style={{ width: '50%', height: '50%', resizeMode: 'contain' }} />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 24 }}>
                    <Text style={styles.text2}>18506 Tutors</Text>
                    <Text style={styles.text2}>Sort by relevance</Text>
                </View>
                <View style={{ borderColor: '#dddddd', borderWidth: 1, flex: 1, marginBottom: 20 }}></View>

                <TouchableOpacity onPress={nav}>
                    <Card key="1" image={boy2} />
                </TouchableOpacity>
                <TouchableOpacity onPress={nav}>
                    <Card key="2" image={boy3} />
                </TouchableOpacity>
                <TouchableOpacity onPress={nav}>
                    <Card key="3" image={boy4} />
                </TouchableOpacity>
                <TouchableOpacity onPress={nav}>
                    <Card key="4" image={boy2} />
                </TouchableOpacity>
                <TouchableOpacity onPress={nav}>
                    <Card key="5" image={boy3} />
                </TouchableOpacity>
            
                <TouchableOpacity style={{backgroundColor:'#054bb4',height:48,borderRadius:12,justifyContent:'center'}}onPress={()=>{navigation.navigate('ForgetPassword2')}}>
                    <Text style={{textAlign:'center',color:'white'}}>Load More</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        marginBottom: 24,
        padding: 16,
        justifyContent: 'center'
    },
    text: {
        fontSize: 20,
    },
    upload: {
        justifyContent: 'center',
        backgroundColor: '#f9f9f9',
        borderWidth: 1,
        height: 48,
        borderRadius: 12,
        borderColor: '#526270',
        marginBottom: 12,
        marginEnd: 15
    },
    text2: {
        fontSize: 14,
        color: '#677581'
    },
});
