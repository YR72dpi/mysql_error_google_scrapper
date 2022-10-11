const config = []

config["watcher"] = false /* true if you want to watch all error found in real time */
config["headless"] = true /* true if you want to hidde the google chrome copy */
config["file"] = "error.csv" /* csv file with all error */
config['print_excl_w'] = false /* true if you want to print the url even if there is excluded word */

/**
 * These string will be put on regex expression
 */
const exclude = [
    "stackoverflow\.com",
    "openclassrooms\.com",
    "php\.net",
    "dev",
    "forum(s)?"
]

const regexFlag = "gmi"

export {
    config,
    exclude,
    regexFlag
}