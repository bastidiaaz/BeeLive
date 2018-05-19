import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import IconBadge from '../IconBadge/IconBadge';

import styles from './styles';

class InfoComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.infoElement}>
          <IconBadge name="smile-o" badgeBackgroundColor="#388E3C" badgeValue="3"/>
          <Text>Saludables</Text>
        </View>
        <View style={styles.infoElement}>
          <IconBadge name="frown-o" badgeBackgroundColor="#D32F2F" badgeValue="2"/>
          <Text>Críticas</Text>
        </View>
        <View style={styles.infoElement}>
          <IconBadge name="meh-o" badgeBackgroundColor="#455A64" badgeValue="1"/>
          <Text>Sin reportes</Text>
        </View>
      </View>
    )
  }
}

export default InfoComponent;
