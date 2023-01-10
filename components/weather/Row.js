import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import moment from "moment";
import Style from "../../Style";
import "moment/locale/fr";
import FadeInView from "../animation/fadeInView";

moment.locale("fr");

export default class Row extends React.Component {
    day() {
        let day = moment(this.props.day.dt * 1000).format("ddd");
        return (
            <Text style={[style.white, style.bold]}>{day.toUpperCase()}</Text>
        );
    }

    date() {
        let day = moment(this.props.day.dt * 1000).format("DD/MM");
        return <Text style={style.white}>{day}</Text>;
    }

    icon(size = 24) {
        const type = this.props.day.weather[0].main.toLowerCase();
        let balise;
        let color = "white";
        switch (type) {
            case "clouds":
                balise = <AntDesign name="cloudo" size={size} color={color} />;
                break;
            case "rain":
                balise = (
                    <Ionicons name="rainy-outline" size={size} color={color} />
                );
                break;
            case "snow":
                balise = (
                    <Ionicons name="snow-outline" size={size} color={color} />
                );
                break;
            case "sun":
                balise = (
                    <Ionicons name="sunny-outline" size={size} color={color} />
                );
                break;
            case "clear":
                balise = (
                    <Ionicons name="sunny-outline" size={size} color={color} />
                );
                break;
            default:
                balise = <Text>{type}</Text>;
                break;
        }
        return balise;
    }

    render() {
        if (this.props.index === 0) {
            return (
                <FadeInView delay={this.props.index * 50}>
                    <View style={[style.view, style.firstView]}>
                        <Text style={{ fontSize: 30 }}>
                            <Text style={[style.white, style.bold]}>AUJ.</Text>
                            {this.date()}
                        </Text>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >
                            {this.icon(40)}
                            <Text
                                style={[
                                    style.temp,
                                    { marginLeft: 15, fontSize: 40 },
                                ]}
                            >
                                {Math.round(this.props.day.temp.day)}°C
                            </Text>
                        </View>
                    </View>
                </FadeInView>
            );
        } else {
            return (
                <FadeInView delay={this.props.index * 50}>
                    <View style={style.view}>
                        <Text>
                            {this.day()}
                            {this.date()}
                        </Text>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >
                            {this.icon()}
                            <Text style={[style.temp, { marginLeft: 15 }]}>
                                {Math.round(this.props.day.temp.day)}°C
                            </Text>
                        </View>
                    </View>
                </FadeInView>
            );
        }
    }
}

const style = StyleSheet.create({
    firstView: {
        backgroundColor: "#E03B1F",
    },
    view: {
        backgroundColor: Style.color,
        borderWidth: 0,
        paddingHorizontal: 20,
        paddingVertical: 10,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    temp: {
        color: "white",
        fontWeight: "bold",
        fontSize: 25,
    },
    white: {
        color: "#FFF",
    },
    bold: {
        fontWeight: "bold",
    },
});
