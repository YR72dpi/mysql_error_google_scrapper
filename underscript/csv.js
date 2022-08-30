import {config} from "../config.js"
import fs from "fs"
import csv from 'csv-parser'

const getWarning = new Promise((resolve, reject) => {
    let results = []
    let ok = false
    fs.createReadStream(config["file"])
    .pipe(csv({ separator: '\t' }))
    .on('data', (data) => {
        results.push(data["ERROR"])
        console.log("Lecture du fichier...")
    })
    .on('end', () => {
        //console.log(results)
        if (results) {
            resolve(results)
            console.log("Lecture du fichier finit !")
        } else {
            reject()
        }
    });




})

export const get_error = async () => {
    try {
        const e = await getWarning
        return e
    } catch {
        console.log('erreur')
    }
}