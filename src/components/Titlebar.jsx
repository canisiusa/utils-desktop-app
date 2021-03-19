import React, { Component } from 'react';
import { TitleBar } from 'react-desktop/windows';
export default class Titlebar extends Component {
  static defaultProps = {
    color: '#458625',
    theme: 'light'
  };

  constructor(props) {
    super(props);
    this.state = { isMaximized: false };
  }

  close = () => {
    console.log('close')
    window.ipcRenderer.invoke('close-app')
  };
  minimize = () => {
   window.ipcRenderer.invoke('minimize:toogle') 
  };
  toggleMaximize = () => {
    window.ipcRenderer.invoke('maximize:toogle').then(result =>{

      this.setState({ isMaximized: result })
    })
  };
  toggleRestore = () => {
    window.ipcRenderer.invoke('restore:toogle').then(result => {

      this.setState({ isMaximized: result })
    })
  }
  componentDidMount(){
    this.toggleMaximize()
  }

  render() {
    return (
      <TitleBar
        title="utils_app"
        controls
        isMaximized={this.state.isMaximized}
        theme={this.props.theme}
        background={this.props.color}
        onCloseClick={this.close}
        onMinimizeClick={this.minimize}
        onMaximizeClick={this.toggleMaximize}
        onRestoreDownClick={this.toggleRestore}
      />
    );
  }
}