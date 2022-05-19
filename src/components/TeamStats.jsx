function TeamStats({game}) {
    return (
       <div className = "team-stats">
           <h1>{game.TeamGames[0].Name} Team Stats</h1>
           <table>
               <thead>
                   <tr>
                       <th>FG</th>
                       <th>FA</th>
                       <th>FG%</th>
                       <th>EFG%</th>
                       <th>2P</th>
                       <th>2PA</th>
                       <th>2P%</th>
                       <th>3P</th>
                       <th>3A</th>
                       <th>3P%</th>
                       <th>FT</th>
                       <th>FTA</th>
                       <th>FT%</th>
                       <th>OREB</th>
                       <th>DREB</th>
                       <th>TREB</th>
                       <th>AST</th>
                       <th>STL</th>
                       <th>BLK</th>
                       <th>TO</th>
                   </tr>
               </thead>
               <tbody>
                   <tr>
                       <td>{game.TeamGames[0].FieldGoalsMade}</td>
                       <td>{game.TeamGames[0].FieldGoalsAttempted}</td>
                       <td>{game.TeamGames[0].FieldGoalsPercentage}%</td>
                       <td>{game.TeamGames[0].EffectiveFieldGoalsPercentage}%</td>
                       <td>{game.TeamGames[0].TwoPointersMade}</td>
                       <td>{game.TeamGames[0].TwoPointersAttempted}</td>
                       <td>{game.TeamGames[0].TwoPointersPercentage}%</td>
                       <td>{game.TeamGames[0].ThreePointersMade}</td>
                       <td>{game.TeamGames[0].ThreePointersAttempted}</td>
                       <td>{game.TeamGames[0].ThreePointersPercentage}%</td>
                       <td>{game.TeamGames[0].FreeThrowsMade}</td>
                       <td>{game.TeamGames[0].FreeThrowsAttempted}</td>
                       <td>{game.TeamGames[0].FreeThrowsPercentage}</td>
                       <td>{game.TeamGames[0].OffensiveRebounds}</td>
                       <td>{game.TeamGames[0].DefensiveRebounds}</td>
                       <td>{game.TeamGames[0].Rebounds}</td>
                       <td>{game.TeamGames[0].Assists}</td>
                       <td>{game.TeamGames[0].Steals}</td>
                       <td>{game.TeamGames[0].BlockedShots}</td>
                       <td>{game.TeamGames[0].Turnovers}</td>
                   </tr>
               </tbody>
           </table>
           <h1>{game.TeamGames[1].Name} Team Stats</h1>
           <table>
               <thead>
                   <tr>
                       <th>FG</th>
                       <th>FA</th>
                       <th>FG%</th>
                       <th>EFG%</th>
                       <th>2P</th>
                       <th>2PA</th>
                       <th>2P%</th>
                       <th>3P</th>
                       <th>3A</th>
                       <th>3P%</th>
                       <th>FT</th>
                       <th>FTA</th>
                       <th>FT%</th>
                       <th>OREB</th>
                       <th>DREB</th>
                       <th>TREB</th>
                       <th>AST</th>
                       <th>STL</th>
                       <th>BLK</th>
                       <th>TO</th>
                   </tr>
               </thead>
               <tbody>
                   <tr>
                       <td>{game.TeamGames[1].FieldGoalsMade}</td>
                       <td>{game.TeamGames[1].FieldGoalsAttempted}</td>
                       <td>{game.TeamGames[1].FieldGoalsPercentage}%</td>
                       <td>{game.TeamGames[1].EffectiveFieldGoalsPercentage}%</td>
                       <td>{game.TeamGames[1].TwoPointersMade}</td>
                       <td>{game.TeamGames[1].TwoPointersAttempted}</td>
                       <td>{game.TeamGames[1].TwoPointersPercentage}%</td>
                       <td>{game.TeamGames[1].ThreePointersMade}</td>
                       <td>{game.TeamGames[1].ThreePointersAttempted}</td>
                       <td>{game.TeamGames[1].ThreePointersPercentage}%</td>
                       <td>{game.TeamGames[1].FreeThrowsMade}</td>
                       <td>{game.TeamGames[1].FreeThrowsAttempted}</td>
                       <td>{game.TeamGames[1].FreeThrowsPercentage}</td>
                       <td>{game.TeamGames[1].OffensiveRebounds}</td>
                       <td>{game.TeamGames[1].DefensiveRebounds}</td>
                       <td>{game.TeamGames[1].Rebounds}</td>
                       <td>{game.TeamGames[1].Assists}</td>
                       <td>{game.TeamGames[1].Steals}</td>
                       <td>{game.TeamGames[1].BlockedShots}</td>
                       <td>{game.TeamGames[1].Turnovers}</td>
                   </tr>
               </tbody>
           </table>
       </div> 
    )
}

export default TeamStats