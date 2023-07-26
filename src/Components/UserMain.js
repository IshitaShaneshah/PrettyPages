import React from "react";
import "../CSS/UserMain.css";
import buyerbook from "../photos/buyer.jpg";
import { Link } from "react-router-dom";
import BookDetail from "./BookDetail";
const UserMain = (props) => {
  return (
    <div className="buyerHome">
      {/* vendor Intro */}
      <div className="container">
        <div className="buyerHomeIntro row">
          <div className="col-md-7">
            <h2 className="heading">Your Online Book Store</h2>
            <p className="content-intro">
              Read what you Love. Love what you read.
            </p>
          <Link onClick={()=>props.toggleHandler(1)}>
          <button className="buyerHome-btn">Explore Now</button>
          </Link> 
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
                <Link onClick={()=>props.toggleHandler(1,"Fantasy")}><div className="box box1">Fantasy</div></Link>
              </div>
              <div className="col-md-6">
              <Link onClick={()=>props.toggleHandler(1,"Cookbook")}><div className="box box2">Cookbook</div></Link>
              <Link onClick={()=>props.toggleHandler(1,"Paranormal")}><div className="box box2">Paranormal</div></Link>
              </div>
            </div>
            <Link onClick={()=>props.toggleHandler(1,"Motivational")}><div className="box box3 b4">Motivational</div></Link>
            <div className="row">
              <div className="col-md-3">
              <Link onClick={()=>props.toggleHandler(1,"Romance")}> <div className="box box3">Romance</div></Link>
              </div>
              <div className="col-md-3">
              <Link onClick={()=>props.toggleHandler(1,"Children's")}> <div className="box box3">Children's</div></Link>
              </div>
              <div className="col-md-6">
              <Link onClick={()=>props.toggleHandler(1,"Thriller")}><div className="box box3">Thriller</div></Link>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="row">
              <div className="col-md-6">
              <Link onClick={()=>props.toggleHandler(1,"Health")}><div className="box box3">Health</div></Link>
              </div>
              <div className="col-md-6">
              <Link onClick={()=>props.toggleHandler(1,"Humor")}><div className="box box3">Humor</div></Link>
              </div>
            </div>
            <Link onClick={()=>props.toggleHandler(1,"Mystery")}><div className="box box2">Mystery</div></Link>
            <div className="row">
              <div className="col-md-6">
              <Link onClick={()=>props.toggleHandler(1,"Science Fiction")}><div className="box box3">Science</div></Link>
              </div>
              <div className="col-md-6">
              <Link onClick={()=>props.toggleHandler(1,"History")}> <div className="box box3">History</div></Link>
              </div>
            </div>
            <Link onClick={()=>props.toggleHandler(1,"Relationships")}><div className="box box2">Relationships</div></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMain;
