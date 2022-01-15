import { useEffect, useState } from "react";

const Team = (props) => {
    var myHeaders = new Headers();
    myHeaders.append("x-rapidapi-key", "7bf3890efb932a4a1a8e5bd6d2e69b84");
    myHeaders.append("x-rapidapi-host", "v1.basketball.api-sports.io");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    const API = "https://v1.basketball.api-sports.io/statistics?season=2021-2022&league=12&team=" + props.id;
    
    const [team, setTeam] = useState();
    useEffect(() => {
        fetch(API, requestOptions)
            .then(response => response.json())
            .then(data => setTeam(data['response']))
            .catch(error => console.log('error', error));
    }, []);

    function Child({ team }) {
        return (
            <>
                <div className="card-team">
                    <div className="card-team-image">
                        <img src={team.team.logo} alt={team.team.name} />
                    </div>
                    <div className="card-team-title">
                        <h4>Team name: {team.team.name}</h4>
                    </div>
                    <div className="card-team-excerpt">
                        <p> Team ID: {team.team.id} </p>
                    </div>
                </div>
            </>
        );
    }

    return (
        <div className="main">
            <h1> NBA Team </h1>
            {team && <Child team={team} />}
        </div>
    );
};
export default Team;