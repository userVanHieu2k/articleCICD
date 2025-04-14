import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen, DetailScreen } from "../screens";
import { PlatformPressable } from "@react-navigation/elements";
import { Text, View } from "react-native";
import { useLinkBuilder, useTheme } from "@react-navigation/native";

const bottomTab = createBottomTabNavigator();

function MyTabs() {
    return (
        <bottomTab.Navigator screenOptions={{ headerShown: false }} tabBar={(prop: any) => <BottomTabNavigation {...prop} />}>
            <bottomTab.Screen name="Home" component={HomeScreen} />
            <bottomTab.Screen name="Settings" component={DetailScreen} />
        </bottomTab.Navigator>
    );
}

function BottomTabNavigation({ state, descriptors, navigation }: any) {
    const { colors } = useTheme();
    const { buildHref } = useLinkBuilder();
  
    return (
      <View style={{ flexDirection: 'row' }}>
        {state.routes.map((route: any, index: number) => {
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
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };
  
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
  
          return (
            <PlatformPressable
              href={buildHref(route.name, route.params)}
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarButtonTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1 }}
            >
              <Text style={{ color: isFocused ? colors.primary : colors.text }}>
                {label}
              </Text>
            </PlatformPressable>
          );
        })}
      </View>
    );
  }

export default MyTabs;