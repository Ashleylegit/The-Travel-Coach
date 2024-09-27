import { Tab, Tabs } from 'react-bootstrap';
import { motion } from 'framer-motion';

const MyTabs = () => {
  return (
    <Tabs defaultActiveKey="home">
      <Tab eventKey="home" title="Home">
        <h3>Home Content</h3>
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <h3>Profile Content</h3>
      </Tab>
      <Tab eventKey="contact" title="Contact">
        <h3>Contact Content</h3>
      </Tab>
    </Tabs>
  );
};

export default MyTabs;