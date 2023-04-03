import { Component } from 'react'
import { Image } from 'semantic-ui-react'
import SearchBar from './components/SearchBar'
import unsplash from './utils/unsplash'

class App extends Component {
    state = { images: [], submitState: false }

    onSearchSubmit = async(term) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term },
        })
        this.setState({ images: response.data.results })
        this.setState({ submitState: true })
        console.log(response.data.results)
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                {this.state.submitState ?
                    <div className="ui segment">
                        <Image.Group size="small">
                            {this.state.images.map((image, key) => {
                                return (
                                    <Image 
                                        key={key}
                                        src={image.urls.small} 
                                        style={
                                            { 
                                                objectFit: 'cover',
                                                width: '200px',
                                                height: '200px',
                                            }
                                        }
                                        />
                                )
                            })}
                        </Image.Group>
                    </div>
                : null}
            </div>
        )
    }
}

export default App