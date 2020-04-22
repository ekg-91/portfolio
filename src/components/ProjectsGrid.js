import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CardDeck from 'react-bootstrap/CardDeck';
import ProjectCard from './ProjectCard';

import ReactLogo from '../assets/images/react-logo.png';

class ProjectsGrid extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: 'Project 1',
          description: 'This is sample text',
          imgSrc: ReactLogo,
          gitLink: '',
          demoLink: '/',
          selected: false
        },
        {
          id: 1,
          title: 'Project 2',
          description: 'This is a fake description',
          imgSrc: ReactLogo,
          gitLink: '',
          demoLink: '/',
          selected: false
        },
        {
          id: 2,
          title: 'Project 3',
          description: 'This will say something about this project',
          imgSrc: ReactLogo,
          gitLink: '',
          selected: false
        },
        {
          id: 3,
          title: 'Project 4',
          description: 'This is a fake description',
          imgSrc: ReactLogo,
          gitLink: '',
          demoLink: '',
          selected: false
        },
        {
          id: 4,
          title: 'Project 5',
          description: 'This is a fake description',
          imgSrc: ReactLogo,
          gitLink: '',
          demoLink: '',
          selected: false
        },
        {
          id: 5,
          title: 'Project 6',
          description: 'This is a fake description',
          imgSrc: ReactLogo,
          gitLink: '',
          demoLink: '',
          selected: false
        },
        {
          id: 6,
          title: 'Project 7',
          description: 'This is a fake description',
          imgSrc: ReactLogo,
          gitLink: '',
          demoLink: '',
          selected: false
        },
        {
          id: 7,
          title: 'Project 8',
          description: 'This is a fake description',
          imgSrc: ReactLogo,
          gitLink: '',
          demoLink: '',
          selected: false
        },
        {
          id: 8,
          title: 'Project 9',
          description: 'This is a fake description',
          imgSrc: ReactLogo,
          gitLink: '',
          demoLink: '',
          selected: false
        }
      ]
    };
  }

  chunk (items) {
    const chunked = [];

    while (items.length) {
      chunked.push(items.splice(0, 3));
    }

    return chunked;
  }

  makeItems (items) {
    const gridItems = this.chunk(items);
    const rows = [];

    for (let i = 0; i < gridItems.length; i++) {
      rows.push([...gridItems[i]]);
    }

    let incr = 0;
    const mappedRows = rows.map(row => {
      incr++;
      return <Row key={incr}>
        {row.map(item => <ProjectCard item={item} title={item.title} key={item.id} />)}
      </Row>;
    });

    return mappedRows;
  }

  render () {
    return (
      <Container>
        <CardDeck>
          {this.makeItems(this.state.items)}
        </CardDeck>
      </Container>
    );
  }
}

export default ProjectsGrid;
