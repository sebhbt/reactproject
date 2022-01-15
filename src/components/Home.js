import { React, useState, useEffect } from "react";
import '../styles/Home.css';
import Team from './Team';

const Home = (props) => {
    const { setActiveComponent } = props;

    var myHeaders = new Headers();
    myHeaders.append("x-rapidapi-key", "7bf3890efb932a4a1a8e5bd6d2e69b84");
    myHeaders.append("x-rapidapi-host", "v1.basketball.api-sports.io");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    const API = "https://v1.basketball.api-sports.io/teams?season=2021-2022&league=12";
    
    const [teams, setTeams] = useState();
    useEffect(() => {
        fetch(API, requestOptions)
            .then(response => response.json())
            .then(data => setTeams(data['response']))
            .catch(error => console.log('error', error));
    }, []);

    function goToTeam(id) {
        //console.log("Test");
        setActiveComponent(<Team id={id} />);
    };

    function Child({ teams }) {
        return (
            <>
                {teams.map(team => (
                    <div key={team.id} className="card-team">
                        <a href="#" onClick={() => goToTeam(team.id)}>
                            <div className="card-team-image">
                                <img src={team.logo} alt={team.name} />
                            </div>
                            <div className="card-team-title">
                                <h4>Team name: {team.name}</h4>
                            </div>
                            <div className="card-team-excerpt">
                                <p> Team ID: {team.id} </p>
                            </div>
                        </a>
                    </div>
                ))}
            </>
        );
    }

    return (
        <div className="main">
            <h1> NBA Teams </h1>
            <h2>Bienvenue sur une page NBA. Veuillez vous connecter pour continuer</h2>
            <div id="teamsNBA" className="container-grid">
                {teams && <Child teams={teams} />}
            </div>
        </div>
    );
};

export default Home;