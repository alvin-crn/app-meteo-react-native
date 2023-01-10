import React from "react";
import Style from "../Style";
import axios from "axios";
import WeatherRow from "./weather/Row";
import {
    View,
    ActivityIndicator,
    FlatList,
    Text,
} from "react-native";

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: this.props.route.params.city,
            report: null,
        };
        this.fetchWeather();
        props.navigation.setOptions({
            title: "Météo de " + this.props.route.params.city,
        });
    }

    fetchWeather() {
        axios
            .get(
                `https://api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.city}&mode=json&units=metric&cnt=10&APPID=94c6cf0868fa5cb930a5e2d71baf0dbf`
            )
            .then((Response) => {
                this.setState({ report: Response.data });
                // console.log(this.state.report.list[0].temp.day)
            });
    }

    render() {
        if (this.state.report === null) {
            return (
                <ActivityIndicator
                    style={Style.loader}
                    color={Style.color}
                    size="large"
                />
            );
        } else {
            // const ds = new ListViewBase.Da
            return (
                <View style={{ flex: 1, padding: 10 }}>
                    <FlatList
                        data={this.state.report.list}
                        renderItem={({item, k}) => <WeatherRow day={item} index={parseInt(k, 10)} />}
                        // renderItem={({item, j, k}) => <Text>{item.temp.day}</Text>}
                    />
                </View>
            );
        }
    }
}
