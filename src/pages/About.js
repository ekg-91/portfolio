import React from 'react';

export default function About(props) {
  return (
    <div className="about">
      <div className="about__heading">
        <h1 className="heading-primary--sub">About Me</h1>
      </div>

      <div className="about__bio">
        <div className="row">
          <div className="bio__img col-1-of-3" />
          <div className="bio__content col-2-of-3">
            <p className="paragraph">
              Hi I&apos;m Elliot. This is a sentence about me, but I&apos;m
              going to add some filler content as well.
            </p>

            <p className="paragraph">
              My money&apos;s in that office, right? If she start giving me some
              bullshit about it ain&apos;t there, and we got to go someplace
              else and get it, I&apos;m gonna shoot you in the head then and
              there. Then I&apos;m gonna shoot that bitch in the kneecaps, find
              out where my goddamn money is. She gonna tell me too. Hey, look at
              me when I&apos;m talking to you, motherfucker. You listen: we go
              in there, and that nigga Winston or anybody else is in there, you
              the first motherfucker to get shot. You understand?
            </p>

            <p className="paragraph">
              Do you see any Teletubbies in here? Do you see a slender plastic
              tag clipped to my shirt with my name printed on it? Do you see a
              little Asian child with a blank expression on his face sitting
              outside on a mechanical helicopter that shakes when you put
              quarters in it? No? Well, that&apos;s what you see at a toy store.
              And you must think you&apos;re in a toy store, because you&apos;re
              here shopping for an infant named Jeb.
            </p>

            <p className="paragraph">
              Well, the way they make shows is, they make one show. That
              show&apos;s called a pilot. Then they show that show to the people
              who make shows, and on the strength of that one show they decide
              if they&apos;re going to make more shows. Some pilots get picked
              and become television programs. Some don&apos;t, become nothing.
              She starred in one of the ones that became nothing.
            </p>
          </div>
        </div>
      </div>

      <div className="about__cv">
        <div className="cv__work">
          <div className="cv__work-heading">
            <h2 className="heading-primary--sub">Resumé</h2>
          </div>

          <div className="cv__work-group row">
            <div className="cv__work-group--label col-1-of-2">
              <div className="cv__work-group--title">CRATES MEDIA</div>
              <div className="cv__work-group--subtitle">
                Full Stack Web Architect & Account Manager
                <br />
                2019 - Present
              </div>
            </div>

            <div className="cv__work-group--details col-1-of-2">
              <p className="paragraph">
                Crates Media is an independent software and digital media agency
                focusing on UI/UX development in React.js. Technologies used
                include React, Redux, Node.js, GraphQL, and cloud platform
                solutions on AWS and Heroku. This included development using
                JavaScript, CSS3, and HTML5, as well as content creation and
                management. Duties also included writing project proposals and
                acting as the main point-of-contact for clients.
              </p>
            </div>
          </div>

          <div className="cv__work-group row">
            <div className="cv__work-group--label col-1-of-2">
              <div className="cv__work-group--title">ATHAMES.COM</div>
              <div className="cv__work-group--subtitle">
                Full Stack Developer
                <br />
                2018 - 2019
              </div>
            </div>

            <div className="cv__work-group--details col-1-of-2">
              <p className="paragraph">
                Athames.com is an online storefront. Duties were to help rebuild
                the site’s front-end architecture in React.js with Redux, as
                well as ES6 JavaScript, jQuery, and SCSS for styling. Elliot
                designed a GraphQL middleware to interface with a PostgreSQL
                database on the back end. He was also responsible for creating
                comprehensive test coverage, done with Cypress.io and Jest.
              </p>
            </div>
          </div>
        </div>

        <div className="cv__skills">
          <div className="cv__skills-heading">
            <h3 className="heading-tertiary">TECHNOLOGIES</h3>
          </div>

          <div className="cv__skills-tech">
            <ul>
              <li>JavaScript(ES6)</li>
              <li>HTML5</li>
              <li>CSS3 Flexbox & Grid</li>
              <li>React.js</li>
              <li>Redux</li>
              <li>jQuery</li>
              <li>Node.js</li>
              <li>GraphQL</li>
              <li>WordPress/PHP</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>SCSS/SASS</li>
              <li>Heroku</li>
              <li>AWS Cloud</li>
              <li>Cypress.io</li>
              <li>Jest</li>
            </ul>
          </div>

          <div className="cv__skills-heading">
            <h3 className="heading-tertiary">SKILLS & COMPETENCIES</h3>
          </div>

          <div className="cv__skills-comp">
            <ul className="row">
              <div className="col-1-of-2">
                <li>Skilled in Scrum and Agile workflow methodology</li>
                <li>Skilled with Git, GitHub, and Gitflow</li>
                <li>Skilled in Google AdWords, Analytics, and Tag Manager</li>
              </div>
              <div className="col-1-of-2">
                <li>Skilled worker alone, pair-programming, or in a team</li>
                <li>
                  Fast learner, good at adapting to new roles and technologies
                </li>
                <li>Works well on-site or remotely</li>
              </div>
            </ul>
          </div>
        </div>

        <div className="cv__school">
          <div className="cv__school-heading">
            <h3 className="heading-tertiary">EDUCATION</h3>
          </div>

          <div className="row">
            <div className="cv__school-item col-1-of-2">
              <div className="school-title">Stony Brook University</div>
              <div className="school-desc">
                Stony Brook, NY
                <br />
                2009-2010
              </div>
            </div>
            <div className="cv__school-item col-1-of-2">
              <div className="school-title">Cape Cod Community College</div>
              <div className="school-desc">
                Barnstable, MA
                <br />
                2010-2014
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
