import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import marker from  '../../../assets/images/map_marker.png';
import t from 'tcomb-form-native';

import { createApiary } from '../../reducers/apiariesReducer/apiariesActions';
import { connect } from 'react-redux';

import Button from '../../components/Button/Button';
import styles from './styles';

const Form = t.form.Form;
const Apiary = t.struct({
  nombre: t.String,
  descripcion: t.String
});
const formOptions = {
  fields: {
    nombre: {
      placeholder: "Ingresa un nombre para tu apiario"
    },
    descripcion: {
      placeholder: "Ingresa una descripcion para tu apiario"
    }
  }
}

class CreateApiaryScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: -38.736854,
        longitude: -72.590328,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
    };
  };

  getInitialState() {
    return {
      formValue: null,
      region: {
        latitude: -38.736854,
        longitude: -72.590328,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
  }

  onFormChange = (formValue) => {
    this.setState({
      formValue: formValue
    });
  };

  onRegionChange = (region) => {
    this.setState({
      region: region
    });
  };

  createApiary = () => {
    var newApiaryForm = this.refs.newApiary;
    var formIsValid = !newApiaryForm.validate().errors.length > 0;

    if (formIsValid) {
      var newApiaryValues = newApiaryForm.getValue();
      var newApiary = {
        name: newApiaryValues.nombre,
        description: newApiaryValues.descripcion,
        lat: this.state.region.latitude,
        long: this.state.region.longitude
      };

      this.props.createApiary(newApiary).then(() => {
        this.props.navigation.navigate('Apiaries');
      });
    } else {
      console.log('Form invalid');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.formContainer}>
          <View>
            <Form value={this.state.formValue} onChange={this.onFormChange} ref="newApiary" type={Apiary} options={formOptions}/>
          </View>
          <Text style={styles.label}>Ubicación</Text>
          <View style={styles.mapContainer}>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: -38.736854,
                longitude: -72.590328,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              onRegionChange={this.onRegionChange} />
            <View pointerEvents="none" style={{flex: 1}}>
              <Image style={styles.marker} source={marker} />
            </View>
          </View>
          <Button onPress={this.createApiary} text="CREAR APIARIO" />
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  apiaries: state.apiaries
});

export default connect(mapStateToProps, { createApiary })(CreateApiaryScreen);
