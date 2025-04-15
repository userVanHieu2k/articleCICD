import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, DetailScreen, ChartScreen} from '../screens';
import {PlatformPressable} from '@react-navigation/elements';
import {Text, View} from 'react-native';
import {useLinkBuilder, useTheme} from '@react-navigation/native';
import Router from './Router';
import RippleButton from '../modals/RipperAnimation';
import { moderateScale, scale } from '../utils/scale';

const bottomTab = createBottomTabNavigator();

function MyTabs() {
  return (
    <bottomTab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={(prop: any) => <BottomTabNavigation {...prop} />}>
      <bottomTab.Screen name={Router.HOME} component={HomeScreen} />
      <bottomTab.Screen name={Router.DETAIL} component={DetailScreen} />
      <bottomTab.Screen name={Router.CHARTSCREEN} component={ChartScreen} />
    </bottomTab.Navigator>
  );
}

function BottomTabNavigation({state, descriptors, navigation}: any) {
  const {colors} = useTheme();
  const {buildHref} = useLinkBuilder();

  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];
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
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              height: scale(40),
            }}>
            <RippleButton focus={isFocused}>
              <Text style={{color: isFocused ? '#fff' : colors.text}}>
                {label}
              </Text>
            </RippleButton>
          </PlatformPressable>
        );
      })}
    </View>
  );
}

export default MyTabs;
