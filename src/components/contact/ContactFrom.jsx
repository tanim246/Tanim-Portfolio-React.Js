import React from "react";
import styled from "styled-components";

const Form = () => {
  return (
    <StyledWrapper>
      <form className="form w-[550px]">
        <p className="title">Send a Message </p>

        <div className=" flex justify-between">
          <label className=" w-full">
            <input className="input " type="text" placeholder required />
            <span>Name</span>
          </label>
          <label className="w-full">
            <input className="input " type="email" placeholder required />
            <span>Email</span>
          </label>
        </div>
        <label>
          <input className="input  " type="text" placeholder required />
          <span>Subject</span>
        </label>
        <label>
          <textarea
            className="input h-[200px] message-textarea"
            placeholder required
          ></textarea>
          <span>Your Message</span>
        </label>

        <button className="submit">Send Message</button>
      </form>
       <p className="border text-xs text-center text-[#878f9c] bg-[#141d30] mt-4 border-[#303a4d] rounded-xl  p-5">
          Your information is secure and will only be used to respond to your inquiry
        </p>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;

    padding: 40px 30px;
    border-radius: 20px;
    position: relative;
    background-color: #131b2b;
    color: #fff;
    border: 1px solid #1e2736;
  }

  .title {
    font-size: 28px;
    font-weight: 600;
    letter-spacing: -1px;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 30px;
    color: #00bfff;
  }

  .title::before {
    width: 18px;
    height: 18px;
  }

  .title::after {
    width: 18px;
    height: 18px;
    animation: pulse 1s linear infinite;
  }

  .title::before,
  .title::after {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    border-radius: 50%;
    left: 0px;
    background-color: #00bfff;
  }

  .message,
  .signin {
    font-size: 14.5px;
    color: rgba(255, 255, 255, 0.7);
  }

  .signin {
    text-align: center;
  }

  .signin a:hover {
    text-decoration: underline royalblue;
  }

  .signin a {
    color: #00bfff;
  }

  .flex {
    display: flex;
    width: 100%;
    gap: 6px;
  }

  .form label {
    position: relative;
  }

  .form label .input {
    background-color: #333;
    color: #fff;
    width: 100%;
    padding: 20px 05px 05px 10px;
    outline: 0;
    border: 1px solid rgba(105, 105, 105, 0.397);
    border-radius: 10px;
  }

  .form label .input + span {
    color: rgba(255, 255, 255, 0.5);
    position: absolute;
    left: 10px;
    top: 0px;
    font-size: 0.9em;
    cursor: text;
    transition: 0.3s ease;
  }

  .form label .input:placeholder-shown + span {
    top: 12.5px;
    font-size: 0.9em;
  }

  .form label .input:focus + span,
  .form label .input:valid + span {
    color: #00bfff;
    top: 0px;
    font-size: 0.7em;
    font-weight: 600;
  }

  .input {
    font-size: medium;
  }

  .submit {
    border: none;
    outline: none;
    padding: 10px;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    transform: 0.3s ease;
    background-color: #00bfff;
  }

  .submit:hover {
    background-color: #00bfff96;
  }

  @keyframes pulse {
    from {
      transform: scale(0.9);
      opacity: 1;
    }

    to {
      transform: scale(1.8);
      opacity: 0;
    }
  }
`;

export default Form;
