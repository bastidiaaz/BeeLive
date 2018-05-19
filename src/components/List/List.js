import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  _renderItem = ({item}) => (
    <ListItem
      key={item.key}
      leftIcon={<View style={styles.iconContainer}><Icon style={styles.icon} name="forumbee"/></View>}
      title={item.name}
      subtitle={`Estado: ${item.status}`}
    />
  )

  render() {
    return (
      <FlatList
        data={this.props.data}
        renderItem={this._renderItem}
      />
    )
  }
}

export default List;
