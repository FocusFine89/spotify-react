import { Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import StaticElement from "./StaticElement";

const Main = () => {
  const songs = useSelector((state) => state.songList.content);
  const dispatch = useDispatch();

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
        <h2>Rock Classics</h2>
        <StaticElement name="Queen" />
      </Row>
      <Row>
        <Col sm={10}>
          <div id="pop">
            <h2>Pop Culture</h2>
          </div>
        </Col>
        <Col sm={10}>
          <div id="hiphop">
            <h2>#HipHop</h2>
          </div>
        </Col>
      </Row>
    </Col>
  );
};

export default Main;
