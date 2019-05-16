import React from 'react'
// import { ReactComponent as Transportation } from './assets/transportation.svg';

// pure-functions
const Comment = ({comment}) => {
    let c = {
        content: 'vazio',
        date: '',
        number: 0,
        option: ''
    }

    if (comment && comment.content) {
        c = comment
    }

    const dateFormat = c.date ? (new Date(c.date)).toLocaleDateString() : ''
    const numberFormat = c.number ? c.number.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : ''
    const logo = (option) => {
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

    return (
        <div align="center" style={{ maxWidth:400,
            margin: 'auto',
            width: '100%',}}>
            {/* <div>{JSON.stringify(this.props.comment)}</div>  */}
            <div style={{
                backgroundColor:'LightGray', 
                padding:15,
                
            }}>
                <div style={{float: "left", padding: 5}}>
                    <img src={logo(c.option)} alt={c.content} height={30} width={30}></img>
                </div>
                <div>
                    <div style={{fontFamily:'verdana', fontSize:14}}>Comentário: {c.content}</div>
                    
                    <div style={{fontFamily:'verdana', fontSize:14}}>Valor: {numberFormat}</div>
                    <div style={{fontFamily:'verdana', fontSize:12}}>{dateFormat}</div>
                </div>
                
            </div>
            <br/>
        </div>
    )
}

export default Comment