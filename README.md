# mango-api

A node.js API that serves up 137 different mango cultivars in JSON!

All data collected was gathered from Wikipedia using Puppeteer. You can check that repo out [here](https://github.com/Srgiomndz/wiki-scraper)



## Examples

Endpoint: 

```
https://mango-api.fly.dev/api/kent
```

Returns:

``` yaml
{
  name: "Kent",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Mango_Kent_Asit_fs8.jpg/120px-Mango_Kent_Asit_fs8.jpg",
  origin: "Australia, Brazil, Ecuador, Guatemala, Honduras, Israel, Italy, Mexico, South Africa, United States",
  notes: "The original Kent tree still stands in Coral Gables, Florida (United States)"
}
```

## Installation

To install this repo locally, follow the steps below:


1. Clone the repo 
```
$ https://github.com/Srgiomndz/mango-api.git
```


2. Install dependencies 
```
$ npm install
```


3. Create a .env file and add PORT and DB_STRING
```
$ touch .env
```
![Screen Shot 2022-12-09 at 2 23 48 PM](https://user-images.githubusercontent.com/26800385/206808400-856b6857-0aab-44dc-9871-d0813f4fd5e9.png)



4. Run!
```
$ npm run start 
```
**Note:** At this point, the app will not work for you, depending on what data your DB has. You can modify the endpoints in server.js to match the information you will serve.


## How It's Made:

**Tech used:** Node.js, MongoDB, HTML



## Optimizations

Some additions that I would like to add are:

Add style.css (very bland atm)

Add CI/CD with fly.io and GitHub actions for practice!


## Lessons Learned:

I deployed this project using Fly.io and loved how easy the process was!
