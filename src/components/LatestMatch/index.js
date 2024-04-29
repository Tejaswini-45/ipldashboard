// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchData} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestMatchData

  return (
    <div className="latest-match-container">
      <h1 className="container-heading">Latest Matches</h1>
      <div className="latest-match-card">
        <div className="lm-logo-container">
          <div className="lm-details-1">
            <p className="lm-team-name">{competingTeam}</p>
            <p className="date">{date}</p>
            <p className="details">{venue}</p>
            <p className="details">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            className="lm-team-logo"
            alt={`latest match ${competingTeam}`}
          />
        </div>
        <hr className="separator" />
        <div className="lm-details-2">
          <p className="lm-label">First Innings</p>
          <p className="lm-value">{firstInnings}</p>
          <p className="lm-label">second Innings</p>
          <p className="lm-value">{secondInnings}</p>
          <p className="lm-label">Man Of The Match</p>
          <p className="lm-value">{manOfTheMatch}</p>
          <p className="lm-label">Umpires</p>
          <p className="lm-value">{umpires}</p>
        </div>
      </div>
    </div>
  )
}
export default LatestMatch
