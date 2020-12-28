import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    margin:0;
    padding: 0;
    box-sizing: border-box;
}
body{
    background-color: #D8BFD8;
    font-family: 'Lato', sans-serif;
    color: #191919;
    @media screen and (max-width: 850px){
        position: absolute;
        overflow-x: hidden;
       

    }
}
a{
    color: #191919;
    text-decoration: none;
}
li{
    list-style: none
    }
h1{
    font-family: 'Special Elite', cursive;
}
`

export default GlobalStyle;