'use strict'
/* eslint-env node, es6 */ 

const { join } = require('path')

const { readFile } = require('fs')
const { promisify } = require('util')
const readFileAsync = promisify(readFile)

const READ_OPTIONS = { encoding: 'UTF-8' }
const HTML_URL = ('./html/')


const lireFichierHtml = file => 
    readFileAsync(join(HTML_URL, file), READ_OPTIONS)

module.exports = async nomPage => {
    // Récupérer le contenu html du modele 
    const baseHtml = await lireFichierHtml('index.html')
    const [
        modeleHtml,
        enteteIndexHtml,
        bodyIndexHtml,
    ] = await Promise.all([
        lireFichierHtml(`modele.html`),
        lireFichierHtml(`${nomPage}.head.html`),
        lireFichierHtml(`${nomPage}.body.html`)
    ])



    const indexHtml = modeleHtml
    .replace('{{EN-TETE}}', enteteIndexHtml)
    .replace('{{CORPS}}', bodyIndexHtml)

    // Retourner la page html
    return indexHtml
}