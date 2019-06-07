import React from 'react'
import Comment from './Comment'

const Comments = ({comments, onRemove, onEdit}) => {
    const keys = Object.keys(comments)
    // var result = [];
    // keys.forEach(function(key){
    //     result.push(comments[key]);
    // });

    // const commentsOrdered = result.sort((a, b) => new Date(b.date) - new Date(a.date))
    // const keysOrdered = Object.keys(commentsOrdered)

    return (
        <div>
            { keys.map( key => <Comment key={key} keyId={key} comment={comments[key]} onRemove={onRemove} onEdit={onEdit} /> )}
        </div>
    )
}

export default Comments