import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`

*body
/* CSS reset */
*, *:before, *:after { 
  margin:0;
  padding:0;
  font-family: 'Trebuchet MS', sans-serif;
}

body{
  background-image:url("https://i.ibb.co/m0n5bRv/background.png");
  background-size:cover;
  margin:10px;
  font-family: 'Trebuchet MS', sans-serif;
  float:left;
  display: flex;
}

a{
  font-family: 'Trebuchet MS', sans-serif;
}

a:link, a:visited {
  color: #2b4f60;
  background: white;
}

a:hover, a:active {
  color: #5aa897;
  background;
}

button {
  background: #ce1f6a;
  border: none;
  border-radius: 5px;
  box-shadow: 0 4px 8px transparentize(#222, .8);
  bottom: -30px;
  color: #fff;
  font-weight: 700;
  left: 50%;
  padding: 10px 0;
  position: absolute;
  transform: translate(-50%, 50%);
  width: 20%;
  margin:3px;

  &:hover,
  &:focus {
    background: lighten(#ce1f6a, 5%);
    cursor: pointer;
  }
}

img{
  display: flex;
}

.wholepage{
  display: flex;
  gap: 10px;
}

.infobox{
  color: #ce1f6a;
  background: rgba(255,255,255, 0.8);
  width: 400px;
  padding: 20px;
}

p.black-just{
  text-align: justify;
  
  color: black;
}

.GIF{
  overflow: hidden;
}

#CasGif{
  margin: 0px -200px 0px 0px;
}

/* content que contem os formulários */
.content{
  width: 500px;
  margin: 0px auto;
  position: relative;	
  flex-grow:1;
}

/* formatando o cabeçalho dos formulários */
h1{
  font-size: 48px;
  color: #ce1f6a;
  padding: 10px 0;
  font-family: 'Trebuchet MS', sans-serif;
  font-weight: bold;
  text-align: center;
  padding-bottom: 30px;
  -webkit-text-stroke: 2px #ce1f6a;
}

p{
  margin-bottom:15px;
}
p:first-child{
  margin: 0px;
}
label{
  color: #ff9a8c;
  position: relative;
}

/**** advanced input styling ****/
/* placeholder */
::-webkit-input-placeholder  {
  color: #ead3cb; 
  font-style: italic;
}
input:-moz-placeholder,
textarea:-moz-placeholder{
  color: #ead3cb;
  font-style: italic;
} 
input {
  outline: none;
}

input:not([type="checkbox"]){
  width: 95%;
  margin-top: 4px;
  padding: 10px;	
  border: 1px solid #b2b2b2;
  
  -webkit-border-radius: 3px;
  border-radius: 3px;
  
  -webkit-box-shadow: 0px 1px 4px 0px rgba(168, 168, 168, 0.6) inset;
  box-shadow: 0px 1px 4px 0px rgba(168, 168, 168, 0.6) inset;
  
  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
}

/*estilo do botão submit */
input[type="submit"]{
  width: 100%!important;
  cursor: pointer;	
  background: #ce1f6a;
  padding: 8px 5px;
  color: #fff;
  font-size: 20px;	
  border: 1px solid #fff;	
  margin-bottom: 10px;	
  text-shadow: 0 1px 1px #333;
  
  -webkit-border-radius: 1px;
  border-radius: 1px;
  
  transition: all 0.2s linear;
}
input[type="submit"]:hover{
  background: #4ab3c6;
}

/* estilos para o formulário */
#cadastro, 
#login{
  position: absolute;
  top: 0px;
  width: 88%;	
  padding: 18px 6% 60px 6%;
  margin: 0 0 35px 0;
  background: rgb(247, 247, 247);
  border: 1px solid rgba(147, 184, 189,0.8);
  border-radius: 5px;
  
  -webkit-animation-duration: 0.5s;
  -webkit-animation-timing-function: ease;
  -webkit-animation-fill-mode: both;

  animation-duration: 0.5s;
  animation-timing-function: ease;
  animation-fill-mode: both;
}

table {
  font-weight: 400;
  min-width: 420px;
  width: 100%;
  display: inline-block;

  thead {
    display: none;
    font-weight: 500;
  }
  
  tbody {
    tr {
      border: 1px solid #dad6eb;
      border-radius: 5px;
      display: block;
      padding: 30px;
      margin-bottom: 30px;
      
      td {
        display: block;
        font-weight: 500;
        padding: 5px;
        position: relative;
        text-align: right;
        
        button {
          background: #ce1f6a;
          border: none;
          border-radius: 5px;
          box-shadow: 0 4px 8px transparentize(#222, .8);
          bottom: -30px;
          color: #fff;
          font-weight: 700;
          left: 50%;
          padding: 10px 0;
          position: absolute;
          transform: translate(-50%, 50%);
          width: 50%;
          margin:3px;

          &:hover,
          &:focus {
            background: lighten(#ce1f6a, 5%);
            cursor: pointer;
          }
        }
        
      }
    }
  }
}

@media all and (min-width: 768px) {
  table {
    border: 1px solid #eee;
    border-collapse: collapse;
    max-width: 992px;
    text-align: left;
    width: 100%;
    
    thead {
      display: table-header-group;
      
      th {
        padding: 10px;
        background: white;
      }
    }
    
    tbody {
      font-size: .875em;
      
      tr {
        border: none;
        display: table-row;
        
        &:nth-child(odd) {
          background: #eee;
        }
        
        &:nth-child(even) {
          background: white;
        }

        td {
          display: table-cell;
          font-weight: 400;
          padding: 10px;
          text-align: left;
          
          button {
            display: inline-block;
            padding: 10px 15px;
            position: initial;
            transform: translate(0);
            width: auto;
          }
          
          &:before {
            display: none;
          }
          
          &:last-child {
            text-align: right;
          }
        }
      }
    }
  }
}
`;