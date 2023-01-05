import React from "react";
import Style from "../Style";
import axios from "axios";
import { Text, ActivityIndicator } from "react-native";

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: this.props.route.params.city,
            report: null,
        };
        this.fetchWeather()
        props.navigation.setOptions({
            title: "Météo de " + this.props.route.params.city,
        });
    }

    fetchWeather(){
        // API Weather
    }

    render() {
        if (this.state.report === null) {
            return (
                <ActivityIndicator color={Style.color} size='large'/>
            )
        } else {
            return <Text>Bonjour de {this.state.city} !</Text>;
        }
    }
}
