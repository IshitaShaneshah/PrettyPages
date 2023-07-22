import React from "react";
import "../CSS/UserMain.css";
import buyerbook from "../photos/buyer.jpg";
import { Link } from "react-router-dom";
import BookDetail from "./BookDetail";
const UserMain = () => {
  return (
    <div className="buyerHome">
      {/* vendor Intro */}
      <div className="container">
        <div className="buyerHomeIntro row">
          <div className="col-md-7">
            <h2 className="heading">Your Online Book Store</h2>
            <p className="content-intro">
              Read what you Love.Love what you read.
            </p>
            <button className="buyerHome-btn">Explore Now</button>
          </div>
          <div className="col-md-5 sell-book-img">
            <img src={buyerbook} />
          </div>
        </div>
      </div>
      {/* new arrival */}
      <BookDetail />
      {/* services */}
      <div className="userGenre container-fluid">
        <h2 className="heading">Popular Genre</h2>
        <div className="genre row justify-content-center">
          <div className="col-md-7 col-sm-6">
            <div className="row">
              <div className="col-md-6">
                <div className="box box1">Fantasy</div>
              </div>
              <div className="col-md-6">
                <div className="box box2">Cookbook</div>
                <div className="box box2">Paranormal</div>
              </div>
            </div>
            <div className="box box3 b4">Motivational</div>
            <div className="row">
              <div className="col-md-3">
                <div className="box box3">Romance</div>
              </div>
              <div className="col-md-3">
                <div className="box box3">Children's</div>
              </div>
              <div className="col-md-6">
                <div className="box box3">Thriller</div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="row">
              <div className="col-md-6">
                <div className="box box3">Health</div>
              </div>
              <div className="col-md-6">
                <div className="box box3">Humor</div>
              </div>
            </div>
            <div className="box box2">Mystery</div>
            <div className="row">
              <div className="col-md-6">
                <div className="box box3">Science</div>
              </div>
              <div className="col-md-6">
                <div className="box box3">History</div>
              </div>
            </div>
            <div className="box box2">Relationships</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMain;
