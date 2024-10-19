import { Redirect } from "expo-router";

export default function Index() {
  // Redirect to home screen when the app starts
  return <Redirect href="/screens/home/HomeScreen" />;
}
