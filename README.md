![image](docs/FireFly_logo_megs.jpg)
<center><sup><sub>Adobe FireFly Generation</sub></sup></center>

# MEGS

**M**ySQL **E**rror **G**oogle **S**crapper

This nodeJs script scrappes mysql errors found on google using [puppeteer](https://github.com/puppeteer/puppeteer).

All error will be save on a file *.txt*

It's look like [THIS](https://www.instagram.com/reel/Chm_IjoDS5n/)

## Summary

1. [USAGE](#Usage)

2. [Config](#Config)

3. [ISSUES](#ISSUES)

4. [To improve it](#to-improve-it)

## Usage

**Installation**

```cmd
mkdir megs
cd megs
git clone https://github.com/YR72dpi/mysql_error_google_scrapper.git
# unzip
npm update
```

**Usage**

```cmd
npm run megs
```


## Config

1. config.js

```javascript
const config = []

config["watcher"] = false /* true if you want to watch all error found in real time */
config["headless"] = false /* true if you want to hidde the google chrome copy */
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

```

2. error.csv

Don't edit the fisrt line
```csv
ERROR 
inurl:id= & intext:"Warning: mysql_fetch_assoc()"
inurl:id= & intext:"Warning: query()"
inurl:id= & intext:"Warning: mysql_fetch_array()"
inurl:id= & intext:"Warning: mysql_num_rows()"
inurl:id= & intext:"Warning: mysql_result()"
inurl:id= & intext:"Warning: pg_exec()"
inurl:id= & intext:"Warning: mysql_result()"
inurl:id= & intext:"Warning: mysql_num_rows()"
inurl:id= & intext:"Warning: mysql_query()"

```


## ISSUES

### Issues n° 1
This script work only for french google.

Watch in *pupperteer.js*. It's because of css selectors

>**Solution** : [X]

### Issues n° 2
This script is caught as a robot, often, after **~35** query.

>**Solution** :    
>- connect the script to a vpn and change of vpn each 25 query
>- connect the script to a google account and manage the reCaptcha (which already trust you)
>- Install an extension which solve the recaptcha like [Buster](https://chrome.google.com/webstore/detail/buster-captcha-solver-for/mpbjkejclgfgadiemmefgebjfooflfhl)

## To improve it

As well as solve these two issues, it's could be good to :

- Make possible to save information in another format than *.txt*
- Make a file with words to exclude instead of config file  
- Make one command line system to catch MySQL Error with one command line
- Make a GUI interface