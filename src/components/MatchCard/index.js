// Write your code here
import {Component} from 'react'
import './index.css'

class MatchCard extends Component {
  render() {
    const {matchDetails} = this.props
    const {competingTeamLogo, competingTeam, matchStatus, result} = matchDetails
    const getMatchStatusClassName = status =>
      status === 'Won' ? 'match-won' : 'match-lost'
    const matchStatusClassName = `match-status ${getMatchStatusClassName(
      matchStatus,
    )}`

    return (
      <li className="match-item">
        <img
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
          className="competing-team-logo"
        />
        <p className="competing-team-name">{competingTeam}</p>
        <p className="result">{result}</p>
        <p className={matchStatusClassName}>{matchStatus}</p>
      </li>
    )
  }
}
export default MatchCard
