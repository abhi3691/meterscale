import React from 'react';
import {ScrollView, View} from 'react-native';
import {BaseScrollView} from 'recyclerlistview';
import styles from './styles';
class ExtendedScrollView extends BaseScrollView {
  _scrollViewRef: any;
  scrollTo(...args: any[]) {
    if (this._scrollViewRef) {
      this._scrollViewRef.scrollTo(...args);
    }
  }
  render() {
    return (
      <ScrollView
        {...this.props}
        ref={scrollView => (this._scrollViewRef = scrollView)}>
        <View style={styles.header} />
        {this.props.children}
        <View style={styles.header} />
      </ScrollView>
    );
  }
}

export default ExtendedScrollView;
