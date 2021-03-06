import { createGlobalStyle } from "styled-components"

import * as fonts from "../fonts"

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: normal;
    src: local('Quicksand'), url('${fonts.QuicksandRegularTTF}') format('truetype');
  }

  @font-face {
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: bold;
    src: local('Quicksand'), url('${fonts.QuicksandBoldTTF}') format('truetype');
  }

  @font-face {
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 300;
    src: local('Quicksand'), url('${fonts.QuicksandLightTTF}') format('truetype');
  }

  @font-face {
    font-family: 'Paytone One';
    font-style: normal;
    font-weight: normal;
    src: local('Paytone One'), url('${fonts.PaytoneOneTTF}') format('truetype');
  }
  
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    font-family: "Quicksand", cursive, sans-serif;
  }
  body {
    line-height: 1;
    font-size: 100%;
    font-family: "Quicksand", cursive, sans-serif;
    font-weight: normal;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: "Paytone One", "Quicksand", serif;
  }
  img {
    display: block;
    width: 100%;
    height: auto;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  p {
    line-height: 2rem;
  }

  .tabs {
    width: 100%;
  }

  .tab-list {
    display: flex;
    justify-content: center;
  }

  .tab {
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .tab-panel {
    background: tomato;
    width: 100%;
  }
`

export default GlobalStyles