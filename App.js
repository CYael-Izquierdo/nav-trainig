import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import Users from "./screens/Users";
import Detail from "./screens/Detail";
import Posts from "./screens/Posts";

const AppNavigator = createStackNavigator({
  Users: {
    screen: Users,
  },
  Posts: {
    screen: Posts,
  },
  Details: {
    screen: Detail,
    navigationOptions: ({navigation}) => ({
      headerTitle: "Post"
    })
  }
}, {
  initialRouteName: "Users"
})

export default createAppContainer(AppNavigator)