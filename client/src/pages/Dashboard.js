import React, { Component } from "react";
import Tree from "../components/Tree/Tree";
import SongData from "../components/SongData/SongData";
import API from "../utils/API";
// import songdata from "../components/Tree/songData.json"



//Grid and List html components not yet used====================================================
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import Jumbotron from "../components/Jumbotron";
//==============================================================================================


// import TrackVisualizer from "../components/TrackVisualizer";

class Dashboard extends Component {

  state = {
    data: [],
    clickedSong: {},
  };

  componentDidMount() {
    API.getUserSongs(1).then(dbData => {
      console.log(dbData)
      this.setState({
        data: dbData.data
      })
    });
  };

  handleClick = song => {
    console.log("handle DB: ", song);
    this.setState({ clickedSong: song });
  };


  render() {
    return (
      <div>
        <h1 className="dashTitle text-center">Tune Chainz Dashboard</h1>
        <div className="Dashboard text-center container">
          <div className="musicRow row">
            <div className="col-4 sidebar">
              <Tree
                onClick={this.handleClick}
                data={this.state.data}
              />
            </div>
            <div className="col-8 songdata">
              <SongData
                song={this.state.clickedSong}
              />
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Dashboard;
