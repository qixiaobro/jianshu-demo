import React from "react";
import { TopicWrapper, TopicItem } from "../style";
import { connect } from "react-redux";

const Topic = props => {
  const { topicList } = props;
  return (
    <TopicWrapper>
      {topicList.map(item => {
        return (
          <TopicItem key={item.get("id")}>
            <img className="topic-pic" alt='' src={item.get("imgUrl")} />
            {item.get("title")}
          </TopicItem>
        );
      })}
    </TopicWrapper>
  );
};

const mapStatetoProps = state => ({
  topicList: state.getIn(["home", "topicList"])
});

export default connect(mapStatetoProps, null)(Topic);
