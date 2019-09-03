import React, { Component } from 'react'

export default class contact extends Component {
	render() {
		return (
			<>
				<section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1><span>Get In Touch.</span></h1>
          </div>
          <div className="ten columns">
            <p className="lead">Have a problem that needs solving, or a site that needs building? Let's connect.
            </p>
          </div>
        </div>
        <div className="row">
          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Contact</h4>
              <p className="address">
                Michael Dudley-Marquez<br />
                Seattle, WA <br />
                <span>m-c-d-m@outlook.com</span> <br />
                <span>(206) 965-0853</span>
              </p>
            </div>
          </aside>
        </div>
      </section>	
			</>
		)
	}
}
