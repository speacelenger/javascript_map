// JavaScript

//console.log('Hello world!');

const map = L.map('map').setView([33.590948357554474,130.40859198001533,],15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map)


//アイコン
//const whiteIcon = L.icon({
//    iconUrl: 'images/ico.png',
//    shadowUrl: 'images/ico_shadow.png',
//  
//  iconSize:     [40, 40], // size of the icon
//  shadowSize:   [40, 40], // size of the shadow
//  iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
// shadowAnchor: [20, 40],  // the same for the shadow
//  popupAnchor:  [0, -42] // point from which the popup should open relative to the iconAnchor
// });
  
  //複数アイコンをまとめて定義
const circleIcon = L.Icon.extend({
    options: {
      shadowUrl: 'images/ico_shadow.png',
      iconSize: [40, 40],
      shadowSize: [40, 40],
      iconAnchor: [20, 40],
      shadowAnchor: [20, 40],
      popupAnchor: [0, -42]
    }
  });
  
  const whiteIcon = new circleIcon({ iconUrl: 'images/ico.png'}),
  pinkIcon = new circleIcon({ iconUrl: 'images/ico_pink.png' }),
  blueIcon = new circleIcon({ iconUrl: 'images/ico_blue.png' });

L.marker([33.56661242975526,130.44126946175766], { icon: whiteIcon }).addTo(map).bindPopup('こんにちは！');
L.marker([33.58582177420829,130.3760878536138], { icon: pinkIcon }).addTo(map).bindPopup('HELLO');
L.marker([33.59194990994763, 130.39900291596788], { icon: blueIcon }).addTo(map).bindPopup('OLA');

const circle = L.circle([33.56661242975526,130.44126946175766], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.3,
  radius: 1000
}).addTo(map);

circle.bindPopup("駅から1kmの範囲")

// 多角形の表示
const polygon = L.polygon([
  [33.56661242975526,130.44126946175766],
  [33.58582177420829,130.3760878536138],
  [33.59194990994763, 130.39900291596788]
], {
  color: 'blue',
  fillColor: '#30f',
  fillOpacity: 0.3
}).addTo(map);

// クリック位置の緯度経度表示
const popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("ここは" + e.latlng.toString() + "です")
    .openOn(map);
}

map.on('click', onMapClick);