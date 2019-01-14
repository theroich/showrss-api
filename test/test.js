const {getSeries, getInfoById} = require('../main.js');

(async function(){
    const series = await getSeries();
    const serie = series[1];
    const serieInfo = await getInfoById(serie.id);
    if(serieInfo){
        return `Serie found: ${JSON.stringify(serieInfo,null,2)}`;
    }else{
        throw new Error("Series may not be found");
    }
})().then(console.log).catch(e => console.log(e));





