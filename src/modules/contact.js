
function contact() {
    let content = document.getElementById('content');
    let contHead = document.createElement('div');
    let contTitle = document.createElement('p');
    contTitle.className="contTitle";
    contTitle.textContent="Contact";
    let info = document.createElement('div');
    info.className="contInfo";
    let phoneTitle = document.createElement('p');
    phoneTitle.className="contLabel";
    phoneTitle.textContent="Phone";
    let phoneInfo = document.createElement('p');
    phoneInfo.className="contInfo";
    phoneInfo.textContent="(310) 555-7937";
    let addressTitle = document.createElement('p');
    addressTitle.className="contLabel";
    addressTitle.textContent="Address";
    let addressInfo = document.createElement("p");
    addressInfo.className="contInfo";
    addressInfo.textContent="611 N Henry Ford Ave, San Pedro, CA 90744";
    let mapCont = document.createElement("div");
    mapCont.setAttribute("id","map");

    contHead.appendChild(contTitle);
    info.appendChild(contHead);
    info.appendChild(phoneTitle);
    info.appendChild(phoneInfo);
    info.appendChild(addressTitle);
    info.appendChild(addressInfo);
    info.appendChild(mapCont);
    content.appendChild(info);
    

    // Initialize and add the map

    // The location of Uluru
    
    // The map, centered at Uluru
    function initMap() {
        var barge = { lat:33.77713494304627, lng:-118.24300882275132 };

        var map = new google.maps.Map(document.getElementById('map'),{
            zoom: 11,
            center: barge
        });
        const marker = new google.maps.Marker({
            position: barge,
            map: map,
          });
    };
    
    initMap();
  }
  



export default contact