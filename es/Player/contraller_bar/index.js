import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import '../style/bar.less';
import LeftBar from './left_bar';
import RightBar from './right_bar';
function ContrallerBar(_ref) {
  var rightExtContents = _ref.rightExtContents,
    rightMidExtContents = _ref.rightMidExtContents,
    visibel = _ref.visibel,
    leftExtContents = _ref.leftExtContents,
    leftMidExtContents = _ref.leftMidExtContents,
    reload = _ref.reload,
    hideTimeProgress = _ref.hideTimeProgress,
    oneFpsPlay = _ref.oneFpsPlay;
  return /*#__PURE__*/ _jsx(_Fragment, {
    children: /*#__PURE__*/ _jsxs('div', {
      className: 'contraller-bar-layout '.concat(!visibel ? 'hide-contraller-bar' : ''),
      children: [
        /*#__PURE__*/ _jsx(LeftBar, {
          oneFpsPlay: oneFpsPlay,
          hideTimeProgress: hideTimeProgress,
          reload: reload,
          leftMidExtContents: leftMidExtContents,
          leftExtContents: leftExtContents,
        }),
        /*#__PURE__*/ _jsx(RightBar, {
          rightExtContents: rightExtContents,
          rightMidExtContents: rightMidExtContents,
        }),
      ],
    }),
  });
}
export default ContrallerBar;
