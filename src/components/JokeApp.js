import React from 'react';

class JokeApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            joke: '',
            isLoading: false
        };
    }
    
    render() {
        return (
            <div>
                <p>{this.state.isLoading ? "Loading..." : this.state.joke}</p>
                <button onClick={this._fetchJoke}>New Joke</button>
            </div>
        );
    }

    _fetchJoke = () => {
        const url = 'https://api.chucknorris.io/jokes/random?category=dev';
        this.setState({
            isLoading: true,
        }, () => {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        joke: data.value,
                        isLoading: false
                    }, () => {
                        console.log('New joke stored');
                    });
                })
        })
    }
}

export default JokeApp;