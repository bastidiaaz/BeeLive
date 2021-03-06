import React from 'react';
import DEFAULTS from '../../utils/constants';
import { StyleSheet } from 'react-native';

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    padding: DEFAULTS.SCREEN_CONTAINER_PADDING,
    flex: 1
  },
  label: {
    color: DEFAULTS.PRIMARY_COLOR_DARKEST,
    fontSize: DEFAULTS.LABEL_FONT_SIZE,
    fontWeight: DEFAULTS.LABEL_FONT_WEIGHT,
    marginBottom: DEFAULTS.LABEL_MARGIN_BOTTOM
  },
});

export default styles;
