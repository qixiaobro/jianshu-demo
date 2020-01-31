import {
    fromJS
} from 'immutable';
import * as constants from './constants'
const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    articlePage: 1,
    showScroll: false,
});

const changeHomeData = (state, action) => {
    return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
    })
}

const addArticalList = (state, action) => {
    return state.merge({
        articleList: state.get('articleList').concat(action.list),
        articlePage: action.nextPage
    })
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_HOME_DATA:
            return changeHomeData(state, action)
        case constants.ADD_ARTICAL_LIST:
            return addArticalList(state, action)
        case constants.TOGGLE_TOP_SHOW:
            return state.set('showScroll', action.value)
        default:
            return state
    }
}