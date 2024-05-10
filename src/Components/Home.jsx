import { Col, Row } from "react-bootstrap";

import { Link } from "react-router-dom";
import StaticElement from "./StaticElement";

const Main = () => {
  return (
    <Col xs={12} md={9} className=" offset-md-3 mainPage">
      <Row>
        <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
          <Link>TRENDING</Link>
          <Link>PODCAST</Link>
          <Link>MOODS AND GENRES</Link>
          <Link>NEW RELEASES</Link>
          <Link>DISCOVER</Link>
        </Col>
      </Row>
      <Row className="  text-light">
        <Col>
          <div id="rock">
            <h2>Rock Classics</h2>
            <StaticElement name="Queen" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={10}>
          <div id="pop">
            <h2>Pop Culture</h2>
            <StaticElement name="Katy Perry" />
          </div>
        </Col>
        <Col sm={10} className="mb-5">
          <div id="hiphop">
            <h2>#HipHop</h2>
            <StaticElement name="Eminem" />
          </div>
        </Col>
      </Row>
    </Col>
  );
};

export default Main;
