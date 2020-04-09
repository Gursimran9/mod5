document.getElementById('getText').addEventListener('click', getText);

function getText(){
  // fetch('sample.txt')
  // .then(function(res){
  //   return res.text();
  // })
  // .then(function(data){
  //   console.log(data);
  // });

  fetch('sample.txt')
  .then((res) => res.text())
  .then((data) => {
    document.getElementById('output').innerHTML = data;
  })
  .catch((err) => console.log(err))
}


        function initMap() {
  
          //Creating a variable of our location that includes the latitude and longitudinal values
           let hotelStar = {
              lat: 44.4096927,
              lng: -79.6876915 
            };
      
          let map = document.getElementById('map'); 
          
      
           //create new map object
           let location = new google.maps.Map(map, {
              mapTypeId: 'satellite', //Adding a map type,different kinds of map type includes - satellite,terrain
              zoom: 20,     //Adjust the zooming capibility of the location
              center: hotelStar,
              
            }
            );
      
      
          //Adding text or description about our location
            var content = '<h6 style="color:red;text-align:center;">Georgian Mall</h6>'+'<br>'
            +'<p>Georgian Mall is the one shopping mall where you can buy everything !!</p>';
      
            //Accessing the content of our location
        var infowindow = new google.maps.InfoWindow({
          content: content
        }
        );
             
           //Create a new marker oobject
        let marker = new google.maps.Marker({
            position:hotelStar, 
            map:location,
            icon:'Hotel.png'  //adding custom legends
          }
          );
      
            //Using add event listener Adding clickable function to display the description of the location
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
      
          
          
      }
