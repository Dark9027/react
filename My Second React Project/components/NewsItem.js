import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,src,des,img,read,author,date}=this.props;
    return (
      <>
      <div className="card" style={{width:'18rem',justifyContent:'center'}}>
  <img style={{maxWidth:"100%",maxHeight:"50%"}} src={img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}{" "}<span class="badge badge-pill badge-success">{src}</span></h5>
    <p className="card-text">{des.slice(0,50)}...</p>
    <p class="card-text"><small class="text-muted">by {author} on {new Date(date).toGMTString().slice(0,16)}</small></p>
    <a href={read} className="btn btn-sm btn-primary" >Read More</a>

  </div>
</div>
      </>
    )
  }
}

export default NewsItem