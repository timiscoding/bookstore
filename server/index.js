const http = require('http');
const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();

app.use(express.static('client'));

app.listen(3000);
