import clsx from 'clsx';
import './index.scss';

interface Props {
  tabs: string[];
  currentTab: string;
  onChange: (newTab: string) => void;
}

export default function TabSlider({ currentTab, onChange, tabs }: Props) {
  const currentTabIndex = tabs.indexOf(currentTab);

  return (
    <div className='tab-slider'>
      <div className='tab-container'>
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            isActive={tab === currentTab}
            tab={tab}
            onClick={() => onChange(tab)}
          />
        ))}
      </div>
      <div className='indicator-container'>
        <div
          style={{
            backgroundColor: 'white',
            width: `calc(100% / ${tabs.length})`,
            borderRadius: '16px',
            marginLeft: `calc(${currentTabIndex} * 100% / ${tabs.length})`,
            transition: 'margin-left 0.3s',
          }}
        />
      </div>
    </div>
  );
}

interface TabProps {
  tab: string;
  isActive: boolean;
  onClick: () => void;
}

function Tab({ isActive, onClick, tab }: TabProps) {
  return (
    <div
      onClick={onClick}
      className={clsx({
        tab: true,
        active: isActive,
      })}
    >
      {tab}
    </div>
  );
}
