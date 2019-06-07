import React, { Component } from 'react'

class NewComment extends Component {  
    state = {
        newComment: { 
            content: '', 
            date: '',
            number: 0,
            option: 'Contas a Pagar'
        },
        typeOfExpense: [
          { id: 1, value: 'Contas a pagar'},
          { id: 2, value: 'Transporte'},
          { id: 3, value: 'Alimentação'},
          { id: 4, value: 'Saúde'},
          { id: 5, value: 'Entretenimento'},
          { id: 6, value: 'Cartão de crédito'},
        ]      
    }
    
    handleChange = event => {
        const { value } = event.target
        
        this.setState((prevState, props) => ({
            newComment: { content: value, date: new Date(), number: prevState.newComment.number, option: prevState.newComment.option }
        }))
    }

    handleNumberChange = event => {
        const { value } = event.target
        
        console.log('number', value, Number(value))
        this.setState((prevState, props) => ({
            newComment: { content: prevState.newComment.content, date: prevState.newComment.date, number: Number(value), option: prevState.newComment.option }
        }))
    }

    handleOptionChange = event => {
        const { value } = event.target
        
        this.setState((prevState, props) => ({
            newComment: { content: prevState.newComment.content, date: prevState.newComment.date, number: prevState.newComment.number, option: value }
        }))
    }

    sendComment = () => {
        console.log(this.state.newComment)
        this.props.sendComment(this.state.newComment)
        this.setState({
            newComment: { 
                content: '', 
                date: '',
                number: 0,
                option: 'Contas a Pagar'
            }
        })
    }

    render(){
        return(
            <div align="center">
                <div style={{marginBottom: 10}}>
                    <textarea value={this.state.newComment.content} onChange={this.handleChange} style={{fontFamily:'verdana', fontSize:14, width: 200}} ></textarea>
                </div>
                <div style={{marginBottom: 10}}>
                    <input type="number" name="value" min="1" value={this.state.newComment.number} onChange={this.handleNumberChange} style={{fontFamily:'verdana', fontSize:14, width: 200}} />
                </div>
                <div style={{marginBottom: 10}}>
                    <select id="mySelect" value={this.state.newComment.option} onChange={this.handleOptionChange} style={{fontFamily:'verdana', fontSize:14, width: 200}} >
                        <option>Contas a Pagar</option>
                        <option>Transporte</option>
                        <option>Alimentação</option>
                        <option>Saúde</option>
                        <option>Entretenimento</option>
                        <option>Cartão de Crédito</option>
                        <option>Extra</option>
                    </select>
                </div>
                <div style={{marginBottom: 10, marginTop:20}}>
                    <button onClick={this.sendComment}
                        style={{backgroundColor: 'rgb(220, 220, 255)',
                        padding: 15,
                        textAlign: 'center',
                        fontSize: 16,
                        cursor: 'pointer',
                        width: 100,
                        fontFamily:'verdana', 
                        fontWeight:'bold',
                        marginBottom:10,
                        borderRadius:10}}>Enviar</button>
                </div>
            </div>
        )
    }
}

export default NewComment