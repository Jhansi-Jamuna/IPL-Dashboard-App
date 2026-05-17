import './index.css'

const MatchCard = ({match}) => {
  const {competingTeam, competingTeamLogo, result, matchStatus} = match

  const getMatchStatusClass = () => {
    if (matchStatus === 'Won') {
      return 'match-won'
    }
    if (matchStatus === 'Lost') {
      return 'match-lost'
    }
    return 'match-draw'
  }

  return (
    <li className="match-card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="competing-team-logo"
      />
      <p className="competing-team">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={`match-status ${getMatchStatusClass()}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
