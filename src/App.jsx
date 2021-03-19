import React, { Component } from 'react';
import { NavPane, NavPaneItem, Text } from 'react-desktop/windows';
import Titlebar from "./components/Titlebar";
import Streaming from "./screens/Streaming";
import ToDo from "./screens/ToDo";
import Reader from "./screens/Reader";
import Galerie from './screens/Galerie';
import Footer from './components/Footer';

export default class App extends Component {
  static defaultProps = {
    color: '#458625',
    theme: 'light'
  };

  constructor() {
    super();
    this.state = {
      selected: 'Streaming'
    }
  }

  render() {
    
    return (
      <React.StrictMode>
        <Titlebar></Titlebar>
        <div className="window-content">
          <NavPane openLength={200} push color={this.props.color} theme={this.props.theme} >
            {this.renderItem('Streaming', <Streaming />)}
            {this.renderItem('Galerie', <Galerie />)}
            {this.renderItem('ToDo', <ToDo />)}
            {this.renderItem('Doc Reader', <Reader />)}
          </NavPane>
        </div>
        <Footer></Footer>
      </React.StrictMode>
      );
  }

  renderItem(title, content) {
    return (
      <NavPaneItem
        title={title}
        icon={this.renderIcon(title)}
        theme="light"
        background="#fafafa"
        selected={this.state.selected === title}
        onSelect={() => this.setState({ selected: title })}
        padding="10px 20px"
        push
      >
        <Text>{content}</Text>
      </NavPaneItem>
    );
  }

  renderIcon(name) {
    const fill = this.props.theme === 'dark' ? '#ffffff' : '#000000';
    // eslint-disable-next-line default-case
    switch (name) {
      case 'Streaming':
        return (
          <svg x="0px" y="0px" width="16px" height="14.9px" viewBox="0 0 16 14.9">
            <polygon fill={fill} points="16,5.6 10.6,4.7 8,0 5.4,4.7 0,5.7 3.8,9.6 3.1,14.9 8,12.6 13,14.8 12.3,9.5 " />
          </svg>
        );
      case 'Galerie':
        return (
          <i className="icon icon-picture"></i>
        );
      case 'ToDo':
        return (
          <svg x="0px" y="0px" width="16px" height="13.5px" viewBox="0 0 16 13.5">
            <path
              fill={fill}
              d="M16,4.2C16,1.9,14.1,0,11.7,0c-1.4,0-2.6,0.6-3.4,1.6c0,0,0,0,0,0C8.3,1.7,8.1,1.8,8,1.8
            c-0.2,0-0.3-0.1-0.4-0.2c0,0,0,0,0,0C6.8,0.6,5.6,0,4.3,0C1.9,0,0,1.9,0,4.2c0,0,0,0.1,0,0.1l0,0c0,0,0,0.1,0,0.3
            C0,4.8,0.1,5,0.1,5.2c0.3,1.4,1.4,4.1,5.1,6.5c2.1,1.4,2.6,1.8,2.8,1.8c0,0,0,0,0,0c0,0,0,0,0,0c0.1,0,0.7-0.4,2.8-1.8
            c3.5-2.3,4.6-4.8,5-6.3C15.9,5.1,16,4.8,16,4.5C16,4.3,16,4.2,16,4.2L16,4.2C16,4.2,16,4.2,16,4.2z"
            />
          </svg>
        );
      case 'Doc Reader':
        return (
          <i className="icon icon-book-open"></i>
        );
    }
  }
}