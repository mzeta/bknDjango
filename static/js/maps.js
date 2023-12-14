// Initialize and add the map
let map;

async function initMap() {
  // The location of Buenos Aires
  const position = { lat: -34.613013776687644, lng: -58.447212304501214 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

  // The map, centered at Buenos Aires
  map = new Map(document.getElementById("map"), {
    zoom: 11.5,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Buenos Aires
  const marker = new AdvancedMarkerView({
    map: map,
    position: position,
    title: "Buenos Aires",
  });
}

initMap();
