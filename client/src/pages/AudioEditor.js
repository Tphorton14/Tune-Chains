//audio adjusters based off of MDN documentation

import React, { Component } from "react"
import AudioEditor from '../../src/components/AudioEditor/AudioEditor'
// const Spotify = require("../components/Spotify")

class AudioEditor extends Component {
    render() {
        <div className="container-fluid">
            <div className="jumbotron">
                <AudioEditor />
                <section className="tape">
                    <audio src="" crossorigin="anonymous" ></audio>
                    <button className="playButton" aria-checked="false">
                        <span>Play/Pause</span>
                    </button>
                </section>
            </div>
            <div className="wavDiv"><button className="convert2Wav">Convert Current File to WAV Format</button></div>
            <div className="trackDiv"><button className="track">Add MIDI Controller</button></div>
            <Wrapper >{this.Spotify.props}</Wrapper>
            <div className="sampleDiv"><label for="file">Upload File From Computer</label><input type="file" id="file" name="file" ></input></div>
            <label className="volumeLabel">Volume</label>
            <input type="range" id="volumeModulator" className="control-volume" min="0" max="2" value="1" list="gain-vals"
                step="0.01" data-action="volume" />
            <label className ="attackLabel">Attack</label>
            <input className ="attackModulator"  type="range" min="0" max="1" value="0.2" step="0.1" />
            <label for="releaseLabel">Release</label>
            <input className="releaseModulator" id="release" type="range" min="0" max="1" value="0.5" step="0.1" />
            <label className="hzLabel">Hz</label>
            <input className="frequencyModulator" id="hz" type="range" min="660" max="1320" value="880" step="1" />
            <label className ="durationLabel">Duration</label>
            <input className="durationModulator" id="duration" type="range" min="0" max="2" value="1" step="0.1" />
            <label for="pannerLabel">Balance</label>
            <datalist className="leftOrRightSound" />
            <option value="-1" label="left" />
            <option value="1" label="right" />
        </div>
    }
}