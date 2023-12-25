import UserContextProvider from "./context/UserContextProvider";
import React, { useCallback, useRef, useEffect, useState } from "react";
import "./App.css";
import myimg from "./img/sai.png";
import myvid from "./img/video-1.mp4";
import { Await, Link } from "react-router-dom";
import Login from "./Compo/Login";
import Profile from "./Compo/Profile";
import Display from "./Display";
import axios from "axios";

  function App() {
  const [data, setData] = useState({
    User: "sai",
    email: "",
    password: "bangar",
    skills: "",
    cpassword: "",
    gender: "Male",
    language: [],
  })

  var conarr
  const [Rec, setRec] = useState([ ])
  let x,y
  const [Nw, setNw] = useState(' ')
  var [pu, setPu] = useState([ ])
  const [Inp, setInp] = useState([ ]);
  const pul = ['sai', 'bangar']
  const [Dis, setDis] = useState([])
// console.log(data);  
// data.language.map(el=>{el+=5;
//  console.log(el); 
// })
// data.language.forEach(el=>{el+=5;
//   console.log(el)})
// for (let i in data.language) { console.log(i);}
  // for (let i of data.language) { console.log(i);}
  //   const array = [1,2,3,4]
//   const arrays = ['a','b','c']
//   const mix = [...array, ...arrays]
//  const upd = arrays.map((ele) =>` ${ele} + 'ele'`)
// console.log(upd);
// console.log(Dis.length);
// console.log(Dis);
  // console.log(Inp);

  const [Axi, setAxi] = useState([])
  // useEffect(() => {
  // axios.get("https://dummyjson.com/products/5")
  // .then(res=> setAxi(res.data))
  // .then(console.log(Axi))
  // .catch(err=>console.log(err))
// },[])
  //  console.log(Axi);  
setTimeout(() => {
    //  console.log(Axi);  
}, 1000);
const handChng = (e) => { e.preventDefault()
    // if (e.target.placeholder === "Feedback") {
    //   let cp = { ...Inp };
    //   cp.ok.push(e.target.value);
    //   setInp(cp);
    // } else {
    //  setInp(() => ({ ...Inp, [e.target.name]: e.target.value }));
    setInp([e.target.value]);
    //  console.log(e.target.value);
  };  

  function hanCh(e){
    for(let i of Inp)   {
      pu.push(i)}
      setPu([...pu])
      console.log(pu);
      console.log(Inp);   
      setNw({...pu, Inp })
      setInp('')
}
// function Displayed(pu){
//   pu.map(el=>`${el} + {<button>Delete</button>}`)
// }

const paste = useRef();
  const copyClip = useCallback(() => {
   paste.current?.select();
   paste.current?.setSelectionRange(0, 5)
   window.navigator.clipboard.writeText(data.password);
  }, [data.password]);

  // useEffect(() => {
  //   console.log("bye");
  //   return () => {
  //     console.log("hi");
  //   }
  // }, [data.gender])

    function submitHandle(e) {
      e.preventDefault();
      //console.log(e);
    }
  const handleChange = (e) => {
    if (e.target.name === "language") {
      let copy = { ...data };
e.target.checked ? copy.language.push(e.target.value) : copy.language= copy.language.filter(el=> el !==e.target.value);      
      setData(copy);
    } else {
      setData(() => ({ ...data, [e.target.name]: e.target.value }));
    }
  }

  // console.log(e.target.name);
  //const arr = data.language;
  //console.log(arr);

  // console.log(Date());
  // const count = 6;
  // console.log("counthuihk: %d", count);
  // console.log (("count: ", count));
  //let str
  //let  str = JSON.stringify(data),pr= JSON.parse(str)
  //localStorage.setItem('str', JSON.stringify(data))
  //console.log(localStorage.getItem('str'));
  //console.log(str);
  // pr = JSON.parse(str)
  //console.log(pr);
  // let x = {name: 'sai', srnm: 'bangar'};
  // let xy;
  // localStorage.setItem('xy', JSON.stringify(x))
  // console.log(localStorage.getItem('xy'));
  // localStorage.removeItem('xy')
  // let updt = JSON.parse(localStorage.getItem('xy'))
  // console.log(updt);
  // console.log(xy);
  // localStorage.clear()
  //console.log(localStorage.getItem('updt'));
  // let x, y = async function poppulate() {
  //   const res = await fetch("https://dummyjson.com/products/1");
  //   const res1 = await res.json();
  //   console.log(res1);
  //   x = res1.brand;
  //   // console.log(x);
  //   const conarr = [Object.keys(res1)]
  //   console.log(conarr);
  // };
  // y();
  //poppulate();
  //  fetch("https://dummyjson.com/products/1")
  // .then(res1 => res1.json())
  // .then(json => console.log(json))
  // const x = Math.round(Math.random() * 100);
  // let y = "bcd1235./,";
  // let z = y.charAt(y);
  // console.log(z,x);
// console.log(Dis);
useEffect(()=>{
  setRec(conarr)

  // async function poppulate() {
  //  const res = await fetch("https://dummyjson.com/products/1")
  //  const res1 = await res.json()
  //  console.log(res1);
  //  x = res1.brand;
  //  console.log(Array.isArray(conarr))
  //  console.log(typeof(conarr));
  //  console.log(Rec);
// }  poppulate()
},[])

conarr = Object.keys(data)
// {setRec(conarr)}
//  console.log(conarr);
// console.log(Rec);
const pt = useRef()
const [Sear, setSear] = useState()

const filter = (e) => { 
  // e.preventDefault()
  // e.target.value='i'
// pt.current?.value == '' ? setSear('') : setSear( Rec.filter( el => el.toLowerCase().includes(e.target.value.toLowerCase()) /*&& el.toLowerCase() !== e.target.value.toLowerCase()*/ ) .slice(0,3) )
setSear(e.target.value)
// console.log(e.target.value);
}
// setTimeout(() => {
//   setRec(conarr)
// }, 20000);
// console.log(pt.current?.value);
// console.log(Sear)
// console.log(Rec);
// const filters =(it)=>{
// console.log(it);
// setSear(it)
// }
const filters=(it)=>{
  setSear(it)
  // setRec([it])
  console.log(it);
}
const arrays= ['10','20','30']
console.log(Rec);
return (
<><div className="App p-2 h-fit ">

   <UserContextProvider>
      <h1>Context</h1>
      <Profile />
      <Login />
   </UserContextProvider>
      <h1> Form </h1>
      {/* <Display Rec={Rec}/> */}
 <a className="hover:text-emerald-950" href="https://dummyjson.com/products/2" target=" "> Click here now </a>
      <Link to="Props" className="hover:text-red-400">Props</Link>
      <Link to="Home" className="hover:text-cyan-700">     Home</Link>
  <hr className="w-screen py-1 hover:bg-yellow-200 m-2"/>
      <form className="login-form" onSubmit={submitHandle}>
{/* {Rec.map((el) =>       <b>        {el}        </b>    )} */}
{/* {Rec&&Rec.map((it,key) => <b key={0+9+it}>  {key+1} : {it}<br/> </b> ) }  */}

        <img className=" imag" src={myimg} alt="ok"></img> <br/>
        <video controls width="250"><source src={myvid} /></video>
       <label className="lb">User</label>
        <input type="text" name="User" placeholder="User Name" onChange={handleChange}/>
      <label className="lb">Email</label>
        <input value={data.email} name="email" onChange={handleChange} placeholder="Email"/>
      <label className="lb">Password</label>
        <input name="password" value={data.password} onChange={handleChange} placeholder="Password" ref={paste} />
        <button className="butt" onClick={copyClip}> Copy </button>
        <label className="lb"> Confirm Password </label>
        <input name="cpassword" value={data.cpassword} onChange={handleChange} placeholder="Confirm" />
      <label> Other </label>
        <input type="text"  name="Other" value={Inp} placeholder="Feedback" onChange={handChng} />
        <button onClick={hanCh} className="butt">Add</button>
  {       pu.map(it =>  <> {it},</> )     }
        <label> Skills </label>
        <select className="sk py-6 px-32" type="text" name="skills" onChange={handleChange} >
          <option value={data.HTML}>HTML</option>
          <option value={data.CSS}>CSS</option>
          <option value={data.JS}>JS</option>
        </select>
        Gender
        <div className="down">
          <input type="radio" name="gender" value="Male" checked onChange={handleChange} />
          <label> Male </label>
        </div>
        <div className="down">
          <input type="radio" name="gender" value="Female" onChange={handleChange} />
          <label> Female </label>
        </div>
        Language
        <div className="down">
          <input type="checkbox" name="language" value="Marathi" onChange={handleChange} />
          Marathi
        </div>
        <div className="down">
          <input type="checkbox" name="language" value="Hindi" onChange={handleChange} />
          Hindi
        </div>
<div className="down"><input type="checkbox" name="language" value="English" onChange={handleChange} />English </div>
        <button className="butt border-solid text-pink-900"><b>Submit</b></button>
<div><input className="rounded-none " type="text" placeholder=' S e a r c h ' ref={pt} value={Sear} onChange={filter}/><br/>
{/* <button onClick={()=>filters(Sear)}>search</button> */}
{Rec.filter(el=>Sear&&el.includes(Sear)&&el!==Sear).slice(0,3).map(it=>(<div onClick={()=>filters(it)} className="cursor-pointer w-60 bg-white">{it}</div>))}
</div>
{/* {Sear&&Sear.map(it=>(<div onClick={filter}className="cursor-pointer bg-yellow-50 w-60 text-black"><table><b>{it}</b></table></div>))} */}
 {/* setSear(Rec.filter(el=>el.toLowerCase().includes(e.target.value.toLowerCase()))) 
 <div> { Rec.filter((el)=> Sear && el.toLowerCase().includes(Sear) )
     .map(it => <b> {it}, </b>) }</div>*/}
      </form >      
    </div>
  <div className="gap-4">   <button onClick={disChang} >Display</button> <br/>
    <div><h1>hi hello: <b> {` ${Dis[0]} ${Dis[1]} ${Dis[2]}`}</b> </h1></div>
{Rec&&Rec.map((it,key) => <b key={0+9+it}>  {key+1} : {it}<br/> </b> ) } 
   {/* <table><ul> {Dis.map(its=> <li> <b className="ml-96"> {its} </b> </li> )} </ul></table>  */}
    </div>
  </>
) 

function disChang() {
  setDis([...data.language])

// setTimeout(()=> {
//   y = async function poppulate() {
//    const res = await fetch("https://dummyjson.com/products/1");
//    const res1 = await res.json();
//    console.log(res1);
//    x = res1.brand;
//    conarr = [Object.keys(res1)]
//    console.log(conarr);
//    console.log(x);
//   }  
// //  y()
// },1000);
}
   }

export default App;

//console.log(data.language);
// console.log(arr);
//  let lan = `${data.language}`
//  console.log(lan);
//  //console.log(data.language.length);
// if (data.language.length !== 0) {
//   console.log(data.language.length)
//   console.log(lan);
//   console.log(data.language);
// }
//let i=0;
//let sum = 0;
// for (i = 0; i < data.language.length; i++) {
//   console.log(data.language[i]);
//   if (i === data.language.length - 1) {
//    // console.log(arr);
//   }
// let all=0;
// arr.forEach(ele => all = all + ele );
//  console.log(all);
// }
// console.log(sum);
//console.log(arr.join(" mmm, "));
//  }
// let upd = arr.map(ele => ele + 'ele')
// console.log(upd);
//console.log(arr.slice(1,2));
//console.log(typeof(arr));
// console.log(arr.toString());
//console.log(arr.valueOf());
// arr.sort()
//   console.log(arr);
//console.log(arr.splice(1, 1))
//console.log(arr.push(8))
//<!-- console.log(arr.pop()) -->
/*  // console.log(Array.isArray(data.language));*/