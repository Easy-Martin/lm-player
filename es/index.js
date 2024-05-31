import SinglePlayer from "./Player";
import FrontendPlayer1 from "./Player/frontend_player";
import SegmentPlayer from "./Player/segment_player";
export var Player = SinglePlayer;
export var HistoryPlayer = SegmentPlayer;
export var FrontendPlayer = FrontendPlayer1;
export default Player;