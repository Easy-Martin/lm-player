import Player from "./player";
import HistoryPlayer from "./history";
import { createHistoryPlayer, createPlayer } from "./createPlayer";

Player.HistoryPlayer = HistoryPlayer;
Player.createHistoryPlayer = createHistoryPlayer;
Player.createPlayer = createPlayer;

export default Player;
