var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var propertyData = {
    Description: "At Casa Caleta you will combine the best features of a luxury vacation villa with the services and amenities of a five-star hotel stay to create the ultimate vacation experience .\r\nYou’ll enjoy complete privacy, additional space and all of the conveniences of home, from our fully equipped kitchen complete with Personal Chef to comfortable furnishings, plus legendary service and easy access to extraordinary facilities and amenities of Puerto Vallarta.\r\nJust bring your dreams of an unforgettable vacation, and we’ll take care of everything else. A Luxurious Beachfront Villa set in a privately gated enclave, located directly on the tropical sandy beach in prestigious Lower Conchas Chinas, boasting truly unsurpassed views of the Bay of Banderas by day and the lights of Puerto Vallarta by night. Featuring heated Spa and Swimming Pool, wireless internet, media room, indoor/outdoor sound system, concierge, maid, houseman and Personal Chef to cater to your every need. The best white sandy beach in PV and endless activities all within minutes - or right at your own beach!\r\nDistinguished by a private, jetted 10-person spa overflowing into an infinity edge pool with spacious covered terraces and patio areas, gourmet kitchen and a luxurious six-bedroom-suite design, Casa Caleta radiates quality and detailing at every glance.\r\nCasa Caleta is a Two-level six-bedroom, six plus two 1/2 bath villa, with private pool, Jacuzzi, and adjacent garage for two cars. It encompasses 9,200 square feet of living area, with 6,100 square feet of bright, air-conditioned space.\r\nInteriors feature quality Mexican interior-design, with touches that include furnishings and artwork from Mexico's finest artisans. The Villa features abundant use of rough-hewn granite rock walls, exquisite antique-marble flooring, hand-crafted floor-to-cieling stained-glass and magnificent tropical-hardwood doors and cabinetry to enrich your vacation experience.\r\nAttention to detail is the hallmark of this Villa from its 'all Viking' gourmet chef's kitchens (in-door and out-door), meter by meter solid-slab marble flooring through-out, individually controlled central air-conditioning in every room, high-speed wireless internet, purified water system, plush pillow-top mattresses, top-of-the-line linens and bath accessories, flat screen TVs and zone-controlled sound system indoors and out.Casa Caleta promises the privacy, intimacy and understated elegance you have been looking for. A perfect luxury getaway for world travelers, honeymooners, family events, groups of friends, or business retreats.",
    VRNeighbourhoodPanoIcon: {
      Status: 1,
      Type: 4,
      Name: 'Neighbourhoodview',
      URL: 'http://dev.navigaze.com/img/debbcf865d6c013c20450d7486b96c671531176242275-whiteblue2.png',
      __v: 0,
      Geometry: {
        type: 'plane',
        options: [{}]
      }
    },
    AreaUnit: 'F2',
    Area: 9200,
    MinimumStay: 3,
    Bathrooms: 6,
    Bedrooms: 6,
    Sleeps: 12,
    priceId: {
      unit: 'fa-usd',
      type: 'Currency'
    },
    Price: 1990,
    PropertyName: 'Casa Caleta',
    UserName: 'Sebastian',
    VRMapThumbnail: '',
    VRInteriorThumbnail: 'http://dev.navigaze.com/img/74b1982f3ce1c3a0c6ede01da595f3a01546654157159-thumb-interior.jpg',
    VRThumbnail: 'http://dev.navigaze.com/img/f5995397284bdfa90cd8c82e841c37711546654157158-thumb-main.jpg',
    AllImageThumbnail: 'http://dev.navigaze.com/img/9f7271c74416528602735cdebb61a4d81546654157162-thumb-pool.jpg',
    VRNeighbourhoodThumbnailSmall: 'http://dev.navigaze.com/img/7fe9d8f78ba94a7e1294d91955bee3381546654157159-caleta-nh-thumb.png',
    OwnerPhone: 52,
    OwnerEmail: 'booking@navigaze.com',
    VideosUrl: 'https://www.youtube.com/embed/DPZkwdgaLks',
    PropertyDetailURL: '',
    SourceSite: '',
    UnitUrl: '',
    VRUrl: 'https://my.matterport.com/show/?m=TPk29ABadJg&amp;play=1&amp;qs=1&amp;title=0&amp;mt=0&amp;hr=0&amp;ts=1&amp;help=0&amp;guides=0&amp;vrcoll=1',
    Address: 'Calle Sagitario, Conchas Chinas, 48390 Puerto Vallarta, Jal., Mexico',
    Type: 1,
    Status: 1,
    __v: 0,
    OwnerContact: null,
    houserules: [{
      Name: 'Rule-1',
      Description: 'Smoking Is Not Allowed. Pets Are Not Allowed'
    }],
    cancelpolicies: [{
      Name: 'cancel 7 days',
      Description: 'Cancel up to 7 days before your trip and get a full refund. Cancel within 7 days of the trip and get a 50% refund of the nightly rate, as well as a full refund of fees'
    }],
    amenities: [{
      Name: 'Internet',
      IconURL: 'fa-wifi',
      ShowOnSummery: true,
      amenityInclude: true
    },
    {
      Name: 'Kitchen',
      IconURL: 'fa-cutlery',
      ShowOnSummery: true,
      amenityInclude: true
    },
    {
      Name: 'AC',
      IconURL: 'fa-thermometer-half',
      ShowOnSummery: false,
      amenityInclude: true
    },
    {
      Name: 'Elevator',
      IconURL: 'fa-star',
      ShowOnSummery: false
    },
    {
      Name: 'Dryer',
      IconURL: 'fa-star',
      ShowOnSummery: false
    },
    {
      Name: 'Pool',
      IconURL: 'fa-star',
      ShowOnSummery: false
    },
    {
      Name: 'Fan',
      IconURL: 'fa-star',
      ShowOnSummery: false
    },
    {
      Name: 'Washer',
      IconURL: 'fa-star',
      ShowOnSummery: false
    }
  ],
    reviewAvg: 0,
    VRFrontThumbnail: ['http://dev.navigaze.com/img/83550a21657871f93b8e1af1a22575a71546654157165-26.jpg',
      'http://dev.navigaze.com/img/39e4f5b268b954a0634d30ab447f93a41546654157166-30.jpg',
      'http://dev.navigaze.com/img/57c40a5cf4e09c099b13ad9e2f33f03f1546654157167-29.jpg',
      'http://dev.navigaze.com/img/41a7177b45f3ca9b5628d29dbd9b393b1546654157168-28.jpg',
      'http://dev.navigaze.com/img/5b26e0e87a2e9ea4a97d812e826eb8531546654157169-27.jpg',
      'http://dev.navigaze.com/img/76b64c38fe959e4071527a3a81a978f01546654157171-25.jpg',
      'http://dev.navigaze.com/img/8ebe84aa2568b75c2b36021643888c801546654157172-24.jpg',
      'http://dev.navigaze.com/img/4fcf1b1d1747a198dad17c53e4e719911546654157172-23.jpg',
      'http://dev.navigaze.com/img/1c71c38caa3d1c781650849c3dbc526d1546654157173-22.jpg',
      'http://dev.navigaze.com/img/15b9009553d7bfa0bf04b8b4da621b811546654157173-21.jpg',
      'http://dev.navigaze.com/img/ce0cbad8c1a2e8541fdf94716e7a00e71546654157174-20.jpg',
      'http://dev.navigaze.com/img/1d71682f07f8a4f86215fac62f8ebbd81546654157175-19.jpg',
      'http://dev.navigaze.com/img/b9cfce7eb8c94fcc4e02f3594a28277c1546654157175-18.jpg',
      'http://dev.navigaze.com/img/61885b1b1c00a7d93cf8d76782971fea1546654157176-17.jpg',
      'http://dev.navigaze.com/img/ffec018cdda3b2b9063e8bb76e821f4a1546654157176-16.jpg',
      'http://dev.navigaze.com/img/b0ab3964b472dcfe4971f1f1586048671546654157177-15.jpg',
      'http://dev.navigaze.com/img/76167c857773b22d07c65d49f6c8b04d1546654157177-14.jpg',
      'http://dev.navigaze.com/img/3b6eb9309c659f0f4897e891d73fbc271546654157177-13.jpg',
      'http://dev.navigaze.com/img/baaf3716e24c1d0d1e6e2c6e26d2ed9d1546654157178-12.jpg',
      'http://dev.navigaze.com/img/d83b010996edc5770c0a3e2b9e03acfb1546654157179-11.jpg',
      'http://dev.navigaze.com/img/46be7f0c21c45570d788e7db91572c441546654157180-10.jpg',
      'http://dev.navigaze.com/img/bf564a9379f3015470eeee2d95ecd40d1546654157181-09.jpg',
      'http://dev.navigaze.com/img/fe0a8d8f6f6f001b17a920aa3f84eb3f1546654157181-08.jpg',
      'http://dev.navigaze.com/img/ef0acf60874c5e57e044de52ef14c2891546654157182-07.jpg',
      'http://dev.navigaze.com/img/45fd48cf68868be7bf6c1720ff8b09d81546654157182-06.jpg',
      'http://dev.navigaze.com/img/0d003913f452cf28821de2d90ed5492a1546654157183-05.jpg',
      'http://dev.navigaze.com/img/7fa3ff205611e6be5f56b436d79c93281546654157183-04.jpg',
      'http://dev.navigaze.com/img/3eab734b4b455db2c84797a4464fcf8a1546654157190-03.jpg',
      'http://dev.navigaze.com/img/a9772af62bb6736e2162dfb07400898d1546654157191-02.jpg',
      'http://dev.navigaze.com/img/6aa979c24335786b9eb0f9d794a8757e1546654157191-01.jpg'
    ],
    VRNeighbourhoodThumbnail: {
      NbhPano: 'http://dev.navigaze.com/img/4a8cf11628cd97a2445dd32201264a4e1546653212698-loweramapas_2_10/loweramapas_2_10',
      position: {
        radius: 500,
        phi: -11.54255696248615,
        theta: 135.09151954964435
      }
    },
    CameraPosition: {
      fov: 65.66318809306698,
      roll: 0,
      pitch: -11.54255696248615,
      yaw: 135.09151954964435
    },
    Levels: {
      level3: 7680,
      level2: 4096,
      level1: 2048,
      level0: 1024
    },
    MapLocation: {
      type: 'Point',
      coordinates: [-105.24377679999998, 20.5913174]
    }
  };

  var amenitiesData = [{
    Name: 'Internet',
    IconURL: 'fa-wifi',
    ShowOnSummery: true,
    amenityInclude: true
  }, {
    Name: 'Weelchair',
    IconURL: 'fa-wheelchair',
    ShowOnSummery: true,
    amenityInclude: false
  }, {
    Name: 'Kitchen',
    IconURL: 'fa-cutlery',
    ShowOnSummery: true,
    amenityInclude: true
  }, {
    Name: 'Breakfast',
    IconURL: 'fa-coffee',
    ShowOnSummery: true,
    amenityInclude: true
  }, {
    Name: 'AC',
    IconURL: 'fa-thermometer-half',
    ShowOnSummery: false,
    amenityInclude: true
  }, {
    Name: 'Cable TV',
    IconURL: 'fa-television',
    ShowOnSummery: true,
    amenityInclude: false
  }, {
    Name: 'Safty Box',
    IconURL: 'fa-archive',
    ShowOnSummery: true,
    amenityInclude: true
  }, {
    Name: 'Fire Place',
    IconURL: 'fa-fire',
    ShowOnSummery: false
  }, {
    Name: 'Elevator',
    IconURL: 'fa-star',
    ShowOnSummery: false
  }, {
    Name: 'Gym',
    IconURL: 'fa-star',
    ShowOnSummery: false
  }, {
    Name: 'Parking',
    IconURL: 'fa-star',
    ShowOnSummery: false
  }, {
    Name: 'Hot Tub',
    IconURL: 'fa-star',
    ShowOnSummery: false
  }, {
    Name: 'Dryer',
    IconURL: 'fa-star',
    ShowOnSummery: false
  }, {
    Name: 'Pool',
    IconURL: 'fa-star',
    ShowOnSummery: false
  }, {
    Name: 'Fan',
    IconURL: 'fa-star',
    ShowOnSummery: false
  }, {
    Name: 'Crib',
    IconURL: 'fa-star',
    ShowOnSummery: false
  }, {
    Name: 'Washer',
    IconURL: 'fa-star',
    ShowOnSummery: false
  }, {
    Name: 'Iron',
    IconURL: 'fa-star',
    ShowOnSummery: false
  }];

  var selectedAmenitiesData = [{
    Name: 'Internet',
    IconURL: 'fa-wifi',
    ShowOnSummery: true,
    amenityInclude: true
  }, {
    Name: 'Kitchen',
    IconURL: 'fa-cutlery',
    ShowOnSummery: true,
    amenityInclude: true
  }, {
    Name: 'AC',
    IconURL: 'fa-thermometer-half',
    ShowOnSummery: false,
    amenityInclude: true
  }, {
    Name: 'Elevator',
    IconURL: 'fa-star',
    ShowOnSummery: false
  }, {
    Name: 'Dryer',
    IconURL: 'fa-star',
    ShowOnSummery: false
  }, {
    Name: 'Pool',
    IconURL: 'fa-star',
    ShowOnSummery: false
  }, {
    Name: 'Fan',
    IconURL: 'fa-star',
    ShowOnSummery: false
  }, {
    Name: 'Washer',
    IconURL: 'fa-star',
    ShowOnSummery: false
  }];

  var cancelpolicies  = [{
    Name: 'cancel 7 days',
    Description: 'Cancel up to 7 days before your trip and get a full refund. Cancel within 7 days of the trip and get a 50% refund of the nightly rate, as well as a full refund of fees'
  }];

  var houseRule = [{
    Name: 'Rule-1',
    Description: 'Smoking Is Not Allowed. Pets Are Not Allowed'
  }];

  res.render('property', {
    propertyData: propertyData,
    amenitiesData: amenitiesData,
    selectedAmenitiesData: selectedAmenitiesData,
    cancelpolicies: cancelpolicies,
    houseRule: houseRule
  });
});

module.exports = router;
