import axios from 'axios'
import * as constants from './constants'
import {fromJS} from 'immutable'
const changeHomeData = result =>({
    type:constants.CHANGE_HOME_DATA,
    topicList:result.data.data.topicList,
    articleList:result.data.data.articleList,
    recommendList:result.data.data.recommendList,
})

const addHomeList = (list,nextPage)=>({
    type:constants.ADD_ARTICAL_LIST,
    nextPage:nextPage,
    list:fromJS(list)
})

export const getHomeInfo = ()=>{
    return (dispatch)=>{
        axios.get('/api/home.json').then((res)=>{
            dispatch(changeHomeData(res))
        })
    }
}

export const getMoreList=(page)=>{
    return(dispatch)=>{
        axios.get('/api/homeList.json?page='+page).then((res)=>{
            dispatch(addHomeList(res.data.data,page+1))
        })
    }
}

export const toggleTopShow=(show)=>({
    type:constants.TOGGLE_TOP_SHOW,
    value:show
})