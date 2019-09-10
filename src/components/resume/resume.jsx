import React, { Component } from 'react'

export default class resume extends Component {
	render() {
		return (
			<>
				<section id="resume">
          {/* Skills
      ----------------------------------------------- */}
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <p>My study and practice exposed me to many languages and frameworks. Furthermore, the coursework at 
              General Assembly taught me best practices for rapidly learning and implementing new material on a 
              short turnaround. Here are some of the technologies and skills I know and use, or am familiar enough with for use: 
            </p>
            <div className="bars">
              <p className="tech-skills">
                    JavaScript | Node.js | React | Express | HTML | CSS | WordPress |  MongoDB | Mongoose | SQL | Sequelize | 
                    TypeScript | Python | Writing | Editing 
              </p>    
              <ul className="skills">
                {/* <li><span className="bar-expand html5" /><em></em></li>
                <li><span className="bar-expand css" /><em></em></li>
                <li><span className="bar-expand jquery" /><em></em></li> */}
              </ul>
            </div>{/* end skill-bars */}
          </div> {/* main-col end */}
        </div> {/* End skills */}
        {/* Education
      ----------------------------------------------- */}
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>General Assembly</h3>
                <p className="info">Software Engineering Immersive <span>•</span> <em className="date">May 2019 - August 2019</em></p>
                <p>
                  500+ hour, full-time immersive software engineering bootcamp spanning front-end and back-end development, 
                  computer science, and deadline driven production practices.
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Seattle Pacific University</h3>
                <p className="info">Bachelor's Degree (B.A.) in English, Creative Writing and Communications, Journalism <span>•</span> <em className="date">September 2006 - June 2010</em></p>
                <p>
                Awards: Society of Professional Journalists, Mark of Excellence Award, Region 10; 2009, 3rd Place, General Column Writing; 2010; 
                1st Place, Best All-Around Non-daily Student Newspaper. 
                </p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Education */}
        {/* Work
      ----------------------------------------------- */}
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Alderwood Vision Therapy Center</h3>
                <p className="info">Certified Optometric Vision Therapist <span>•</span> <em className="date">February 2012 - May 2019</em></p>
                <p>
                <ul>
                  <li>* Delivered exceptional care to diverse set of 35 weekly patients. </li> 
                  <li>* Synthesized medical records and doctor input into actionable patient-care plan to 
                        remediate or resolve optometric and neuro-cognitive disabilities through one-on-one therapeutic procedures</li>
                  <li>* Certified by the College of Optometrists in Vision Development, April 18, 2015</li> 
                  <li>* Exceptional Patient Care Award, Alderwood Vision Therapy - November 27th, 2013</li>
                  </ul>
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Geeks Who Drink</h3>
                <p className="info">Quizmaster <span>•</span> <em className="date">September 2014 - Present</em></p>
                <p>
                  <ul>
                    <li>* Host and entertain weekly trivia nights for 18-22 teams of 4-6 players.</li> 
                    <li>* Manage the AV, performance, grading, and prize distribution.</li>
                    <li>* Build relationships for repeat business.</li>
                  </ul>
                </p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Work */}
      </section>
			</>
		)
	}
}
