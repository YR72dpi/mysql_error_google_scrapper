# MEGS

**MySQL Error Google Scrapper**

This nodeJs script scrappes mysql errors found on google using [puppeteer](https://github.com/puppeteer/puppeteer).

All error will be save on a file *.txt*

It's look like [THIS](https://www.instagram.com/reel/Chm_IjoDS5n/)

## Summary

1. [USAGE](#Usage)

2. [Config](#Config)

3. [**ISSUES**](#ISSUES)

4. [To improve it](#to-improve-it)

## Usage

```
mkdir megs
cd megs
git clone https://github.com/YR72dpi/mysql_error_google_scrapper.git
# unzip
npm update
npm run megs

```

## Config

1. config.js

```javascript
config["watcher"] = false /* true if you want to watch all error found in real time */
config["headless"] = true /* true if you want to hidde the google chrome copy */
config["file"] = "error.csv" /* csv file with all error */
/**
 * The csv file has one column named "ERROR"
 */

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
This script is caught as a robot, often, after **29** query.

>**Solution** : use a vpn after 25 query.

## To improve it

0. Make a filter to exclud some terms in url
1. Show when the recaptcha is found and removed the timeout
2. Fix *Issues n° 1*
3. Build a system to not get caught as a robot, like :
    - connect the script to a vpn and change of vpn each 25 query
    - connect the script to a google account and manage the reCaptcha(which already trust you)

