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
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
              voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt.
            </p>
            <div className="bars">
              <ul className="skills">
                <li><span className="bar-expand photoshop" /><em>React</em></li>
                <li><span className="bar-expand illustrator" /><em>Node.js</em></li>
                <li><span className="bar-expand html5" /><em>HTML5</em></li>
                <li><span className="bar-expand css" /><em>CSS</em></li>
                <li><span className="bar-expand jquery" /><em>SQL</em></li>
                <li><span className="bar-expand wordpress" /><em>Wordpress</em></li>
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
                  500+ hour, 12-week full-time immersive course.
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
                  <li>* Deliver exceptional care to diverse set of 35 weekly patients. </li> 
                  <li>* Synthesize medical records and doctor inpur into actionable patient-care plan to 
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
