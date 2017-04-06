import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import Header from './components/header';
const API_KEY = 'AIzaSyBpaTMe9eKVJlG3VPMrAMX9uAJnJwOLyQU';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('cats');
  }
  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
         videos:videos,
         selectedVideo: videos[0]
      });
      console.log(JSON.stringify(videos));
    });
  }
  render(){
    const videoSearch = _.debounce((term)=>{this.videoSearch(term)}, 300);
    return (
      <div>
        <Header />
        <SearchBar onSearchTerm={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
        />
      </div>
    );
  }

}
ReactDOM.render(
  <App />,
  document.querySelector('.container')
);
