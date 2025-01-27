import {Component} from 'react'
import './index.css'

class TeamMatches extends Component {
  state = {teamDetails: {}, recentMatches: [], isLoading: true}

  componentDidMount() {
    this.fetchTeamMatches()
  }

  fetchTeamMatches = async () => {
    const {match} = this.props
    const {id} = match.params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    
    this.setState({
      teamDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
      teamBannerUrl: data.team_banner_url,
      isLoading: false,
    })
  }

  render() {
    const {teamDetails, recentMatches, teamBannerUrl, isLoading} = this.state
    const {
      umpires, date, venue, result, competing_team, competing_team_logo,
      first_innings, second_innings, man_of_the_match
    } = teamDetails

    return (
      <div className="team-matches-container">
        {isLoading ? (
          <div data-testid="loader">Loading...</div>
        ) : (
          <>
            <img src={teamBannerUrl} alt="team banner" className="team-banner" />
            <div className="latest-match-details">
              <h2>Latest Match</h2>
              <p>{competing_team}</p>
              <img src={competing_team_logo} alt={`latest match ${competing_team}`} />
              <p>{date}</p>
              <p>{venue}</p>
              <p>{result}</p>
              <p>{umpires}</p>
              <p>{first_innings}</p>
              <p>{second_innings}</p>
              <p>{man_of_the_match}</p>
            </div>
            <ul className="recent-matches-list">
              {recentMatches.map(match => (
                <li key={match.id} className="match-item">
                  <p>{match.competing_team}</p>
                  <img src={match.competing_team_logo} alt={`competing team ${match.competing_team}`} />
                  <p>{match.result}</p>
                  <p>{match.match_status}</p>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default TeamMatches
