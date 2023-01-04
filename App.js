import React from "react";
import About from "./components/About";
import Search from "./components/Search";
import Ionicons from "@expo/vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

function SearchScreen() {
    return <Search />;
}

function AboutScreen() {
    return <About />;
}

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === "Search") {
                            iconName = focused ? "search" : "search-outline";
                        } else if (route.name === "About") {
                            iconName = focused
                                ? "ios-information-circle"
                                : "ios-information-circle-outline";
                        }

                        // You can return any component that you like here!
                        return (
                            <Ionicons
                                name={iconName}
                                size={size}
                                color={color}
                            />
                        );
                    },
                    tabBarActiveTintColor: "tomato",
                    tabBarInactiveTintColor: "gray",
                })}
            >
                <Tab.Screen name="Search" component={SearchScreen} />
                <Tab.Screen name="About" component={AboutScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
