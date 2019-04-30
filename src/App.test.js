import React from 'react';
import App from './App';
import { shallow } from 'enzyme'
import Comments from './Comments'
import NewComment from './NewComment'

describe('<App />', () => {
  it('renders without crashing', () => {
    // const div = document.createElement('div');
    // ReactDOM.render(<App />, div);
    // ReactDOM.unmountComponentAtNode(div);
    const database = {
      ref: jest.fn()
    }
    database.ref.mockReturnValue({
      on: jest.fn()
    })
    const wrapper = shallow(<App database={database} />)
    //console.log(wrapper.find(Comments).length)
    expect(wrapper.find(Comments).length).toBe(1)
    expect(wrapper.find(NewComment).length).toBe(1)
    expect(wrapper.find('p').length).toBe(1)
  });
  
  it('adds a new comment', () => {
    const database = {
      ref: jest.fn()
    }
    const child = jest.fn()
    const update = jest.fn()
    database.ref.mockReturnValue({
      on: jest.fn(),
      child,
      update
    })
    const push = jest.fn()
    child.mockReturnValue({
      push
    })
    push.mockReturnValue({
      key:'1'
    })

    const wrapper = shallow(<App database={database} />)
    const newComment = {
      content:'new comment', 
      date: '05/04/2019'
    }
    
    wrapper.instance().sendComment(newComment)
    expect(child).toBeCalledWith('comments')
    expect(update).toBeCalledWith({ 
      'comments/1': { content: 'new comment', date: '05/04/2019' } 
    })
  });
})
