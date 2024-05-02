// FacebookLogin.js
'use client'
// import React from 'react';
import { auth, facebookProvider , signInWithPopup} from '../config/firebase'; 
import "../styles/style.css"
import SideBar from '../sidebar/page';
import Navbar from '../navbar/page';
import RightNavbar from '../rightnav/page';
import Dashboard from '../post/page';


import React, { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../config/firebase";
import { useState } from "react";
import { adPosts, getPosts } from "../config/firebase";
import Cardss from '../card';
// import gif from '../../Assests/waiting.gif'
function FacebookLogin () {
  const [text, setText] = useState()
  const [img, setImg] = useState()
  const [posted, setPosted] = useState()
  console.log(posted);
const userdef = "https://st2.depositphotos.com/1104517/11967/v/950/depositphotos_119675554-stock-illustration-male-avatar-profile-picture-vector.jpg"
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, [])

  useEffect(() => {
    getAllPosts()
  }, [])

  const getAllPosts = async () => {
    const allPosts = await getPosts()
    setPosted(allPosts)
    console.log(allPosts, 'allposts');
  }


  const adPosted = async () => {
    if (!img || img) {
      await adPosts({
        text, img
      })
    }

  }

  return (
   <div>
       <SideBar/>
       <Navbar/>

    {posted?.map((item) => {
      return <Cardss images={item.img}/>
    })}
       <RightNavbar/>
   </div>
    )

};

export default FacebookLogin;
