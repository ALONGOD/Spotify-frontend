import { useState } from 'react'
import { IoIosPlay } from 'react-icons/io'
import { getTimeOfSent } from '../../services/util.service'
import { BsThreeDots } from 'react-icons/bs'
import { Modal } from '../cmps/Modal/Modal'

export function SongPreview({ song, idx, modalOpen, onToggleModal }) {
  const [onSongHover, setOnSongHover] = useState(false)

  const { addedAt, duration, imgUrl, title, artist, album } = song

  return (
    <li
      className="flex flex-row align-center"
      onMouseEnter={() => setOnSongHover(true)}
      onMouseLeave={() => setOnSongHover(false)}
    >
      <h4 className="idx">{onSongHover ? <IoIosPlay /> : idx + 1}</h4>
      <div className="main-details flex flex-row align-center">
        <img src={imgUrl} alt="song-img" />
        <div className="song-details flex flex-column">
          <h4 className="title">{title}</h4>
          <h4>{artist ? artist : 'Artist'}</h4>
        </div>
      </div>
      <h4>{album ? album : 'Album'}</h4>
      <h4>{getTimeOfSent(addedAt)}</h4>
      <div className="duration relative flex justify-start align-center">
        <h4>{duration}</h4>
        {onSongHover && (
          <BsThreeDots
            className="dots"
            onClick={ev => onToggleModal(ev, song.id)}
          />
        )}
        {modalOpen === song.id && <Modal modalType={'songOptions'}/>}
      </div>
    </li>
  )
}
