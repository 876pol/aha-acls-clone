import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import CardiacArrest from './CardiacArrest';
import { Platform, UIManager, Button } from "react-native";
import Tachycardia from './Tachycardia';
import Bradycardia from './Bradycardia';
import PostCardiacArrestCare from './PostCardiacArrestCare';

if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}


const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="AHA ACLS"
                    component={Home}
                />
                <Stack.Screen
                    name="Cardiac Arrest"
                    component={CardiacArrest}
                    options={({ navigation, route }) => ({
                        headerRight: () => (
                            <Button
                                onPress={() => route.params.modalVisible = true}
                                title={`Log`}
                            />
                        ),
                    })}
                />
                <Stack.Screen
                    name="Tachycardia"
                    component={Tachycardia}
                />
                <Stack.Screen
                    name="Bradycardia"
                    component={Bradycardia}
                />
                <Stack.Screen
                    name="Post Cardiac Arrest Care"
                    component={PostCardiacArrestCare}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;

