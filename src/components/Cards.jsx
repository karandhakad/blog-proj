import React, { useState } from 'react'
import "../assets/cards.css"
import Pagination from "@mui/material/Pagination";
import CircularProgress from "@mui/material/CircularProgress";
import { useDispatch, useSelector } from "react-redux";
import { crossCard, pageChange } from '../store/slices/cardSlice';


function Cards() {

  const [isLoading, setIsLoading] = useState(true);

  const cardsList = useSelector((state) => state.data.cardsList);
  const dispatch = useDispatch();

  // for Loading
    setTimeout(() => {
      setIsLoading(false);
    }, 0);

  // for Hide Card
  const hideCard = (id) => {
    dispatch(crossCard({id}));
  };

  //for Page Change
  const handlePageChange = (event,value) => {
        dispatch(pageChange({value}));
  };
  return (
    <>
    <div className="container">
        <div className="box">
          {isLoading ? (
            <div className="loading">
              <CircularProgress color="inherit" />{" "}
              <p style={{ marginLeft: "15px" }}>Loading...</p>{" "}
            </div>
          ) : (
            cardsList.slice(0, 6).map((value, index) => {
              return (
                <div className="card" key={value.id}>
                  <div
                    onClick={() => hideCard(value.id)}
                    className="crossIconBox"
                  >
                    <p className="crossIcon">&#10006;</p>
                  </div>
                  <h1 className="title">{value.title}</h1>
                  <p className="body">{value.body}</p>
                  <h5 className="time">Mon,21 Dec 2020 14:57 GMT</h5>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1njKiP29Q6OaRBMO69RJq_4jmktZF9Gkcpg&s"
                    alt=""
                  />
                </div>
              );
            })
          )}
        </div>
      </div>
      {isLoading ? null : (
        <div className="navigation">
          <Pagination count={10} color="primary" onChange={handlePageChange} />
        </div>
      )}
    </>
  )
}

export default Cards