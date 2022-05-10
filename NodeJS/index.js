'use strict'
/* eslint-env node, es6 */

// Importe le paquet express
const express = require('express')

const PORT = process.env.PORT || 5001

// Créer une application express
const app = express()
// Importer la logique de la page d'accueil
const genererModele = require('./page-get.js')

// Ecouter la méthode get et la route '/'
app.get('/', async(req, res) => {
    const indexHtml = await genererModele('index')
    res.send(indexHtml)
})

// Ecouter la méthode get et la route '/contact'
app.get('/contact', async(req, res) => {
    const contactHtml = await genererModele('contact')
    res.send(contactHtml)
})

// Démarer le serveur & écouter un port donné
app.listen(PORT, () => {
    console.log(`Eh biloute serveur démarré : ${PORT}`)
})