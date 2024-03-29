import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from '../screens/home'
import Detail from '../screens/detail'

const stackNavigatorOptions = {
    headerShow: false
}

const AppNavigator = createStackNavigator({
    Home: { screen: Home },
    Detail: { screen: Detail },
},
    {
        defaultNavigationOptions: stackNavigatorOptions
    })

export default createAppContainer(AppNavigator)
