import React from 'react'
import { useState } from 'react';
function Mid() {
    const [task,chTask]=useState({});
    const [text1,chText1]=useState('');
    const [text2,chText2]=useState('');
    const [n,chn]=useState(0);
    const add=()=>{
      let t1=task
      t1['title'+n]=text1
      t1['work'+n]=text2
      chTask(t1)
      console.log(task);
      let c1=document.createElement('div');
      let c2=document.createElement('div');
      let h=document.createElement('h5');
      let para=document.createElement('p');
      let btn=document.createElement('button');
      c1.classList.add('card')
      c1.setAttribute('id','con'+n)
      c2.classList.add('card-body')
      h.classList.add('card-title')
      para.classList.add('card-text')
      btn.classList.add('btn')
      btn.classList.add('btn-danger')
      h.innerText=text1
      para.innerText=text2
      btn.innerText='Delete'
      c2.appendChild(h)
      c2.appendChild(para)
      c2.appendChild(btn)
      c1.appendChild(c2)
      let sel=document.getElementById( "show" );
      sel.prepend(c1);
      sel.prepend(document.createElement('br'));
      btn.addEventListener('click',()=>{
        let rem=document.getElementById('con'+n)
        rem.remove();
      })
      chn(n+1)
        chText1('')
        chText2('')
    }
    const c1=(e)=>{
        let temp1=e.target.value;
        chText1(temp1)
    }
    const c2=(e)=>{
        let temp2=e.target.value;
        chText2(temp2)
    }

    return (
      <>
      <div className="form-group container">
    <label>Enter your Title!</label>
    <input value={text1} type="text" className="form-control" onChange={c1} placeholder="e.g: Let's Code"/>
    <label>Enter your Tasks!</label>
    <input value={text2} type="text" className="form-control" onChange={c2} placeholder="e.g: I am start coding from 30 Feb"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your data with anyone else.</small>
  </div>
  <div className="container">
  <button onClick={add} type="submit" class="btn btn-primary">Submit</button>
  </div>

<br />
<div id='show' className="container">
  </div>
      </>
    )
  }

  export default Mid;