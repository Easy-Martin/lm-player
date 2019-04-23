
import Player from '../player'
import ContrallerBar from "../contraller_bar";
import Loading from "../loading";
import HistoryTimeLine from "./time_line_history";
import ErrorEvent from "../event/errorEvent";
import DragEvent from '../event/dragEvent'
class HistoryPlayer extends Player {
  renderVideoTools = () => {
    if (!this.player) {
      return null;
    }
    return (
      <>
        <ContrallerBar />
        <Loading />
        <HistoryTimeLine />
        <ErrorEvent />
        <DragEvent />
      </>
    );
  };
}

export default HistoryPlayer