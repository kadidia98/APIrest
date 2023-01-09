const express = require('express')

const productSchema = require('../models/produit')

const router = express.Router()

router.route('/').get((req, res) => {
    productSchema.find((error, response)=> {
        if (error) {
          return next(error)
        } else {
          return res.status(200).json(response)
        }
      })
})

router.route('/').post( async (req, res) => {

    const user = new productSchema({
        
        libelle: req.body.libelle,
        quantite: req.body.quantite,
        prix: req.body.prix,
        
        etat: req.body.etat,
    
      })
      user
        .save()
        .then((response) => {
          console.log(response);
          res.status(201).json({
            message: 'Ajout produit réussie !',
            result: response,
          })
        })
      
})

router.route('/:id').get((req, res) => {
    productSchema.findById(req.params.id, (error, response)=> {
        if (error) {
          return next(error)
        } else {
          return res.status(200).json(response)
        }
      })
})

router.route('/:id').put((req, res, next) => {
    productSchema.findByIdAndUpdate(req.params.id, {$set: req.body}, (error, response)=> {
        if (error) {
          return next(error)
        } else {
          return res.status(200).json(response)
        }
      })
})

router.route('/:id').delete((req, res, next) => {
    productSchema.findByIdAndUpdate(req.params.id, {$set: req.body}, (error, response)=> {
        if (error) {
          return next(error)
        } else {
          return res.status(200).json(response)
        }
      })
})

module.exports = router