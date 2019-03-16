import { combineReducers } from 'redux'
import articles from './articles'
import guestbooks from './guestbook'
import links from './link'
import article from './article'

export default combineReducers({
  article,
  guestbooks,
  articles,
  links
})
