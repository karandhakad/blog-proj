import React from 'react'
import "../assets/form.css"
function Form() {

  const handleForm = (e) =>
  {
    e.preventDefault();
  }
  return (
    <>
      <div className="form">
        <h1 className='headline'>Thank you so much for taking the time!</h1>
        <p className="para">Please provie the below details!</p>
        <form action="">
        <div className="inputs">
          <label htmlFor="">First Name:</label> <br />
          <input type="text" placeholder='Jhon' />
        </div>
        <div className="inputs">
          <label htmlFor=""> Last Name:</label> <br />
          <input type="text" placeholder='Doe' />
        </div>
        <div className="inputs">
          <label htmlFor="">Address:</label> <br />
          <textarea name="" id="" placeholder='Enter your full Postal Address'></textarea>
        </div>
        <div className="inputs">
          <label htmlFor="">Country:</label> <br />
          <input type="text" placeholder='India' />
        </div>
        <div className="inputs">
          <label htmlFor="">Email ID:</label> <br />
          <input type="email" placeholder='example@sample.com' />
        </div>
        <div className="inputs">
          <label htmlFor="">Phone Number:</label> <br />
          <input type="number" placeholder='+91 123456789' />
        </div>
        <button type='sumbmit' onClick={(e)=> handleForm(e)} >Submit Feedback</button>
        </form>
      </div>
    </>
  )
}

export default Form