
import { View, Text } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'



import StyleCheckPage from './component/StyleCheckPage';
import TextInputPage from './component/TextInputPage';
import FormInputPage from './component/FormInputPage';
import FlatListPage from './component/FlatListPage';
import ListWithMapAndScroller from './component/ListWithMapAndScroller';
import GridDynamic from './component/GridDynamic'; 
import TouchableHighlightPage from './component/TouchableHighlightPage';
import RadioButtonWithTouchable from './component/RadioButtonWithTouchable'; 
import HomeNavigation from './component/Navigation/HomeNavigation';
import AboutNavigation from './component/Navigation/AboutNavigation';


const Stack = createNativeStackNavigator()
export default function App() {  
  return (
    // <View style={{paddingTop : 70}} >
    // {/* <StyleCheckPage /> */}
    // {/* <TextInputPage /> */}
    // {/* <FormInputPage/> */}
    // {/* <FlatListPage/> */}
    // {/* <ListWithMapAndScroller/> */}
    // {/* <GridDynamic/>  */}
    // {/* <TouchableHighlightPage/> */}
    // <RadioButtonWithTouchable/> 
    //  </View>

    <NavigationContainer >
      <Stack.Navigator >
         <Stack.Screen  name='home' component={HomeNavigation} options={{ headerShown: false }}/>
         <Stack.Screen name='about' component={AboutNavigation} options={{ headerShown: false }}/>
      </Stack.Navigator> 
    </NavigationContainer>
  );
}

// const HomeNavigation = () => {
//   return (
//     <View> 
//         <Text>Home Screen</Text>
//     </View>
//   )
// }


 
 
 