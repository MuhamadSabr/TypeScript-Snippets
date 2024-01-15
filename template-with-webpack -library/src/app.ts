import axios from 'axios';

const address = document.getElementById('address')! as HTMLInputElement;
const form = document.querySelector('form')! as HTMLFormElement;


const GOOGLE_API_KEY = 'AIzaSyAwsZz1WBkqrARrrGdGOKOrX8HR0NpeImY';



function searchAddressHandler(event:Event){
    event.preventDefault();
    
    const enteredAddress = address.value;

    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(enteredAddress)}+CA&key=${GOOGLE_API_KEY}`)
    .then(result=>{
        console.log("response: ", result.data.results[0].geometry.location);
        const coordination = result.data.results[0].geometry.location;
        const map = new google.maps.Map(document.getElementById('map') as HTMLDivElement, {
            center: coordination,
            zoom: 8
          });
    })
    .catch(err=> console.log(err));
      

}

if(form){
    form.addEventListener('submit', searchAddressHandler);
}





