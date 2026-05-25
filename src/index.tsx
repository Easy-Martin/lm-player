import SinglePlayer from './Player/single_player';
import FrontendPlayer1 from './Player/frontend_player';
import SegmentPlayer from './Player/segment_player';

export const Player = SinglePlayer;
export const HistoryPlayer = SegmentPlayer;
export const FrontendPlayer = FrontendPlayer1;

export default Player;
