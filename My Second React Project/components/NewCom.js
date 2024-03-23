import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";

class NewCom extends Component {
    constructor(){
        super();
        this.state={
            article:null,
            loading:false,
            page:1
        }
    }
    async componentDidMount(){
      this.setState({loading : true}) 
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=b6ad3649af274729b4c7e2a2308183c6&page=1&pagesize=${this.props.page_size}`
      let data=await fetch(url)
      if(data.status===429){
        this.setState.article=null
      }
      else{
        let  res =await data.json();
        // console.log(res);
        this.setState( {article :res.articles,totalpage:res.totalResults,loading:false})
      }  
    }
    pre= async ()=>{
      if(this.state.page>1){
        this.setState({loading : true})
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=b6ad3649af274729b4c7e2a2308183c6&page=${this.state.page-1}&pagesize=${this.props.page_size}`
        let data=await fetch(url)
        if(data.status===429){
          this.setState.article=null
          console.log("no pre");
        }
        else{
          let  res =await data.json();
          console.log(res.articles);
          this.setState( {article :res.articles
            ,page:this.state.page-1,loading:false} )
            console.log("pre");
          }
    }
    else{
      alert("No Previous Page Available")
    }
  }
  next= async ()=>{
    if(this.state.page<Math.floor(this.state.totalpage/15)){
      this.setState({loading : true})
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=b6ad3649af274729b4c7e2a2308183c6&page=${this.state.page+1}&pagesize=${this.props.page_size}`
      let data=await fetch(url)
      if(data.status===429){
        this.setState.article=null
        console.log("no next");
      }
      else{
        let  res =await data.json();
        console.log(res);
        this.setState( {article :res.articles,page:this.state.page+1,loading:false})
        console.log("next");
      }
    }
    else{
      alert("No Next Page Available")
    }
  }


  render() {
    return (
      <>
        <div className="container my-3">
            <h1 style={{textAlign:'center'}}>Want To Know the World...</h1>
          {this.state.loading && <Loading/>}
          <div className="row my-3">
            {this.state.article===null?[]:(!this.state.loading && this.state.article.map((e)=>{
              console.log("")
                return(
                    <div className="col-md-4 my-2">
                <NewsItem title={e.title?e.title:""} des={e.description?e.description:""} img={e.urlToImage===null?"https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202302/w3c.jpg?itok=XgSzupmJ":e.urlToImage} read={e.url} />
              </div>
                )
            }))}
              </div>
            <div className="container d-flex justify-content-between">

            <button type="button" onClick={this.pre} className="btn btn-dark">Preview&#x2190;</button>
            <button type="button" onClick={this.next} className="btn btn-dark">Next&#x2192;</button>
            </div>

        </div>
      </>
    );
  }
}

export default NewCom;
