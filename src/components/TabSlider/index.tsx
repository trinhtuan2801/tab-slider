import clsx from 'clsx';
import './index.scss';

interface Props {
  tabs: string[];
  currentTab: string;
  onChange: (newTab: string) => void;
  gap?: number;
  padding?: number;
}

export default function TabSlider({
  currentTab,
  onChange,
  tabs,
  gap = 0,
  padding = 0,
}: Props) {
  const currentTabIndex = tabs.indexOf(currentTab);
  const N = tabs.length;
  const g = `${gap}px`;
  const vLength = `(100% + ${g})`;
  const vWidth = `(${vLength} / ${N})`;

  const indicatorWidth = `${vWidth} - ${g}`;
  const indicatorPosition = `${currentTabIndex} * ${vWidth}`;

  return (
    <div className='tab-slider' style={{ padding: `${padding}px` }}>
      <div
        className='tab-container'
        style={{
          columnGap: `${gap}px`,
        }}
      >
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            isActive={tab === currentTab}
            tab={tab}
            onClick={() => onChange(tab)}
          />
        ))}
      </div>
      <div className='indicator-container' style={{ padding: `${padding}px` }}>
        <div
          style={{
            width: `calc(${indicatorWidth})`,
            marginLeft: `calc(${indicatorPosition})`,
          }}
          className='indicator'
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
