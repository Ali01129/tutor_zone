import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Use any icon library you prefer
import boy from '../../images/profile.png';
import { StatusBar } from 'expo-status-bar';

export default function TeacherProfile() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <TouchableOpacity style={styles.backButton}>
                <Icon name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
            <Image source={boy} style={styles.image} />
            <View style={styles.iconContainer}>
                <TouchableOpacity style={styles.iconButton}>
                    <Icon name="chat" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                    <Icon name="play-arrow" size={24} color="white" />
                </TouchableOpacity>
            </View>
            <View style={{padding:16,}}>
                <View style={{flexDirection:'row'}}>
                    <Image source={boy} style={{height:50,width:50,borderRadius:8}}/>
                    <View>
                        <Text>Steve Smith</Text>
                    </View>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop:50,
        flex: 1,

    },
    backButton: {
        position: 'absolute',
        top: 20,
        left: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 50,
        padding: 10,
        zIndex:1
    },
    image: {
        width: '100%',
        height:360,
        resizeMode:'cover'
    },
    iconContainer: {
        position: 'absolute',
        top: 280,
        right: 20,
        flexDirection: 'row',
    },
    iconButton: {
        backgroundColor:'rgba(0, 0, 0, 0.5)',
        borderRadius: 50,
        padding: 10,
        marginHorizontal: 5,
    },
});
