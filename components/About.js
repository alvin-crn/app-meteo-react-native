import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default class About extends React.Component {
    render() {
        return (
            <View style={style.view}>
                <Text style={style.title}>À propos de moi</Text>
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
                    style={style.makeSearch}
                    onPress={() => this.search()}
                    title="Faire une recherche"
                />
            </View>
        );
    }
}

const style = StyleSheet.create({
    view: {
        margin: 20,
    },
    title: {
        fontSize: 22,
        marginBottom: 20,
    },
    makeSearch: {
        marginTop: 40,
    },
});
