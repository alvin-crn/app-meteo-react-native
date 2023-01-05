import React from "react";
import Style from "../Style";
import { View, Text, Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

class AboutScreen extends React.Component {
    render() {
        return (
            <View style={Style.container}>
                <Text style={Style.title}>À propos de moi</Text>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </Text>
                <Button
                    color={Style.color}
                    onPress={() =>
                        this.props.navigation.navigate("SearchScreen")
                    }
                    title="Faire une recherche"
                />
            </View>
        );
    }
}

const Stack = createNativeStackNavigator();

function About() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="À propos"
                component={AboutScreen}
                options={{ headerTitleStyle: { color: Style.color } }}
            />
        </Stack.Navigator>
    );
}

export default About;
