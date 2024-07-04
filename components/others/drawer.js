import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Login from '../authentication/login';
import SignUp from '../authentication/signUp';
import ForgetPassword from '../authentication/forgetPassword';
import TabNavigator from './navbar';

const Drawr = createDrawerNavigator();

// Custom Drawer Content Component
const CustomDrawerContent = (props) => {
  const handleLogout = () => {
    console.log('Logout pressed!');
    // Add your logout functionality here
  };

  return (
    <DrawerContentScrollView {...props}>
    <View style={{ justifyContent: 'space-between', flex: 1 }}>
      <View>
        <View style={styles.header}>
          <Image
            source={require('../../images/man.png')}
            style={styles.image}
          />
          <Text style={styles.headerText}>Peter Park</Text>
        </View>
        <View style={styles.separator} />
        <DrawerItemList {...props} />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  </DrawerContentScrollView>
  );
};

// Styles for Custom Drawer Content
const styles = StyleSheet.create({
  header: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f6f6f6', // Adjust this color if needed
    marginBottom: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40, // Make the image circular
    marginBottom: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 10,
  },
  footer: {
    marginTop: 'auto',
    paddingHorizontal: 20,
    marginTop:340
  },
  logoutButton: {
    backgroundColor: '#054bb4',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

// Drawer Navigator Component
export default function Drawer() {
  return (
    <Drawr.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={({ route }) => ({
        drawerIcon: ({ focused, size, color }) => {
          let iconName;

          switch (route.name) {
            case 'Homee':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Login':
              iconName = focused ? 'log-in' : 'log-in-outline';
              break;
            case 'SignUp':
              iconName = focused ? 'person-add' : 'person-add-outline';
              break;
            case 'ForgetPassword':
              iconName = focused ? 'key' : 'key-outline';
              break;
            default:
              iconName = 'help-circle';
              break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Drawr.Screen name="Homee" component={TabNavigator} options={{ headerShown: false }} />
      <Drawr.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Drawr.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
      <Drawr.Screen name="ForgetPassword" component={ForgetPassword} options={{ headerShown: false }} />
    </Drawr.Navigator>
  );
}
