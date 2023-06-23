import { launch } from "puppeteer"
import {config} from "../config.js"

const search = async (tosearch) => {
    return new Promise( async (resolve, reject) => {

        const browser = await launch({ 
            headless: config["headless"]
        })
        const page = await browser.newPage()
        /*
        page.setViewport({
            width: 1280,
            height: 720,
            deviceScaleFactor: 1
        });*/
        
        //page.setDefaultTimeout(10*1000)
        page.setDefaultTimeout(0)
        
        console.log("Connexion à google.com")
        await page.goto("http://www.google.com", {
            waitUntil: 'networkidle2'
        })
        await page.click("button#W0wltc")
        setTimeout(()=>{}, 3600)
        await page.click("textarea#APjFqb") // gLFyf gsfi

        console.log("Ecriture de la recherche...");
        await page.type('textarea#APjFqb', tosearch, {delay: 0})
        console.log("Recherche en cours...")
        await page.type('textarea#APjFqb', String.fromCharCode(13), {delay: Math.round(Math.random()*500)})
        await page.type('textarea#APjFqb', String.fromCharCode(13), {delay: 0})

        await page.waitForNavigation({waitUntil: 'networkidle2'});
        await page.waitForTimeout(3000); // teste le waitForSelector
        
        await page.waitForSelector(".yuRUbf", {"timeout": 2000}).then( async() => {
            /******************************** */

            console.log("Analyse en cours ...")

            const result = await page.evaluate(async () => {
                    

                let divTarget = document.querySelectorAll('.yuRUbf')
                console.log(divTarget)
                let findhere = []
                divTarget.forEach(e => {
                    let a = e.children[0]
                    let lien = a.href
                    let titre = a.children[1].innerText
                    findhere.push([titre, lien])
                });

                return findhere
            })
            
            const d = new Date()
            const sc_name = d.getDay() +""+d.getMonth()+""+d.getFullYear()+""+d.getHours()+""+d.getMinutes()+""+d.getSeconds()+""+d.getMilliseconds();
            
            /*if(await page.screenshot({ path: sc_name + '.png' })) {
                console.log("Capture d'écran")
                console.log("")
            }*/


            if(result){
                resolve(result)
                await browser.close()
            }


            /********************* */
        }).catch( async () => {
            reject()
            await browser.close()
        })



        /**
         * if -> waitForSelector
         *      parse titre et push dans []
         *      parse info et push dans []
         * 
         * renvoyer [titre, info] dans le resolve
         */

        

    })

}

export {
    search
} 