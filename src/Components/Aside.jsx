import { useState } from "react";
import { Button, Col, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Aside = () => {
  const [inputValue, setInputValue] = useState("");
  //   const songs = useSelector((state) => state.songList.content.data);

  //   useEffect(() => {
  //     console.log(songs);
  //   }, [songs]);
  return (
    <Col xs={2}>
      <Container>
        <Nav
          className="navbar navbar-expand-md fixed-left justify-content-between"
          id="sidebar"
        >
          <div className="container flex-column align-items-start">
            <Link className="navbar-brand">
              <img
                src="./logo.png"
                alt="Spotify Logo"
                width="131"
                height="40"
              />
            </Link>
            <Button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </Button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <ul>
                  <li>
                    <Link className="nav-item nav-link d-flex align-items-center">
                      <i className="bi bi-house-door-fill"></i>&nbsp; Home
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-item nav-link d-flex align-items-center">
                      <i className="bi bi-book-fill"></i>&nbsp; Your Library
                    </Link>
                  </li>
                  <li>
                    <div className="input-group mt-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                        aria-label="Search"
                        value={inputValue}
                        onChange={(e) => {
                          setInputValue(e.target.value);
                        }}
                      />
                      <div className="input-group-append">
                        <Link
                          className="btn btn-dark btn-outline-secondary btn-sm h-100"
                          to={`/${inputValue}`}
                        >
                          GO
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="nav-btn d-flex flex-column align-content-center align-items-center">
            <Button className=" signup-btn" type="button">
              Sign Up
            </Button>
            <Button className=" login-btn" type="button">
              Login
            </Button>
            <Link>Cookie Policy</Link>
            <Link> Privacy</Link>
          </div>
        </Nav>
      </Container>
    </Col>
  );
};

export default Aside;
