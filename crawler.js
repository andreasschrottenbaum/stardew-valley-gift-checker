"use strict";
exports.__esModule = true;
var Crawler = require("crawler");
var fs = require("fs");
var all_gifts_1 = require("./src/data/all-gifts");
var c = new Crawler({
    maxConnections: 10
});
all_gifts_1.unsorted.hated.forEach(function (item) {
    c.queue({
        uri: 'https://stardewvalleywiki.com/' + item.name.replace(' ', '_'),
        callback: function (error, response, done) {
            var $ = response.$;
            item.image =
                'https://stardewvalleywiki.com' +
                    $('#infoboxtable .image img').attr('src');
            item.wiki = response.request.uri.href;
            done();
        }
    });
    c.on('drain', function () {
        fs.writeFile('./crawl-data.txt', JSON.stringify(all_gifts_1.unsorted.hated, null, 2), function () { });
    });
});
