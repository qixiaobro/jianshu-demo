import React from "react";
import { connect } from "react-redux";
import { RecommendWrapper, RecommendItem } from "../style";

const Recomments = props => {
  const { recommendList } = props;
  return (
    <RecommendWrapper>
      {recommendList.map(item => {
        return <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')}> </RecommendItem>;
      })}
    </RecommendWrapper>
  );
};

const mapStatetoProps = state => ({
  recommendList: state.getIn(["home", "recommendList"])
});

export default connect(mapStatetoProps, null)(Recomments);
