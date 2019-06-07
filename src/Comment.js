import React, { Component } from 'react'

class Comment extends Component {  
    constructor(props) {
        super(props);
        
        this.state = {
            comment: this.props.comment,
            dateFormat: this.props.comment.date ? (new Date(this.props.comment.date)).toLocaleDateString() : '',
            numberFormat: this.props.comment.number ? this.props.comment.number.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : '',
            typeOfExpense: [
              { id: 1, value: 'Contas a pagar'},
              { id: 2, value: 'Transporte'},
              { id: 3, value: 'Alimentação'},
              { id: 4, value: 'Saúde'},
              { id: 5, value: 'Entretenimento'},
              { id: 6, value: 'Cartão de crédito'},
            ],
            isEdit: false     
        }
    }

    logo = (option) => {
        switch (option) {
            case 'Contas a Pagar': return require('./assets/payAccounts.svg');
            case 'Transporte': return require('./assets/transportation.svg');
            case 'Alimentação': return require('./assets/food.svg');
            case 'Saúde': return require('./assets/health.svg');
            case 'Entretenimento': return require('./assets/smile.svg');
            case 'Cartão de Crédito': return require('./assets/cardCredit.svg');
            default: return require('./assets/scared.svg'); 
        }
    }

    handleChange = event => {
        const { value } = event.target
        const date = new Date()
        
        this.setState((prevState, props) => ({
            comment: { content: value, date, number: prevState.comment.number, option: prevState.comment.option },
            dateFormat: date.toLocaleDateString()
        }))
    }

    handleNumberChange = event => {
        const { value } = event.target
        const date = new Date()
        
        this.setState((prevState, props) => ({
            comment: { content: prevState.comment.content, date, number: Number(value), option: prevState.comment.option },
            dateFormat: date.toLocaleDateString(),
            numberFormat: Number(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        }))
    }

    handleOptionChange = event => {
        const { value } = event.target
        const date = new Date()
        
        this.setState((prevState, props) => ({
            comment: { content: prevState.comment.content, date, number: prevState.comment.number, option: value },
            dateFormat: date.toLocaleDateString()
        }))
    }

    enableEditMode = () => {
        if (this.state.isEdit) {
            if (this.state.comment !== this.props.comment) {
                this.props.onEdit(this.props.keyId, this.state.comment)
            }
            
            this.setState({ isEdit: false })
        } else {
            this.setState({ isEdit: true })
        }
    }
    
    render(){
        return (
            <div align="center" style={{ maxWidth:400,
                margin: 'auto',
                width: '100%',}}>
                {/* <div>{JSON.stringify(this.props.comment)}</div>  */}
                <div style={{
                    backgroundColor:'rgb(171, 171, 255)', 
                    padding:15,
                    borderRadius:20,
                    opacity: 0.9
                }}>
                    <div style={{float: "left", padding: 5}}>
                        <img src={this.logo(this.state.comment.option)} alt={this.state.comment.content} height={80} width={80}></img>
                    </div>
                    <div>
                        {
                            !this.state.isEdit && 
                            <div>
                                <div style={{fontFamily:'verdana', fontSize:14}}>Comentário: {this.state.comment.content}</div>
                                <div style={{fontFamily:'verdana', fontSize:14}}>Valor: {this.state.numberFormat}</div>
                                <div style={{fontFamily:'verdana', fontSize:12}}>{this.state.dateFormat}</div>
                            </div>
                        }
                        {
                            this.state.isEdit && 
                            <div>
                                <div style={{marginBottom: 5}}>
                                    <textarea value={this.state.comment.content} onChange={this.handleChange} style={{fontFamily:'verdana', fontSize:12, width: 150}}></textarea>
                                </div>
                                <div style={{marginBottom: 5}}>
                                    <input type="number" name="value" min="1" value={this.state.comment.number} onChange={this.handleNumberChange} style={{fontFamily:'verdana', fontSize:12, width: 150}} />
                                </div>
                                <div style={{marginBottom: 5}}>
                                    <select id="mySelect" value={this.state.comment.option} onChange={this.handleOptionChange} style={{fontFamily:'verdana', fontSize:12, width: 150}}>
                                        <option>Contas a Pagar</option>
                                        <option>Transporte</option>
                                        <option>Alimentação</option>
                                        <option>Saúde</option>
                                        <option>Entretenimento</option>
                                        <option>Cartão de Crédito</option>
                                        <option>Extra</option>
                                    </select>
                                </div>

                            </div>
                        }
                        
                        <div>
                            { 
                                !this.state.isEdit && 
                                <button 
                                    onClick={() => this.enableEditMode()}
                                    style={{backgroundColor: 'rgb(220, 220, 255)',
                                        padding: 5,
                                        textAlign: 'center',
                                        fontSize: 12,
                                        cursor: 'pointer',
                                        width: 70,
                                        fontFamily:'verdana', 
                                        fontWeight:'bold',
                                        marginTop:10,
                                        marginBottom:5,
                                        marginLeft:0,
                                        borderRadius:8}}>Editar</button>
                            }
                            { 
                                this.state.isEdit && 
                                <button 
                                    onClick={() => this.enableEditMode()}
                                    style={{backgroundColor: 'rgb(220, 220, 255)',
                                        padding: 5,
                                        textAlign: 'center',
                                        fontSize: 12,
                                        cursor: 'pointer',
                                        width: 70,
                                        fontFamily:'verdana', 
                                        fontWeight:'bold',
                                        marginTop:10,
                                        marginBottom:5,
                                        marginLeft:85,
                                        borderRadius:8}}>Salvar</button>
                            }                            
                            <button 
                                onClick={() => this.props.onRemove(this.props.keyId)}
                                style={{backgroundColor: 'rgb(220, 220, 255)',
                                    padding: 5,
                                    textAlign: 'center',
                                    fontSize: 12,
                                    cursor: 'pointer',
                                    width: 80,
                                    fontFamily:'verdana', 
                                    fontWeight:'bold',
                                    marginTop:10,
                                    marginBottom:5,
                                    marginLeft:5,
                                    borderRadius:8}}>Excluir</button>
                        </div>
                    </div>                    
                </div>
                <br/>
            </div>
        )
    }
}

export default Comment