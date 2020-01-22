import { Router } from 'express'
import { check, validationResult} from 'express-validator'
const router = Router()

import { test, api, postMalone } from '../controllers/test.controllers'

router.get('/test',(req, res) =>{
    res.send('bypassed controller for now')
});

router.get('/test', test)
router.get('/api', api)
router.use('/malone',[check('ozzy').not().isEmpty().withMessage('Ozzy Param is required!')],
(req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()){
        return res.status(422).json({errors: errors.array()})
    }
    next()
})

router.post('/malone')


module.exports = router