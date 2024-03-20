import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, TabBarIOSItem } from 'react-native';
import Constants from 'expo-constants';
import ScreenAbout from './Components/About';
import CourseDetails from './Components/CourseDetails'
import CourseList from './Components/CoursesList'
import AddReview from './Components/AddReview'
import GlobalContext from '../GlobalContext';
import Login from './Components/signIn';
import Signup from './Components/signUp';
const Tab=createMaterialBottomTabNavigator();
const Stack=createStackNavigator();

const Courses=()=>{
  <Stack.Navigator>
    <Stack.Screen
    name="CoursesList" component={CourseList}>
    </Stack.Screen>
    <Stack.Screen
    name="CourseDetails" component={CourseDetails}>
    </Stack.Screen>
    <Stack.Screen
    name="AddReview" component={AddReview}>
    </Stack.Screen>
  </Stack.Navigator>
}
const Auth=()=>{
  return(
    <Stack.Navigator>
    <Stack.Screen name="Login" component={Login} 
    options={{title:"signup",headerTitleAlign:'center'}}

    />
    <Stack.Screen name="signup" component={Signup}
     options={{title:"signup",headerTitleAlign:'center'}}
     
    />
    </Stack.Navigator>
  )
}
export default function App() {
  const [state,setState]=useState({user:null})

  return (
    <GlobalContext.Provide value={{state,setState}}>
    <NavigationContainer>
    {state.user===null?<Auth/>:<signUp/>}
      <Tab.Navigator>
      <Tab.Screen name="Courses" component={Courses}
        options={{Leble:"Courses List",tabBarIcon:({color})=>{
        <MaterialCommunityIcons name="home" color={color} size={26}}
        }}
      />
        <Tab.Screen name="About" component={ScreenAbout}

        options={{Leble:"Courses List",tabBarIcon:({color})=>{
          <MaterialCommunityIcons name="info" color={color} size={26}}
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
    </GlobalContext.Provide>
    )
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});
