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
    //ACTIVE BUTTONS

    e.target.classList.toggle('active');
    const id = e.target.id;
    const secondaryID = e.target.dataset.secondaryid;
    const secondaryButton = document.querySelector(
      "button[data-secondaryid='" + this.state.secondaryID + "']"
    );
    const parentClass = e.target.parentNode.parentNode.className;

    //GALLERY DISPLAY
    if (parentClass === 'secondaryNav') {
      console.log(this.state.secondaryID);
      this.setState({
        secondaryID,
      });
      if (this.state.secondaryID !== undefined) {
        secondaryButton.classList.toggle('active');
      }
    } else if (parentClass === 'mainNav') {
      console.log(this.state.secondaryID);
      document.getElementById(this.state.activeID).classList.remove('active');
      if (this.state.secondaryID !== undefined) {
        secondaryButton.classList.toggle('active');
      }
      this.setState({
        activeID: id,
        secondaryID: null,
      });
    }
  }
  componentDidMount() {
    document.getElementById(this.state.activeID).classList.toggle('active');
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
