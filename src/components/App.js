import React from "react";
import SongList from "./SongList";
import SongDetail from "./SongDetail";
//import {selectSong} from '../actions'; //沒指定自動指向index, 指定單一 export function 加{}

const App = () => {
  return (
    <div className="ui container grid" style={{ margin: "20pt" }}>
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
