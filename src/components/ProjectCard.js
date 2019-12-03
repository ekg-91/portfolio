import React from 'react';

import Card from 'react-bootstrap/Card';

function ProjectCard (props) {
  return (
    <Card>
      <Card.Img variant='top' src={props.item.imgSrc} />
      <Card.Body>
        <Card.Title>{props.item.title}</Card.Title>
        <Card.Text>{props.item.description}</Card.Text>
        <Card.Link href={props.item.gitLink}>GitHub</Card.Link>
        {props.item.demoLink && <Card.Link href={props.item.demoLink}>Live Demo</Card.Link>}
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
