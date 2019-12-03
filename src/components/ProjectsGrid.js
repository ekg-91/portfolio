import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CardDeck from 'react-bootstrap/CardDeck';

import ProjectCard from './ProjectCard';

class ProjectsGrid extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: 'Project 1',
          description: 'This is sample text',
          imgSrc: '',
          gitLink: '',
          demoLink: '',
          selected: false
        },
        {
          id: 1,
          title: 'Project 2',
          description: 'This is a fake description',
          imgSrc: '',
          gitLink: '',
          demoLink: '',
          selected: false
        },
        {
          id: 2,
          title: 'Project 3',
          description: 'This will say something about this project',
          imgSrc: '',
          gitLink: '',
          selected: false
        },
        {
          id: 3,
          title: 'Project 4',
          description: 'This is a fake description',
          imgSrc: '',
          gitLink: '',
          demoLink: '',
          selected: false
        },
        {
          id: 4,
          title: 'Project 5',
          description: 'This is a fake description',
          imgSrc: '',
          gitLink: '',
          demoLink: '',
          selected: false
        },
        {
          id: 5,
          title: 'Project 6',
          description: 'This is a fake description',
          imgSrc: '',
          gitLink: '',
          demoLink: '',
          selected: false
        },
        {
          id: 6,
          title: 'Project 7',
          description: 'This is a fake description',
          imgSrc: '',
          gitLink: '',
          demoLink: '',
          selected: false
        },
        {
          id: 7,
          title: 'Project 8',
          description: 'This is a fake description',
          imgSrc: '',
          gitLink: '',
          demoLink: '',
          selected: false
        },
        {
          id: 8,
          title: 'Project 9',
          description: 'This is a fake description',
          imgSrc: '',
          gitLink: '',
          demoLink: '',
          selected: false
        },
      ]
    };
  }

  makeItems = (items) => { 
    let chunk = () => {
      let chunked = [];
      while(items.length) {
        chunked.push(items.splice(0, 3))
      }
      return chunked
    };

    let gridItems = chunk();

    for(let i = 0; i < gridItems.length; i++) {
      let row = [...gridItems[i]];
      console.log(row);
      
      // return row.map(item => {<ProjectCard item={item} title={item.title} />});
    }
    
    // return items.map(item => {
    //   return <ProjectCard item={item} title={item.title} />
    // });
  }

  render () {
    return (
      <Container>
        <CardDeck>
          <Row>
            {this.makeItems(this.state.items)}
          </Row>
        </CardDeck>
      </Container>
    );
  }
}

export default ProjectsGrid;
