import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Card(props) {
    const {image}=props;
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row',marginBottom:12}}>
                <View>
                    <Image source={image} style={{ height: 50, width: 50, borderRadius: 12, marginEnd: 12 }} />
                </View>
                <View>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View>
                            <Text style={styles.title2}>Russel M.</Text>
                            <Text style={[styles.subtitle2,{marginBottom:20}]}>Lahore, Pakistan</Text>
                        </View>
                        <Icon name='heart' color={"red"} size={16}/>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={{marginEnd:17}}>
                            <Text style={styles.title2}>5 Year</Text>
                            <Text style={styles.subtitle2}>Experince</Text>
                        </View>
                        <View style={{marginEnd:17}}>
                            <Text style={styles.title2}>BS Computer</Text>
                            <Text style={styles.subtitle2}>Education</Text>
                        </View>
                        <View style={{marginEnd:17}}>
                            <Text style={styles.title2}>+92 304567898</Text>
                            <Text style={styles.subtitle2}>Phone No</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{marginBottom:12}}>
                <Text style={styles.title}>TEFL Certified English Teacher With 5 Years
                Experience</Text>
            </View>
            <View>
                <Text style={styles.subtitle}> Speaking English ( Native), +2</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#dddddd',
        borderRadius: 12,
        height: 200,
        padding:12,
        marginBottom:20
    },
    title: {
        fontSize: 14,
        fontWeight: '400',
    },
    subtitle: {
        fontSize: 12,
        color:'#677581'
    },
    title2: {
        fontSize: 12,
        fontWeight: '400',
    },
    subtitle2: {
        fontSize: 10,
        color:'#677581'
    }

});
