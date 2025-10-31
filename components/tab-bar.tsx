import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useTheme } from "@react-navigation/native";
import { Pressable, Text, View } from "react-native";

type TabBarProps = BottomTabBarProps;

export function TabBar({ state, descriptors, navigation }: TabBarProps) {
  const { colors } = useTheme();
  return (
    <View className="bg-white flex-row pb-4">
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <Pressable
            key={route.key as string}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            className="flex-1 items-center px-4 py-4 gap-2"
          >
            {options.tabBarIcon && (
              <options.tabBarIcon
                {...{
                  focused: isFocused,
                  color: isFocused ? colors.primary : colors.text,
                  size: 24,
                }}
              />
            )}
            <Text style={{ color: isFocused ? colors.primary : colors.text }}>
              {typeof label === "string" ? label : route.name}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
