import React, { PureComponent } from "react";
import Topic from "./components/Topic";
import Recomments from "./components/Recomments";
import List from "./components/List";
import Writer from "./components/Writer";
import { actionCreators } from "./store";
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from "./style";
import { connect } from "react-redux";
class Home extends PureComponent {

    
  handleScrollTop() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className="banner-img"
            alt=""
            src="https://static.zhihu.com/heifetz/assets/sign_bg.db29b0fb.png"
          />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recomments />
          <Writer />
        </HomeRight>
        {this.props.showScroll ? (
          <BackTop onClick={this.handleScrollTop}> 回到顶部 </BackTop>
        ) : (
          ""
        )}
      </HomeWrapper>
    );
  }

  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }

  componentWillUnmount(){
    window.removeEventListener('scroll',this.props.changeScrollTopShow)

  }

  bindEvents(){
      window.addEventListener('scroll',this.props.changeScrollTopShow)
  }

}

const mapState = state => ({
  showScroll: state.getIn(["home", "showScroll"])
});

const mapDispatch = dispatch => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeInfo());
  },
  changeScrollTopShow(){
    if(document.documentElement.scrollTop>400){
        dispatch(actionCreators.toggleTopShow(true))
    }else{
        dispatch(actionCreators.toggleTopShow(false))
    }
  }
});
export default connect(mapState, mapDispatch)(Home);
