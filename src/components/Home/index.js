import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teams: [], isLoading: true}

  componentDidMount() {
    this.fetchTeams()
  }

  fetchTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    this.setState({teams: data.teams, isLoading: false})
  }

  render() {
    const {teams, isLoading} = this.state

    return (
      <div className="home-container">
        <div className="header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1>IPL Dashboard</h1>
        </div>
        {isLoading ? (
          <div data-testid="loader">Loading...</div>
        ) : (
          <ul className="team-list">
            {teams.map(team => (
              <TeamCard key={team.id} team={team} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
