import React from 'react';

export default function About(props) {
  return (
    <div className="about">
      <div className="about__heading">
        <h1 className="heading-primary--sub">About Me</h1>
      </div>

      <div className="about__bio">
        <div className="row">
          <div className="col-1-of-3">
            <div className="bio__img" />
          </div>
          <div className="col-2-of-3">
            <div className="bio__content">
              <p className="paragraph">
                Hi there, I&apos;m Elliot Gallagher, a self-taught software
                engineer, web architect, and UI/UX designer. I pride myself on
                my ability to create engaging and highly performant digital
                products, with white-glove service and pixel-perfect attention
                to detail no matter the clientele.
              </p>

              <p className="paragraph">
                My academic background is in music, and it was through music
                that I connected with Michael McDade, a brilliant engineer and a
                dear friend, who encouraged me to teach myself how to code. With
                his guidance, I learned the basics of front-end development
                through online tutorials on FreeCodeCamp and YouTube, as well as
                books like the YDKJS series by Kyle Simpson and xxx.
              </p>

              <p className="paragraph">
                I found the modular and compartmentalized nature of a React and
                Redux tech stack to be very intuitive. I&apos;m always trying to
                push the boundaries of my knowledge, and I quickly found myself
                pushing even further by learning how to build out middleware
                with GraphQL, servers with Node and Express, and databases with
                PostgreSQL and MongoDB. I&apos;ve even begun learning to design
                and wireframe sites using tools like Photoshop and Illustrator.
              </p>

              <p className="paragraph">
                I continue to strive towards mastering every aspect of creating
                incredible web products, from business needs and design, to
                testing and development, to deployment and optimization. Check
                the Projects section to see some examples of my work, or see the
                Contact page if you want to get in touch about a project.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="about__cv">
        <div className="cv__work">
          <div className="cv__work-heading">
            <h2 className="heading-primary--sub">Resumé</h2>
          </div>

          <div className="cv__work-group">
            <div className="row">
              <div className="col-1-of-2">
                <div className="cv__work-group--label">
                  <div className="cv__work-group--title">CRATES MEDIA</div>
                  <div className="cv__work-group--subtitle">
                    Full Stack Web Architect & Account Manager
                    <br />
                    2019 - Present
                  </div>
                </div>
              </div>

              <div className="col-1-of-2">
                <div className="cv__work-group--details">
                  <p className="paragraph">
                    Crates Media is an independent software and digital media
                    agency focusing on UI/UX development in React.js.
                    Technologies used include React, Redux, Node.js, GraphQL,
                    and cloud platform solutions on AWS and Heroku. This
                    included development using JavaScript, CSS3, and HTML5, as
                    well as content creation and management. Duties also
                    included writing project proposals and acting as the main
                    point-of-contact for clients.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="cv__work-group">
            <div className="row">
              <div className="col-1-of-2">
                <div className="cv__work-group--label">
                  <div className="cv__work-group--title">ATHAMES.COM</div>
                  <div className="cv__work-group--subtitle">
                    Full Stack Developer
                    <br />
                    2018 - 2019
                  </div>
                </div>
              </div>

              <div className="col-1-of-2">
                <div className="cv__work-group--details">
                  <p className="paragraph">
                    Athames.com is an online storefront. Duties were to help
                    rebuild the site’s front-end architecture in React.js with
                    Redux, as well as ES6 JavaScript, jQuery, and SCSS for
                    styling. Elliot designed a GraphQL middleware to interface
                    with a PostgreSQL database on the back end. He was also
                    responsible for creating comprehensive test coverage, done
                    with Cypress.io and Jest.
                  </p>
                </div>
              </div>
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
