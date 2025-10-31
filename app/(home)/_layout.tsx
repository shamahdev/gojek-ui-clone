import { SearchBar } from "@/components/search-bar";
import { TabBar } from "@/components/tab-bar";
import Octicons from "@expo/vector-icons/Octicons";
import { Tabs } from "expo-router";

export default function HomeLayout() {
  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: (props) => <Octicons name="home" {...props} />,
          header: (props) => <SearchBar {...props} />,
        }}
      />
      <Tabs.Screen
        name="promo"
        options={{
          title: "Promo",
          tabBarIcon: (props) => <Octicons name="tag" {...props} />,
        }}
      />
      <Tabs.Screen
        name="order"
        options={{
          title: "Order",
          tabBarIcon: (props) => <Octicons name="checklist" {...props} />,
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          tabBarIcon: (props) => <Octicons name="comment" {...props} />,
        }}
      />
    </Tabs>
  );
}
