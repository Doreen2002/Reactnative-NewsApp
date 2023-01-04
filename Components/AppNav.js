import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Icon } from 'react-native-elements';

import Home from './Home';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
    <Tab.Screen name="Home"  component={Home} options={{
            tabBarIcon: (props) => (
              <Icon type='feather' name='home' color={props.color} />
            ),
          }}/>
    <Tab.Screen name="Bussiness"  component={Business}   options={{
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


function Business()
{
    return(
        <>
        </>
    )
}
function Tech()
{
    return(
        <>
        </>
    )
}
function Sports()
{
    return(
        <>
        </>
    )
}

export default MyTabs