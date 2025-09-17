
import styled from "styled-components";
const Form = () => {
  return (
    <StyledWrapper>
      <form className="form w-full max-w-[550px] mx-auto">
        <p className="title">Send a Message </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <label className="w-full">
            <input className="input" type="text" placeholder required />
            <span>Name</span>
          </label>
          <label className="w-full">
            <input className="input" type="email" placeholder required />
            <span>Email</span>
          </label>
        </div>

        <label>
          <input className="input" type="text" placeholder required />
          <span>Subject</span>
        </label>

        <label>
          <textarea
            className="input h-[200px] message-textarea"
            placeholder
            required
          ></textarea>
          <span>Your Message</span>
        </label>

        <button className="submit">Send Message</button>
      </form>

      <p className="border text-xs text-center text-[#878f9c] bg-[#141d30] mt-4 border-[#303a4d] rounded-xl p-5">
        Your information is secure and will only be used to respond to your
        inquiry
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
    color: white;
  }

  .title::before,
  .title::after {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    border-radius: 50%;
    left: 0px;
    background-color: white;
  }

  .title::after {
    animation: pulse 1s linear infinite;
  }

  .form label {
    position: relative;
  }

  .form label .input {
    background-color: #1a2333;
    color: #fff;
    width: 100%;
    padding: 20px 5px 5px 10px;
    outline: 0;
    border: 1px solid #2f3a4d;
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

  .submit {
    border: none;
    outline: none;
    padding: 16px;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
    font-size: 18px;
    background-color: #12a9db;
    transition: 0.3s ease;
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
