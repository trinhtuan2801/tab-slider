import { useState } from 'react';
import TabSlider from './components/TabSlider';

function App() {
  const [tab, setTab] = useState('Tab 2');
  return (
    <div
      style={{
        backgroundColor: 'black',
        padding: '8px',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ width: '340px' }}>
        <TabSlider
          tabs={['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4']}
          currentTab={tab}
          onChange={setTab}
        />
      </div>
    </div>
  );
}

export default App;
