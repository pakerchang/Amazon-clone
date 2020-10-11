import axios from "axios";

const instance = axios.create({
	// The API (cloud function) URL
	baseURL: 'https://us-central1-clone-8001b.cloudfunctions.net/api' 
			//"http://localhost:5001/clone-8001b/us-central1/api",
});

export default instance;
