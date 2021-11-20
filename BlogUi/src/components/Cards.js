import React from 'react'
import "../style/components/Cards.css";
function Cards() {
    return (
        <div className="cards_container">
            <div className="cards_post">
             <div className="card">
              <img src="/assets/instagram/thumb-card3.png" alt="" className="card_img" />
              <div className="card_desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, fugiat!</div>
              <button className="card_btn">Food</button>
              <span className="card_time">2 min ago</span>
          </div>
          <div className="card">
              <img src="/assets/instagram/thumb-card3.png" alt="" className="card_img" />
              <div className="card_desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, fugiat!</div>
              <button className="card_btn">Food</button>
              <span className="card_time">2 min ago</span>
          </div>
          <div className="card">
              <img src="/assets/instagram/thumb-card3.png" alt="" className="card_img" />
              <div className="card_desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, fugiat!</div>
              <button className="card_btn">Food</button>
              <span className="card_time">2 min ago</span>
          </div>
          <div className="card">
              <img src="/assets/instagram/thumb-card3.png" alt="" className="card_img" />
              <div className="card_desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, fugiat!</div>
              <button className="card_btn">Food</button>
              <span className="card_time">2 min ago</span>
          </div>
          </div>
        </div>
    )
}

export default Cards
