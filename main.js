import {get_error} from "./underscript/csv.js";
import {search} from "./underscript/puppeteer.js"
import {config, exclude, regexFlag} from "./config.js"
import child_process from "node:child_process"
import * as fs from "fs";


var faille = await get_error()
var nbr_faille = faille.length;

console.log("\x1b[34m", "\n\nNombre de faille : " + nbr_faille)
console.log(faille)

const d = new Date()
const sc_name = d.getDate() +"_"+(d.getMonth()+1)+"_"+d.getFullYear()+"_"+d.getHours()+"_"+d.getMinutes()+"_"+d.getSeconds()+"_"+d.getMilliseconds();
const file_name = "Faille_" + sc_name + ".txt"

console.log("")
console.log("\x1b[33m%s\x1b[0m", "Fichier de sauvegarde : " + file_name)
console.log("")

if (process.platform == "win32") {
    if(config["watcher"]){
        child_process.exec("start reader.bat "+file_name)
    }
} else {
    fs.unlink("reader.bat")
}

for (let i = 0; i < nbr_faille; i++) {
        console.log('\x1b[7m%s\x1b[0m', "|==> Faille ("+(i+1)+"/"+nbr_faille+") en cours :")
        console.log(faille[i])

        let section_name = "\n################################## \n"
            section_name += "Faille " + (i+1) + "\n"
            section_name += faille[i] + "\n"
            section_name += "################################## \n"
            section_name += "\n"

        await search(faille[i]).then((tab_thisFaille) => {
            // recup data []
            // rec data
            let section_info = ""
            
            
            tab_thisFaille.forEach(e => {
                /*console.log("_________________________________")
                console.log(e[0])
                console.log("==> " + e[1])
                console.log("")*/

                /**
                 * init var regexCaught = false
                 * init var regexCaught_show = ""
                 * foreach expression 
                 *      if regex caught && !regex { regexcaught = true}
                 *          
                 */

                var regexCaught = false
                var regexCaught_show = "";

                
                exclude.forEach(reg => {
                    const regex = new RegExp('/'+reg+'/', regexFlag)
                    if(regex.exec(e) != null && regexCaught == false) {
                        //console.log(regex.exec(e))
                        regexCaught = true
                        regexCaught_show += regex;
                        console.log("\x1b[31m%s\x1b[0m", "Excluded word caught : "+ regexCaught_show)
                    }
                });
                
                    
                /**
                 * if regexCaught == false 
                 */

                if(!regexCaught) {
                    section_info += "_________________________________\n"
                    section_info += e[0] + "\n"
                    section_info += "|==> " + e[1] + "\n"
                    section_info += "\n"
                } else {
                    section_info += "Excluded word caught : "+regexCaught_show+"\n"
                }
                

                /**
                 * else { section_info = "regex expression caught :"+Regex expression}
                 */
                
            })

            fs.writeFileSync('./' + file_name, section_name+section_info, { flag: 'a+' })
            console.log("\x1b[32m%s\x1b[0m", 'Faille '+(i+1)+' enregistré !\n')
            
        }).catch((e) => {
            
            //continu = false
            
            fs.writeFileSync('./' + file_name, section_name+ "Pas de resultat faille " + (i+1) + "\n", { flag: 'a+' })
            console.log('\x1b[31m%s\x1b[0m', "Pas de resultat faille " + (i+1) + "\n")
            
        })
        
        setTimeout(()=>{}, 1000)
}