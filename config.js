const config = []

config["watcher"] = false /* true if you want to watch all error found in real time */
config["headless"] = true /* true if you want to hidde the google chrome copy */
config["file"] = "error.csv" /* csv file with all error */

/**
 * These string will be put on regex expression
 */
const exclude = [
    "stackoverflow",
    "php\.net",
    "dev",
    "forum(s)?"
]

const regexFlag = "ig"

export {
    config,
    exclude,
    regexFlag
}