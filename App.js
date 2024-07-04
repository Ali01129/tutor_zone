import SplashScreen from './components/others/splashScreen';
import SignUp from './components/authentication/signUp';
import Login from './components/authentication/login';
import ForgetPassword from './components/authentication/forgetPassword';
import ForgetPassword2 from './components/authentication/forgetPassword2';
import ForgetPassword3 from './components/authentication/forgetPassword3';
import PasswordChanged from './components/authentication/passwordChanged';
import SeclectOption from './components/others/selectOption';
import AboutUs from './components/teacher/aboutUs';
import Profile from './components/others/profile';
import StudentHome from './components/student/studentHome';
import React, { useState, useEffect } from 'react';


//for navigations
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import TabNavigator from './components/others/navbar';
import Drawer from './components/others/drawer';
import TeacherProfile from './components/teacher/teacherProfile';

const Stack = createNativeStackNavigator();





export default function App() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isSplashVisible) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} options={{headerShown:false}}/>
        <Stack.Screen name="ForgetPassword2" component={ForgetPassword2} options={{headerShown:false}}/>
        <Stack.Screen name="ForgetPassword3" component={ForgetPassword3} options={{headerShown:false}}/>
        <Stack.Screen name="PasswordChanged" component={PasswordChanged} options={{headerShown:false}}/>
        <Stack.Screen name="Select" component={SeclectOption} options={{headerShown:false}}/>
        <Stack.Screen name="About" component={AboutUs} options={{headerShown:false}}/>
        <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}}/>  
        <Stack.Screen name="StudentHome" component={StudentHome} options={{headerShown:false}}/> 
        <Stack.Screen name="TabNav" component={TabNavigator} options={{headerShown:false}}/> 
        <Stack.Screen name="Drawer" component={Drawer} options={{headerShown:false}}/> 
        <Stack.Screen name="Teacher" component={TeacherProfile} options={{headerShown:false}}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
