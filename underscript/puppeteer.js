import { launch } from "puppeteer"
import {config} from "../config.js"


const search = async (tosearch) => {
    return new Promise( async (resolve, reject) => {

        const browser = await launch({ headless: config["headless"] }) // pour ouvrir le navigateur launch({ headless: false })
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
        await page.click("input.gLFyf.gsfi") // gLFyf gsfi

        console.log("Ecriture de la recherche...")
        //await page.type('input.gLFyf.gsfi', tosearch, {delay: Math.round(Math.random()*500)})
        await page.type('input.gLFyf.gsfi', tosearch, {delay: 100})
        console.log("Recherche en cours...")
        //await page.type('input.gLFyf.gsfi', String.fromCharCode(13), {delay: Math.round(Math.random()*500)})
        await page.type('input.gLFyf.gsfi', String.fromCharCode(13), {delay: 100})

        //await page.waitForNavigation({waitUntil: 'networkidle0'});
        //await page.waitForTimeout(3000); // teste le waitForSelector
        
        await page.waitForSelector(".yuRUbf").then( async() => {
            /******************************** */

            console.log("Analyse en cours ...")

            const result = await page.evaluate(() => {
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