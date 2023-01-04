import React from "react";
import { View, TextInput } from "react-native";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: "Lyon",
        };
    }

    setCity(city) {
        this.setState({
            city: city,
        });
    }

    render() {
        return (
            <View style={{ margin: 20 }}>
                <TextInput
                    onChangeText={(text) => this.setCity(text)}
                    style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
                    value={this.state.city}
                />
            </View>
        );
    }
}
