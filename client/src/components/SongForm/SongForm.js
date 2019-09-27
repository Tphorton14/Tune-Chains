import React, { Component } from "react";
import Button from 'react-bootstrap/Button'
import API from "../../utils/API";
// import {Col, Container, Row} from "../Grid"

class SongForm extends Component {
    componentDidUpdate() {
        console.log('props', this.props.song);
    }

    render() {
        return (
            <div>
                <form>
                    Song Name:<br></br>
                    <input type="text" name="songname" /><br></br>
                    Song Description:<br></br>
                    <input type="text" name="songdesc" />
                    Genres:<br></br>
                    <input type="text" name="genres" />
                </form>
                <Button variant="primary"
                    onClick={this.handleAdd}
                >Submit New Remix</Button>
            </div>
        );
    }
}

export default SongForm;