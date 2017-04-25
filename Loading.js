import React, { Component, PropTypes } from 'react';
import { View, Spinner } from '@shoutem/ui';
import styles from './styles';

class Loading extends Component {
  constructor() {
    super();

    this.state = { visible: false };
  }

  hide() {
    this.setState({ visible: false });
  }

  show() {
    this.setState({ visible: true });
  }

  render() {
    return (
      this.state.visible ?
        <View styleName="overlay fill-parent vertical v-center h-center" style={styles.loadingStyle}>
          <Spinner style={styles.spinner} />
        </View>
      : <View/>
    );
  }
}

export default Loading;