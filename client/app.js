import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchLesson,updateLesson,addComment} from './store/lesson'
import {changeSearch} from './store/search'
import {commentFilter} from './store/commentFilter'

import Lesson from './components/Lesson'

class App extends Component {
  componentDidMount(){
    this.props.fetchLesson()
  }
  render() {
    return (
      <Lesson students={this.props.students} commentFilter={this.props.commentFilter} changeSearch={this.props.changeSearch} updateLesson={this.props.updateLesson} lesson={this.props.lesson} comments={this.props.comments} addComment={this.props.addComment}/>
    );
  }

}

const filterComments = (comments,search,filter) =>{
  console.log(filter)
  if(!comments) return []
  let newComments = [...comments]
  if(search){
    const regex = new RegExp(search, 'i');
    newComments = newComments.filter(comment => comment.text.match(regex))
  }
  if(filter === "newest"){
    console.log('newest first')
    newComments = newComments.sort((a, b) => new Date(b.createdAt) -  new Date(a.createdAt))
  }
  if(filter === "oldest"){
    console.log('oldest first')
    newComments = newComments.sort((a, b) => new Date(a.createdAt) -  new Date(b.createdAt))
  }
  return newComments
}



function mapStateToProps(state,props){
  return {
    lesson: state.lesson,
    comments: filterComments(state.lesson.comments, state.search, state.commentFilter),
    students: state.lesson.students || []
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchLesson, updateLesson,addComment,changeSearch,commentFilter},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
