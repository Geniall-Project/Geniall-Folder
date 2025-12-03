import './CharacterDisplay.css'
import headImage from '../../assets/standard-head.svg'
import bodyImage from '../../assets/standard-body.svg'

function CharacterDisplay() {
  return (
    <div className="character">
      <div id="character-head">
        <img src={headImage} alt="head" />
      </div>
      <div id="character-body">
        <img src={bodyImage} alt="body" />
      </div>
    </div>
  )
}

export default CharacterDisplay

