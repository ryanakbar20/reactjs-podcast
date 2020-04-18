import React from 'react';
import Header from './components/Header'
import './App.css';
import Podcast from './components/Podcast'
import AddButton from './components/AddButton.js'
import NewPodcast from './components/NewPodcast.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu';


const isSearched = searchTerm => item => item.title.toLowerCase().includes(searchTerm.toLowerCase());

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      podcast: [{id: '1', title: 'Belajar Membuat 1', thumbnail: './img/logo192.png'},
                {id: '2', title: 'Belajar Membuat 2', thumbnail: './img/logo192.png'},
                {id: '3', title: 'Belajar Membuat 3', thumbnail: './img/logo192.png'}],
      input: '' ,
      ui : {visibility : false}
    }
  }
  handleButton () {
    console.log("auah")
  }

  handleInput = (event) => {
    this.setState(
      {input : event.target.value}
    )
  }

  handleNewPodcast = (newPodcast) => {
    this.setState({
      podcast: [...this.state.podcast, newPodcast]
    })
  }

  visibility = () => {
    this.setState({
      ui:{
        visibility: !this.state.ui.visibility
      }
    })
  }
  
  render () {
    return (
      <div className="wrapper">
        <Menu />
        <Header />
        <NewPodcast onHandleNewPodcast={this.handleNewPodcast} 
        visibility={this.state.ui.visibility} />
        <div className="search-bar">
          <form>
            <input type="text" placeholder="Search for podcast"
            onChange={this.handleInput}/>
            <button onClick={this.handleButton} type="button">Search</button>
          </form>
        </div>
        <div className="podcasts">
          {this.state.podcast
          .filter(isSearched(this.state.input))
          .map(podcast => (<Podcast title={podcast.title} 
          thumbnail={podcast.thumbnail} />))}
        </div>
        <AddButton visibility={this.visibility} />
      </div>
    )
  }
}

export default App;
