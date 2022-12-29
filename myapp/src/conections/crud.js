import back from './back';

class crud {
    async GET (resource) {
        //validar el token 
        const token = localStorage.getItem("token");
        
        let bearer;
        if (token === "") {
            bearer = "";
        } else {
            bearer = `${token}`;
        }
        //crear la peticion 
        const data = {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'x-auth-token' : bearer
            }
        }
        
        const url = `${back.api.baseUrl}${resource}`;
        let response = (await (await fetch(url, data)).json());
        return response;
    };

    async POST (resource, body) {
        //check where is the reource comming from 
        const token = localStorage.getItem("token");

        let bearer;

        if (token === "") {
            bearer = "";
        } else {
            bearer = `${token}`;
        }

        const data = {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type' : 'application/json',
                'x-auth-token' : bearer
            }
        }
        const url = `${back.api.baseUrl}${resource}`;
        let response = (await (await fetch(url, data)).json());
        return response;
    }; 

    async PUT (resource, body) {
        const token = localStorage.getItem("token");

        let bearer;

        if (token === "") {
            bearer = "";
        } else {
            bearer = `${token}`;
        }

        const data = {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-Type' : 'application/json',
                'x-auth-token' : bearer
            }
        }
        const url = `${back.api.baseUrl}${resource}`;
        let response = (await (await fetch(url, data)).json());
        return response;   
    }; 

    async DELETE (resource, queryParams) {
        const token = localStorage.getItem("token");
        
        let bearer;
        if (token === "") {
            bearer = "";
        } else {
            bearer = `${token}`;
        }

        //crear la peticion 
        const data = {
            method: 'DELETE',
            headers: {
                'Content-Type' : 'application/json',
                'x-auth-token' : bearer
            }
        }
        
        const url = `${back.api.baseUrl}${resource}`;
        let response = (await (await fetch(url, data)).json());
        return response;
    }; 
}

export default new crud();