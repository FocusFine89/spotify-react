/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  getMusicAction,
  likedSongAction,
  selectedSongAction,
} from "../redux/actions";
import { Star } from "bootstrap-icons/icons/star.svg";
const Artist = () => {
  const songs = useSelector((state) => state.songList.content);
  const dispatch = useDispatch();
  const params = useParams();
  const selected = useSelector((state) => state.selected.content);

  const isSelected = (song) => {
    if (song.id === selected.id) {
      return "gold";
    } else {
      return "currentColor";
    }
  };

  useEffect(() => {
    dispatch(getMusicAction(params.artist));
  }, [params.artist]);

  //   useEffect(() => {
  //     dispatch(getMusicAction(params.artist));
  //   }, [params.artist]);

  return (
    <Col xs={12} md={9} className=" offset-md-3 mainPage ">
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
                <Card
                  className="bg-transparent  text-light border-0"
                  onClick={() => {
                    dispatch({ type: "SELECTED_SONG", payload: song });
                  }}
                >
                  <Card.Img variant="top" src={song.album.cover_big} />
                  <Card.Body>
                    <Card.Title>{song.title}</Card.Title>
                    <Card.Text>Artist: {song.artist.name}</Card.Text>
                    <Card.Text onClick={() => dispatch(likedSongAction(song))}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-star"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                      </svg>
                    </Card.Text>
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
