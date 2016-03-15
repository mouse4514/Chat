'use strict';

import React, {
  StyleSheet,
  TabBarIOS,
  Navigator,
  NavigatorIOS,
  Component,
  Text,
  View,
} from 'react-native';

import Home from './views/home';
import Contacts from './views/contacts';
import Find from './views/find';
import My from './views/my';

const HOME_TAB = 'homeTab';
const CONTACTS_TAB = 'contactsTab';
const FIND_TAB = 'findTab';
const MY_TAB = 'myTab';

export default class TabBar extends Component {
  constructor() {
    super();
    this.state = {
      selectedTab: HOME_TAB,
      notifCount: 0,
      presses: 0,
    };
  }
  setTab(tabId){
    this.setState({selectedTab: tabId})
  }

  _addNavigator(component, title){
    var data = null;
    if(title === '首页'){
      data = this.state.data;
    }
    return <NavigatorIOS
      style={{flex:1}}
      barTintColor='#FFF'
      titleTextColor="#666"
      tintColor="#666"
      translucent={false}
      initialRoute={{
          component: component,
          title: title,
          passProps:{
            data: data
          }
        }}
      />;
  }

  //进行渲染页面内容
  _renderContent(pageName: string, num?: number) {
    var renderView;
    if(pageName == HOME_TAB){
      renderView = <Home />
    } else if(pageName == CONTACTS_TAB){
      renderView = <Contacts />
    } else if(pageName == FIND_TAB){
      renderView = <Find />
    } else if(pageName == MY_TAB){
      renderView = <My />
    }

    return (
      <View style={styles.pageView}>
        {renderView}
      </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <TabBarIOS
          tintColor="#11a984"
          barTintColor="#FFFFFF">
          <TabBarIOS.Item
            title="首页"
            icon={require('image!home')}
            selected={this.state.selectedTab === HOME_TAB}
            onPress={() => this.setTab(HOME_TAB)}>
            {this._renderContent(HOME_TAB)}
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title="通讯录"
            icon={require('image!contacts')}
            selected={this.state.selectedTab === CONTACTS_TAB}
            onPress={() => this.setTab(CONTACTS_TAB)}>
            {this._renderContent(CONTACTS_TAB)}
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title="发现"
            icon={require('image!find')}
            selected={this.state.selectedTab === FIND_TAB}
            onPress={() => this.setTab(FIND_TAB)}>
            {this._renderContent(FIND_TAB)}
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title="我"
            icon={require('image!my')}
            selected={this.state.selectedTab === MY_TAB}
            onPress={() => this.setTab(MY_TAB)}>
            {this._renderContent(MY_TAB)}
          </TabBarIOS.Item>
        </TabBarIOS>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pageView: {
    flex: 1,
  },
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    margin: 50,
  }
});
