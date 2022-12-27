import Card from "react-bootstrap/Card";

function ProductCard({ image, name, description, price, keys }) {
  return (
    <Card style={{ width: "18rem", position: "relative" }} key={keys}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <div className="card-info mt-5">
          <p style={{ color: "gray", position: "absolute", bottom: "0" }}>
            Rp. {price}
          </p>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
