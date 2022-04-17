import React from "react";
import $ from "jquery";

import htmlIcon from "../img/icons/html5.png";
import cssIcon from "../img/icons/css.png";
import jsIcon from "../img/icons/js.png";
import reactIcon from "../img/icons/react.png";
import nodeIcon from "../img/icons/node.png";
import postgresqlIcon from "../img/icons/postgresql.png";
import dockerIcon from "../img/icons/docker.png";
import tsIcon from "../img/icons/ts.png";
import gitIcon from "../img/icons/git.png";
import githubIcon from "../img/icons/github.png";
import npmIcon from "../img/icons/npm.png";
import materialUiIcon from "../img/icons/mui.png";
import bootstrapIcon from "../img/icons/bootstrap.png";
import vscodeIcon from "../img/icons/vscode.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          id: "HTML5_skill",
          content: "HTML5",
          img: htmlIcon,
        },
        {
          id: "CSS3_skill",
          content: "CSS3",
          img: cssIcon,
        },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          img: jsIcon,
        },
        {
          id: "Typescript_skill",
          content: "TypeScript",
          img: tsIcon,
        },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          img: reactIcon,
        },
        {
          id: "PostgreSQL_skill",
          content: "PostgreSQL",
          img: postgresqlIcon,
        },
        {
          id: "NodeJS_skill",
          content: "NodeJS",
          img: nodeIcon,
        },
        {
          id: "npm_skill",
          content: "npm",
          img: npmIcon,
        },
        {
          id: "Docker_skill",
          content: "Docker",
          img: dockerIcon,
        },
        {
          id: "git_skill",
          content: "git",
          img: gitIcon,
        },
        {
          id: "github_skill",
          content: "Github",
          img: githubIcon,
        },
        {
          id: "vscode_skill",
          content: "Visual Studio Code",
          img: vscodeIcon,
        },
        {
          id: "materialUI_skill",
          content: "Material-UI",
          img: materialUiIcon,
        },
        {
          id: "bootstrap_skill",
          content: "Bootstrap",
          img: bootstrapIcon,
        },
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "I am a self-taught web developer with a passion for learning and creating. I have a strong desire to learn and grow as a front-end developer.",
        },
        {
          id: "second-p-about",
          content:
            "I finished The Rolling Scopes School JavaScript, React, and NodeJS courses.  I'm ready to begin my first work in the IT branch.",
        },
        {
          id: "third-p-about",
          content:
            "I graduated from medical university, the study was challenging, but now I can learn any JS framework in one night😆",
        },
      ],
    };
  }
  componentDidMount() {
    $(function () {
      $("[data-toggle='tooltip']").tooltip();
    });
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {this.state.skills.map((skill) => {
                        return (
                          <React.Fragment key={skill.id}>
                            <img
                              data-toggle="tooltip"
                              data-placement="top"
                              title={skill.content}
                              className="mr-3"
                              src={skill.img}
                              alt={skill.content}
                              style={{ width: "100px" }}
                            />
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map((content) => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
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

export default About;
