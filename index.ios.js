'use strict';
import React, {
  AppRegistry,
  View,
  StatusBarIOS
} from 'react-native';

import TabBar from './src/tabBar';

var AwesomeProject = React.createClass({

  componentDidMount() {
    StatusBarIOS.setStyle('light-content');
  },

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TabBar />
      </View>
    );
  }
});
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
