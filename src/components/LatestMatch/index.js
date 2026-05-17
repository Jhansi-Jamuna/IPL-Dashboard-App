import './index.css'

const LatestMatch = ({matchDetails}) => {
  const {
    umpires,
    date,
    venue,
    result,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
  } = matchDetails

  return (
    <div className="latest-match-container">
      <h1 className="latest-match-heading">Latest Match</h1>
      <div className="latest-match-card">
        <div className="team-info">
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="competing-team-logo"
          />
          <p className="competing-team">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="venue">{venue}</p>
          <p className="result">{result}</p>
        </div>
        <div className="match-details">
          <p className="detail-label">First Innings</p>
          <p className="detail-value">{firstInnings}</p>
          <p className="detail-label">Second Innings</p>
          <p className="detail-value">{secondInnings}</p>
          <p className="detail-label">Man of the Match</p>
          <p className="detail-value">{manOfTheMatch}</p>
          <p className="detail-label">Umpires</p>
          <p className="detail-value">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
