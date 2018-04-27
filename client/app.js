import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchLesson} from './store/lesson'

import Lesson from './components/Lesson'

class App extends Component {
  componentDidMount(){
    this.props.fetchLesson()
  }
  render() {
    return (
      <Lesson lesson={this.props.lesson}/>
    );
  }

}
function mapStateToProps(state,props){
  return {
    lesson: state.lesson,
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchLesson},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
