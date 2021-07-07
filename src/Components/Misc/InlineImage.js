import { Col, Row, Image } from "react-bootstrap";
import "../../styles.css";

export default function InlineImage({ reference, imgSource, titleText }) {
  return (
    <Row ref={reference} className="align-items-center mb-2">
      <Col xs={4} md={2} lg={1} className="mx-auto mb-2">
        <Image fluid src={imgSource} />
      </Col>
      <Col xs={12} md={10} lg={11} className="p-md-0 text-center text-md-left">
        {titleText}
      </Col>
    </Row>
  );
}
