import { Accordion, Card } from 'react-bootstrap';

const MyAccordion = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          Section 1
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>Content for section 1</Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="1">
          Section 2
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
          <Card.Body>Content for section 2</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default MyAccordion;