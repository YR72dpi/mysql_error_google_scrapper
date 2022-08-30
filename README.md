# MEGS

**MySQL Error Google Scrapper**

This nodeJs script scrappes mysql errors found on google using puppeteer.

All error will be save on a file *.txt*

## Summary

1. [USAGE](#Usage)

2. [Config](#Config)

3. [**ISSUES**](#ISSUES)

## Usage

```
mkdir megs
cd megs
git clone [this repositories url]
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
___

### Issuse n° 1
This script work only for french google.

Watch in *pupperteer.js*. It's because of css selectors

**Solving** : [X]

### Issuse n° 2
This script is caught as a robot, often, after **29** query.

**Solving** : use a vpn after 25 query.