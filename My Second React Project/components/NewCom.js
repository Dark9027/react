import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

class NewCom extends Component {
  constructor(){
    super();
    this.state={
        article:[],
        page:1,
        totalResults:0,
        loading:true
    }
    }
    

    static defaultProps={
      country:'in',
      page_size:15,
      category:'general'
    }

    static  propTypes ={
      country:PropTypes.string,
      page_size:PropTypes.number
    }

    async componentDidMount(){
      this.props.setState(10);
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pagesize=${this.props.page_size}`
      let data=await fetch(url)
      if(data.status===429){
        this.setState.article=null
        alert("API NOT WORKING - LIMIT REACHED")
      }
      else{
        // console.log("sagar");
        this.props.setState(70);
        let  res =await data.json();
        this.props.setState(100);
        this.setState( {article :res.articles,totalpage:res.totalResults,loading:false})
      }  
    }
    
    
    fetchMoreData = async () => {
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pagesize=${this.props.page_size}`
      let data=await fetch(url)
      if(data.status===429){
        this.setState.article=null
        alert("API NOT WORKING - LIMIT REACHED")
      }
      else{
        let  res =await data.json();
        this.setState( {article :this.state.article.concat(res.articles),totalpage:res.totalResults,page:this.state.page+1})
        // console.log(this.state.article);
      }  
    };

  render() {
    return (
      <>
          <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={this.state.article.length<this.state.totalpage}
          loader={<Loading/>}
          >
        <div className="container my-3">
            <h1 style={{textAlign:'center'}}>Want To Know the World...</h1>
          {this.state.loading && <Loading/>}
          <div className="row my-3">
            {this.state.article===null?[]:(this.state.article.map((e)=>{
              // console.log("")
                return(
                    <div className="col-md-4 my-2">
                <NewsItem title={e.title?e.title:""} des={e.description?e.description:""} img={e.urlToImage===null?"https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202302/w3c.jpg?itok=XgSzupmJ":e.urlToImage} read={e.url} author={e.author?e.author:"Unknown"} date={e.publishedAt} src={e.source.name}/>
              </div>
                )
            }))}
              </div>
        </div>
              </InfiniteScroll>
      </>
    );
  }
}

export default NewCom;
