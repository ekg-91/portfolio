import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CardDeck from 'react-bootstrap/CardDeck';
import ProjectCard from './ProjectCard';

import ReactLogo from '../assets/images/react-logo.png';

export default function ProjectsGrid () {
  const [state] = useState({
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
      }
    ]
  });

  const chunk = (items) => {
    const chunked = [];

    while (items.length) {
      chunked.push(items.splice(0, 3));
    }

    return chunked;
  }

  const makeItems = (items) => {
    const gridItems = chunk(items);
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

  return (
    <Container>
      <CardDeck>
        {makeItems(state.items)}
      </CardDeck>
    </Container>
  );
}
