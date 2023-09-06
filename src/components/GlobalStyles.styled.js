import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body{  
    padding: 20px 50px;
  background: linear-gradient(0.25turn, #ec7fff, #ebf8e1, #f69d3c);
  background-repeat: no-repeat;
  font-size: larger;
}
ul{
    list-style: circle;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 0 20px;
}
button{
  display: block;
  float: left;
  position: relative;
  text-decoration: none;
  color: #333;
  border: 3px solid #333333;
  padding: 10px 15px;
  margin: 5px 0px;
}
button:hover{
    background-color:  #ebf8e1;
}

button:active {
  top: 3px;
  left: 3px;
}

button:active:after{
  top: 2px;
  left: 2px
}

#root{
    display: flex;
    flex-direction: column;
}
`;
