const nedb = require("gray-nedb");

class hostels {
  constructor(hostelsFilePath) {
    console.log(hostelsFilePath);
    if (hostelsFilePath) {
      this.hostels = new nedb(hostelsFilePath);
      hostelsFilePath;
    } else {
      this.hostels = new nedb();
    }
  }
  init() {

    this.hostels.insert( {
      "id": "1",
      "name": "Torridon Youth Hostel", 
      "address": "Torridon, by Achnasheen, Ross-shire", 
      "postcode": "IV22 2EZ",
      "phone": "+44 (0) 1445 791284", 
      "email": "torridon@hostellingscotland.org.uk",
      "description": "Winner of the Silver Award in the The Great Outdoors Magazine Awards 2020 for accommodation, Torridon Youth Hostel sits on the NC500 at the head of Upper Loch Torridon and is a popular base for hillwalkers, climbers and those simply wishing to relax and enjoy the surroundings and local wildlife.",
      "location": {"lat":57.543799,"long":-5.504566}, 
      "cafe": true,
      "ratings": [5,4],
      "reviews" : [
          {"reviewer":"anon1", "review": "Great location"},
          {"reviewer":"anon2", "review": "Very comfortable accommodation"},
      ]
  });
    this.hostels.insert( {
      "id": "2",
      "name": "Inverness Youth Hostel", 
      "address": "Victoria Drive, Inverness", 
      "postcode": "IV2 3QB",
      "phone": "+44 (0) 1463 231 771", 
      "email": "inverness@hostellingscotland.org.uk",
      "description": "Located in a quiet neighbourhood a short walk from the city centre, Inverness Youth Hostel offers guests four star VisitScotland accredited hostel accommodation. A popular choice for individual travellers, backpackers, families and groups, the hostel has a range of private and en-suite rooms as well as spacious shared accommodation with individual lockers for those exploring the ‘Capital of the Highlands’ on a budget. Some of the rooms enjoy glorious views towards the Moray Firth.",
      "location": {"lat":57.480662,"long":-4.211335}, 
      "cafe": true,
      "ratings": [2,3,3,4,5,2,3,3,2,4,4,5,4,3,5,4,2],
      "reviews" : [
          {"reviewer":"anon", "review": "Very handy for the city centre"},
      ]
  });
    this.hostels.insert({
      "id": "3",
      "name": "Gairloch Sands Youth Hostel", 
      "address": "Carn Dearg, Gairloch, Ross-shire", 
      "postcode": "IV21 2DJ",
      "phone": "+44 (0) 1445 712 219", 
      "email": "gairloch@hostellingscotland.org.uk",
      "description": "A lochside lodge, sitting on the northern shore of Loch Gairloch, with magnificent sea and mountain views and easy access to fantastic sandy beaches. Gairloch Sands Youth Hostel is a great base for exploring the North West Highlands, offering guests a range of comfortable private and shared rooms. None of the rooms are en-suite but ample shower and washroom facilities are available.",
      "location": {"lat":57.732262,"long":-5.759794},
      "cafe": false,
      "ratings": [3,5,4,4,2,4,4,4,5,5,1,2,4,3],
      "reviews" : [
          {"reviewer":"anon1", "review": "Lovely views"},
          {"reviewer":"anon2", "review": "Dog-friendly hostel"},
          {"reviewer":"anon3", "review": "Enjoyed the wee breakfast"}
      ]
  });
    this.hostels.insert({
      "id": "4",
      "name": "Tongue Hostel", 
      "address": "Tongue, By Lairg, Sutherland", 
      "postcode": "IV27 4XH",
      "phone": "+44 (0) 1847 611789", 
      "email": "kothostelandhp@btinternet.com",
      "description": "Tongue Hostel is a magnificently situated stone lodge on the shores of the Kyle of Tongue. Once a former hunting and fishing lodge dating back to 1891, the hostel offers wonderful views of Ben Loyal, Ben Hope and Rabbit Island. A short walk from Tongue village, it's a perfect place for hill walking, cycling, fishing, photography, nature and bird watching with plenty of beaches to explore.",
      "location": {"lat":58.492768,"long":-4.428430},
      "cafe": false,
      "ratings": [4,4,4,3,3,3,5,5,2,1,1,4,5,4,3,3,3,3,3,3],
      "reviews" : [
          {"reviewer":"anon", "review": "Muy buen alojamiento, excelente ubicación"}
      ]
  });
    this.hostels.insert( {
      "id": "5",
      "name": "Ullapool Youth Hostel", 
      "address": "Shore Street, Ullapool", 
      "postcode": " IV26 2U",
      "phone": "+44 (0) 1854 612 254", 
      "email": "ullapool@hostellingscotland.org.uk",
      "description": "From its spectacular seafront location on the NC500, Ullapool Youth Hostel offers wonderful, ever-changing views over Loch Broom and the Beinn Dearg mountain range. Perfect for groups, families and individual travellers, this warm and welcoming hostel offers guests a variety of room types, all of which can be booked as private rooms and there are ample shower and washroom facilities.",
      "location": {"lat":57.896333,"long":-5.156314},
      "cafe": true,
      "ratings": [4,5,5,5,3,2,4,5,4,4,4,3,3,5,4,4,3,1],
      "reviews" : []
  });
    this.hostels.insert({
      "id": "6",
      "name": "Durness Smoo Youth Hostel", 
      "address": "Smoo, Lairg", 
      "postcode": " IV27 4QA",
      "phone": "+44 (0) 1971-511-264", 
      "email": "durness@hostellingscotland.org.uk",
      "description": "Sitting on the famous NC500, surrounded by a wild and spectacular landscape, Durness Smoo offers a true hostelling experience in simple, relaxed and welcoming accommodation. A refuge from the hustle and bustle of everyday life, the hostel is an ideal base for exploring the local area, and offers guests a range of comfortable private and shared rooms. None of the rooms are en-suite but ample shower and washroom facilities are available.",
      "location": {"lat":58.563542,"long":-4.723322},
      "cafe": true,
      "ratings": [4,2,4,5,2,3,3,3,5,2,2,4,5,4,3,4,4,4,2],
      "reviews" : [
          {"reviewer":"anon1", "review": "This hostel is the best thing ever in the entire world"},
          {"reviewer":"anon2", "review": "Fasgadh bho othail is beatha làitheil"},
      ]
  });
    this.hostels.insert( {
      "id": "7",
      "name": "Helmsdale Hostel", 
      "address": "Helmsdale, Sutherland", 
      "postcode": "KW8 6JR",
      "phone": "+44 (0) 7971 922 356", 
      "email": "stay@helmsdalehostel.co.uk",
      "description": "Helmsdale Hostel is an International Tourist Accommodation, located in the village of Helmsdale, Sutherland. It is in a prominent position directly on the A9 at the north end of the village. The building was refurbished in the summer of 2018, with eco-friendly measures, including a sustainable heating system, drying and laundry facilities.",
      "location": {"lat":58.117588,"long":-3.648901},
      "cafe": false,
      "ratings": [5,2,2,2,2,3,1,1,1,3,4,2,5,1,2,2,2],
      "reviews" : [
          {"reviewer":"anon1", "review": "Nice garden, suitable for outside eating"},
          {"reviewer":"anon2", "review": "Braw!"}
      ]
  });
    this.hostels.insert({
      "id": "8",
      "name": "Applecross, Hartfield House", 
      "address": "Hartfield House, Applecross", 
      "postcode": "IV54 8ND",
      "phone": "+44 (0) 1520 744 333", 
      "email": "infohartfield@gmail.com",
      "description": "Hartfield House is a Visit Scotland 4 Star hostel, set back from main North Coast 500 road, nestled amongst the mountainous landscape, shady trees, and bubbling river. The Applecross peninsula boasts a breathtakingly beautiful and dramatic landscape. The main township of Applecross (‘a Chomraich’ in Gaelic, which means 'sanctuary') is located around the picturesque bay and enjoys uninterrupted views over the island of Raasay and the Cuillin Hills of Skye.",
      "location": {"lat":57.452662,"long":-5.802272},
      "cafe": false,
      "ratings": [5,5,5,3,3,3,5,5,5,3,3,3,5,5,3,3,3,3,5],
      "reviews" : [
          {"reviewer":"anon1", "review": "Keskellä ei mitään"},
          {"reviewer":"anon2", "review": "아무데도 없는 가운데"},
          {"reviewer":"anon3", "review": "Katikati ya mahali"}
      ]
  });
    this.hostels.insert({
      "id": "9",
      "name": "Achmelvich Beach Youth Hostel", 
      "address": "Recharn, Lairg, Sutherland", 
      "postcode": "IV27 4JB",
      "phone": "+44 (0) 1571 844 480", 
      "email": "achmelvich@hostellingscotland.org.uk",
      "description": "Winning silver in the The Great Outdoors Magazine awards for accommodation - Achmelvich Beach Youth Hostel sits on the NC500, beside a beautiful, sheltered white sandy beach, close to the iconic mountain of Suilven. This small and friendly hostel provides a relaxing base to explore miles of unspoilt coastline and discover quiet secluded beaches, crystal clear waters and abundant wildlife.",
      "location": {"lat":58.168936,"long":-5.304672},
      "cafe": true,
      "ratings": [2,2,2,4,2,4,2,4,2,4,4,4,4,4,4,4,2,4],
      "reviews" : [
          {"reviewer":"anon", "review": "Quite good"},
      ]
  });
    this.hostels.insert( {
      "id": "10",
      "name": "Portsoy", 
      "address": "Back Green, Portsoy, Aberdeenshire", 
      "postcode": "AB45 2AF",
      "phone": "+44 (0) 1261 842222", 
      "email": "contact@portsoysailloft.org",
      "description": "The Sail Loft in Portsoy offers self-catering bunkhouse accommodation with 25 luxurious beds and bunks, all with premium quality mattresses, reading lights, power sockets and secure lockers. Beds are designed to be both singles or doubles, so can easily be adjusted to meet your needs. Cots are available for visiting families.",
      "location": {"lat":57.682264,"long":-2.683269},
      "cafe": true,
      "ratings": [],
      "reviews" : [
          {"reviewer":"anon1", "review": "Very up to date and covers a lot of ground"},
          {"reviewer":"anon2", "review": "Comprehensive, but could be more clearly written"},
      ]
  });
    this.hostels.insert({
      "id": "11",
      "name": "Drumnadrochit", 
      "address": "Loch Ness Backpackers, Coiltie Farmhouse", 
      "postcode": "IV63 6UN",
      "phone": "+44 (0) 1456 450807", 
      "email": "info@lochness-backpackers.com",
      "description": "Situated in the village of Lewiston within Drumnadrochit, a short distance from Loch Ness and Urquhart Castle, this is a perfect location for activity or relaxation and great for families, groups and individuals. It's an ideal location for the Great Glen Way. Loch Ness Backpackers is your Highland home away from home. The team provide a warm welcome in all weathers, with free tea and coffee, a wood stove, a large guest kitchen and a residents-only bar with over 100 Scottish beers and whiskies.",
      "location": {"lat":57.329341,"long":-4.471393},
      "cafe": false,
      "ratings": [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
      "reviews" : [
          {"reviewer":"anon1", "review": "Disappointed not to see Nessie"},
          {"reviewer":"anon2", "review": "Great location, great views"},
          {"reviewer":"anon3", "review": "Quite handy for Inverness"}
      ]
  });
    this.hostels.insert({
      "id": "12",
      "name": "Glen Affric Youth Hostel", 
      "address": "Allt Beithe, Glen Affric, Cannich, Beauly", 
      "postcode": "IV4 7ND",
      "phone": "0345 293 7373", 
      "email": "",
      "description": "A former stalking bothy on the Affric Estate, this friendly eco-hostel offers a warm welcome and an unforgettable experience in one of the most beautiful glens in Scotland. A wind turbine and solar panels provide warm water and electricity, while the comfortable common room and kitchen are heated by wood and coal fires.",
      "location": {"lat":57.23236,"long":-5.1831},
      "cafe": false,
      "ratings": [4,3,3,4,2,3,5,4,3,2,1,2,3,4,5,3,3,3],
      "reviews" : [
          {"reviewer":"anon1", "review": "بالتأكيد في وسط اللا مكان"},
          {"reviewer":"anon2", "review": "Absolutamente no meio do nada"},
          {"reviewer":"anon3", "review": "Απολύτως στη μέση του πουθενά"}
      ]
  });
    this.hostels.insert({
      "id": "13",
      "name": "Ratagan Youth Hostel", 
      "address": "Glenshiel, Kyle, Ross-shire", 
      "postcode": "IV40 8HP",
      "phone": "+44 (0) 1599 511 243", 
      "email": "ratagan@hostellingscotland.org.uk",
      "description": "Small and intimate, Ratagan Youth Hostel is has a stunning lochside location with enviable views towards Skye. Perfect for groups, families and individual travellers, this warm and welcoming hostel offers guests a variety of room types, all with USB charging points, and all able to be booked as private rooms. The accommodation is split over two floors and none of the rooms are en-suite, but ample shower and washroom facilities are available.",
      "location": {"lat":57.222139,"long":-5.447147},
      "cafe": true,
      "ratings": [1,2,3,4,5,1,2,3,4,5,1,2,3,4,5],
      "reviews" : [
          {"reviewer":"anon", "review": "Rooms have USB charging points"},
      ]
  });
    this.hostels.insert({
      "id": "14",
      "name": "Portree Youth Hostel", 
      "address": "Portree, Isle of Skye", 
      "postcode": "IV51 9EW",
      "phone": "+44 (0) 1478 612 231", 
      "email": "portree@hostellingscotland.org.uk",
      "description": "Located in the heart of Portree, capital of the Isle of Skye, and one of Scotland’s most popular destinations, Portree Youth Hostel offers a range of room types, from small private en-suites to shared accommodation, some with views over the Sound of Rassay. All rooms have USB charging points and most have individual bed lights.",
      "location": {"lat":57.4122671,"long":-6.1960968},
      "cafe": true,
      "ratings": [4,4,4,4,4,4,4,4,4,4,4,4,4,1,5],
      "reviews" : [
          {"reviewer":"anon1", "review": "Not really on the NC500, but nice anyway"},
          {"reviewer":"anon2", "review": "This is a great hostel! "}
      ]
  });
    this.hostels.insert( {
        "id": "15",
        "name": "Fort Augustus", 
        "address": "Morag's Lodge, Bunoich Brae, Fort Augustus", 
        "postcode": "PH32 4DG",
        "phone": "+44 (0) 1320 366289", 
        "email": "info@moragslodge.com",
        "description": "A multi-award winning hostel that delivers “Highland Hospitality” at its best. Located in the charming village of Fort Augustus, Morag's Lodge is an ideal base for exploring Loch Ness and the Great Glen. It's perfect for families and groups with great facilities including twin, double and ensuite rooms, a lively bar with open fire and regular live music.",
        "location": {"lat":57.148251,"long":-4.682000},
        "cafe": false,
        "ratings": [4,3,2,4,4,4,3,5,4,2,3,5,5,4,3,3,4,5,5,5,3],
        "reviews" : [
            {"reviewer":"anon1", "review": "Great live music and atmosphere"},
            {"reviewer":"anon2", "review": "Great value breakfasts, home-cooked evening meals and packed lunches"},
            {"reviewer":"anon3", "review": "Some kind of big loch thing nearby"},
            {"reviewer":"anon4", "review": "Got great photos of the monster, it totally exists"}
        ]
    }
  );
   this.hostels.insert( {
      "id": "15",
      "name": "Fort Augustus", 
      "address": "Morag's Lodge, Bunoich Brae, Fort Augustus", 
      "postcode": "PH32 4DG",
      "phone": "+44 (0) 1320 366289", 
      "email": "info@moragslodge.com",
      "description": "A multi-award winning hostel that delivers “Highland Hospitality” at its best. Located in the charming village of Fort Augustus, Morag's Lodge is an ideal base for exploring Loch Ness and the Great Glen. It's perfect for families and groups with great facilities including twin, double and ensuite rooms, a lively bar with open fire and regular live music.",
      "location": {"lat":57.148251,"long":-4.682000},
      "cafe": false,
      "ratings": [4,3,2,4,4,4,3,5,4,2,3,5,5,4,3,3,4,5,5,5,3],
      "reviews" : [
          {"reviewer":"anon1", "review": "Great live music and atmosphere"},
          {"reviewer":"anon2", "review": "Great value breakfasts, home-cooked evening meals and packed lunches"},
          {"reviewer":"anon3", "review": "Some kind of big loch thing nearby"},
          {"reviewer":"anon4", "review": "Got great photos of the monster, it totally exists"}
      ]
  });
  this.hostels.insert(  {
    id: "16",
    name: "Fort William",
    address:
      "Chase The Wild Goose Hostel, Great Glen Way, Lochiel Crescent, Banavie",
    postcode: "IV4 4DG",
    phone: "+44 (0) 1325 312287",
    email: "info@chasewg.com",
    description: "Cosy and welcoming",
    location: { lat: 57.148251, long: -4.682 },
    ratings: [4, 3, 2, 4, 4, 4, 3, 5, 4, 2, 3, 5, 5, 4, 3, 3, 4, 5, 5, 5, 3],
    cafe: "false",
    reviews: [
      { reviewer: "Fred", review: "great views of Ben Nevis" },
      { reviewer: "Peter", review: "Plenty to do in town" },
    ],
  });
  this.hostels.insert( {
    id: "17",
    name: "High St Hostel",
    address: " 8 Blackfriars Street , Edinburgh, Scotland",
    postcode: "EH1 125",
    phone: "+44 (0) 1320 366289",
    email: "edinburghHostel@gmail.com",
    description: "Located in the the heart of Edinburgh's Old Town",
    location: { lat: 55.94976401451738, long: -3.185983964407277 },
    ratings: [4, 2],
    cafe: "false",
    reviews: [
      { reviewer: "Andres", review: "Fantastic location, party atmosphere" },
      { reviewer: "Javier", review: "Great place to meet people" },
      {
        reviewer: "Dean",
        review: "Only a couple of minutes walk from the train station",
      },
    ],
  });
  this.hostels.insert({
    id: "18",
    name: "Euro Hostel Glasgow",
    address: " 318 Clyde Street, Glasgow, Scotland",
    postcode: "G1 4NR",
    phone: "+44 (0) 141 321 5438",
    email: "eurohostel@gmail.com",
    description: "The most popular hostel in Glasgow",
    location: { lat: 55.856658460993785, long: -4.257240534478813 },
    ratings: [4, 5, 4, 4, 5, 4],
    cafe: "true",
    reviews: [
      { reviewer: "Alex", review: "Brilliant city" },
      { reviewer: "Morven", review: "Good city centre location" },
      { reviewer: "Kyle", review: "Loads to do" },
      { reviewer: "Jon", review: "Can get a bit noisy" },
    ],
  } );
  this.hostels.insert( {
    id: "19",
    name: "Rowardennan",
    address: " Rowardennan, by Drymen, Rowardennan, Scotlands",
    postcode: " ",
    phone: "+44 (0) 1324 63724",
    email: "info@moragslodge.com",
    description: "Popular hostel which is handy for the West Highland Way.",
    location: { lat: 56.15806550653808, long: -4.643187243860432 },
    ratings: [4, 3, 2, 4],
    cafe: "false",
    reviews: [
      { reviewer: "Ron", review: "Long walk to get here" },
      {
        reviewer: "Emma",
        review: "Great breakfasts and home-cooked evening meals",
      },
      { reviewer: "Jamie", review: "Loch view is spoilt by jet skiers" },
      { reviewer: "Ruth", review: "Only local shop closes at 5pm" },
    ],
  } );
    this.hostels.insert( {
      id: "20",
      name: "Stirling Youth Hostel",
      address: " 34 Murray Place, Stirling, Scotland",
      postcode: "FK8 1AP",
      phone: "+44 (0) 1786 451 666",
      email: "",
      description: "A modern hostel in the heart of Stirling",
      location: { lat: 56.116, long: -3.936 }, 
      ratings: [4, 3, 2, 4, 5, 4],
      cafe: "true", 
      reviews: [
        { reviewer: "Gordon", review: "Great location for the castle" },
        { reviewer: "Fiona", review: "Very clean and modern" },
        { reviewer: "Alistair", review: "Friendly staff" },
        { reviewer: "Sarah", review: "Good value for money" },
      ], 
  });
    }


  getAllEntries() {
    return new Promise((resolve, reject) => {
      this.hostels.find({}, function (err, entries) {
        if (err) {
          reject(err);
        } else {
          resolve(entries);
          console.log("function all() returns: ", entries);
        }
      });
    });
  }
  getHostel(hostelName) {
    console.log(hostelName)
    return new Promise((resolve, reject) => {
      this.hostels.find({name:hostelName}, function (err, entries) {
        if (err) {
          reject(err);
        } else {
          resolve(entries);
          console.log("function getHostel returns: ", entries);
        }
      });
    });
  }
  getHostelById(hostelId) {
    console.log(hostelId)
    return new Promise((resolve, reject) => {
      this.hostels.find({id:hostelId}, function (err, entries) {
        if (err) {
          reject(err);
        } else {
          resolve(entries);
          console.log("function getHostelById returns: ", entries);
        }
      });
    });
  }

  rateHostelById(id,newRating){
    let rating=Number(newRating)
      return new Promise((resolve, reject) => {
        this.hostels.update({id:id},{$push:{'ratings':rating}} , function (err, entries) {
        if (err) {
          reject(err);
        } else {
           resolve(entries);
        }
      });
    });
  }

  rateHostel(hostelId,newRating){
    let id=String(hostelId)
    let rating=Number(newRating)
    console.log( id, rating)
      return new Promise((resolve, reject) => {
        this.hostels.update({id:id},{$push:{'ratings':rating}} , function (err, entries) {
        if (err) {
          reject(err);
        } else {
           resolve(entries);
        }
      });
    });
  }
  
}
module.exports = hostels;
