import React, { Component } from 'react'

class AudioEditor extends React.Component {
    state = {
        selectedTrack: null,
        player: "stopped"
    };


    componentDidUpdate(prevProps, prevState) {
        if (this.state.selectedTrack !== prevState.selectedTrack) {
            let track;
            switch (this.state.selectedTrack) {
                case "Campfire Story":
                    track = campfireStory
                    break;
                case "Booting Up":
                    track = bootingUp
                    break;
                default:
                    break;
            }
            if (track) {
                this.player.src = track;
                this.player.play()
            }
        }
        if (this.state.player !== prevState.player) {
            if (this.state.player === "paused") {
                this.player.pause();
            } else if (this.state.player === "stopped") {
                this.player.pause();
                this.player.currentTime = 0;
                this.setState({ selectedTrack: null });
            } else if (
                this.state.player === "playing" &&
                prevState.player === "paused"
            ) {
            }
            this.player.play();
        }
    }

    componentDidMount() {
        this.player.addEventListener("timeupdate", e => {
            this.setState({
                currentTime: e.target.currentTime,
                duration: e.target.duration
            });
        });
    }

    componentWillUnmount() {
        this.player.removeEventListener("timeupdate", () => { });
    }




    render() {
        function getTime(time) {
            if (!isNaN(time)) {
                return Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
            }
        }
        const currentTime = getTime(this.state.currentTime)
        const duration = getTime(this.state.duration)
        return (
            <>
                <h1>Audio Editor</h1>
                <ul>{list}</ul>
                <div>
                    {this.state.player === "paused" && (
                        <button onClick={() => this.setState({ player: "playing" })}>
                            Play
                    </button>
                    )}
                    {this.state.player === "playing" && (
                        <button onClick={() => this.setState({ player: "paused" })}>
                            Pause
                    </button>
                    )}
                    {this.state.player === "playing" || this.state.player === "paused" ? (
                        <button onClick={() => this.setState({ player: "stopped" })}>
                            Stop
                    </button>
                    ) : (
                            ""
                        )}
                    {this.state.player === "playing" || this.state.player === "paused" ? (
                        <div>
                            {currentTime} / {duration}
                        </div>
                    ) : (
                            ""
                        )}
                </div>
                <audio ref={ref => (this.player = ref)} />
            </>
        );
    }
}
