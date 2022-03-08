import React, { Component } from 'react';
import Nav from './Nav';
import Media from './Media';
import categories from '../data/categories.json';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'memes',
    };
  }
  handleNavClick(e) {
    // e.preventDefault();
    const id = e.target.id;

    this.setState({
      activeTab: categories[id],
    });
  }
  render() {
    return (
      <main className='wrapper'>
        <Nav handleNavClick={this.handleNavClick.bind(this)} />
        <div className='gallery'>
          <Media activeTab={this.state.activeTab} />
        </div>
      </main>
    );
  }
}

export default Gallery;
