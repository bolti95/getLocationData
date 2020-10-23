const getGeolocation = () => {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
        console.log('Supported');
    } else {
        console.log('Not supported');
    }
}


const onSuccess = (position) => {

    const {latitude, longitude} = position.coords;

    const url = `https://www.latlong.net/c/?lat=${latitude}&long=${longitude}`;

    document.querySelector('a').setAttribute('href', url);
    
    document.querySelector('div').style.display = 'block';

    console.log(longitude);
    console.log(latitude);

    console.log(position);
}

const onError = (error) => {
    console.log(error);
}