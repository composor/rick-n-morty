import {h, Component} from 'composi'
import {characters} from '../data/characters'
import {TopBar} from './topbar'
import {InfoBox} from './infobox'
import {DetailBox} from './detailbox'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      characters: characters,
      character: characters[0],
      dashboard: true
    }
    this.container = 'body'
  }
  render(data) {
    const character = false
    const dashboard = this.state.dashboard
    const char = this.state.characters[0]
    if (dashboard) {
      return (
        <section>
          <TopBar dashboard={dashboard} onInput={this.findCharacterInput.bind(this)} onClick={this.findCharacter.bind(this)} />
          <div id="infocontainer">
            { 
              data.characters.map( char => (
              <InfoBox  character={char}  onClick={this.showDetail.bind(this)} />
            )) }
          </div>
        </section>
      )
    } else {
      return (
        <section>
          <TopBar dashboard={dashboard} showDashboard={this.showDashboard.bind(this)}/>
          <div id="infocontainer">
            <DetailBox character={this.state.character}/>
          </div>
        </section>
      )
    }

  }

  showDashboard() {
    this.setState({dashboard: true})
  }
  showDetail(e) {
    const target = e.target.closest('.infobox')
    const characters = this.state.characters
    const id = target.dataset.id
    const character = characters.filter(char => id === char.id)[0]
    this.setState({character})
    this.setState({dashboard: false})
  }
  findCharacter(e) {
    const input = this.element.querySelector('input')
    const value = input && input.value
    
    const characters = this.state.characters
    if (value) {
      const character = characters.filter(char => {
        const regex = new RegExp(value, 'img')
        return char.name.match(regex)
      })[0]
      if (character) {
        this.setState({character})
        this.setState({dashboard: false})
      }
    } else {
      alert('Please provide a character name to search for.')
    }
  }
  findCharacterInput(e) {
    if (e.keyCode == 13) {
      this.findCharacter(e)
    }
  }
}
