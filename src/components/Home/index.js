import {useState, useEffect} from 'react'
import TeamCard from '../TeamCard'
import './index.css'

const Home = () => {
  const [teams, setTeams] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchTeams = async () => {
      const response = await fetch('https://apis.ccbp.in/ipl')
      const data = await response.json()
      setTeams(data.teams)
      setIsLoading(false)
    }
    fetchTeams()
  }, [])

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
        <div data-testid="loader" className="loader">
          Loading...
        </div>
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

export default Home
