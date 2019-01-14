# ShowRSS API
Simple api for [http://showrss.info](http://showrss.info)

## Install
```
npm isntall showrss-api
```
## Find series info
```javascript
const {getSeries, getInfoById} = require('../main.js');

async function test(){

    // GET LIST OF SERIES
    const series = await getSeries();
    const serie = series[1];

    // GET SERIE INFO BY ID
    const serieInfo = await getInfoById(serie.id);
    return `Serie found: ${JSON.stringify(serieInfo,null,2)}`;
   
}


test().then(console.log).catch(e => console.log(e));
```