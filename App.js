import { NavigationContainer } from '@react-navigation/native'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './screen/Screen1';
import Screen2 from './screen/Screen2';
import { Pressable, Image,Text } from 'react-native';
import { View } from 'react-native-web';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#1BA9FF' }, // Đặt màu nền cho header
        headerTintColor: '#fff', // Màu chữ trên header
        headerTitleStyle: { fontWeight: 'bold' },
         // Kiểu chữ trên header
      }}
    >
      <Stack.Screen name="Home" component={Screen1} options={{headerTitle:()=>(
        <View style={{flexDirection:'row'}}>
           <Pressable><Image source={require('./assets/ant-design_arrow-left-outlined.png')} 
                   style={{height:24, width:24}} ></Image>
                   </Pressable>
                   <Text style={{marginLeft:120, color:'white'}}> Chat </Text>
                   <Image source={require('./assets/bi_cart-check.png')} 
                   style={{height:24, width:24,marginLeft:120}} ></Image>

           </View>
       )}} />
    





      
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={StackNavigator} options={{ tabBarBadge: 3 }} />
        <Tab.Screen name="Settings" component={Screen2} options={{ tabBarBadge: 3 }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}