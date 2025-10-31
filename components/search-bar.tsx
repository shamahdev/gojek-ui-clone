import Octicons from "@expo/vector-icons/Octicons";
import type { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import { TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type SearchBarProps = BottomTabHeaderProps;

export function SearchBar({}: SearchBarProps) {
  return (
    <View className="bg-primary">
      <SafeAreaView edges={["top"]}>
        <View className="bg-primary px-4 py-4">
          <View className="flex-row gap-2 bg-white p-2 rounded-full">
            <Octicons name="search" size={24} color="black" />
            <TextInput
              placeholder="Find services, foods, or places"
              className="flex-1"
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
