 const api = {
     getRovers() {
         let url = 'https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=DEMO_KEY';
         return fetch(url)
             .then((res) => res.json());
     }
 };


 
 export default api;