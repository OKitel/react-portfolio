import React from "react";

import poker from "../img/projects/poker.png";
import pokerLobby from "../img/projects/poker-lobby.png";
import pokerLobbyCovers from "../img/projects/poker-lobby2.png";
import pokerGame from "../img/projects/poker-game.png";
import zoo from "../img/projects/zoo.png";
import zooMap from "../img/projects/zoo-map.png";
import zooPanda from "../img/projects/zoo-panda.png";
import english from "../img/projects/english.png";
import englishSpace from "../img/projects/english-space.png";
import match from "../img/projects/match.png";
import matchBack from "../img/projects/match-back.png";
import matchDragons from "../img/projects/match-dragons.png";
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
                  <a href={poker} data-lightbox="gallery-poker">
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
                        <div className="d-flex justify-content-between">
                          <a
                            href="https://jovial-maamoul-0dab99.netlify.app"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="ion-earth mr-1"></i>
                            Live version
                          </a>
                          <a
                            href="https://github.com/OKitel/Pointing-Poker"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="ion-social-github mr-1"></i>
                            Source code
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <a href={poker} data-lightbox="gallery-poker2">
                          <span className="ion-ios-plus-outline"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href={pokerLobby}
                  data-lightbox="gallery-poker"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={pokerLobbyCovers}
                  data-lightbox="gallery-poker"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={pokerGame}
                  data-lightbox="gallery-poker"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>

                <a
                  href={pokerLobby}
                  data-lightbox="gallery-poker2"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={pokerLobbyCovers}
                  data-lightbox="gallery-poker2"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>

                <a
                  href={pokerGame}
                  data-lightbox="gallery-poker2"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <a href={zoo} data-lightbox="gallery-zoo">
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
                            <i className="ion-earth mr-1"></i>
                            Live version
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <a href={zoo} data-lightbox="gallery-zoo2">
                          <span className="ion-ios-plus-outline"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href={zooMap}
                  data-lightbox="gallery-zoo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={zooPanda}
                  data-lightbox="gallery-zoo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={zooMap}
                  data-lightbox="gallery-zoo2"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={zooPanda}
                  data-lightbox="gallery-zoo2"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <a href={match} data-lightbox="gallery-match">
                    <img src={match} alt="" className="img-fluid" />
                  </a>
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Match game</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          HTML5 CSS3 Typescript Bootstrap
                        </span>
                        <div>
                          <a
                            href="https://rolling-scopes-school.github.io/okitel-JSFE2021Q1/match-match-game/dist/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="ion-earth mr-1"></i>
                            Live version
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <a href={match} data-lightbox="gallery-match2">
                          <span className="ion-ios-plus-outline"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href={matchDragons}
                  data-lightbox="gallery-match"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={matchBack}
                  data-lightbox="gallery-match"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={matchDragons}
                  data-lightbox="gallery-match2"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={matchBack}
                  data-lightbox="gallery-match2"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <a href={piano} data-lightbox="gallery-piano">
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
                            <i className="ion-earth mr-1"></i>
                            Live version
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <a href={piano} data-lightbox="gallery-piano2">
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
                  <a href={english} data-lightbox="gallery-english">
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
                            <i className="ion-earth mr-1"></i>
                            Live version
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <a href={english} data-lightbox="gallery-english2">
                          <span className="ion-ios-plus-outline"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href={englishSpace}
                  data-lightbox="gallery-english"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>

                <a
                  href={englishSpace}
                  data-lightbox="gallery-english2"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <a href={photo} data-lightbox="gallery-photo">
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
                            <i className="ion-earth mr-1"></i>
                            Live version
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <a href={photo} data-lightbox="gallery-photo2">
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
