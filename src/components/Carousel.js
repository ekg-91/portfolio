import React from 'react';

import Card from './Card';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import CratesLogo from '../assets/images/Crates_Media_Logo.png';
import AthamesLogo from '../assets/images/Athames_Banner.png';
import Placeholder from '../assets/images/yikes.png';

class Carousel extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: 'Crates Media',
          subTitle: 'Independent Digital Services Agency',
          imgSrc: CratesLogo,
          link: 'http://crates.media',
          selected: false
        },
        {
          id: 1,
          title: 'About Me',
          subTitle: 'A bit more about who I am',
          imgSrc: AthamesLogo,
          link: '/about',
          selected: false
        },
        {
          id: 2,
          title: 'More Projects...',
          subTitle: 'See what else I\'ve built',
          imgSrc: Placeholder,
          link: 'https://github.com/ekg-91',
          selected: false
        }
      ]
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach(item => {
      if(item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items
    });
  }

  makeItems = (items) => {
    return items.map(item => {
      return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
    });
  }

  render () {
    return (
      <Container fluid={true}>
        <Row className='justify-content-around'>
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
