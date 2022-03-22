import React, { Component } from 'react';
import Nav from '../Nav';
import Media from './Media';
import categories from '../../data/categories.json';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeID: 0,
      secondaryID: undefined,
    };
    this.buttons = [
      { main: 'screenshots', secondary: ['news', 'other'] },
      { main: 'photos', secondary: ['animals', 'army', 'buildings', 'people'] },
      { main: 'videos', secondary: [] },
      { main: 'memes', secondary: ['polish', 'english'] },
    ];
  }

  handleNavClick(e) {
    // e.preventDefault();
    const id = e.target.id;
    const parentClass = e.target.parentNode.parentNode.className;
    if (parentClass === 'secondaryNav') {
      this.setState({
        secondaryID: id,
      });
    } else if (parentClass === 'mainNav') {
      this.setState({
        activeID: id,
        secondaryID: undefined,
      });
    }
    console.log(this.state);
  }
  render() {
    return (
      <main className='wrapper'>
        <Nav
          handleNavClick={this.handleNavClick.bind(this)}
          activeID={this.state.activeID}
          buttons={this.buttons}
        />
        <div className='gallery'>
          <Media
            category={categories[this.state.activeID]}
            subcategory={
              this.buttons[this.state.activeID].secondary[
                this.state.secondaryID
              ]
            }
          />
        </div>
      </main>
    );
  }
}

export default Gallery;
