import { PaletteColor } from "@/lib/theme";
import Octicons from "@expo/vector-icons/Octicons";
import { Link } from "expo-router";
import * as React from "react";
import { useRef } from "react";
import { Dimensions, Image, Pressable, Text, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";

const walletActions = [
  {
    title: "Pay",
    icon: () => (
      <Octicons name="arrow-up" size={20} color={PaletteColor.blue} />
    ),
  },
  {
    title: "Top Up",
    icon: () => <Octicons name="plus" size={20} color={PaletteColor.blue} />,
  },
  {
    title: "Lainnya",
    icon: () => (
      <Octicons name="kebab-horizontal" size={20} color={PaletteColor.blue} />
    ),
  },
];

const data = [...new Array(4).keys()];
const width = Dimensions.get("window").width;

export function WalletCard() {
  const ref = useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      /**
       * Calculate the difference between the current index and the target index
       * to ensure that the carousel scrolls to the nearest index
       */
      count: index - progress.value,
      animated: true,
    });
  };

  return (
    <View className="flex-row bg-blue p-4 rounded-3xl w-full items-center justify-between gap-4">
      <View className="flex-1">
        <Carousel
          ref={ref}
          width={width}
          height={92}
          data={data}
          snapEnabled={true}
          pagingEnabled={true}
          onProgressChange={progress}
          vertical
          renderItem={({ index }) => (
            <View className="bg-white p-4 rounded-2xl w-40 gap-2">
              <Image
                source={require("../assets/images/gopay.png")}
                className="w-20 h-5 object-contain"
              />
              <View className="gap-1">
                <Text className="font-bold">Rp67.000</Text>
                <Link href="/gopay/history" asChild>
                  <Pressable>
                    <Text className="text-sm font-bold text-primary">
                      Tap for history
                    </Text>
                  </Pressable>
                </Link>
              </View>
            </View>
          )}
        />
      </View>
      {walletActions.map((action) => (
        <Pressable key={action.title}>
          <View className="items-center justify-center gap-1">
            <View className="bg-white p-1.5 rounded-xl items-center justify-center">
              <action.icon />
            </View>
            <Text className="color-white font-semibold">{action.title}</Text>
          </View>
        </Pressable>
      ))}
    </View>
  );
}
