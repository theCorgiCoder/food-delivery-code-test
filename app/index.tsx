import store from "@/redux/store";
import { Redirect, Stack } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import HomeScreen from "./screens/home/HomeScreen";

export default function Index() {
  return <Redirect href={"/screens/home/HomeScreen"} />;
}
