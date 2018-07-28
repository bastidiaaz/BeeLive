import React from 'react';
import {
  StatusBar,
  Text,
  View
} from 'react-native';

import PropTypes from 'prop-types';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { addListener } from '../../utils/redux';
import { addNavigationHelpers } from 'react-navigation';
import { mapNavigationStateParamsToProps } from '../../utils/helpers.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import DropdownMenu from '../DropdownMenu/DropdownMenu';

import MainScreen from '../../screens/MainScreen/MainScreen';

import CreateApiaryScreen from '../../screens/CreateApiaryScreen/CreateApiaryScreen';
import SingleApiaryScreen from '../../screens/SingleApiaryScreen/SingleApiaryScreen';
import CreateHiveScreen from '../../screens/CreateHiveScreen/CreateHiveScreen';

import styles from './styles';
import DEFAULTS from '../../utils/constants';

var options = {
  initialRouteName: 'Main',
  navigationOptions: {
    headerStyle: styles.header,
    headerTitleStyle: styles.title
  }
};

var stackRoutes = {
  Main: {
    screen: MainScreen
  },
  CreateApiary: {
    screen: mapNavigationStateParamsToProps(CreateApiaryScreen),
    navigationOptions: ({ navigation }) => ({
      title: "Nuevo Apiario"
    })
  },
  SingleApiary: {
    screen: SingleApiaryScreen,
    navigationOptions: ({ navigation }) => ({
      title: navigation.getParam('apiary', null).name,
      headerStyle: styles.headerCombined,
      headerRight: <DropdownMenu items={[{label: 'Editar Apiario', onPress: () => { navigation.navigate('Info', {edit: true}) }}]}/>
    })
  },
  CreateHive: {
    screen: mapNavigationStateParamsToProps(CreateHiveScreen),
    navigationOptions: ({ navigation }) => ({
      title: "Nueva Colmena"
    })
  },
};

export const StackNavElement = StackNavigator(stackRoutes, options);

class StackNav extends React.Component {
  render() {
    const { dispatch, nav } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={DEFAULTS.PRIMARY_COLOR_DARKER} animated={true} />
        <StackNavElement
          navigation={addNavigationHelpers({
            dispatch,
            state: nav,
            addListener,
          })}/>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(mapStateToProps)(StackNav);
