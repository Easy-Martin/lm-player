import React from 'react';
import '../style/bar.less';
import LeftBar from './left_bar';
import RightBar from './right_bar';

interface IContrallerBarProps {
  rightExtContents: React.ReactNode;
  rightMidExtContents: React.ReactNode;
  visibel?: boolean;
  leftExtContents: React.ReactNode;
  leftMidExtContents: React.ReactNode;
  reload: () => void;
  hideTimeProgress?: boolean;
  oneFpsPlay?: boolean;
}

function ContrallerBar({ rightExtContents, rightMidExtContents, visibel, leftExtContents, leftMidExtContents, reload, hideTimeProgress, oneFpsPlay }: IContrallerBarProps) {
  return (
    <>
      <div className={`contraller-bar-layout ${!visibel ? 'hide-contraller-bar' : ''}`}>
        <LeftBar oneFpsPlay={oneFpsPlay} hideTimeProgress={hideTimeProgress} reload={reload} leftMidExtContents={leftMidExtContents} leftExtContents={leftExtContents} />
        <RightBar rightExtContents={rightExtContents} rightMidExtContents={rightMidExtContents} />
      </div>
    </>
  );
}

export default ContrallerBar;
