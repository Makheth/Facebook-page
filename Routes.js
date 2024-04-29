import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import login from "./Login";
import Timeline from "./Timeline";



const stack =createNativeStackNavigator();

export default function Routes()
{
    return(
        <NavigationContainer>
            <stack.Navigator>
            <stack.Screen name ="login" component = {login}/>

            <stack.Screen name ="Timeline" component = {Timeline}/>

            

            </stack.Navigator>
            </NavigationContainer>
            

          
           
    );
}