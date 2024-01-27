import {Component} from 'react'

import './index.css'

import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Comments</h1>

          <form>
            <p>say some thing about 4.0 technologies</p>
            <input type="text" placeholder="Your Name" />
            <textarea rows="6" placeholder="Your Comment" />
            <button type="submit">Add Comment</button>
          </form>
        </div>
      </div>
    )
  }
}
export default Comments
