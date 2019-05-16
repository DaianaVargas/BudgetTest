import React, { Component } from 'react';
import Comments from './Comments';
import NewComment from './NewComment'
//import { database } from './firebase'

class App extends Component {
  state = {
    comments: {},
    isLoading: false
  }

  componentDidMount() {
    const { database } = this.props
    this.setState({ isLoading: true })
    console.log('database', database)

    this.comments = database.ref('comments')
    console.log('comments', this.comments)
    this.comments.on('value', snapshot => {
      console.log('snapshot.val()', snapshot.val())
      this.setState({ 
        comments: snapshot.val(),
        isLoading: false
      })
    })
  }

  sendComment = (newComment) => {
    const { database } = this.props
    const id = database.ref().child('comments').push().key
    
    const comments = {}
    comments['comments/' + id] = {
      content: newComment.content,
      date: newComment.date,
      number: newComment.number,
      option: newComment.option
    }
    database.ref().update(comments)
    console.log(comments)
  }

  deleteComment = (comment) => {
    const { database } = this.props
    const id = database.ref().child('comments').push().key
    
    //const comments = {}
    //database.ref().update(comments)
    console.log('database', database)
    console.log('child', database.ref().child('comments'))
    console.log('id', id)
  }

  render() {
    return (
      <div className="App" 
        style={{
          margin: 'auto',
          width: '50%',
        }}>
          <p style={{
            fontFamily:'verdana', 
            fontSize:18,
            fontWeight:'bold',
            textAlign:'center',
          }}>Insira o seu gasto: </p>
          <NewComment sendComment={this.sendComment} />
          <Comments comments={this.state.comments} />
          {
            this.state.isLoading && 
            <p style={{
              fontFamily:'verdana', 
              fontSize:18,
              fontWeight:'bold',
              textAlign:'center',
            }}>Carregando ... </p>
          }
      </div>
    );
  }
}

export default App;
