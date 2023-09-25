// @import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700);
// @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/css/font-awesome.min.css');
import styled from '@emotion/styled';

export const Title = styled.h1`
  color: rgb(255, 255, 255);
  margin: 20px auto 0;
  width: 200px;
  text-align: center;
`;
export const Wrapper = styled.div`
  position: absolute;
  width: 320px;
  left: 50%;
  margin-left: -160px;
  top: 50%;
  margin-top: -75px;
`;

/* === Sign in Form === */
export const Form = styled.form`
  height: 90px;
  width: 300px;
  border-radius: 8px;
  position: relative;
  &::before {
    display: block;
    position: relative;
    height: 2px;
    background: rgb(52, 56, 61);
    content: '';
    top: 44px;
    margin-left: 20px;
    z-index: 1;
  }
`;
export const Input = styled.input`
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  position: relative;
  display: block;
  width: 280px;
  height: 45px;
  border: 0;
  outline: 0;
  top: -2px;
  padding: 0 0 0 20px;
  font-weight: 700;
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
  display: block;
  position: absolute;
  width: 102px;
  height: 52px;
  color: rgb(52, 56, 61);
  border-radius: 50%;
  outline: 0;
  z-index: 2;
  top: 19px;
  right: -24px;
  border: 6px solid rgb(52, 56, 61);
  font-size: 25px;
  text-indent: 0px;
  padding-left: 9px;
  padding-bottom: 3px;
  text-align: center;
  &:hover {
    color: rgb(0, 126, 165);
    text-shadow: 0 0 10px rgb(0, 126, 165);
    cursor: pointer;
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
