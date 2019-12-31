import React from "react";
import ReactDOM from "react-dom";
import Player from "./player";
import HistoryPlayer from "./history";

export function createPlayer({ container, children, onInitPlayer, ...props }) {
  ReactDOM.render(
    <Player
      {...props}
      onInitPlayer={player => {
        player.destroy = function() {
          ReactDOM.unmountComponentAtNode(container);
        };
        onInitPlayer && onInitPlayer(player);
      }}
    >
      {children}
    </Player>,
    container
  );
}
export function createHistoryPlayer({ container, children, onInitPlayer, ...props }) {
  ReactDOM.render(
    <HistoryPlayer
      {...props}
      onInitPlayer={player => {
        player.destroy = function() {
          ReactDOM.unmountComponentAtNode(container);
        };
        onInitPlayer && onInitPlayer(player);
      }}
    >
      {children}
    </HistoryPlayer>,
    container
  );
}
