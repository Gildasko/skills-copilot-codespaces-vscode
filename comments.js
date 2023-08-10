// Create web server 

const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Comment = require('../../models/Comment');
const Post = require('../../models/Post');
