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
    this.componentDidMount()
  }

  onRemove = key => {
    const { database } = this.props
    const commentRef = database.ref(`comments/${key}`);
    
    commentRef.remove();
  };

  onEdit = (key, comment) => {
    const { database } = this.props
    const commentRef = database.ref(`comments/${key}`);
    
    commentRef.update({
      content: comment.content, 
      date: comment.date,
      number: comment.number,
      option: comment.option
    });
  };

  render() {
    return (
      <div className="App" 
        style={{
          margin: 'auto',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgb(119, 124, 255)"
          //background: "linear-gradient(rgb(201, 202, 255),rgb(119, 124, 255))"
        }}>
          <p style={{
            fontFamily:'verdana', 
            fontSize:18,
            fontWeight:'bold',
            textAlign:'center',
            paddingTop:30
          }}>Insira o seu gasto: </p>
          <NewComment sendComment={this.sendComment} />
          <Comments comments={this.state.comments} onRemove={this.onRemove} onEdit={this.onEdit}/>
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
