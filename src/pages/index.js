import React from 'react';

import Layout from '../components/Layout';

import downloadFile from '/static/resume/resume.pdf'

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
                        I'm a <strong>Software Engineer</strong>, with experience in software engineering in test.

                        I'm a lifelong learner, passionate about exploring and adopting new technologies to
                        enhance my skills and knowledge in the field of software development.
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
                    <h2 className="mb-4">Path</h2>

                    <h3 className="mb-3">What brought me here</h3>
                    <p className="text-justify">
                        I'm <strong>M.Sc. in Physiotherapy</strong> from Escola Superior de Saúde do Porto - IPP, degree
                        obtained in
                        2020. During my academic and professional career as a Physiotherapist, I was part of a <i>Primeira
                        Liga</i> team, I was coordinator of the Department of Youth Physiotherapy, I worked in a private
                        office, I did several presentations and published a <a
                        href="https://doi.org/10.23911/FIFA11plus_2021_mar">scientific article</a>.
                    </p>

                    <h3 className="mb-3">The change</h3>
                    <p className="text-justify">
                        The change to the IT area arose from my interest, and from my personal and
                        professional goal to work in <strong>Software Development</strong>. The interest
                        appeared over the years, in which I personally carried out some projects.

                        So I decided it was time to make a big change in my life, completely leave
                        Physiotherapy and enter a <strong>postgraduate course in Software
                        Development</strong>,
                        chasing my dream!
                    </p>

                    <br/>
                    <br/>
                    <div className="resume-item">
                        <div className="resume-content float-left" style={{paddingRight: '40px'}}>
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

            <section
                className="resume-section p-3 p-lg-5 d-flex justify-content-center"
                id="experience"
            >
                <div className="w-100">
                    <h2 className="mb-5">Experience</h2>

                    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="resume-content">
                            <h3 className="mb-0">Software Engineer in Test</h3>
                            <h3 className="mb-0">Associate Software Engineer in Test</h3>
                            <div className="subheading mb-3">Feedzai</div>
                            <p className="text-justify">
                                I have played a vital role in enhancing the quality of our software.
                                My focus has been on creating a seamless developer experience by designing and
                                implementing efficient
                                tools and processes that enable faster and more effective software development resulting
                                in increased
                                productivity and faster time-to-market for new features.
                                <br/>
                                My responsibilities included test automation, which involves designing and maintaining
                                automated
                                tests to ensure that our software meets the highest standards of quality. I've used
                                automated
                                testing frameworks such as Cypress and developed scripts to automate testing processes.
                                I've also been involved in DevOps practices, where I've designed and developed
                                scripts
                                and tools to automate deployment and testing processes.
                                <br/>
                                In addition to my contributions to software testing, I've also played a role in
                                backend development
                                in which I've used Python (Django), Postgresql, and Liquibase to design and
                                develop backend systems.

                            </p>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary">May 2023 - Present</span>
                            <br/>
                            <span className="text-primary">September 2021 - April 2023</span>
                        </div>
                    </div>

                    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="resume-content">
                            <h3 className="mb-0">Software Engineer Intern</h3>
                            <div className="subheading mb-3">Feedzai</div>
                            <p className="text-justify">
                                Jenkins builds as Code - My primary responsibility was to analyze the existing
                                Continuous Integration (CI) pipelines and identify ways to improve their maintenance and
                                scalability.
                                To accomplish this, I collaborated with the senior developers and DevOps engineers to
                                understand the
                                current CI processes and identify areas for improvement. The result of this project was
                                a proof of concept in how could we move to pipelines as code. </p>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary">July 2021 - August 2021</span>
                        </div>
                    </div>

                </div>
            </section>

            <section
                className="resume-section p-3 p-lg-5 d-flex justify-content-center"
                id="testimonials"
            >
                <div className="w-100">
                    <h2 className="mb-5">Testimonials</h2>

                    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-3">
                        <div className="resume-content">

                            <p className="text-justify font-italic">
                                "You are curious, always eager to learn new things, you like doing things the right way.
                                You take ownership of your tasks and you deliver with quality."
                            </p>
                            <div className="subheading mb-4">- coworker</div>
                        </div>
                    </div>

                    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-3">
                        <div className="resume-content">

                            <p className="text-justify font-italic">
                                "You embody all of Company principles, but I think 'Raise the bar' stands out as
                                you're constantly trying to improve the quality of your work, either by embracing new
                                technologies, expanding the reach of the tests or implementing changes to make everyone
                                else's work easier."
                            </p>
                            <div className="subheading mb-4">- coworker</div>
                        </div>
                    </div>

                    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-3">
                        <div className="resume-content">

                            <p className="text-justify font-italic">
                                "João has a very direct approach to the problems and is able to think on them and came
                                up with solutions without rambling on unnecessary stuff."
                            </p>
                            <div className="subheading mb-4">- manager</div>
                        </div>
                    </div>

                    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-3">
                        <div className="resume-content">

                            <p className="text-justify font-italic">
                                "João is very hardworking and is always willing to work with everyone and to help the
                                team. He is always finding new ways of improving internal processes to make them more
                                efficient. Additionally, he is always willing to improve and to learn new things. This
                                is a great attitude that, in turn, also improves his performance and the team's
                                performance as well."
                            </p>
                            <div className="subheading mb-4">- coworker</div>
                        </div>
                    </div>

                </div>
            </section>


            <hr className="m-0"/>

            <section
                className="resume-section p-3 p-lg-5 d-flex align-items-center"
                id="education"
            >
                <div className="w-100">
                    <h2 className="mb-4">Education</h2>

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
                            <span className="text-primary">September 2020 - June 2021</span>
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
                    <h2 className="mb-4">Development</h2>

                    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="resume-content">
                            <h3 className="mb-0">TDD & BDD - Design through Testing</h3>
                            <div className="subheading mb-3">Dave Farley</div>
                            <div className="text-justify">Comprehensive guide to the Test-Driven Development (TDD) and
                                Behavior-Driven
                                Development (BDD) approaches in software development. The course covers the fundamental
                                principles of TDD and BDD, including the importance of automated testing and how to
                                write effective tests. It also provides practical techniques for applying TDD and BDD to
                                real-world projects, including continuous integration and deployment.
                            </div>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary">2023-02 - Present</span>
                        </div>
                    </div>

                    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="resume-content">
                            <h3 className="mb-0">Certified ISTQB® Foundational Level (CTFL)</h3>
                            <div className="subheading mb-3">ISTQB®</div>
                            <div className="text-justify">Globally recognized software testing certification that
                                provides a standard understanding of software testing principles, techniques, and
                                processes. It covers topics such as the fundamentals of testing, testing throughout the
                                software life cycle, static techniques, test design techniques, test management and
                                tools.
                            </div>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary">2023-03</span>
                        </div>
                    </div>

                    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="resume-content">
                            <h3 className="mb-0">English B1</h3>
                            <div className="subheading mb-3">Faculdade de Letras da Universidade do Porto</div>
                            <div className="text-justify">I have completed both the B1.1 and B1.2 levels of English
                                courses offered by Faculdade de Letras do Porto. These courses have provided me with
                                a solid foundation in English grammar, vocabulary, and conversation skills. I have
                                developed the ability to understand and communicate effectively in a variety of
                                contexts, including professional settings.
                            </div>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary">2021 - 2022</span>
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
                    <h2 className="mb-4">Skills</h2>

                    <div className="subheading mb-3">
                        Programming Languages &amp; Tools
                    </div>
                    <ul className="list-inline dev-icons">
                        <li className="list-inline-item">
                            <i className="fab fa-js-square"></i>
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-python"></i>
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-java"></i>
                        </li>
                        <li className="list-inline-item">
                            <i className="fa fa-terminal"></i>
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-git-alt"></i>
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-jenkins"></i>
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-docker"></i>
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-aws"></i>
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-gitlab"></i>
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-github"></i>
                        </li>
                    </ul>

                    <div className="subheading mb-3">Plus</div>
                    <ul className="fa-ul mb-0">
                        <li>
                            <i className="fa-li fa fa-check"></i>
                            Cypress
                        </li>
                        <li>
                            <i className="fa-li fa fa-check"></i>
                            Anisble
                        </li>
                        <li>
                            <i className="fa-li fa fa-check"></i>
                            Maven
                        </li>
                        <li>
                            <i className="fa-li fa fa-check"></i>
                            NPM
                        </li>
                        <li>
                            <i className="fa-li fa fa-check"></i>
                            Java Spring Framework
                        </li>
                        <li>
                            <i className="fa-li fa fa-check"></i>
                            React.js
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
                    <h2 className="mb-4">Interests</h2>
                    <p className="text-justify">
                        Having spent my youth in a peaceful village at the foothill of <i>Serra da Estrela</i> mountain,
                        I love to walk outdoors, explore nature, breathe fresh air and bathe in the icy waters
                        of the streams that come out of the mountains.
                    </p>
                    <p className="text-justify">
                        At home, one of my favorite hobbies is cooking. From traditional Portuguese food, to
                        pizzas and even sushi.
                    </p>
                    <p className="text-justify">
                        I also love animals, I have two cats, called Leia and India, and a turtle, called Olaf.
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
                    <h2 className="mb-4">Resume</h2>
                    <p>
                        <h3>You can grab my <a href={downloadFile} download='resume'>resume</a>!
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
