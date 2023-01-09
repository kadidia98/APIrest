const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let product = new Schema({
    libelle: { type: String, required:true },
    quantite: { type: String, required:true },
   
    prix: { type: String, required:true },
  
    etat: { type: Boolean, required: false },
    
    
}, {timestamps: true},
{
    collection: 'produit'
})



module.exports = mongoose.model('produit', product)