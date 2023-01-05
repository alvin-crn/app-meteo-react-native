import React from "react";
import style from "../Style";
import List from "./List";
import { View, TextInput, Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

class SearchScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: "Lyon",
        };
        // console.log(this.state.city)
    }

    setCity(city) {
        this.setState({
            city: city,
        });
    }

    render() {
        return (
            <View style={style.container}>
                <TextInput
                    onChangeText={(text) => this.setCity(text)}
                    style={style.input}
                    value={this.state.city}
                />
                <Button
                    color={style.color}
                    onPress={() =>
                        this.props.navigation.navigate("Result", {
                            city: this.state.city,
                        })
                    }
                    title="Rechercher"
                />
            </View>
        );
    }
}

const Stack = createNativeStackNavigator();

function Search() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Rechercher une ville"
                component={SearchScreen}
                options={{ headerTitleStyle: { color: style.color } }}
            />
            <Stack.Screen
                name = "Result"
                component={List}
                options={{ headerTitleStyle: { color: style.color } }}
            />
        </Stack.Navigator>
    );
}

export default Search;
