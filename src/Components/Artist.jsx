import { useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getMusicAction } from "../redux/actions";

const Artist = () => {
  const songs = useSelector((state) => state.songList.content);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(getMusicAction(params.artist));
  }, []);

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
        <h2>Songs</h2>
        {songs.length > 0 &&
          songs.slice(1, 8).map((song) => {
            return (
              <Col xs={12} md={4} lg={3} className="mb-3 " key={song.id}>
                <Card className="bg-transparent  text-light border-0">
                  <Card.Img variant="top" src={song.album.cover_big} />
                  <Card.Body>
                    <Card.Title>{song.title}</Card.Title>
                    <Card.Text>Artist: {song.artist.name}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
      </Row>
      <Row>
        <Col sm={10}>
          <div id="pop">
            <h2>Artist</h2>
            {songs.length > 0 && (
              <Card className="bg-transparent text-light border-0 mb-3">
                <Card.Img variant="top" src={songs[0].artist.picture_big} />
                <Card.Body>
                  <Card.Title>{songs[0].artist.name}</Card.Title>
                </Card.Body>
              </Card>
            )}
          </div>
        </Col>
      </Row>
    </Col>
  );
};

export default Artist;
