import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'
const App =()=>{
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>warning</h4>
                are you sure?
                </div>
                </ApprovalCard>
                
            <ApprovalCard>
                <CommentDetail 
                author="sam" 
                timeAgo="today at 4:45pm" 
                content="hi"
                avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
           <CommentDetail 
           author="alex" 
           timeAgo="today at 2:00pm" 
           content="hello"
           avatar={faker.image.avatar()}
           />
           </ApprovalCard>
           <ApprovalCard>
           <CommentDetail 
           author="jane" 
           timeAgo="yesterday at 5:00pm" 
           content="yyoyo"
           avatar={faker.image.avatar()}
           />
          </ApprovalCard>
        </div>
    );

};

ReactDOM.render(<App/>,document.querySelector('#root'));

