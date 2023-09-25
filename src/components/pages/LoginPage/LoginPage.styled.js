// @import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700);
// @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/css/font-awesome.min.css');
import styled from '@emotion/styled';

export const Title = styled.h1`
  color: #666;
  margin: 20px auto 0;
  text-align: center;
  margin-bottom: 20px
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

/* === Sign in Form === */
export const Form = styled.form`
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
export const Input = styled.input`
  width: 276px;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

// #signin input:first-of-type{
// 	border-top-right-radius: 8px;
// 	border-top-left-radius: 8px;
// }
// #signin input:last-of-type{
// 	border-bottom-right-radius: 8px;
// 	border-bottom-left-radius: 8px;
// }
// #signin  input[type="text"], #signin  input[type="password"], #signin button[type="submit"]{
// 	background: rgb(28, 30, 33);
// 	box-shadow: inset -100px -100px 0 rgb(28, 30, 33); /*Prevent yellow autofill color*/
// 	color: rgb(52, 56, 61);
// }
// #signin  input[type="text"], #signin  input[type="password"]{
// 	position: relative;
// 	display: block;
// 	width: 280px;
// 	height: 45px;
// 	border: 0;
// 	outline: 0;
// 	top: -2px;
// 	padding: 0 0 0 20px;
// 	font-weight: 700;
// }
// #signin  input[type="text"]:focus, #signin  input[type="password"]:focus{
// 	color: rgb(255, 255, 255);
// }
export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #0056b3;
  }
`;

export const Text = styled.p`
  color: rgb(79, 85, 97);
  padding: 0 20px;
  font-weight: 700;
  font-size: 12px;
  margin: 5px 0 0 0;
  &:hover {
    border-bottom: 1px solid;
  }
`;
