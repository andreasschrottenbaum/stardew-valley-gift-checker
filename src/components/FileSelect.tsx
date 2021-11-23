import './FileSelect.scss'

import { ChangeEvent, useState } from 'react'
import { parseString } from 'xml2js'
import { copyToClipboard } from '../helpers/copy2clipboard'
import classNames from 'classnames'

//@ts-ignore
function FileSelect({ onUpdate }) {
  const saveDir = '%APPDATA%/StardewValley/Saves'
  let [showMessage, setShowMessage] = useState(false)

  function readFile(event: ChangeEvent) {
    //@ts-ignore
    const file = event.nativeEvent.target?.files[0]

    if (!file) return

    const fr = new FileReader()

    fr.onload = function () {
      parseString(this.result?.toString() || '', (error, result) => {
        if (!result?.SaveGame?.player) return

        onUpdate(result)
      })
    }

    fr.readAsText(file)
  }

  function copyPath() {
    //TODO: trigger a message somewhere
    copyToClipboard(saveDir)?.then(() => {
      setShowMessage(true)

      setTimeout(() => {
        setShowMessage(false)
      }, 5000)
    })
  }

  const messageClasses = classNames({
    'svgc-copy-notification': true,
    visible: !!showMessage,
  })

  return (
    <div>
      <input type='file' onChange={readFile} className='svgc-file-input' />
      <div>
        <small>
          Get the save file from <code onClick={copyPath}>${saveDir}</code>,
          select the savestate you want and upload the latest file
        </small>
      </div>
      <div className={messageClasses}>
        Copied Path <strong>{saveDir}</strong> to Clipboard
      </div>
    </div>
  )
}

export default FileSelect
