import React from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    axios
      .get(`https://deepthoughts-nodejs.herokuapp.com/private/privatepages`)
      .then((res) => {
        const PrivatePages = res.data;
        console.log(PrivatePages);
        this.setState({ PrivatePages });
      });

  }

  render() {
    return (
      <footer>
        <div className="bg12 footer-space">
          <div className="container">
            <div className="row">
              <div className="footer-box-1 col-lg-7 col-md-6 p-b-20 p-l-0">
                <div className="footer-menu">
                  <h1>COVID FRONTLINE</h1>
                  <p>
                  <br></br>
                    Hyderabad
                  </p>
                </div>
              </div>

              <div className="footer-box-2 col-lg-3 col-md-3 p-b-20">
                <div className="footer-menu">
                  <h1>Explore</h1>
                  <ul>
                    <li>
                      <Link to="/privacy_policy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/terms_of_services">Terms Of Services</Link>
                    </li>
                   
                  </ul>
                </div>
              </div>

              {/* <div className="footer-box-3 col-lg-2 col-md-3 p-b-20 p-r-0">
                <div className="footer-menu">
                  <h1>Resources</h1>
                  <ul>
                    <li>
                      <Link to="">Impact</Link>
                    </li>
                    <li>
                      <Link to="">Revolution</Link>
                    </li>
                    <li>
                      <Link to="">Blogs</Link>
                    </li>
                  </ul>
                </div>
              </div> */}
              {/* <div className="footer-box-3 col-lg-2 col-md-3 p-b-20 p-r-0">
                <div className="footer-menu">
                  <h1>Private Pages</h1>
                  <ul>
                    {this.state.PrivatePages &&
                      this.state.PrivatePages.map((page, index) => {
                        return (
                          <li key={index}>
                            <a
                              href={`/Privatepage/${
                                page._id
                              }/${page.title.replace(/\s/g, "_")}`}
                            >
                              {page.title}
                            </Link>
                          
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <div className="bg12">
          <div className="container size-h-4 p-tb-15 bdr-top-fotter">
            <div className="row">
              <span className="f1-s-1 cl0 txt-left col-md-6 p-0 line-copy">
                © Copyright 2021. All Rights Reserved.
              </span>
              <span className="f1-s-1 cl0 txt-right col-md-6 p-0">
                <ul className="social-links">
                  <li>
                    <Link to="#">
                      <i className="fab fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fab fa-google-plus-g"></i>
                    </Link>
                  </li>
                </ul>
              </span>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
