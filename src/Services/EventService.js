import axios from 'axios';

const EVENT_API_BASE_URL = "http://localhost:8080/api/v1/events";

class EventService{

    getEvents(){
        return axios.get(EVENT_API_BASE_URL);
    }
    
    getEventById(id){
        return axios.get(EVENT_API_BASE_URL+'/'+id);
    }

}

export default new EventService()