import React from 'react'

class NewPodcast extends React.Component {
    constructor () {
        super();
        this.state = {
            title: '',
            thumbnail: ''
        }
    }

    handleTitle = (event) => {
        this.setState(
            {title: event.target.value}
        )
    }
    handleThumbnail = (event) => {
        this.setState({
            thumbnail: event.target.value
        })
    }
    handleForm = (event) => {
        event.preventDefault();

        const newPodcast = {
            title: this.state.title,
            thumbnail: this.state.thumbnail
        }

        this.setState({
            title: '',
            thumbnail: ''
        })
        this.props.onHandleNewPodcast(newPodcast);
    }

    render() {
        return (
            <div style={this.props.visibility ? {display:'block'} : {display:'none'}}>
                <h3>Add New Podcast</h3>
                <form onSubmit={this.handleForm}>
                    <input onChange={this.handleTitle} value={this.state.title} type="text" placeholder="title"/>
                    <input onChange={this.handleThumbnail} value={this.state.thumbnail} type="text" placeholder="thumbnail url"/>
                    <button type="submit">save</button>
                </form>
            </div>
        )
    }
}

export default NewPodcast;