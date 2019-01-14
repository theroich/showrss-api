# ShowRSS API
Simple api for [http://showrss.info](http://showrss.info)

## Install
```
npm install showrss-api
```
## Find series info
```javascript
const {getSeries, getInfoById} = require('../main.js');

(async function(){
    const series = await getSeries();
    const serie = series[1];
    const serieInfo = await getInfoById(serie.id);
    return `Serie found: ${JSON.stringify(serieInfo,null,2)}`;
    
})().then(console.log).catch(e => console.log(e));
```