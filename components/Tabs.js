// components/Tabs.js
import React, { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { title: 'Tab 1', content: 'This is the content of tab 1.' },
    { title: 'Tab 2', content: 'This is the content of tab 2.' },
    { title: 'Tab 3', content: 'This is the content of tab 3.' },
  ];

  return (
    <div>
      <ul>
        {tabs.map((tab, index) => (
          <li key={index}>
            <button onClick={() => setActiveTab(index)}>{tab.title}</button>
          </li>
        ))}
      </ul>
      {tabs.map((tab, index) => (
        <div key={index} style={{ display: activeTab === index ? 'block' : 'none' }}>
          <p>{tab.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Tabs;