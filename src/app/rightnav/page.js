

import React from "react";
import "./index.css";

function RightNavbar() {
  return (
    <nav className="navbar bg-color-[white] p-4">
      <div className="icons-container flex flex-col">
        <div className="icon-container flex items-end mb-4">
          <img
            className="profile rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX1tp4q1VhgJ69MDeSjmtqfQOjcXI0_9OAKnarbIO3KOD31OJAp-MsLJcPcbKJN3CmPt8&usqp=CAU"
            alt="Profile 1"
            width="40" 
            height="40"
          />
          <div className="ml-2">
            <h3 className="name text-[16px]">areeba_2267</h3>
            <p className="name2">Areeba</p>
          </div>
          <p className="switch ml-auto">Switch</p>
        </div><br/>
        <p className="you">Suggested for you</p>
 
        <div className="icon-container flex items-end mb-4">
          <img
            className="profile rounded-full"
            src="https://st4.depositphotos.com/12982378/21866/i/450/depositphotos_218669658-stock-photo-portrait-beautiful-woman-sweater-sitting.jpg"
            alt="Profile 2"
            width="40" 
            height="40"
          />
          <div className="ml-2">
            <h3 className="name text-[16px]">iqra_2</h3>
            <p className="name2">Suggested for you</p>
          </div>
          <p className="switch ml-auto">Follow</p>
        </div>
        
        <div className="icon-container flex items-end mb-4">
          <img
            className="profile rounded-full"
            src="https://img.freepik.com/free-photo/cheerful-girl-cashmere-sweater-laughs-against-backdrop-blossoming-sakura-portrait-woman-yellow-hoodie-city-spring_197531-17886.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1714262400&semt=sph"
            alt="Profile 2"
            width="40" 
            height="40"
          />
          <div className="ml-2">
            <h3 className="name text-[16px]">Shafaq</h3>
            <p className="name2">Suggested for you</p>
          </div>
          <p className="switch ml-auto">Follow</p>
        </div>
        
        <div className="icon-container flex items-end mb-4">
          <img
            className="profile rounded-full"
            src="https://img.freepik.com/free-photo/portrait-blonde-woman-looking-photographer_23-2148348970.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1714262400&semt=ais"
            alt="Profile 2"
            width="40" 
            height="40"
          />
          <div className="ml-2">
            <h3 className="name text-[16px]">Maryam</h3>
            <p className="name2">Suggested for you</p>
          </div>
          <p className="switch ml-auto">Follow</p>
        </div>
        
        <div className="icon-container flex items-end mb-4">
          <img
            className="profile rounded-full"
            src="https://64.media.tumblr.com/478855db250d1c3cf0a8bf341848f68c/34d4761f4d19e52f-0a/s1280x1920/b84377e7331e5c961a9735e601591ee96982a251.jpg"
            alt="Profile 2"
            width="40" 
            height="40"
          />
          <div className="ml-2">
            <h3 className="name text-[16px]">Amna</h3>
            <p className="name2">Suggested for you</p>
          </div>
          <p className="switch ml-auto">Follow</p>
        </div>
        
        <div className="icon-container flex items-end mb-4">
          <img
            className="profile rounded-full"
            src="https://img.freepik.com/premium-photo/happy-woman-with-shopping-bags-looking-store-windows-while-walking-through-city_274326-2130.jpg"
            alt="Profile 2"
            width="40" 
            height="40"
          />
          <div className="ml-2">
            <h3 className="name text-[16px]">Maham-7</h3>
            <p className="name2">Suggested for you</p>
          </div>
          <p className="switch ml-auto">Follow</p>
        </div>
        
      </div>
      
    </nav>
  );
}

export default RightNavbar;
