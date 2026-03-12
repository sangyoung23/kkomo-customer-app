import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="home" options={{ title: "홈" }} />
      <Tabs.Screen name="map" options={{ title: "지도" }} />
      <Tabs.Screen name="reservation" options={{ title: "예약" }} />
      <Tabs.Screen name="mypage" options={{ title: "마이페이지" }} />
    </Tabs>
  );
}
