import './CitizenList.scss'

import citizens from '../data/citizens.js'
import generalGifts from '../data/all-gifts'
import { useState } from 'react'

//@ts-ignore
function CitizenList(props) {
  const display: 'small' | 'big' = props.display || 'big'

  const elements = citizens.map((citizen, index) => {
    let birthdayWeekday = ''

    switch (citizen.birthday.day) {
      case 1:
      case 8:
      case 15:
      case 22:
        birthdayWeekday = 'Mo'
        break
      case 2:
      case 9:
      case 16:
      case 23:
        birthdayWeekday = 'Tu'
        break
      case 3:
      case 10:
      case 17:
      case 24:
        birthdayWeekday = 'We'
        break
      case 4:
      case 11:
      case 18:
      case 25:
        birthdayWeekday = 'Th'
        break
      case 5:
      case 12:
      case 19:
      case 26:
        birthdayWeekday = 'Fr'
        break
      case 6:
      case 13:
      case 20:
      case 27:
        birthdayWeekday = 'Sa'
        break
      case 7:
      case 14:
      case 21:
      case 28:
        birthdayWeekday = 'Su'
        break
    }

    const citizenGifts = [
      ...citizen.gifts.loves,
      ...citizen.gifts.likes,
      ...citizen.gifts.neutral,
      ...citizen.gifts.dislikes,
      ...citizen.gifts.hates,
    ]

    const filteredGifts = {
      loves: [
        ...citizen.gifts.loves,
        ...generalGifts.universalLoved.filter(
          (item) => !citizenGifts.includes(item)
        ),
      ],
      likes: [
        ...citizen.gifts.likes,
        ...generalGifts.universalLiked.filter(
          (item) => !citizenGifts.includes(item)
        ),
      ],
      neutral: [
        ...citizen.gifts.neutral,
        ...generalGifts.universalNeutral.filter(
          (item) => !citizenGifts.includes(item)
        ),
      ],
      dislikes: [
        ...citizen.gifts.dislikes,
        ...generalGifts.universalDisliked.filter(
          (item) => !citizenGifts.includes(item)
        ),
      ],
      hates: [
        ...citizen.gifts.hates,
        ...generalGifts.universalHated.filter(
          (item) => !citizenGifts.includes(item)
        ),
      ],
    }

    return (
      <li key={index}>
        <figure>
          <img src={citizen.image[display]} alt={citizen.name} />
          <figcaption>
            <h4>{citizen.name}</h4>
            {birthdayWeekday}, {citizen.birthday.day} {citizen.birthday.month}
          </figcaption>
        </figure>

        <div className='gifts'>
          <div className='gift gift-loves'>
            <h4>Loves</h4>

            <div className='gift-list'>
              {[
                filteredGifts.loves.map((item) => (
                  <a
                    href={item.wiki}
                    target='_blank'
                    rel='noreferrer'
                    key={citizen.name + '_' + item.id}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      title={item.name}
                      width='48'
                      height='48'
                    />
                  </a>
                )),
              ]}
            </div>
          </div>

          <div className='gift gift-likes'>
            <h4>Likes</h4>

            <div className='gift-list'>
              {[
                filteredGifts.likes.map((item) => (
                  <a
                    href={item.wiki}
                    target='_blank'
                    rel='noreferrer'
                    key={citizen.name + '_' + item.id}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      title={item.name}
                      width='48'
                      height='48'
                    />
                  </a>
                )),
              ]}
            </div>
          </div>

          <div className='gift gift-neutral'>
            <h4>Neutral</h4>

            <div className='gift-list'>
              {[
                filteredGifts.neutral.map((item) => (
                  <a
                    href={item.wiki}
                    target='_blank'
                    rel='noreferrer'
                    key={citizen.name + '_' + item.id}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      title={item.name}
                      width='48'
                      height='48'
                    />
                  </a>
                )),
              ]}
            </div>
          </div>

          <div className='gift gift-dislikes'>
            <h4>Dislikes</h4>

            <div className='gift-list'>
              {[
                filteredGifts.dislikes.map((item) => (
                  <a
                    href={item.wiki}
                    target='_blank'
                    rel='noreferrer'
                    key={citizen.name + '_' + item.id}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      title={item.name}
                      width='48'
                      height='48'
                    />
                  </a>
                )),
              ]}
            </div>
          </div>

          <div className='gift gift-hates'>
            <h4>Hates</h4>

            <div className='gift-list'>
              {[
                filteredGifts.hates.map((item) => (
                  <a
                    href={item.wiki}
                    target='_blank'
                    rel='noreferrer'
                    key={citizen.name + '_' + item.id}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      title={item.name}
                      width='48'
                      height='48'
                    />
                  </a>
                )),
              ]}
            </div>
          </div>
        </div>
      </li>
    )
  })

  return <ul className='svgc-citizen-list'>{elements}</ul>
}

export default CitizenList
