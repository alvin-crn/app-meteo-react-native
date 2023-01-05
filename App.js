import React from "react";
import About from "./components/About";
import Search from "./components/Search";
import Ionicons from "@expo/vector-icons/Ionicons";
import Style from "./Style";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <View style={{ flex: 1 }}>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={() => ({
                        tabBarActiveTintColor: "tomato",
                        tabBarInactiveTintColor: "gray",
                        headerShown: false,
                    })}
                >
                    <Tab.Screen
                        name="SearchScreen"
                        component={Search}
                        options={{
                            title: "Rechercher",
                            tabBarIcon: ({ focused, color, size }) => {
                                return (
                                    <Ionicons
                                        name={
                                            focused
                                                ? "search"
                                                : "search-outline"
                                        }
                                        size={size}
                                        color={color}
                                    />
                                );
                            },
                        }}
                    />
                    <Tab.Screen
                        name="AboutScreen"
                        component={About}
                        options={{
                            title: "À propos",
                            tabBarIcon: ({ focused, color, size }) => {
                                return (
                                    <Ionicons
                                        name={
                                            focused
                                                ? "ios-information-circle"
                                                : "ios-information-circle-outline"
                                        }
                                        size={size}
                                        color={color}
                                    />
                                );
                            },
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </View>
    );
}
