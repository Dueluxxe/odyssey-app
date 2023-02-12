// The following example creates five accessible and
// focusable markers.
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: {lat: 32.98594036474673, lng: -96.75023667314427 },
    mapId: "366b7db7705c4e4c",
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
    [{lat: 32.98500, lng: -96.75000}, "The University of Texas at Dallas"],
    [{ lat: 32.7753, lng: -96.8089}, "Reunion Tower"],
    [{lat: 32.82306, lng: -96.71694 }, "Dallas Arboretum"],
    [{ lat: 34.823736, lng: -111.8001857 }, "Red Rock Crossing"],
    [{ lat: 34.800326, lng: -111.7665047 }, "Bell Rock"],
  ];

  const exploreButton = '<div id="content">' + '<button type="button" class="btn btn-light">Light</button>' + '</div>';
  // Create an info window to share between markers.
  const infoWindow = new google.maps.InfoWindow({
    content: exploreButton,
  });

  // Create the markers.
  const image = "../images/marker_asset.png"
  tourStops.forEach(([position, title], i) => {
    const marker = new google.maps.Marker({
      position,
      map,
      title: `(10 pts) ${title}`,
      // label: `${i + 1}`,
      icon: image,
      optimized: false,
    });

    // Add a click listener for each marker, and set up the info window.
    marker.addListener("click", () => {
      infoWindow.close();
      infoWindow.setContent(marker.getTitle());
      infoWindow.open(marker.getMap(), marker);
    });
  });
}

window.initMap = initMap;
