// Initialize and add the map
function initMap() {
    // The location of UTD
    const UTD = { lat: 32.98594036474673, lng: -96.75023667314427};
    // The map, centered at UTD
    const map = new google.maps.Map(document.getElementById("map"), {
      mapId: "366b7db7705c4e4c",
      zoom: 16,
      center: UTD,
    });
    // added code
    const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">UT Dallas</h1>' +
    '<div id="bodyContent">' +
    "<p><b>The University of Texas at Dallas</b></p>" +
    '<p>Learn more: UT Dallas, <a href="https://en.wikipedia.org/w/index.php?title=University_of_Texas_at_Dallas">' +
    "https://en.wikipedia.org/w/index.php?title=University_of_Texas_at_Dallas</a> " +
    "(last visited February 12, 2023).</p>" +
    "</div>" +
    "</div>";
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    ariaLabel: "UT Dallas",
  });
  const image = "marker_asset.png"
      // The marker, positioned at Uluru
      const marker = new google.maps.Marker({
        position: UTD,
        map: map,
        icon: image,
        title: "UT Dallas",
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