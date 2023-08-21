document.addEventListener('DOMContentLoaded', function () {
    const showLocationButton = document.getElementById('show-location');
    const locationResult = document.getElementById('location-result');
  
    showLocationButton.addEventListener('click', async () => {
      showLocationButton.disabled = true;
      showLocationButton.textContent = 'Loading...';
  
      try {
        const response = await fetch('https://ipinfo.io/json');
        const data = await response.json();
  
        const country = data.country; // Replace with actual data field for country
        const city = data.city; // Replace with actual data field for city
  
        locationResult.textContent = `Your country is ${country} and city is ${city}`;
      } catch (error) {
        locationResult.textContent = 'Error fetching location data';
      } finally {
        showLocationButton.disabled = false;
        showLocationButton.textContent = 'Show my location';
      }
    });
  });
  