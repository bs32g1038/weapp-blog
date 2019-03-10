import { combineReducers } from 'redux'
import articles from './articles'
import guestbooks from './guestbook'
import links from './link'
import counter from './counter'

export default combineReducers({
  counter,
  guestbooks,
  articles,
  links
})
