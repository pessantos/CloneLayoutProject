import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Senha from './pages/senha/Senha'
import Login from './pages/login/Login'
const Stack = createStackNavigator();
const Routes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Senha" component={Senha} options={{ headerShown: false }} />
            
        </Stack.Navigator>
    );
};
export default Routes;