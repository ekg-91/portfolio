import React from 'react';

export default function Hero() {
  const heroItems = [
    {
      title: 'Contact Me',
      subtitle: "Let's get connected",
      link: '/contact',
    },
    {
      title: 'About Me',
      subtitle: 'Bio & Resumé',
      link: '/about',
    },
    {
      title: 'More Projects...',
      subtitle: "See what else I've built",
      link: '/projects',
    },
  ];

  return (
    <div className="hero row">
      {heroItems.map((item) => (
        <div className={'col-1-of-' + heroItems.length} key={item.title}>
          <a className="hero__card" href={item.link}>
            <div className="hero__overlay">
              <div className={'hero__card-' + heroItems.indexOf(item)} />
              <h2 className="hero__title">{item.title}</h2>
            </div>
            <h3 className="hero__subtitle">{item.subtitle}</h3>
          </a>
        </div>
      ))}
    </div>
  );
}
