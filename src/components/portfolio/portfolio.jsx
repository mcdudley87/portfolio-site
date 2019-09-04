import React, { Component } from 'react'

export default class portfolio extends Component {
	render() {
		return (
			<>
				<section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out My Recent Projects.</h1>
            {/* portfolio-wrapper */}
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-01" title>
                    <img alt="" src="images/portfolio/demons-n-dicerolls.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Demons & Dicerolls</h5>
                        <p>Front-End Browser Game</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}

              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-02" title>
                    <img alt="" src="images/portfolio/relieflink.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>ReliefLink</h5>
                        <p>Mobile Optimized Hackathon App</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}

              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-03" title>
                    <img alt="" src="images/portfolio/arcane-academy.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Arcademy</h5>
                        <p>Full-stack Application</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}

              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-04" title>
                    <img alt="" src="images/portfolio/into-the-light.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Bud, Wiser.</h5>
                        <p>Full-Stack Application </p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
            </div> {/* portfolio-wrapper end */}
          </div> {/* twelve columns end */}
          {/* Modal Popup
	      --------------------------------------------------------------- */}
          <div id="modal-01" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-demons-n-dicerolls.jpg" alt="" />
            <div className="description-box">
              <h4>Demons & Dicerolls</h4>
              <p>Front-end broswer game using a random number generator to roll the dice and defeat the demons.</p>
              <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
            </div>
            <div className="link-box">
              <a href="#">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-01 End */}

          <div id="modal-02" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-relieflink.jpg" alt="" />
            <div className="description-box">
              <h4>ReliefLink</h4>
              <p>App designed and made in 36 hours for General Assembly Hackathon.</p>
              <span className="categories"><i className="fa fa-tag" />Branding, Web Development</span>
            </div>
            <div className="link-box">
              <a href="#">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-02 End */}

          <div id="modal-03" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-arcane-academy.jpg" alt="" />
            <div className="description-box">
              <h4>Arcademy</h4>
              <p>Full-stack web app for creating and managing Dungeons & Dragons spellbooks by user and character.</p>
              <span className="categories"><i className="fa fa-tag" />Branding</span>
            </div>
            <div className="link-box">
              <a href="https://frozen-wildwood-55202.herokuapp.com/">Launch</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-03 End */}

          <div id="modal-04" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-intothelight.jpg" alt="" />
            <div className="description-box">
              <h4>Into the Light</h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Photography</span>
            </div>
            <div className="link-box">
              <a href="#">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-04 End */}
        </div> {/* row End */}
      </section>
			</>
		)
	}
}
