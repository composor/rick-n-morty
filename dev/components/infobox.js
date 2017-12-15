import {h} from 'composi'

export function InfoBox({character, onClick}) {
  if (onClick) {
    return (
      <div data-id={character.id} class="infobox closed" onclick={(e) => onClick(e)}>
        <div class="img" style={{ backgroundImage: `url(./images/${character.image})` }}></div>
        
        <section class="stats">
          <h2>{character.name}</h2>
        </section>
      </div>
    )
  } else {
    return (
      <div class="infobox">
        <div class="img" style={{ backgroundImage: `url(./images/${character.image})` }}></div>
        
        <section class="stats">
          <h2>{character.name}</h2>
        </section>
      </div>
    )
  }
}