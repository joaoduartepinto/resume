import React from 'react';

import Layout from '../components/Layout';

import downloadFile from '/static/resume/resume.pdf'

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';

const IndexPage = () => (
    <Layout>
        <Sidebar/>
        <div className="container-fluid p-0">
            <section
                className="resume-section p-3 p-lg-5 d-flex align-items-center"
                id="about"
            >
                <div className="w-100">
                    <h1 className="mb-0">
                        {config.firstName}
                        <span className="text-primary">{config.lastName}</span>
                    </h1>
                    <div className="subheading mb-5">
                        {config.address} · {config.phone} · <a href={`mailto:${config.email}`}>{config.email}</a>
                    </div>
                    <p className="lead mb-5">
                        Hi! <span role='img' aria-label='Hi'>👋</span>
                    </p>

                    <p className="lead mb-5">
                        I am a <strong>Software Development Student</strong>, who loves what he is learning and wants to
                        develop his
                        knowledge!

                        I'm currently finishing a postgraduate degree in software development at Instituto Superior
                        de Engenharia do Porto.
                    </p>
                    <div className="social-icons">
                        {config.socialLinks.map(social => {
                            const {icon, url} = social;
                            return (
                                <a key={url} href={url}>
                                    <i className={`fab ${icon}`}></i>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </section>

            <hr className="m-0"/>

            <section
                className="resume-section p-3 p-lg-5 d-flex align-items-center"
                id="path">
                <div className="w-100">
                    <h2 className="mb-5">Path</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel commodo dui. Sed dictum mollis nisi ac auctor. Sed posuere volutpat enim a auctor. Sed convallis justo at tellus laoreet porta. Quisque cursus purus quam, vel rhoncus erat finibus vitae. Fusce eget porta felis, id mattis nunc. Sed id luctus massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec condimentum efficitur volutpat. In interdum, risus a sollicitudin interdum, nibh ex finibus libero, sed laoreet mi nulla ac odio. Aenean vitae odio facilisis mauris porta ullamcorper. Nulla nec sapien hendrerit, imperdiet dui quis, posuere ipsum. Maecenas.
                    </p>

                    <br/>

                    <div className ="resume-item">
                    <div className="resume-content float-left" style={{paddingRight : '40px'}}>
                        <h4 className="mb-0">Education</h4>
                        <br/>
                        <h5 className="mb-0">Instituto Politécnico de Castelo Branco</h5>
                        <div className="subheading mb-3">Degree in Physiotherapy</div>

                        <h5 className="mb-0">Instituto Politécnico do Porto</h5>
                        <div className="subheading mb-3">Master's degree in Physiotherapy</div>
                    </div>

                    <div className="resume-content">
                        <h4 className="mb-0">Work Experience</h4>
                        <br/>
                        <h5 className="mb-0">Sporting Clube de Braga</h5>
                        <div className="subheading mb-3">Physiotherapist</div>

                        <h5 className="mb-0">Gil Vicente FC</h5>
                        <div className="subheading mb-3">Physiotherapist</div>
                    </div>

                    </div>

                </div>
            </section>

            {/*
      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Senior Web Developer</h3>
              <div className="subheading mb-3">Intelitec Solutions</div>
              <p>
                Bring to the table win-win survival strategies to ensure
                proactive domination. At the end of the day, going forward, a
                new normal that has evolved from generation X is on the runway
                heading towards a streamlined cloud solution. User generated
                content in real-time will have multiple touchpoints for
                offshoring.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">March 2013 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Web Developer</h3>
              <div className="subheading mb-3">Intelitec Solutions</div>
              <p>
                Capitalize on low hanging fruit to identify a ballpark value
                added activity to beta test. Override the digital divide with
                additional clickthroughs from DevOps. Nanotechnology immersion
                along the information highway will close the loop on focusing
                solely on the bottom line.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">December 2011 - March 2013</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Junior Web Designer</h3>
              <div className="subheading mb-3">Shout! Media Productions</div>
              <p>
                Podcasting operational change management inside of workflows to
                establish a framework. Taking seamless key performance
                indicators offline to maximise the long tail. Keeping your eye
                on the ball while performing a deep dive on the start-up
                mentality to derive convergence on cross-platform integration.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">July 2010 - December 2011</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Web Design Intern</h3>
              <div className="subheading mb-3">Shout! Media Productions</div>
              <p>
                Collaboratively administrate empowered markets via plug-and-play
                networks. Dynamically procrastinate B2C users after installed
                base benefits. Dramatically visualize customer directed
                convergence without revolutionary ROI.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2008 - June 2010</span>
            </div>
          </div>
        </div>
      </section>*/}

            <hr className="m-0"/>

            <section
                className="resume-section p-3 p-lg-5 d-flex align-items-center"
                id="education"
            >
                <div className="w-100">
                    <h2 className="mb-5">Education</h2>

                    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="resume-content">
                            <h3 className="mb-0">Instituto Superior de Engenharia do Porto</h3>
                            <div className="subheading mb-3">Postgraduate in Software Development · switch( )</div>
                            <div>SWitCH( ) is a programme for acquiring competencies and skills in IT. SWitCH( ) applies
                                iterative and incremental/agile development processes to provide a solid comprehension
                                and application of software development skills.
                            </div>
                            <p></p>
                            <div className="w-100">
                                <h3 className="subheading mb-3">Technologies</h3>
                                <ul className="fa-ul mb-0">
                                    <li>
                                        <i className="fa-li fa fa-check text-success"></i>
                                        Java
                                    </li>
                                    <li>
                                        <i className="fa-li fa fa-check text-success"></i>
                                        Spring
                                    </li>
                                    <li>
                                        <i className="fa-li fa fa-check text-success"></i>
                                        Javascript
                                    </li>
                                    <li>
                                        <i className="fa-li fa fa-check text-success"></i>
                                        TypeScript
                                    </li>
                                    <li>
                                        <i className="fa-li fa fa-check text-success"></i>
                                        React.js
                                    </li>
                                    <li>
                                        <i className="fa-li fa fa-check text-success"></i>
                                        JUnit
                                    </li>
                                    <li>
                                        <i className="fa-li fa fa-check text-success"></i>
                                        UML
                                    </li>
                                    <li>
                                        <i className="fa-li fa fa-check text-success"></i>
                                        Software design patterns and architectural patterns
                                    </li>
                                    <li>
                                        <i className="fa-li fa fa-check text-success"></i>
                                        DevOps Tools like Git, Jenkins, Sonarqube &amp; Docker
                                    </li>
                                    <li>
                                        <i className="fa-li fa fa-check text-success"></i>
                                        SQL
                                    </li>
                                    <li>
                                        <i className="fa-li fa fa-check text-success"></i>
                                        Oracle DBMS
                                    </li>
                                    <li>
                                        <i className="fa-li fa fa-check text-success"></i>
                                        Linux
                                    </li>
                                    <li>
                                        <i className="fa-li fa fa-check text-success"></i>
                                        Scrum
                                    </li>
                                </ul>
                            </div>
                            {/*<p>GPA: 3.23</p>*/}
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary">September 2020 - Present</span>
                        </div>
                    </div>

                </div>
            </section>

            <hr className="m-0"/>

            <section
                className="resume-section p-3 p-lg-5 d-flex align-items-center"
                id="development"
            >
                <div className="w-100">
                    <h2 className="mb-5">Development</h2>

                    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="resume-content">
                            <h3 className="mb-0">SPRING FRAMEWORK FOR BEGINNERS WITH SPRING BOOT</h3>
                            <div className="subheading mb-3">Navin Reddy - Udemy Course</div>
                            <div>This course offers hands-on experience building Spring Framework applications using
                                Spring Boot.
                            </div>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary">2021</span>
                        </div>
                    </div>

                    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="resume-content">
                            <h3 className="mb-0">JUNIT 5, MOCKITO, POWERMOCK, TDD, BDD & ATTD</h3>
                            <div className="subheading mb-3">Andrii Piatakha - Udemy Course</div>
                            <div>Unit testing with test driven development, behavior-driven development and acceptance
                                test driven development.
                            </div>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary">2021</span>
                        </div>
                    </div>

                    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="resume-content">
                            <h3 className="mb-0">COMPLETE MODERN JAVASCRIPT FIREBASE BOOTCAMP THE BEGINNER</h3>
                            <div className="subheading mb-3">Kim Chen - Udemy Course</div>
                            <div>Complete Modern JavaScript BootCamp from the beginning starts from scratch and builds
                                up your knowledge of the JavaScript language.
                            </div>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary">2021</span>
                        </div>
                    </div>

                    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="resume-content">
                            <h3 className="mb-0">JAVA COLLECTIONS FRAMEWORK + GENERICS, LAMBDAS & STREAM API</h3>
                            <div className="subheading mb-3">Learn IT University - Udemy Course</div>
                            <div>This course offered a deep view of Java Collections Framework. As a extra, generics,
                                lambda funciotions and Stream API were also addressed.
                            </div>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary">2021</span>
                        </div>
                    </div>

                    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="resume-content">
                            <h3 className="mb-0">Build Pro Websites From Scratch with HTLM, CSS & SASS</h3>
                            <div className="subheading mb-3">Happy Coding For Everyone - Udemy Course</div>
                            <div>HTML, CSS & SASS with real world project examples from scratch.</div>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary">2021</span>
                        </div>
                    </div>

                    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="resume-content">
                            <h3 className="mb-0">GIT FROM BASICS TO ADVANCED: PRACTICAL GUIDE FOR DEVELOPERS</h3>
                            <div className="subheading mb-3">Learn IT University - Udemy Course</div>
                            <div>How to track changes with help of Git, basics to advanced operations.</div>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary">2020</span>
                        </div>
                    </div>

                    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="resume-content">
                            <h3 className="mb-0">SQL Course</h3>
                            <div className="subheading mb-3">SOLO LEARN</div>
                            <div>Basic SQL.</div>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary">2020</span>
                        </div>
                    </div>

                    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="resume-content">
                            <h3 className="mb-0">Python para Data Science e Machine Learning</h3>
                            <div className="subheading mb-3">Pieran Data Inc. - Udemy Course</div>
                            <div>Python for data visualization, analysis and Machine Learning</div>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary">2020</span>
                        </div>
                    </div>

                </div>
            </section>

            <hr className="m-0"/>

            <section
                className="resume-section p-3 p-lg-5 d-flex align-items-center"
                id="skills"
            >
                <div className="w-100">
                    <h2 className="mb-5">Skills</h2>

                    <div className="subheading mb-3">
                        Programming Languages &amp; Tools
                    </div>
                    <ul className="list-inline dev-icons">
                        <li className="list-inline-item">
                            <i className="fab fa-java"></i>
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-js-square"></i>
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-git-alt"></i>
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-github"></i>
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-bitbucket"></i>
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-trello"></i>
                        </li>
                    </ul>

                    <div className="subheading mb-3">Plus</div>
                    <ul className="fa-ul mb-0">
                        <li>
                            <i className="fa-li fa fa-check"></i>
                            Basic Java Spring Framework
                        </li>
                        <li>
                            <i className="fa-li fa fa-check"></i>
                            Basic SQL
                        </li>
                        <li>
                            <i className="fa-li fa fa-check"></i>
                            Object-Oriented Programing
                        </li>
                        <li>
                            <i className="fa-li fa fa-check"></i>
                            Agile Development &amp; Scrum
                        </li>

                    </ul>
                </div>
            </section>

            <hr className="m-0"/>

            <section
                className="resume-section p-3 p-lg-5 d-flex align-items-center"
                id="interests">
                <div className="w-100">
                    <h2 className="mb-5">Interests</h2>
                    <p>
                        Having spent my youth in a peaceful village at the foothill of <i>Serra da Estrela</i> mountain,
                        I love to walk outdoors, explore nature, breathe fresh air and bathe in the icy waters
                        of the streams that come out of the mountains.
                    </p>
                    <p>
                        At home, one of my favorite hobbies is cooking. From traditional Portuguese food, to
                        pizzas and even sushi.
                    </p>
                    <p>
                        I also love animals, I have a cat, called Leia, and a turtle, called Olaf.
                        <span role='img' aria-label='cat'>🐈</span>
                        <span role='img' aria-label='turtle'>🐢</span>
                    </p>

                </div>
            </section>

            <hr className="m-0"/>

            <section
                className="resume-section p-3 p-lg-5 d-flex align-items-center"
                id="resume"
            >
                <div className="w-100">
                    <h2 className="mb-5">Resume</h2>
                    <p>
                        <h3>You can grab my resume <a href={downloadFile} download='resume'>here</a>!
                            <span role='img' aria-label='manuscript'>📜</span></h3>
                    </p>
                </div>
            </section>

            <hr className="m-0"/>


            {/*<section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Awards &amp; Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Google Analytics Certified Developer
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Mobile Web Specialist - Google Certification
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
              Place - University of Colorado Boulder - Emerging Tech Competition
              2009
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
              Place - University of Colorado Boulder - Adobe Creative Jam 2008
              (UI Design Category)
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>2<sup>nd</sup>
              Place - University of Colorado Boulder - Emerging Tech Competition
              2008
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
              Place - James Buchanan High School - Hackathon 2006
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>3<sup>rd</sup>
              Place - James Buchanan High School - Hackathon 2005
            </li>
          </ul>
        </div>
      </section>*/}
        </div>
    </Layout>
);

export default IndexPage;
