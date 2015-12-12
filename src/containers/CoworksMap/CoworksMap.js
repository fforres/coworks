import React, {Component} from 'react';
import DocumentMeta from 'react-document-meta';
import { GoogleMap } from 'components';
import {connect} from 'react-redux';
import config from '../../config';

@connect(
  state => ({showKitten: state.auth.showKitten})
)
export default class CoworksMap extends Component {

  state = {
    showKitten: false
  }

  handleToggleKitten = () => this.setState({showKitten: !this.state.showKitten});

  render() {
    const {showKitten} = this.state;
    const styles = require('./CoworksMap.scss');
    return (
      <div className={styles.map + ' container'} kit={showKitten}>
        <DocumentMeta title={config.app.title + ': Map'}/>
        <GoogleMap/>
      </div>
    );
  }
}
