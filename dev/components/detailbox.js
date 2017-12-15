import {h} from 'composi'

export function DetailBox({character}) {
  return (
    <div class="infobox">
      <div class="img" style={{ backgroundImage: `url(./images/${character.image})` }}></div>
      
      <section class="stats">
        <h2>{character.name}</h2>
        <h3>
						{character.description}
				</h3><p>
          <strong>Age:</strong> {character.age}
        </p>
        <p>
          <strong>Status:</strong> {character.status}
        </p>
        <p>
          <strong>Job:</strong> {character.job.join(', ')}
        </p>
        <p>
          <strong>Place of Origin:</strong> {character.placeOfOrigin}
        </p>
      </section>
    </div>
  )
}