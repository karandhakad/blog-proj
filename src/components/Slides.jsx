import React,{useState} from 'react'
import "../assets/slides.css"
import Pagination from "@mui/material/Pagination";
import CircularProgress from "@mui/material/CircularProgress";
import { useDispatch, useSelector } from "react-redux";
import { crossCard } from '../store/slices/cardSlice';

function Slides() {

  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const cardsList = useSelector((state) => state.data.cardsList);
  const dispatch = useDispatch();

  // for Loading
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);

  // for Hide Card
  const hideCard = (id) => {
    dispatch(crossCard({id}));
  };

  //for Page Change
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const paginatedData = cardsList.slice((currentPage - 1) * itemsPerPage,currentPage * itemsPerPage);



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
            paginatedData.map((value, index) => {
              return (
                <div className="slide-card" key={value.id}>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1njKiP29Q6OaRBMO69RJq_4jmktZF9Gkcpg&s"
                    alt=""
                  />
                  <div className='card-details'>
                  <div
                    onClick={() => hideCard(value.id)}
                    className="crossIconBox"
                  >
                    <p className="crossIcon">&#10006;</p>
                  </div>
                  <h1 className="title">{value.title}</h1>
                  <p className="body">{value.body}</p>
                  <h5 className="time">Mon,21 Dec 2020 14:57 GMT</h5>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
      {isLoading ? null : (
        <div className="navigation">
          <Pagination
            count={Math.ceil(cardsList.length / itemsPerPage)}
            color="primary"
            page={currentPage}
            onChange={handlePageChange}
          />
        </div>
      )}
    </>
  )
}

export default Slides