import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    margin:0;
    padding: 0;
    box-sizing: border-box;
}
body{
    background-color: #E9E2DE;
    font-family: 'Lato', sans-serif;
    color: #191919;
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