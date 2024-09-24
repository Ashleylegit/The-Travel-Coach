import Accordion from 'react-accordion';

function MyAccordion() {
  return (
    <Accordion>
      <Accordion.Item>
        <Accordion.Button>Section 1</Accordion.Button>
        <Accordion.Panel>
          <p>This is the content of section 1.</p>
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Button>Section 2</Accordion.Button>
        <Accordion.Panel>
          <p>This is the content of section 2.</p>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}

export default MyAccordion;