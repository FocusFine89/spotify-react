import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Player = () => {
  return (
    <Container fluid className=" fixed-bottom bg-container pt-1">
      <Row className="h-100">
        <Col lg={10} className="offset-lg-2">
          <Row className=" h-100 flex-column justify-content-center align-items-center">
            <Col sm={6} md={4} className="playerControls">
              <div className="d-flex">
                <Link>
                  <img src="./playerbuttons/shuffle.png" alt="shuffle" />
                </Link>
                <Link>
                  <img src="./playerbuttons/prev.png" alt="prev" />
                </Link>
                <Link>
                  <img src="./playerbuttons/play.png" alt="play" />
                </Link>
                <Link>
                  <img src="./playerbuttons/next.png" alt="next" />
                </Link>
                <Link>
                  <img src="./playerbuttons/repeat.png" alt="repeat" />
                </Link>
              </div>
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Player;
