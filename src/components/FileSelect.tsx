import './FileSelect.scss'

import { ChangeEvent } from 'react'
import { parseString } from 'xml2js'
import { copyToClipboard } from '../helpers/copy2clipboard'

//@ts-ignore
function FileSelect({ onUpdate }) {
  const saveDir = '%APPDATA%/StardewValley/Saves'

  function readFile(event: ChangeEvent) {
    //@ts-ignore
    const file = event.nativeEvent.target?.files[0]

    if (!file) return

    const fr = new FileReader()

    fr.onload = function () {
      parseString(this.result?.toString() || '', (error, result) => {
        if (!result?.SaveGame?.player) return

        const players = result.SaveGame.player

        onUpdate(players)
      })
    }

    fr.readAsText(file)
  }

  function copyPath() {
    //TODO: trigger a message somewhere
    copyToClipboard(saveDir)
  }

  return (
    <div>
      <input type='file' onChange={readFile} className='svgc-file-input' />
      <div>
        <small>
          Get the save file from <code onClick={copyPath}>${saveDir}</code>,
          select the savestate you want and upload the latest file
        </small>
      </div>
    </div>
  )
}

export default FileSelect
