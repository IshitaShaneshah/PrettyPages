import React, { useEffect, useState } from "react";
import axios from "axios";
import "../CSS/PostProduct.css";
const PostProduct = () => {
  const [bookDetails, setBookDetails] = useState({
    title: "",
    author: "",
    img:"",
    price: "",
    desc: "",
    quantity: "",
    genre: "",
    subgenre: "",
    pages:""
  });
  const [uploadBook, setUploadBook] = useState("");
  const [subGenre, setSubGenre] = useState("");
  const [checked,setChecked]=useState(false);
  const[selectedFile,setSelectedFile]=useState(null);
  useEffect(()=>{
    bookDetails.img=uploadBook;
  },[uploadBook]);

  useEffect(()=>{
    bookDetails.subgenre=subGenre;
  },[subGenre]);

  const fiction = [
    "Fantasy",
    "Adventure",
    "Romance",
    "Contemporary",
    "Dystopian",
    "Mystery",
    "Horror",
    "Thriller",
    "Paranormal",
    "Historical fiction",
    "Science Fiction",
    "Children's",
  ];
  const non_fiction = [
    "Cookbook",
    "Art",
    "Self-help",
    "Motivational",
    "Health",
    "History",
    "Travel",
    "Relationships",
    "Humor",
  ];

  const nonfictiongenreoption = non_fiction.map((ele) => {
    return <option value={ele} >{ele}</option>;
    
  });

  const fictiongenreoption = fiction.map((ele) => {
    return <option value={ele} >{ele}</option>;
  });

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      if (!file) {
        alert("Please Choose a file");
      } else {
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
          resolve(fileReader.result);
        };
      }
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const imageHandler = (event) => {
  setSelectedFile(event.target.files[0])
    // const file = event.target.files[0];
    // const base64 = await convertToBase64(file);
    // setUploadBook(base64);
    // event.target.value = "";
  };
  const onChangeHandler=(event)=>{
    const { name, value } = event.target;
    setBookDetails({ ...bookDetails, [name]: value });
    
  }
  const onSelectChangeHandler=(event)=>{
    setSubGenre(event.target.value);
    setChecked(true);
  }
  const submitHandler=(event)=>{
    event.preventDefault();
    const formData=new FormData();
    formData.append('image',selectedFile);
    if(bookDetails.title && bookDetails.author && bookDetails.img && bookDetails.price && bookDetails.desc && bookDetails.quantity && bookDetails.genre && bookDetails.subgenre)
    { console.log(bookDetails);
      axios.post("http://localhost:3100/api/v2/bookAdd",
      {
        author_name: bookDetails.author,
          image: formData,
          title: bookDetails.title,
          description: bookDetails.desc,
          Genre: bookDetails.genre,
          sub_genre: bookDetails.subgenre,
          pages: bookDetails.pages,
          vendor_mail:localStorage.getItem('vemail'),
          price: bookDetails.price,
          quantity: bookDetails.quantity
       } )
       .then(console.log("Done"))
     console.log("details",bookDetails);
     setBookDetails({
      title: "",
      author: "",
      img:"",
      price: "",
      desc: "",
      quantity: "",
      genre: "",
      subgenre: "",
      pages:""
    })
     setUploadBook("");
     setSubGenre(false);
    //  setChecked(false);
    }
    else{
      alert("Please fill every field")
     console.log("details",bookDetails)
    }

  }
  return (
    <div className="postProduct">
      <div className="postProductForm container">
        <h2 className="heading">Add Product </h2>
        <form className="row justify-content-center" onSubmit={submitHandler}>
          <div className="col-md-6 col-sm-6 section1 ">
            <div className="productFields">
              <p className="my-1 choose-file-label">Choose a file to upload book picture</p>
              <label className="choosefile" for="bimg">
                Upload Image
              </label>
              <input
                id="bimg"
                type="file"
                accept="image/*,png,jpg,jpeg"
                onChange={imageHandler}
              />
            </div>
            <div className="productFields">
              <label for="btitle">Title :</label>
              <br />
              <input id="btitle" type="text" value={bookDetails.title} name="title" onChange={onChangeHandler} required/>
            </div>
            <div className="productFields">
              <label for="bauthor">Author :</label>
              <br />
              <input id="bauthor" type="text" value={bookDetails.author} name="author" onChange={onChangeHandler} required/>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 uploadimg py-3">
            <img src={uploadBook} alt="upload image" />
          </div>
          <div className="col-md-6 section2">
            <div className="productFields">
              <label for="bdesc">Description :</label>
              <br />
              <textarea id="bdesc" rows="4" value={bookDetails.desc} name="desc" onChange={onChangeHandler} required></textarea>
            </div>
            <div className="container-fluid">
              <div className="row">
                <div className="productFields col-md-6 col-sm-12">
                  <label for="bgenre">Genre :</label>
                  <br />
                  <input
                    type="radio"
                    className="radio-btn"
                    id="fiction"
                    name="genre"
                    value="fiction"
                    onChange={onChangeHandler} required
                  />
                  <label for="fiction">Fiction</label>
                  <input
                    type="radio"
                    className="radio-btn"
                    id="non-fiction"
                    name="genre"
                    value="non-fiction"
                    onChange={onChangeHandler} required
                  />
                  <label for="non-fiction">Non-fiction</label>
                </div>
                <div className="productFields col-md-5 col-sm-12">
                  {bookDetails.genre === "non-fiction" ? (
                    <>
                    <label for="subgenre">Sub Genre :</label>
                    <br />
                    <select id="subgenre" value={subGenre} onChange={onSelectChangeHandler}>
                      <option disabled selected>--select--</option>
                      {nonfictiongenreoption}
                      </select>
                      </>
                  ) : bookDetails.genre === "fiction" ?(
                    <>
                    <label for="subgenre">Sub Genre :</label>
                    <br />
                    <select id="subgenre" onChange={onSelectChangeHandler} value={subGenre}>
                    <option disabled selected>--select--</option>
                    {fictiongenreoption}</select>
                    </>
                  ):<></>}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 section3">
            <div className="productFields">
              <label for="bprice">Price :</label>
              <br />
              <input id="bprice" type="number" value={bookDetails.price} name="price" onChange={onChangeHandler} required/>
            </div>
            <div className="productFields">
              <label for="bqty">Quantity :</label>
              <br />
              <input id="bqty" type="number" value={bookDetails.quantity} name="quantity" onChange={onChangeHandler} required />
            </div>
            <div className="productFields">
              <label for="bpage">Pages :</label>
              <br />
              <input id="bpage" type="number" value={bookDetails.pages} name="pages" onChange={onChangeHandler} required />
            </div>
            <div className="overlay-btn">
            <button className="postProduct-btn" type="submit">ADD BOOK</button>
            {/* <div className="overlay1"></div>
              <div className="overlay2"></div> */}
          </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostProduct;
