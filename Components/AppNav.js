import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import Home from './Home';
import Tech from './Tech';
import Business from './Business';
import Sports from './Sports';
import { View } from 'native-base';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
 
    <NavigationContainer>
     
    <Tab.Navigator>
      
      <Tab.Screen name="Home"    component={Home} options={{

tabBarIcon: (props) => (
  <Icon type='feather'  name='home' color={props.color} />
),
}}/>
   
      <Tab.Screen name="Business"  component={Business}   options={{
tabBarIcon: (props) => (
  <Icon type='feather' name='dollar-sign' color={props.color} />
),
}}/>
<Tab.Screen name="Tech"  component={Tech}  options={{
tabBarIcon: (props) => (
  <Icon type='ionicon' name="hardware-chip-outline" color={props.color} />
),
}} />
<Tab.Screen name="Sports"  component={Sports}  options={{
tabBarIcon: (props) => (
  <Icon type='ionicon' name="tennisball-outline" color={props.color} />
),
}} />
    
    </Tab.Navigator>
   
    </NavigationContainer>

   
    
  );
}

const styles = StyleSheet.create({
 
  title: {
      fontSize: 18,
      marginTop: 10,
      fontWeight: "600",
      color: "#b860f7",
      padding:9
  },
 
});



export default MyTabs