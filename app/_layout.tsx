import { Theme } from "@/lib/theme";
import { ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  return (
    <ThemeProvider value={Theme}>
      <Stack screenOptions={{ headerShown: false }}></Stack>
    </ThemeProvider>
  );
}
