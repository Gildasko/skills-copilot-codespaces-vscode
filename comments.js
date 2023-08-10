// Create web server with node.js

// 1. import module
const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');

// 2. create server
const app = http.createServer((request, response) => {
  const _url = request.url;
  const queryData = url.parse(_url, true).query;
  const pathname = url.parse(_url, true).pathname;
  
  // 3. get data
  if (pathname === '/') {
    if (queryData.id === undefined) {
      fs.readdir('./data', (err, files) => {
        const title = 'Welcome';
        const description = 'Hello, Node.js';
        const list = `<ul>${files.map(file => `<li><a href="/?id=${file}">${file}</a></li>`).join('')
