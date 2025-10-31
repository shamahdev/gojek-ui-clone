import { WalletCard } from "@/components/wallet-card";
import { ScrollView, View } from "react-native";

export default function Home() {
  return (
    <ScrollView>
      <View className="flex-1 items-center justify-center p-4">
        <WalletCard />
      </View>
    </ScrollView>
  );
}
