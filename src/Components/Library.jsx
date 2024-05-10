import { Button, Card, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const Library = () => {
  const liked = useSelector((state) => state.likedSong.content);
  return (
    <div className="">
      {liked.length > 0 && (
        <Row className="">
          {liked.map((like, i) => {
            return (
              <Col md={3}>
                <Card className="bg-transparent text-light border-0">
                  <Card.Img variant="top" src={like.album.cover_big} />
                  <Card.Body>
                    <Card.Title>{like.title}</Card.Title>
                    <Card.Text>Artista: {like.artist.name}</Card.Text>
                    <Button type="button" className="btn btn-danger">
                      Elimina
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      )}
    </div>
  );
};

export default Library;
