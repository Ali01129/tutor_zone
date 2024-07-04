import React from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Input from '../helper/input';
import { useNavigation } from '@react-navigation/native';

export default function AboutUs() {
    const navigation =useNavigation();
    return (
        <ScrollView style={{padding:16}}>
            <StatusBar style="auto" />
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop:22,marginBottom:24}}>
                <Icon name="left" size={24} color="#000" />
                <Text style={styles.text}>Create Your Profile</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center',marginBottom:20}}>
                <Text style={[styles.bar,{color:'blue'}]}>About us</Text>
                <Icon name="right" style={styles.bar} />
                <Text style={styles.bar}>Photo</Text>
                <Icon name="right" style={styles.bar}/>
                <Text style={styles.bar}>Certification</Text>
                <Icon name="right" style={styles.bar} />
                <Text style={styles.bar}>Education</Text>
                <Icon name="right" style={styles.bar}/>
            </View>
            <Text style={[styles.text,{marginBottom:7}]}>About us</Text>
            <Text style={[styles.bar,{marginBottom:20}]}>Lorem Ipsum is simply dummy text of the printing
            and typesetting industry.</Text>
            <Input name={'Full Name'} placeholder={'E.g. Steve Smith'} icon={null}/>
            <Input name={'Email Address'} placeholder={'E.g. example12@gmail.com'} icon={null}/>
            <Input name={'Phone Number'} placeholder={'E.g. +92 3056789888'} icon={null}/>
            <Input name={'Experience'} placeholder={'E.g. 5 Years'} icon={null}/>
            <Input name={'Country'} placeholder={'E.g. Pakistan'} icon={'down'}/>
            <Input name={'Location'} placeholder={'E.g. Model town lahore'} icon={null}/>
            <Input name={'Language Spoken'} placeholder={'E.g. English'} icon={'down'}/>
            <Text style={{textAlign:'right',marginBottom:16,textDecorationLine:'underline'}}>Add another language</Text>
            <Input name={'Subject Taught'} placeholder={'E.g. Mathematics'} icon={'down'}/>
            <Text style={{textAlign:'right',textDecorationLine:'underline'}}>Add another subject</Text>
            <View style={{paddingVertical:24}}>
                <TouchableOpacity style={{backgroundColor:'#054bb4',height:48,borderRadius:12,justifyContent:'center',marginBottom:16}}onPress={()=>{navigation.navigate('Profile')}}>
                        <Text style={{textAlign:'center',color:'white'}}>Continue</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    text: {
        fontWeight: '700',
        fontSize: 18,
        marginLeft: 8,
    },
    bar:{
        color:'grey',
        fontSize: 14,
        marginLeft: 8, 
    }
});
