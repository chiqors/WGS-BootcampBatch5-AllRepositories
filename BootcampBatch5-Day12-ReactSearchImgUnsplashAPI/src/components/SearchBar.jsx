import React, { Component } from 'react'
import "semantic-ui-css/semantic.min.css";
import { Input, Button } from 'semantic-ui-react'

class SearchBar extends Component {
    state = { term: '' }

    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.onSubmit(this.state.term)
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <Input
                            type="text"
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })}
                        />
                    </div>
                    <Button type="submit">Submit</Button>
                </form>
            </div>
        )
    }
}

export default SearchBar