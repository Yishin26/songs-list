import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ myselectedSong }) => {
  if (!myselectedSong) {
    return <div>Select a song!!</div>;
  }
  return <div className="ui header">
  Title:&nbsp;{myselectedSong.title}<br/>
  Duration:&nbsp;{myselectedSong.duration}
  </div>;
};

const mapStateToProps = state => {
  //console.log(state);
  return { myselectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
