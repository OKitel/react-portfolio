import React from "react";

import poker from "../img/projects/poker.png";
import zoo from "../img/projects/zoo.png";
import english from "../img/projects/english.png";
import match from "../img/projects/match.png";
import photo from "../img/projects/photo.png";
import piano from "../img/projects/piano.png";

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  Here you can see some of my pet projects.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <a href={poker} data-lightbox="gallery-vmarine">
                    <img
                      src={poker}
                      alt="Poker Planning"
                      className="img-fluid"
                    />
                  </a>
                </div>

                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Poker Planning</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          ReactJS Typescript Material-UI SASS
                        </span>
                        <div>
                          <a
                            href="https://powerful-thicket-63015.herokuapp.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Live version
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <a href={poker} data-lightbox="gallery-vmarine">
                          <span className="ion-ios-plus-outline"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <a
                  href={zoo}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a> */}
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <a href={zoo} data-lightbox="gallery-aguadeluz">
                    <img src={zoo} alt="Online ZOO" className="img-fluid" />
                  </a>
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Online Zoo</h2>
                      <div className="w-more">
                        <span className="w-ctegory">HTML5 CSS3 JavaScript</span>
                        <div>
                          <a
                            href="https://rolling-scopes-school.github.io/okitel-JSFE2021Q1/online-zoo/pages/landing/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Live version
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <a href={zoo} data-lightbox="gallery-aguadeluz">
                          <span className="ion-ios-plus-outline"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <a href={match} data-lightbox="gallery-todo">
                    <img src={match} alt="" className="img-fluid" />
                  </a>
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Match game</h2>
                      <div className="w-more">
                        <span className="w-ctegory">HTML5 CSS3 Typescript</span>
                        <div>
                          <a
                            href="https://rolling-scopes-school.github.io/okitel-JSFE2021Q1/match-match-game/dist/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Live version
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <a href={match} data-lightbox="gallery-todo">
                          <span className="ion-ios-plus-outline"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <a href={piano} data-lightbox="gallery-smth">
                    <img src={piano} alt="" className="img-fluid" />
                  </a>{" "}
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Virtual piano</h2>
                      <div className="w-more">
                        <span className="w-ctegory">Javascript</span>
                        <div>
                          <a
                            href="https://rolling-scopes-school.github.io/okitel-JSFE2021Q1/virtual-piano/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Live version
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <a href={piano} data-lightbox="gallery-smth">
                          <span className="ion-ios-plus-outline"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <a href={english} data-lightbox="gallery-medlingos">
                    {" "}
                    <img src={english} alt="" className="img-fluid" />
                  </a>
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">English for kids</h2>
                      <div className="w-more">
                        <span className="w-ctegory">HTML5 CCS Typescript</span>
                        <div>
                          <a
                            href="https://rolling-scopes-school.github.io/okitel-JSFE2021Q1/english-for-kids-base/dist/#main"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Live version
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <a href={english} data-lightbox="gallery-medlingos">
                          <span className="ion-ios-plus-outline"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <a href={photo} data-lightbox="gallery-mf">
                    <img src={photo} alt="" className="img-fluid" />
                  </a>
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Photo filter</h2>
                      <div className="w-more">
                        <span className="w-ctegory">Javascript</span>
                        <div>
                          <a
                            href="https://rolling-scopes-school.github.io/okitel-JSFE2021Q1/photo-filter/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Live version
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <a href={photo} data-lightbox="gallery-mf">
                          <span className="ion-ios-plus-outline"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
