/**
 * Html
 * 这个 Html.js 文件充当了一个模板，我们将所有生成的应用程序代码插入其中
 * 成的应用程序字符串插入进去。
 */
const Html = ({ body, styles, head, js }) => `
  <!DOCTYPE html>
  <html>
    <head>
      ${head}
      <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
      <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>  
      ${styles}
    </head>
    <body><div id="root">${body}</div></body>
  </html>
  ${js}
`;

export default Html;
