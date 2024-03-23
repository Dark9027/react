import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,des,img,read}=this.props;
    return (
      <>
      <div className="card" style={{width:'18rem'}}>
  <img style={{maxWidth:"25vw",maxHeight:"25vh"}} src={img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{des.slice(0,50)}...</p>
    <a href={read} className="btn btn-sm btn-primary" >Read More</a>

  </div>
</div>
      </>
    )
  }
}

export default NewsItem