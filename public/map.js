// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 32.98594036474673, lng: -96.75023667314427};
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    mapId: "366b7db7705c4e4c",
    zoom: 16,
    center: uluru,
  });
  // added code
  const contentString =
  '<div id="content">' +
  '<div id="siteNotice">' +
  "</div>" +
  '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
  '<div id="bodyContent">' +
  "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
  "sandstone rock formation in the southern part of the " +
  "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
  "south west of the nearest large town, Alice Springs; 450&#160;km " +
  "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
  "features of the Uluru - Kata Tjuta National Park. Uluru is " +
  "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
  "Aboriginal people of the area. It has many springs, waterholes, " +
  "rock caves and ancient paintings. Uluru is listed as a World " +
  "Heritage Site.</p>" +
  '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
  "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
  "(last visited June 22, 2009).</p>" +
  "</div>" +
  "</div>";
const infowindow = new google.maps.InfoWindow({
  content: contentString,
  ariaLabel: "Uluru",
});
const image = "../images/marker_asset.png"
// const saved_image = drawImage(image,'' ,'', '10px', '10px');
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
      icon: image,
      title: "Uluru (Ayers Rock)",
    });
  marker.addListener("click", () => {
  infowindow.open({
    anchor: marker,
    map,
  });
});
// added code

}

window.initMap = initMap;