
    export function retriveJoke() {
        return fetch('http://api.icndb.com/jokes/random')
            .then(res => res.json());
            
    }