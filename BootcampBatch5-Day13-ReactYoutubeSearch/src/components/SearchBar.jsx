import React, { Component, createRef } from 'react'
import { Button } from 'semantic-ui-react'

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.termRef = createRef();
    }

    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.onSubmit(this.termRef.current.value)
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>YT Search</label>
                        <div className="ui icon input" bis_skin_checked="1">
                            <input type="text" placeholder="Search..." ref={this.termRef} />
                            <i className="circular search link icon"></i>
                        </div>
                    </div>
                    <Button type="submit">Submit</Button>
                </form>
            </div>
        )
    }
}

export default SearchBar