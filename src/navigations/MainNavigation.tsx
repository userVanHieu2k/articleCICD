import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Router from "./Router";
import { HomeScreen, DetailScreen } from "../screens";
import MyTabs from "./BottomTabnavigation";


const stack = createNativeStackNavigator();

function MainNavigation() {
    return (
        <NavigationContainer>
            <stack.Navigator initialRouteName="Home">
                <stack.Screen name={Router.HOME} component={MyTabs} />
                <stack.Screen name={Router.LOGIN} component={HomeScreen} />
                <stack.Screen name={Router.DETAIL} component={DetailScreen} />
                {/* <stack.Screen name="Login" component={HomeScreen} /> */}
            </stack.Navigator>
        </NavigationContainer>
    );
}
export default MainNavigation;