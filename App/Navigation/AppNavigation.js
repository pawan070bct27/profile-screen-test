import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import ProfileScreen from '../Containers/ProfileScreen'
import TodoListScreen from '../Containers/TodoListScreen'
import ActivitiesScreen from '../Containers/ActivitiesScreen'
import MainLayoutScreen from '../Containers/ParentComponent/MainLayoutScreen'
import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
  {
    ProfileScreen: ProfileScreen,
    TodoListScreen: TodoListScreen,
    ActivitiesScreen: ActivitiesScreen
  },
  {
    // Default config for all screens
    headerMode: 'screen',
    initialRouteName: 'ProfileScreen',
    navigationOptions: {
      headerStyle: styles.header,
      headerShown:true,
      headerRight: () => (
        <Button
            onPress={() => alert('This is a button')}
            title="Info"
            color="#fff"
        />
    )
    },
  },
)

export default createAppContainer(PrimaryNav)
