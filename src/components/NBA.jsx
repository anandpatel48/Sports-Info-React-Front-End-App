
import {useState, useEffect} from 'react'
import Search from './Search'

function NBA() {

    const month = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
    const [date, setDate] = useState(new Date())
    const [dateQuery, setDateQuery] = useState(`${date.getFullYear()}-${month[date.getMonth()]}-${date.getDate()}`)
    const [data, setData] = useState([])
    // console.log(date)
    const KEY = process.env.NBA_KEY

    async function handleSubmit(e) {
        e.preventDefault()
        fetchData()
        // let res = await fetch (`https://api.sportsdata.io/v3/nba/scores/json/GamesByDate/${dateQuery}?key=08e1666ff8dc4172868e02bb673ff311`)
        // let data = await res.json();
        // setData(data)

    }
    // const dateQuery = `${date.getFullYear()}-${month[date.getMonth()]}-${date.getDate()}`
    // console.log(dateQuery)
    function handleChange(e) {
        setDateQuery(e.target.value)
    }

    async function fetchData() {
        let res = await fetch(`https://api.sportsdata.io/v3/nba/scores/json/GamesByDate/${dateQuery}?key=08e1666ff8dc4172868e02bb673ff311`)
        let data = await res.json();
        setData(data)
    }

    useEffect(() => {
      fetchData()    
  },[])
//   console.log(data)
  
//   makeDate()


const showSchedule = data.map((game, idx) => {
    if(data.length === 1 && data[0].Status === 'Canceled') {
        return (
            <h1 key = {idx}>No Games Scheduled</h1>
        )
    } else if (game.Status !== 'Canceled') {
        return (
            <div className = "gameLine" key={idx}>
                <h1>{`${game.AwayTeam} (MoneyLine: ${game.AwayTeamMoneyLine}) @ ${game.HomeTeam} (MoneyLine: ${game.HomeTeamMoneyLine})`}</h1>
            </div>
        )
    }
    }
)

  return (
    <div className="App">
    <Search handleSubmit = {handleSubmit} handleChange = {handleChange} dateQuery= {dateQuery}/>
      <h1>Game Schedule {dateQuery}</h1>    
      {showSchedule}
    </div>
  );
}

export default NBA;