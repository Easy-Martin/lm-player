```javascript

yarn add lm-player // or
npm i lm-player

//React simple demo
import LMPlayer from 'lm-player'
ReactDOM.render(
  <LMPlayer
    file={`./video.mp4?${Math.random()}`}
    isLive={false}
    autoplay={true}
    loop={true}
    poster="./poster.png"
    onInitPlayer={player => {
      console.log(player);
    }}
  />,
  document.getElementById("root")
);


//other simple demo
import LMPlayer from 'lm-player'
const container = document.getElementById("root")
LMPlayer.createPlayer({
  container,
  isLive:true,
  file: `./video.mp4?${Math.random()}`,
  onInitPlayer: player => {
    console.log(player);
  }
});


// 其他文档待补充
```
