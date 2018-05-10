import { StackNavigator } from 'react-navigation';

import Profiles from '../profiles/screens' // #1. Import profiles page

const RootNavigator = StackNavigator({
  //#2. Register profile pages with alias Profiles inside StackNavigator
  Profiles: {
    screen: Profiles,
    navigationOptions: {
      title: 'Profile'
    }
  },
})

export default RootNavigator
