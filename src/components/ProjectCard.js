import React from 'react';
import PropTypes from 'prop-types';

export default function ProjectCard(props) {
  return <div className="project-card">{props.title}</div>;
}

ProjectCard.propTypes = {
  title: PropTypes.string,
};
