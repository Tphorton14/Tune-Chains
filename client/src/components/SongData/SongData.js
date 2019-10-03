import React, { Component } from "react";
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import API from "../../utils/API"
const axios = require('axios')
// import {Col, Container, Row} from "../Grid"

class SongData extends Component {

    constructor(props) {
        super(props);
          this.state = {
            selectedFile: null
          }
       
      }
    componentDidUpdate() {
        console.log('props', this.props.song);
    }

    handleSongRemix = () => {
        console.log("remix", this.props.song.song_id);
    };

    //remix
    handleSongAdd = () => {
        console.log("add to lib: ", this.props.song)
        API.saveSong(this.props.song)
    };

    downloadSong = () => {
        console.log("download", this.props.song.song_id)
    };

    creatorLink = () => {
        console.log("creator link")
    };



    onChangeHandler=event=>{
        this.setState({
          selectedFile: event.target.files[0],
          loaded: 0,
        })
      }
      onClickHandler = () => {
        const data = new FormData()
        data.append('file', this.state.selectedFile)
        axios.post("upload-song", data, { 
           // receive two    parameter endpoint url ,form data
       })
     
     .then(res => { // then print response status
         console.log(res.statusText)
      })
     }


    render() {
        return (
            <div>
                <div className="songinformation">
                    <h1>{this.props.song.song_name}</h1>
                    <h2>Original Artist: {this.props.song.song_creator}</h2>
                    <h2>{this.props.song.song_desc}</h2>
                    <img src={this.props.song.song_pic_url} alt="missing img"></img>
                </div>
                <div className="button-toolbar">
                    <ButtonToolbar>
                        <Button variant="primary"
                            onClick={this.handleSongRemix}
                        >Create Remix</Button>
                        <input type="file" name="file" onChange={this.onChangeHandler}/>
                        <button type="button" class="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button> 
                                    {/* <Button variant="secondary">Secondary</Button>
                        <Button variant="warning">Warning</Button>
                        <Button variant="danger">Danger</Button> */}
                                    <Button variant="info"
                                        onClick={this.handleSongAdd}
                                    >
                                        Add to my Library</Button>
                                    <Button variant="dark"
                                        onClick={this.downloadSong}
                                    >Download</Button>
                                    <Button variant="warning"
                                        onClick={this.creatorLink}
                                    >Creator Home</Button>
                    </ButtonToolbar>
                </div>
                        </div>
                        );
                    }
                }
export default SongData;