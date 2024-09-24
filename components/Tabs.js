import { TabPane, Tabs } from 'react-tabs';

function MyTabs() {
  return (
    <Tabs>
      <TabPane label='Tab 1'>
        <p>This is the content of tab 1.</p>
      </TabPane>
      <TabPane label='Tab 2'>
        <p>This is the content of tab 2.</p>
      </TabPane>
    </Tabs>
  );
}

export default MyTabs;