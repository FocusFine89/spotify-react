/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

const StaticElement = (props) => {
  const [data, setData] = useState([]);
  const fetchData = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + props.name
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error in fetching songs");
        }
      })
      .then((response) => {
        setData(response.data);
        console.log(data.data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [props.name]);

  return (
    <Row>
      {data.slice(1, 5).map((song) => {
        return (
          <Col xs={12} lg={3} key={song.id} className="mb-3">
            <Card className="bg-transparent border-0 text-light">
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
  );
};

export default StaticElement;
