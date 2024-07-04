import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Input(props){
    const {name,placeholder,icon}=props;
    return(
        <>
            <Text style={styles.text}>{name}</Text>
            <View style={{flexDirection:'row',borderColor: '#ccc',borderWidth: 1,borderRadius: 5,height: 50,marginBottom:16,justifyContent:'space-between',alignItems:'center'}}>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    placeholderTextColor="#999"
                />
                <Icon  name={icon} size={20} style={{marginRight:8}} color="#677581"/>
            </View>
        </>
    );
}

const styles=StyleSheet.create({
    text:{
        fontSize: 16,
        marginBottom:14,
        textAlign:'left',
      },
      input: {
        borderColor: '#FFFFFF',
        paddingHorizontal: 10,
      },
});