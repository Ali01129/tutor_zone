import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StudentHome from '../student/studentHome';
import Profile from './profile';
import AboutUs from '../teacher/aboutUs';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon4 from 'react-native-vector-icons/SimpleLineIcons';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { height: 70, paddingBottom: 10, paddingTop: 10 }, // Increase the height
          tabBarLabelStyle: { fontSize: 14 }, // Adjust font size
          tabBarIconStyle: { marginBottom: -5 },
          tabBarLabel: '', // Adjust icon position
        }}
      >
      
        <Tab.Screen name="study" component={StudentHome} options={{headerShown: false, 
            tabBarIcon: ({ color, size }) => (
              <Icon4 name="graduation" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen name="bell" component={AboutUs} options={{headerShown: false, 
            tabBarIcon: ({ color, size }) => (
              <Icon3 name="bell-outline" color={color} size={size} />
            ),
          }}
        />
          <Tab.Screen name="home" component={StudentHome} options={{headerShown: false, 
              tabBarIcon: ({ color, size }) => (
              <Icon2 name="pluscircleo" color={color} size={size+5} />
            ),}}/>
        <Tab.Screen name="message" component={AboutUs} options={{headerShown: false, 
                  tabBarIcon: ({ color, size }) => (
                    <Icon2 name="message1" color={color} size={size} />
          ),}}/>
         <Tab.Screen name="Profile" component={Profile} options={{headerShown: false, 
            tabBarIcon: ({ color, size }) => (
              <Icon name="person-outline" color={color} size={size} />
          ),}}/>
        
      </Tab.Navigator>
    );
  }