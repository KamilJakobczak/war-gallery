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

    const id = e.target.id;
    const secondaryID = e.target.dataset.secondaryid;
    const secondaryButton = document.querySelector(
      "button[data-secondaryid='" + this.state.secondaryID + "']"
    );
    const parentClass = e.target.parentNode.parentNode.className;

    //GALLERY DISPLAY
    if (parentClass === 'secondaryNav') {
      if (secondaryID === this.state.secondaryID) {
      } else if (secondaryID !== this.state.secondaryID) {
        if (this.state.secondaryID !== undefined) {
          e.target.classList.add('active');
          secondaryButton.classList.remove('active');
          this.setState({
            secondaryID,
          });
        } else if (this.state.secondaryID === undefined) {
          e.target.classList.add('active');
          this.setState({
            secondaryID,
          });
        }
      }
    } else if (parentClass === 'mainNav') {
      if (id === this.state.activeID) {
        this.setState({
          secondaryID: undefined,
        });
      } else if (id !== this.state.activeID) {
        e.target.classList.add('active');
        document.getElementById(this.state.activeID).classList.remove('active');
        secondaryButton !== null && secondaryButton.classList.remove('active');
        this.setState({
          activeID: id,
          secondaryID: undefined,
        });
      }
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
