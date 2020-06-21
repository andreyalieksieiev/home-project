import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #363636;
	border-radius: 5px;
  -moz-border-radius: 5px;
	-webkit-border-radius: 5px;		
	margin: 200px auto;
	width: 330px;
  font-family: 'Open Sans', sans-serif;
	font-size: 16px;
  -webkit-box-shadow:  0px 10px 20px 0px rgba(0, 0, 0, 0.3);
   box-shadow:  0px 10px 20px 0px rgba(0, 0, 0, 0.3);
   a {
    text-decoration: none;
    color: #7575a3;
  }
  padding-bottom: 20px;
`;

export const Title = styled.h1`
  background-color: #292829;
	border-radius: 5px 5px 0px 0px;
	-moz-border-radius: 5px 5px 0px 0px;
	-webkit-border-radius: 5px 5px 0px 0px;
	color: #fff;
	padding: 20px;
	text-align: center;
	text-transform: uppercase;
  font-family: 'Open Sans', sans-serif;
	font-size: 17px;
`;

export const Success = styled.p`
	color: #00cc00;
  margin: 100px 40% -50px;
  font-size: 22px;
  font-weight: bold;
`;

export const Error = styled.p`
	color:#ff0000;
  margin: 100px 40% -50px;
  font-size: 22px;
`;