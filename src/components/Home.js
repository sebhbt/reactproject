import '../styles/Home.css'
import React from "react";
import Team from './Team'

const Home = (props) => {
    var myHeaders = new Headers();
    myHeaders.append("x-rapidapi-key", "7bf3890efb932a4a1a8e5bd6d2e69b84");
    myHeaders.append("x-rapidapi-host", "v1.basketball.api-sports.io");

    function goToTeam(id) {
        props.setActiveComponent(<Team id={id} />);
    }
/*
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    const API = "https://v1.basketball.api-sports.io/teams?season=2021-2022&league=12";
    fetch(API, requestOptions)
        .then(response => response.json())
        .then(data => {
            let htmlTeams = ``;
            const teams = data['response'];
            teams.forEach((team) => {
                const { id, name, logo } = team;
                htmlTeams +=
                    `<div class="card-team">
                        <a onClick="${() => goToTeam(id)}">
                            <div class="card-team-image">
                                <img src="${logo}">
                            </div>
                            <div class="card-team-title">
                                <h4>Team name: ${name}</h4>
                            </div>
                            <div class="card-team-excerpt">
                                <p> Team ID: ${id} </p>
                            </div>
                        </a>
                    </div>`
                document.getElementById('teamsNBA').innerHTML = htmlTeams;
            })
        })
        .catch(error => console.log('error', error));*/

    return (
        <div className="main">
            <h1> NBA Teams </h1>
            <h2>Bienvenue sur une page NBA. Veuillez vous connecter pour continuer</h2>
            <div id="teamsNBA" className="container-grid">
            </div>
        </div>
    );

    /**function NBATeams() {
        const [teams, setMovies] = useState([]);
        const setActiveComponent = useState()
    
        useEffect(() => {
        fetch(API , requestOptions)
            .then((res) => res.json())
            .then((data) => {
            console.log(data);
            });
        }, []);
    
        return (
            <div className="statusContainer">
                Bienvenue sur une page NBA. Veuillez vous connecter pour continuer
            </div>
        )
        
    }**/
};

export default Home;