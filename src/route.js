import express from 'express'

const router = express.Router()

import {createAuthor} from './controller/authorController'


router.get('/',createAuhtor)


exports = {router}