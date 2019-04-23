
import Player from '../player'
import ContrallerBar from "../contraller_bar";
import Loading from "../loading";
import HistoryTimeLine from "./time_line_history";
import ErrorEvent from "../event/errorEvent";
import DragEvent from '../event/dragEvent'
import Api from "../api";
import VideoEvent from "../event";
import { getVideoType, createFlvPlayer, createHlsPlayer } from "../util";

class HistoryPlayer extends Player {
  constructor(props) {
    super(props)
    this.playIndex = 0
  }
  componentDidMount() {
    this.playContainer = ReactDOM.findDOMNode(this.playContainerRef.current)
    this.player = this.playContainer.querySelector('video')
    this.checkFirstFile()
    this.initPlayer(this.playIndex, true);
    this.event = new VideoEvent(this.player);
    this.api = new Api(this.player, this.playContainer, this.event, this.flv, this.hls);
    if (this.props.playsinline) {
      this.player.setAttribute("playsinline", "");
      this.player.setAttribute("webkit-playsinline", "");
      this.player.setAttribute("x5-playsinline", "");
    }
    if (this.props.autoPlay) {
      this.api.getApi().play();
    }
    this.forceUpdate();
    this.props.onInitPlayer && this.props.onInitPlayer(this.getPlayerApiContext());
  }
  checkFirstFile = () => {
    const { defaultTime, historyList } = this.props
    if (!historyList) {
      return
    }
    if (!defaultTime) {
      this.playIndex = historyList.fragments.findIndex(v => !!v.file)
    }
  }
  initPlayer = (index, isFrist) => {
    const { historyList } = this.props
    if (!historyList || !historyList.fragments[index] || !historyList.fragments[index].file) {
      return null;
    }
    this.flv && this.flv.unload()
    this.hls && this.hls.stopLoad()
    const type = getVideoType(historyList.fragments[index].file);
    if (type === "flv" || this.props.type === "flv") {

      this.flv = createFlvPlayer(this.player, this.props);
    } else if (type === "m3u8" || this.props.type === "hls") {

      this.hls = createHlsPlayer(this.player, historyList.fragments[index].file);
    } else {
      this.player.src = historyList.fragments[index].file;
    }
    if (!isFrist) {
      console.log(111111111111)
      this.playIndex = index;
      this.forceUpdate()
    }

  };
  renderVideoTools = () => {
    const { historyList } = this.props
    if (!this.player) {
      return null;
    }
    return (
      <>
        <ContrallerBar />
        <Loading />
        <HistoryTimeLine historyList={historyList} playIndex={this.playIndex} initPlayer={this.initPlayer} />
        <ErrorEvent />
        <DragEvent />
      </>
    );
  };
}

export default HistoryPlayer