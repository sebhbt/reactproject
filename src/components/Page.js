import { Result } from "antd";
import { disableNetwork } from "firebase/firestore";

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const Page = (props) => {
    var myHeaders = new Headers();
    myHeaders.append("x-rapidapi-key", "7bf3890efb932a4a1a8e5bd6d2e69b84");
    myHeaders.append("x-rapidapi-host", "v1.basketball.api-sports.io");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    
    const API = "https://v1.basketball.api-sports.io/teams?season=2021-2022&league=12";

    fetch(API, requestOptions)
        .then(response => response.json())
        .then(data => {
            let htmlTeams = `<h2> NBA Teams </h2>`;
            const teams = data['response'];
            teams.forEach((team) => {
                const {id, name, logo} = team;
                htmlTeams +=
                    `<div>
                    <img src="${logo}">
                        <h5> Team ID: ${id} </h5>
                        <ul>
                            <li>Team name: ${name}</li>
                        </ul>
                    </div>`;
                document.getElementById('teamsNBA').innerHTML = htmlTeams;
            })
        })
        .catch(error => console.log('error', error));

    return (
        <div className="statusContainer">
            Bienvenue sur une page NBA. Veuillez vous connecter pour continuer
            <div id="teamsNBA">

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

export default Page