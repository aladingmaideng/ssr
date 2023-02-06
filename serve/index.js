import React from 'react';
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { ServerStyleSheet } from 'styled-components';
import App from '../src/App';
import html from './client/html';
import getJs from './client/getJs';
import getHead from './client/getHead';
import { Helmet } from 'react-helmet';

const fs = require('fs');
const path = require('path');
const assets = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../webpack-assets.json'), 'utf-8')
);
let jsStr = getJs(assets['main'].js);

const express = require('express');
const app = express();
app.use(express.static('dist'));

app.get('*', (req, res) => {
  const cache = createCache();
  const sheet = new ServerStyleSheet();
  const helmet = Helmet.renderStatic();
  let body = renderToString(
    sheet.collectStyles(
      <StaticRouter>
        <StyleProvider cache={cache}>
          <App />
        </StyleProvider>
      </StaticRouter>
    )
  );
  const styles = sheet.getStyleTags();
  const styleText = extractStyle(cache);
  res.send(
    html({ styles: styles + styleText, body, head: getHead(helmet), js: jsStr })
  );
});
app.listen(3000, () => {
  console.log('http://127.0.0.1:3000');
});
