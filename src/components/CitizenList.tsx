import './CitizenList.scss'

import citizens from '../data/citizens.js'
import generalGifts from '../data/all-gifts'

//@ts-ignore
function CitizenList(props) {
  const display: 'small' | 'big' = props.display || 'big'

  const elements = citizens.map((citizen, index) => {
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
          <figcaption>{citizen.name}</figcaption>
        </figure>

        <table>
          <thead>
            <tr>
              <th>Loves</th>
              <th>Likes</th>
              <th>Neutral</th>
              <th>Dislikes</th>
              <th>Hates</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {[
                  filteredGifts.loves.map((item) => (
                    <span key={citizen.name + '_' + item.id}>
                      {item.name} <br />
                    </span>
                  )),
                ]}
              </td>
              <td>
                {[
                  filteredGifts.likes.map((item) => (
                    <span key={citizen.name + '_' + item.id}>
                      {item.name} <br />
                    </span>
                  )),
                ]}
              </td>
              <td>
                {[
                  filteredGifts.neutral.map((item) => (
                    <span key={citizen.name + '_' + item.id}>
                      {item.name} <br />
                    </span>
                  )),
                ]}
              </td>
              <td>
                {[
                  filteredGifts.dislikes.map((item) => (
                    <span key={citizen.name + '_' + item.id}>
                      {item.name} <br />
                    </span>
                  )),
                ]}
              </td>
              <td>
                {[
                  filteredGifts.hates.map((item) => (
                    <span key={citizen.name + '_' + item.id}>
                      {item.name} <br />
                    </span>
                  )),
                ]}
              </td>
            </tr>
          </tbody>
        </table>
      </li>
    )
  })

  return <ul className='svgc-citizen-list'>{elements}</ul>
}

export default CitizenList
