const request = require('request-promise');
const cheerio = require('cheerio');
const _ = require('lodash');
let Parser = require('rss-parser');
let parser = new Parser();

async function getSeries(){
        var response = await request('http://showrss.info/browse');
        var result = useCheerio(response);
        return result;
      
}



async function getInfoById(id){
        var parsed = await parser.parseURL(`http://showrss.info/show/${id}.rss`);
        return parsed;
    
}

function useCheerio(response) {
    var $ = cheerio.load(response);
    var options = $('#showselector option');
    var result = _(options).map(o => {
        return {
            id: $(o).attr('value'),
            name: $(o).text(),
            link: `http://showrss.info/show/${$(o).attr('value')}.rss`
        };
    }).value();
    return result;
}



module.exports.getSeries = getSeries;
module.exports.getInfoById = getInfoById;
