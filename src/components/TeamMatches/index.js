import {useState, useEffect} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

const TeamMatches = ({match}) => {
  const [teamDetails, setTeamDetails] = useState({})
  const [recentMatches, setRecentMatches] = useState([])
  const [teamBannerUrl, setTeamBannerUrl] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchTeamMatches = async () => {
      const {id} = match.params
      const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
      const data = await response.json()

      const formattedTeamDetails = {
        umpires: data.latest_match_details.umpires,
        date: data.latest_match_details.date,
        venue: data.latest_match_details.venue,
        result: data.latest_match_details.result,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        firstInnings: data.latest_match_details.first_innings,
        secondInnings: data.latest_match_details.second_innings,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
      }

      const formattedRecentMatches = data.recent_matches.map(eachMatch => ({
        id: eachMatch.id,
        competingTeam: eachMatch.competing_team,
        competingTeamLogo: eachMatch.competing_team_logo,
        result: eachMatch.result,
        matchStatus: eachMatch.match_status,
      }))

      setTeamDetails(formattedTeamDetails)
      setRecentMatches(formattedRecentMatches)
      setTeamBannerUrl(data.team_banner_url)
      setIsLoading(false)
    }
    fetchTeamMatches()
  }, [match.params])

  return (
    <div className="team-matches-container">
      {isLoading ? (
        <div data-testid="loader" className="loader">
          Loading...
        </div>
      ) : (
        <>
          <img src={teamBannerUrl} alt="team banner" className="team-banner" />
          <LatestMatch matchDetails={teamDetails} />
          <ul className="recent-matches-list">
            {recentMatches.map(eachMatch => (
              <MatchCard key={eachMatch.id} match={eachMatch} />
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default TeamMatches
