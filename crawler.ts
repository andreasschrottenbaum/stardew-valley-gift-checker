import * as Crawler from 'crawler'
import * as fs from 'fs'

import { unsorted } from './src/data/all-gifts'

const c = new Crawler({
  maxConnections: 10,
})

unsorted.hated.forEach((item: any) => {
  c.queue({
    uri: 'https://stardewvalleywiki.com/' + item.name.replace(' ', '_'),
    callback: (error, response, done) => {
      const $ = response.$

      item.image =
        'https://stardewvalleywiki.com' +
        $('#infoboxtable .image img').attr('src')

      item.wiki = response.request.uri.href

      done()
    },
  })

  c.on('drain', () => {
    fs.writeFile(
      './crawl-data.txt',
      JSON.stringify(unsorted.hated, null, 2),
      () => {}
    )
  })
})
