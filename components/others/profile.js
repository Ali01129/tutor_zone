import React from 'react';
import { StyleSheet, Text, View,Image, StatusBar, ScrollView,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import boy from '../../images/profile.png';
import { useNavigation } from '@react-navigation/native';

export default function Profile(){
    const navigation =useNavigation();
    return (
        <View style={{padding:16,flex:1,justifyContent:'space-between'}}>
            <StatusBar style="auto" />
            <View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop:22,marginBottom:24}}>
                    <Icon name="left" size={24} color="#000" />
                    <Text style={styles.text}>Create Your Profile</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center',marginBottom:20}}>
                    <Text style={[styles.bar,{color:'blue'}]}>About us</Text>
                    <Icon name="right" style={styles.bar} />
                    <Text style={[styles.bar,{color:'blue'}]}>Photo</Text>
                    <Icon name="right" style={styles.bar}/>
                    <Text style={styles.bar}>Certification</Text>
                    <Icon name="right" style={styles.bar} />
                    <Text style={styles.bar}>Education</Text>
                    <Icon name="right" style={styles.bar}/>
                </View>
                <Text style={[styles.text,{marginBottom:7}]}>Profile Photo</Text>
                <Text style={[styles.bar,{marginBottom:16}]}>Lorem Ipsum is simply dummy text of the printing
                and typesetting industry.</Text>
                <TouchableOpacity style={styles.upload}>
                    <Text style={{color:'#526270',textAlign:'center'}}>Upload Photo</Text>
                </TouchableOpacity>
                <Text style={{textAlign:'center',color:'#33363b',fontSize:14,marginBottom:16}}>JPG or PNG format, Maximum 5 MB</Text>
                    <Text style={[styles.text,{color:'#33363b',marginBottom:16}]}>Upload Preview</Text>
                <View style={styles.preview}>
                    <Image source={boy} style={{width:100,height:100}}/>
                </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <TouchableOpacity style={[styles.button,{marginEnd:20}]} onPress={()=>{navigation.navigate('About')}}>
                    <Text style={{textAlign:'center'}}>Previous</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button,{backgroundColor:'#054bb4',borderColor:'#054bb4'}]}>
                    <Text style={{textAlign:'center',color:'white'}}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
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
    },
    upload:{
        justifyContent:'center',
        backgroundColor:'#f9f9f9',
        borderWidth:1,
        height:48,
        borderRadius:12,
        borderColor:'#526270',
        marginBottom:12
    },
    preview:{
        justifyContent:'center',
        borderRadius:12,
        borderColor:'#526270',
        backgroundColor:'#f9f9f9',
        borderWidth:1,
        height:124,
        padding:8
    },
    button:{
        height:48,
        borderWidth:1,
        borderRadius:12,
        justifyContent:'center',
        flex:1
    }
});