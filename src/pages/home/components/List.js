import React from "react";
import { connect } from "react-redux";
import { ListItem, ListInfo, LoadMore } from "../style";
import { actionCreators } from "../store";
import {Link} from 'react-router-dom'
const List = props => {
  const { articleList, getMoreList, articlePage } = props;
  return (
    <div>
      
      {articleList.map((item, index) => {
        return (
          <Link key={index} to='/detail'>
            <ListItem >
              <img className="pic" alt="" src={item.get("imgUrl")} />
              <ListInfo>
                <h3 className="title"> {item.get("title")} </h3>
                <p className="desc"> {item.get("desc")} </p>
              </ListInfo>
            </ListItem>
          </Link>
        );
      })}
      <LoadMore onClick={() => getMoreList(articlePage)}> 更多 </LoadMore>
    </div>
  );
};

const mapStatetoProps = state => ({
  articleList: state.getIn(["home", "articleList"]),
  articlePage: state.getIn(["home", "articlePage"])
});

const mapDispatch = dispatch => ({
  getMoreList(page) {
    dispatch(actionCreators.getMoreList(page));
  }
});

export default connect(mapStatetoProps, mapDispatch)(List);
