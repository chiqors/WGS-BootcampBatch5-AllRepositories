import { Component } from 'react'
import { Image } from 'semantic-ui-react'
import SearchBar from './components/SearchBar'
import youtube from './utils/youtube'
// import fakeResponse from './utils/data.json'

class App extends Component {
    state = { videos: [], selectedVideo: null, submitState: false }

    onSearchSubmit = async(term) => {
        // get the response from the youtube api
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })
        // get the fake response from the json file for testing
        // const response = fakeResponse
        // console.log(response)

        // get the first video from the response to display it
        this.setState({ selectedVideo: response.data.items[0] })
        this.setState({ videos: response.data.items, submitState: true })

        // get the first video from the fake response to display it
        // this.setState({ selectedVideo: response.items[0] })
        // get the rest of the videos from the fake response to display them
        // this.setState({ videos: response.items, submitState: true })
    }

    onHandleClick = (video) => {
        this.setState({ selectedVideo: video })
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                {this.state.submitState ? 
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <iframe width="100%" height="400" src={`https://www.youtube.com/embed/${this.state.selectedVideo?.id.videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <div className="ui segment">
                                <h4 className="ui header">{this.state.selectedVideo?.snippet.title}</h4>
                                <p>{this.state.selectedVideo?.snippet.description}</p>
                            </div>
                        </div>
                        <div className="five wide column">
                            <div className="ui segment">
                                <h4 className="ui header">Videos</h4>
                                <div className="ui items">
                                    {this.state.videos.map((video) => {
                                        return (
                                            <div class="item" bis_skin_checked="1" key={video.id.videoId} style={{ cursor: 'pointer' }} onClick={() => this.onHandleClick(video)}>
                                                <div class="ui small image" bis_skin_checked="1">
                                                    <Image src={video.snippet.thumbnails.medium.url} />
                                                </div>
                                                <div class="middle aligned content" bis_skin_checked="1">
                                                    {video.snippet.title}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                : null}
            </div>
        )
    }
}

export default App