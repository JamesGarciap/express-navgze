
function myari() {
   $('#loader1').removeClass("loadershow");
}


   $(window).load(function() {
 

$('#loader1').removeClass("loadershow");

});
    
    
    
    $(document).ready(function(){

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

    var unitUrl = "<%=propertyData.UnitUrl%>";
     var SourceSite = "<%=propertyData.SourceSite%>";
    var PriceLocal = "<%=propertyData.Price%>";
    var pathname  = getUrlVars()["prop"]
    var sourceSite  = getUrlVars()["sourcesite"]
    var minPrice  = getUrlVars()["propDes"]
    var days  = getUrlVars()["days"]
    var decodedString = atob(pathname);
    var decodeSite = atob(sourceSite);
    var decodeDays = atob(days);
    var decodeMinProce  = atob(minPrice);
    var price = decodedString.split('_')[1];
    console.log("Split pth name ::"+price);
     $('.PriceUnit').html(decodeMinProce)
     $('#PriceUnit').html(price)

     console.log("Price:"+price +"::"+decodeMinProce+"::"+decodeDays)
     console.log(decodeSite)
var propertySource;
      if(SourceSite == 'HOMEAWAY_US' || SourceSite == 'HOMEAWAY_UK'){
                            propertySource = 'HomeAway'
                        }else if (SourceSite == 'VRBO'){
                             propertySource = 'VRBO'
                        }else{
                            propertySource = 'VacationRental'
                       }

    var area  = '<%=propertyData.Area%> ';
    var areaM = '<%=propertyData.AreaUnit%> ';

    if(area == ''){
      console.log("Area blank")
      $('.areaDiv').html('-');
    }else{
        console.log("Area not blank"+areaM)
      $('.areaDiv').html(area);
      $('.areaUnit').html(areaM);

    }

    var minStay = '<%=propertyData.MinimumStay%>';
    if(minStay == ''){
      $('.minstayDiv').html('-');
    }else{
       $('.minstayDiv').html(minStay);
    }
  

     if(decodeSite == 'local'){
     $('.fromshowdt').show();
      if(unitUrl == '' || unitUrl == 'undefined'){
      console.log("Local proce should Hide");
      $(".bestpricehide").css("display","none");
     // $("#totalpriceprop").css("display","none");
      $("#booknowbtnprop").removeClass("hide-container");
      $("#booknowbtnprop").css("display","block");
           $("#viewdealbtnprop").css("display","none");
         }else{
           $(".totalpriceprop").css("display","none");
           $("#booknowbtnprop").css("display","none");
           $("#viewdealbtnprop").css("display","block");
             $('.sourcesitval').html(propertySource)
           $(".bestpricehide").css("display","block");
           var newUrl = '/vacationRental?source='+btoa(propertySource)
            $("#viewdeallinksource").attr('href',newUrl)
         }

     }else{
       $('.fromshowdt').hide();
          $('.totalpriceproppnight').html(price)
          $('.totalsdays').html(decodeDays)
          $('.sourcesitval').html(decodeSite)
           $(".bestpricehide").css("display","block");
           $(".totalpriceprop").css("display","block");
           $("#booknowbtnprop").css("display","none");
           $("#viewdealbtnprop").removeClass("hide-container");
           $("#viewdealbtnprop").css("display","block");
           var newUrl = '/vacationRental?source='+sourceSite
            $("#viewdeallinksource").attr('href',newUrl)


     }

     if(price == 'N/A')
     {
      $(".dnlseciunit").hide();
      $(".pernightNA").hide();
      $(".bestpricehide").hide();
      $(".totalpriceprop").hide();
      $(".PriceUnit").text('Not Available');
      $(".PriceUnit").show();
     }

/*$("#viewdeallinksource").click(function(){
    var newUrl = '/vacationRental?source='+sourceSite
$("#moreDetailsbooknow2").attr('href',newUrl)

})*/


                  /* if(unitUrl === undefined || unitUrl == ''){
                     $('#PriceUnit').text(PriceLocal)
                     }*/

     /*$.ajax({
                 url: " https://cors-anywhere.herokuapp.com/https://channel-stage.homeaway.com/channel/vacationRentalRates?_restfully=true&unitUrl="+unitUrl,
                 headers: {
                       'Authorization':'Bearer MTMzYmI2MGQtYWM4Yy00YjQxLThhMzEtN2M3Y2NjNDRjMzI5',
                       'Content-Type':'application/json',
                      },
                    type: "GET",
                    dataType: "json",
                    success: function(data){
                    console.log("---------------Response form the home away---------------");
                    console.log("UNIT URL value after response ::"+unitUrl);
                     var price = data.additionalPlans[0].preStay.perStay.baseTotal.amount.amount;
                     console.log("Price of UNIT URL in prop page"+price)
                     
                     $('#PriceUnit').text(price)
                  
                   
                 
                  
                  }
           })*/



 $("#logout").click(function(){
//alert("lll");
                      $.ajax({url: "/logout",type: "GET", data: JSON.stringify({
                       }),dataType: "json",contentType: "application/json", success: function(data){
                     
                      if(data.data ==200){
                        console.log("logout -------------")
                         //$.removeCookie("openPropTour");
                         window.location.href = '/'
                        
                      }
                      }

                   })
                  });
        
    })
   



   
 


    

      jQuery(document).ready(function($) {
    //$(function(){
        $('#scrlm').slimScroll1({
            
      });
//});
  });







 
/* When the user clicks on the button, 
toggle between hiding and showdrpproping the dropdownprop content */
function myFunction() {
    document.getElementById("myDropdownprop").classList.toggle("showdrpprop");
}

// Close the dropdownprop if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdownprops = document.getElementsByClassName("dropdownprop-content");
    var i;
    for (i = 0; i < dropdownprops.length; i++) {
      var openDropdownprop = dropdownprops[i];
      if (openDropdownprop.classList.contains('showdrpprop')) {
        openDropdownprop.classList.remove('showdrpprop');
      }
    }
  }
}

    


  

        $(document).ready(function () {

           
          
           initMap1();




            var panoNotLoaded = true;
            var mapNotLoaded = true;
            var sidebarSelection = 1;

            //  $('#divLoading').removeClass("loader");

             // All sides
            var sides = ["left", "right"];

            // Initialize sidebars
            for (var i = 0; i < sides.length; ++i) {
                var cSide = sides[i];
                $(".sidebar." + cSide).sidebar({ side: cSide });
            }
            if (window.matchMedia("(max-width: 991px)").matches) {

            $(".sidebar.left").trigger("sidebar:close");
            $(".sidebar.right").trigger("sidebar:close");
            $(".bSideBar11").addClass("fa-chevron-left");
            //$("#bSideBar > i").addClass("fa-chevron-left");
            $(".aSideBar11").addClass("fa-chevron-right");
            //$("#aSideBar > i").addClass("fa-chevron-right");
                $("#aSideBar").on("click", function () {
                      
                  var $this = $(this);
                var action = $this.attr("data-action");
                var side = $this.attr("data-side");
                $(".sidebar." + side).trigger("sidebar:" + action);


                     $(".sidebar.right").trigger("sidebar:close");
                     //$(".sidebar.left").trigger("sidebar:open");
                     //$(".aSideBar11").removeClass("fa-chevron-right");
                     console.log("++fa-chevron-right");
                     $(".aSideBar11").toggleClass("fa-chevron-right");
                     $(".aSideBar11").toggleClass("fa-chevron-left");
                     
                     console.log("++fa-chevron-left")

                     if ($(".sidebar.right").trigger("sidebar:close")) {

                      $(".bSideBar11").addClass("fa-chevron-left");
                      $(".bSideBar11").removeClass("fa-chevron-right");
                     }
                     else
                     {
                        
                      $(".bSideBar11").addClass("fa-chevron-right");
                      $(".bSideBar11").removeClass("fa-chevron-left");
                     }
                 return false;
            });

            $("#bSideBar").on("click", function () {


               var $this = $(this);
                var action = $this.attr("data-action");
                var side = $this.attr("data-side");

                $(".sidebar." + side).trigger("sidebar:" + action);

                 $(".sidebar.left").trigger("sidebar:close");
                 //$(".sidebar.right").trigger("sidebar:open");
                 $(".bSideBar11").toggleClass("fa-chevron-left");
                     $(".bSideBar11").toggleClass("fa-chevron-right");

                     if ($(".sidebar.left").trigger("sidebar:close")) {

                      $(".aSideBar11").addClass("fa-chevron-right");
                      $(".aSideBar11").removeClass("fa-chevron-left");
                     }
                     else
                     {
                        $(".aSideBar11").addClass("fa-chevron-left");
                      $(".aSideBar11").removeClass("fa-chevron-right");
                     }
                 return false;
            });
            
            }else
            {
            $(".sidebar.left").trigger("sidebar:open");
            $(".sidebar.right").trigger("sidebar:open");

            $(".bSideBar11").addClass("fa-chevron-right");
            $(".aSideBar11").addClass("fa-chevron-left");

            
            // Click handlers
            $("#aSideBar").on("click", function () {
                    // $(".sidebar.right").trigger("sidebar:close");
                     $(".arrow_box123").fadeOut(2000);
                                 $(".arrow_box1234").fadeOut(2000);
                     $(".arrow_box123").fadeOut();
                                 $(".arrow_box1234").fadeOut();
                                 $(".fa").removeClass("bounce");
                                 $(".fa").removeClass("bounceX");
                                 $(".fa").removeClass("bounceX1");
                var $this = $(this);
                var action = $this.attr("data-action");
                var side = $this.attr("data-side");
                $(".sidebar." + side).trigger("sidebar:" + action);
                /*$("#bSideBar > i").removeClass("fa-chevron-right");
                $("#bSideBar > i").addClass("fa-chevron-left");
                $("#aSideBar > i").toggleClass("fa-chevron-left");
                $("#aSideBar > i").toggleClass("fa-chevron-right");*/
                $(".aSideBar11").toggleClass("fa-chevron-left");
$(".aSideBar11").toggleClass("fa-chevron-right");
                return false;
            });

            $("#bSideBar").on("click", function () {
               $(".arrow_box123").fadeOut(2000);
                                 $(".arrow_box1234").fadeOut(2000);
                // $(".sidebar.left").trigger("sidebar:close");
                 $(".arrow_box123").fadeOut();
                                 $(".arrow_box1234").fadeOut();
                                 $(".fa").removeClass("bounce");
                                 $(".fa").removeClass("bounceX");
                                 $(".fa").removeClass("bounceX1");
                var $this = $(this);
                var action = $this.attr("data-action");
                var side = $this.attr("data-side");

                $(".sidebar." + side).trigger("sidebar:" + action);
              /*  $("#aSideBar > i").removeClass("fa-chevron-left");
                $("#aSideBar > i").addClass("fa-chevron-right");
                $("#bSideBar > i").toggleClass("fa-chevron-right");
                $("#bSideBar > i").toggleClass("fa-chevron-left");
*/ 
                $(".bSideBar11").toggleClass("fa-chevron-right");
 $(".bSideBar11").toggleClass("fa-chevron-left");
                return false;
            });

        }


            $("#email").click(function(){
                console.log('email ::--'+$('#userName').val());
            $.ajax({url: "/emailus",type: "POST", data: JSON.stringify({
                   name: $('#userName').val(),
                    email: $('#useremail').val(),
                   message: $('#message').val(),
                   arrival : $('#datetimeA1').val(),
                   departure : $('#datetimeD1').val()
                }),dataType: "json",contentType: "application/json", success: function(result){
            console.log("AJAX return ::"+result);
    }});
     });

                /*$('#datetimeA').datetimepicker({
                format: 'DD-MM-YYYY',
                disabledTimeIntervals: true,
                disabledHours: true
            });

            $('#datetimeD').datetimepicker({
                format: 'DD-MM-YYYY',
                disabledTimeIntervals: true,
                disabledHours: true
            });*/
            //$(".sidebar.left").trigger("sidebar:open");
            

            $("#aInterior").on("click", function () {

              if (window.matchMedia("(max-width: 991px)").matches) {

$(".sidebar.left").trigger("sidebar:close");
$(".sidebar.right").trigger("sidebar:close");
                if ($(".sidebar.left").trigger("sidebar:close")) {

                      $(".aSideBar11").addClass("fa-chevron-right");
                      $(".aSideBar11").removeClass("fa-chevron-left");
                     }
                     else
                     {
                        $(".aSideBar11").addClass("fa-chevron-left");
                      $(".aSideBar11").removeClass("fa-chevron-right");
                     }
                     

}
$(".containerbookmebtn").css("bottom","20px");
                $("#divNeighbourhood").hide(function () {
                    //  $('#divProperty').empty();
                });
                $("#divMap").hide(function () {
                    //  $('#divProperty').empty();
                });
                 $("#divfrv").hide(function () {
                    //  $('#divProperty').empty();
                })
                $("#divProperty").fadeIn(function () {


                });
                if (sidebarSelection != 1) {
                    toggleSideBar(1, sidebarSelection);
                }
                sidebarSelection = 1;

                return false;
            });

           $("#aNeighbourhood").on("click", function () {

            if (window.matchMedia("(max-width: 991px)").matches) {

$(".sidebar.left").trigger("sidebar:close");
$(".sidebar.right").trigger("sidebar:close");
           if ($(".sidebar.left").trigger("sidebar:close")) {

                      $(".aSideBar11").addClass("fa-chevron-right");
                      $(".aSideBar11").removeClass("fa-chevron-left");
                     }
                     else
                     {
                        $(".aSideBar11").addClass("fa-chevron-left");
                      $(".aSideBar11").removeClass("fa-chevron-right");
                     }
                     


}
            $(".containerbookmebtn").css("bottom","20px");
           /* $(".containerbookmebtn").css("bottom","20px");
               $.ajax({url: "/panoBackImg",type: "POST", data: JSON.stringify({
                id: $(this).attr("data-id")
                 }),dataType: "json",contentType: "application/json", success: function(data){
                    console.log("----------------Neighbourhood Data--------------");
                    console.log(JSON.stringify(data));
                    if (panoNotLoaded) {
                    const neighbourhoodConfig = {
                        ImageURL : data.panoImg[0].PanoId.ImageUrl,
                        theta    : data.panoImg[0].PanoMarkerPosition.position.theta,
                        phi      : data.panoImg[0].PanoMarkerPosition.position.phi,
                        radius   : data.panoImg[0].PanoMarkerPosition.position.radius
                    }
                    var forgeConfig = getDefaultPano(neighbourhoodConfig);
                    var viewer = new FORGE.Viewer("divNeighbourhood", forgeConfig);
                    if (viewer.customerAction == null) {
                        var customAction = { one: 1 };
                        viewer.customerAction = customAction;
                    }
                    viewer.customerAction.getHotspotInfo = function (property) {
                        return 1;
                    };
                    viewer.customerAction.onSceneLoadComplete = function (property) {
                        console.log("complete");
                    };
                    viewer.customerAction.onSceneLoadStart = function (property) {
                    };
                    panoNotLoaded = false;
                }

                   }
             });*/
             if (panoNotLoaded) {
              console.log("Page not loaded")
              var neighbourhoodConfig = "<%= propertyData.VRNeighbourhoodThumbnail.NbhPano %>"
              

             
    var afterDot = neighbourhoodConfig.split("."); 
             console.log("Extension of file ::"+afterDot);
             if(afterDot[1] == undefined ){
              var level_0 = "<%= propertyData.Levels.level0 %>"
              var level_1 = "<%= propertyData.Levels.level1 %>"
              var level_2 = "<%= propertyData.Levels.level2 %>"
              var level_3 = "<%= propertyData.Levels.level3 %>"
               var fov = "<%= propertyData.CameraPosition.fov %>"
              var roll = "<%= propertyData.CameraPosition.roll %>"
              var pitch = "<%= propertyData.CameraPosition.pitch %>"
              var yaw = "<%= propertyData.CameraPosition.yaw %>"
             var  theta    = '<%=propertyData.VRNeighbourhoodThumbnail.position.theta%>'
             var  phi     = '<%=propertyData.VRNeighbourhoodThumbnail.position.phi%>'
            var radius   = '<%=propertyData.VRNeighbourhoodThumbnail.position.radius%>'
            var panoIcon = '<%=propertyData.VRNeighbourhoodPanoIcon.URL%>'
              
             var zipConfig = {
    "controllers":
    {
        "instances":
        [
            {
                "uid": "pointer",
                "type": "pointer",
                "options":
                {
                    "orientation": { "drag": true },
                    "zoom": { "toPointer": true }
                }
            }
        ]
    },

    "story":
    {
        "uid": "multiresolution-1",
        "name": "Multiresolution Story",
        "slug": "multiresolution-story",
        "description": "This project display multiresolution paronomic images",
        "default": "scene-0",

        "scenes":
        [
           {
               
                "name": "House Interior",
                "slug": "house-interior",
                "description": "Saint Jorioz's house interior",

               

                "media":
                {
                    "uid": "media-1",
                    "type": "image",

                    "preview":
                    {
                        "url": neighbourhoodConfig+"/{face}.jpg",
                        "tile": 512
                    },

                    "source":
                    {
                        "format": "cube",

                        "faces":
                        {
                            "front": 0,
                            "right": 1,
                            "back": 2,
                            "left": 3,
                            "down": 5,
                            "up": 4
                        },

                        "pattern": neighbourhoodConfig+"/{face}/{level}/{y}_{x}.jpg",

                        "levels":
                        [
                            {
                                "name": "level 0",
                                "width": parseInt(level_0),
                                "height": parseInt(level_0),
                                "tile": 512
                            },

                            {
                                "name": "level 1",
                                "width": parseInt(level_1),
                                "height": parseInt(level_1),
                                "tile": 512
                            },

                            {
                                "name": "level 2",
                                "width":parseInt(level_2),
                                "height": parseInt(level_2),
                                "tile": 512
                            },
                            {
                                "name": "level 3",
                                "width": parseInt(level_3),
                                "height": parseInt(level_3),
                                "tile": 512
                            }
                        ]
                    }
                },
                   "camera":
                  {
                               
        "parallax": 0,

        "yaw":
        {
            "default": parseInt(yaw),
        },
        "pitch":
        {
            "default": parseInt(pitch),
        },
        "roll":
        {
            "default": parseInt(roll),
        },
        "fov":
        {
            "default": parseInt(fov),
             "min":5,
             "max":100
        }
         },
         "hotspots":
                            [

                                {
                                    "uid": "hotspot-1",
                                    "transform":
                                    {
                                        "position":
                                        {
                                            "theta": parseInt(theta) ,
                                            "phi": parseInt(phi),
                                            "radius": parseInt(radius)
                                        }

                                    
                                    },

                                    "geometry":
                                    {
                                        "type": "plane",
                                        "options":
                                        {
                                            "width": 50,
                                            "height": 50
                                        }
                                    },
                                    /*"autoScale" : true,*/
                                    "facingCenter" : true,
                                    "material":
                                    {
                                        "image": panoIcon,
                                        "opacity": 1
                                    },

                                    "events":
                                    {
                                        "onClick": ["action-openproptour-2"]
                                    }
                                }
                            ]
            }
        ]
    }
    

}

         var viewer = new FORGE.Viewer("divNeighbourhood",zipConfig);


             }else{

               const neighbourhoodConfig2 = {
                        src : neighbourhoodConfig,
                        panoIcon : '<%=propertyData.VRNeighbourhoodPanoIcon.URL%>',
                        theta    : '<%=propertyData.VRNeighbourhoodThumbnail.position.theta%>',
                        phi      : '<%=propertyData.VRNeighbourhoodThumbnail.position.phi%>',
                        radius   : '<%=propertyData.VRNeighbourhoodThumbnail.position.radius%>',
                        CameraPosition : {
                                    fov : '<%=propertyData.CameraPosition.fov%>', 
                                    roll : '<%=propertyData.CameraPosition.roll%>', 
                                    pitch : '<%=propertyData.CameraPosition.pitch%>', 
                                    yaw : '<%=propertyData.CameraPosition.yaw%>'
                                }
                    }
                console.log("neighbourhoodConfig2 value ::"+JSON.stringify(neighbourhoodConfig2))
               var forgeConfig = getDefaultPano(neighbourhoodConfig2);
                    var viewer = new FORGE.Viewer("divNeighbourhood", forgeConfig);
                    console.log("Viewer object ");
                    console.log(viewer)
                    if (viewer.customerAction == null) {
                        var customAction = { one: 1 };
                        viewer.customerAction = customAction;
                    }
                    viewer.customerAction.getHotspotInfo = function (property) {
                        return 1;
                    };
                    viewer.customerAction.onSceneLoadComplete = function (property) {
                        console.log("complete");
                    };
                    viewer.customerAction.onSceneLoadStart = function (property) {
                    };
                 

             }
               panoNotLoaded = false;
              }


              
                $("#divProperty").hide(function () {
                });
                $("#divMap").hide(function () {
                });
                 $("#divfrv").hide(function () {
                })
                $("#divNeighbourhood").fadeIn(function () {
                });
                if (sidebarSelection != 2) {
                    toggleSideBar(2, sidebarSelection);
                }
                sidebarSelection = 2;
                return false;
            });


            $("#aMap").on("click", function () {

              if (window.matchMedia("(max-width: 991px)").matches) {

$(".sidebar.left").trigger("sidebar:close");
$(".sidebar.right").trigger("sidebar:close");

       if ($(".sidebar.left").trigger("sidebar:close")) {

                      $(".aSideBar11").addClass("fa-chevron-right");
                      $(".aSideBar11").removeClass("fa-chevron-left");
                     }
                     else
                     {
                        $(".aSideBar11").addClass("fa-chevron-left");
                      $(".aSideBar11").removeClass("fa-chevron-right");
                     }
                     
}
$(".containerbookmebtn").css("bottom","20px");
                $("#divNeighbourhood").hide(function () {
                    //  $('#divProperty').empty();
                });
                $("#divProperty").hide(function () {
                    //  $('#divProperty').empty();
                });
                 $("#divfrv").hide(function () {
                    //  $('#divProperty').empty();
                });
                $("#divMap").fadeIn(function () {
                    if (mapNotLoaded) {
                        initMap();
                        mapNotLoaded = false;
                    }
                });

                if (sidebarSelection != 3) {
                    toggleSideBar(3, sidebarSelection);
                }
                sidebarSelection = 3;
                return false;
            });
 

  $("#afrv").on("click", function () {

    if (window.matchMedia("(max-width: 991px)").matches) {

$(".sidebar.left").trigger("sidebar:close");
$(".sidebar.right").trigger("sidebar:close");

         if ($(".sidebar.left").trigger("sidebar:close")) {

                      $(".aSideBar11").addClass("fa-chevron-right");
                      $(".aSideBar11").removeClass("fa-chevron-left");
                     }
                     else
                     {
                        $(".aSideBar11").addClass("fa-chevron-left");
                      $(".aSideBar11").removeClass("fa-chevron-right");
                     }

}
$(".containerbookmebtn").css("bottom","94px");
                $("#divNeighbourhood").hide(function () {
                    //  $('#divProperty').empty();
                });
                $("#divMap").hide(function () {
                    //  $('#divProperty').empty();
                });

                $("#divProperty").hide(function () {
                    //  $('#divProperty').empty();
                });


                $("#divfrv").css("style","");
             
            //    $(".lSSlideWrapper ").css("style","transition-duration: 400ms;");
               //    $("#lightSlider").css("style","lightSlider lsGrab lSSlide");

                $("#divfrv").fadeIn(function () {


                });
                if (sidebarSelection != 4) {
                    toggleSideBar(4, sidebarSelection);
                }
                sidebarSelection = 4;

                return false;
            });


           

        });

       

        function toggleSideBar(currentSelection, previousSelection) {
            if (currentSelection == 1 || previousSelection == 1) {
                $("#liInterior").toggleClass("background");
            }
            if (currentSelection == 2 || previousSelection == 2) {
                $("#liNeighbourhood").toggleClass("background");
            }
            if (currentSelection == 3 || previousSelection == 3) {
                $("#liMap").toggleClass("background");
            }
        }

                    /***** MAP 2 ***/

                       /* function init1Map() {
                            
             var uluru = { lat: <%=propertyData.MapLocation.coordinates[1]%>, lng: <%=propertyData.MapLocation.coordinates[0]%> };
            map = new google.maps.Map(document.getElementById('divMap1'), {

                center: { lat: <%=propertyData.MapLocation.coordinates[1]%>, lng: <%=propertyData.MapLocation.coordinates[0]%> },
                zoom: 17,
                disableDefaultUI: true,
                mapTypeId: 'hybrid',
                
                draggable: true,
                scrollwheel: true,
                gestureHandling: "greedy",
                streetViewControl: true,
                
                
            });
            var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });


         
        }*/


                    /** map2 **/





        function getDefaultPano(url) {

            return {
                  "controllers":
                   {
                    "instances":
                    [
                    {
                        "uid": "pointer",
                        "type": "pointer",
                        "options":
                        {
                            "orientation": { "drag": true }
                        }
                    }
                    ]
               },
                "story":
                {
                    "uid": "bay-of-banderas",
                    "name": "Bay of Banderas",
                    "slug": "bay-of-banderas",
                    "description": "Bahía de Banderas",
                    "default": "scene-2",
                    "events": 
                    {
                        "onSceneLoadProgress": "action-story-onSceneLoadProgress",
                        "onSceneLoadError": "action-story-onSceneLoadError",
                        "onSceneLoadStart": "action-story-onSceneLoadStart",
                        "onSceneLoadComplete": "action-story-onSceneLoadComplete"
                    },
                    "scenes":
                    [

                        {
                            "uid": "scene-2",
                            "name": "Second scene",
                            "slug": "second-scene",
                            "description": "This is the second scene",

                            "media":
                            {
                                "uid": "media-1",
                                "type": "image",

                                "source":
                                {
                                    "format": "equi",
                                    "url": url.src
                                }
                            },

           "camera":
                            {
                               
        "parallax": 0,

        "yaw":
        {
            "default": parseInt(url.CameraPosition.yaw),
           
        },

        "pitch":
        {
            "default": parseInt(url.CameraPosition.pitch),
           
        },

        "roll":
        {
            "default": parseInt(url.CameraPosition.roll),
           
        },

        "fov":
        {
            "default": parseInt(url.CameraPosition.fov),
            "min" : 5,
            "max" : 100
        }
    
                            },                
                            "hotspots":
                            [

                                {
                                    "uid": "hotspot-1",
                                    "transform":
                                    {
                                        "position":
                                        {
                                            "theta": parseInt(url.theta) ,
                                            "phi": parseInt(url.phi),
                                            "radius": parseInt(url.radius)
                                        }

                                    
                                    },

                                    "geometry":
                                    {
                                        "type": "plane",
                                        "options":
                                        {
                                            "width": 50,
                                            "height": 50
                                        }
                                    },
                                    "autoScale" : true,
                                    "facingCenter" : true,
                                    "material":
                                    {
                                        "image": url.panoIcon,
                                        "opacity": 1
                                    },

                                    "events":
                                    {
                                        "onClick": ["action-openproptour-2"]
                                    }
                                }
                            ]
                        }
                    ]
                },
                "plugins":
                {
                    "engines":
                    [
                        {
                            "uid": "org.forgejs.vrviewer",
                            "url": "VRViewer/"
                        }
                    ],

                    "instances":
                    [
                        {
                            "uid": "myplugin-instance-0",
                            "engine": "org.forgejs.vrviewer"
                        }
                    ]
                },
                "actions":
                [
                    {
                        "uid": "action-story-onSceneLoadStart",
                        "target": "viewer.customerAction",
                        "method":
                        {
                            "name": "onSceneLoadStart",
                            "args": ["action-story-onSceneLoadStart"]
                        }
                    },
                    {
                        "uid": "action-story-onSceneLoadComplete",
                        "target": "viewer.customerAction",
                        "method":
                        {
                            "name": "onSceneLoadComplete",
                            "args": ["action-story-onSceneLoadComplete"]
                        }
                    },
                    {
                        "uid": "action-story-onSceneLoadError",
                        "target": "window.console",
                        "method":
                        {
                            "name": "log",
                            "args": ["action-story-onSceneLoadError"]
                        }
                    },
                    {
                        "uid": "action-story-onSceneLoadProgress",
                        "target": "window.console",
                        "method":
                        {
                            "name": "log",
                            "args": ["action-story-onSceneLoadProgress"]
                        }
                    },
                    {
                        "uid": "action-openproptour-1",
                        "target": "viewer.customerAction",
                        "method":
                        {
                            "name": "openPropTour",
                            "args": [{

                                "theta": 82,
                                "phi": -8,
                                "scene": "scene-1"

                            }]
                        }
                    },
                    {
                        "uid": "action-openproptour-2",
                        "target": "viewer.customerAction",
                        "method":
                        {
                            "name": "openPropTour",
                            "args": [{

                                "theta": -179,
                                "phi": -11,
                                "scene": "scene-0"

                            }]
                        }
                    }
                    ,
                    {
                        "uid": "action-loadscene-0",
                        "target": "viewer.story",

                        "method":
                        {
                            "name": "loadScene",
                            "args": ["scene-0"]
                        }
                    },
                    {
                        "uid": "action-camera-4",
                        "target": "viewer.renderer.camera",

                        "method":
                        {
                            "name": "lookAt",
                            "args": [180, 0, 0]
                        }
                    },
                    {
                        "uid": "action-camera-1",
                        "target": "viewer.renderer.camera",

                        "method":
                        {
                            "name": "lookAt",
                            "args": [82, -8, 0, 40, 1000]
                        }
                    },
                    {
                        "uid": "action-loadscene-1",
                        "target": "viewer.story",

                        "method":
                        {
                            "name": "loadScene",
                            "args": ["scene-1"]
                        }
                    }
                ]


            };
        }
    

   

   
   
  


        $(document).ready(function() {
       
            var user = '<%=user%>'
        if(!user){
        console.log("User is not loged in ")
        var url = window.location.href;
       $.cookie("propId", url);

       sessionStorage.setItem("propId",url);
      

       // setTimeout(function(){
       // alert(lastnames); 
       // },1000)
       
        }





                $('#bxslider-vertical .bxslider').bxSlider({
                    mode: 'vertical', 
                    infiniteLoop: false,
                    pager:false,
                    slideWidth: 200,
                    maxSlides: 2,
                    minSlides: 3,                
                    slideMargin: 4                                 
                });
            
                /* $('#bxslider-horizontal .bxslider').bxSlider({
                    mode: 'horizontal', 
                    infiniteLoop: false,
                    pager:false,
                    slideWidth: 200,
                    maxSlides: 4,
                    minSlides: 2,                
                    slideMargin: 10 
                });
*/


          /*  $('#lightSlider').lightSlider({
    gallery: true,
    item: 1,
    loop:true,
    slideMargin: 0,
    thumbItem: 9,
    autoWidth: false,
    autoWidth: false,
                    });*/
    
    });


storage = window.localStorage;
        //alert(storage);
      if(storage.getItem("ValidFrom") == 'Set'){
          $( "button[data-target = '#myModalgetquote1']" ).trigger( "click" );
          storage.clear();
      }

            
    


    $(".summary_button").hover(function(){
         $(".summary_pop").fadeIn("slow");
         $(".description_pop").fadeOut("slow");
         $(".availibility_btn_pop").fadeOut("slow");
         $(".aminitities_btn_pop").fadeOut("slow");
          $(".h_rule_btn_pop").fadeOut("slow");
           $(".cancel_policy_btn_pop").fadeOut("slow");
           $(".reviews_policy_btn_pop").fadeOut("slow");
          }, function(){
        //$(".summary_pop").fadeOut("slow",5000);
        
    });
    $( ".summary_pop" ).mouseleave(function() {
  $(".summary_pop").fadeOut("slow");
});
    // Decription

    $(".description_button").hover(function(){
         $(".description_pop").fadeIn("slow");
         $(".summary_pop").fadeOut("slow");
          $(".availibility_btn_pop").fadeOut("slow");
         $(".aminitities_btn_pop").fadeOut("slow");
          $(".h_rule_btn_pop").fadeOut("slow");
           $(".cancel_policy_btn_pop").fadeOut("slow");
           $(".reviews_policy_btn_pop").fadeOut("slow");
          }, function(){
        
        //$(".description_pop").fadeOut("slow");
        
    });
$( ".description_pop" ).mouseleave(function() {
  $(".description_pop").fadeOut("slow");
});

    // Availibility

    $(".availibility_button").hover(function(){
         $(".availibility_btn_pop").fadeIn("slow");
          $(".summary_pop").fadeOut("slow");
        $(".description_pop").fadeOut("slow");
        $(".aminitities_btn_pop").fadeOut("slow");
          $(".h_rule_btn_pop").fadeOut("slow");
           $(".cancel_policy_btn_pop").fadeOut("slow");
           $(".reviews_policy_btn_pop").fadeOut("slow");
          }, function(){
       
         //$(".availibility_btn_pop").fadeOut("slow");
         
    });
$( ".availibility_btn_pop" ).mouseleave(function() {
  $(".availibility_btn_pop").fadeOut("slow");
});

   // Aminities

    $(".aminitities_button").hover(function(){
         $(".aminitities_btn_pop").fadeIn("slow");
          $(".summary_pop").fadeOut("slow");
        $(".description_pop").fadeOut("slow");
         $(".availibility_btn_pop").fadeOut("slow");
         $(".h_rule_btn_pop").fadeOut("slow");
           $(".cancel_policy_btn_pop").fadeOut("slow");
           $(".reviews_policy_btn_pop").fadeOut("slow");
          }, function(){
       
         //$(".aminitities_btn_pop").fadeOut("slow");
          
    });
  
$( ".aminitities_btn_pop" ).mouseleave(function() {
  $(".aminitities_btn_pop").fadeOut("slow");
});

    // Rules

    $(".rules_button_pop").hover(function(){
         $(".h_rule_btn_pop").fadeIn("slow");
          $(".summary_pop").fadeOut("slow");
        $(".description_pop").fadeOut("slow");
         $(".availibility_btn_pop").fadeOut("slow");
         $(".aminitities_btn_pop").fadeOut("slow");
           $(".cancel_policy_btn_pop").fadeOut("slow");
           $(".reviews_policy_btn_pop").fadeOut("slow");
          }, function(){
       
          //$(".h_rule_btn_pop").fadeOut("slow");
         
    });
$( ".h_rule_btn_pop" ).mouseleave(function() {
  $(".h_rule_btn_pop").fadeOut("slow");
});

    // Cancel Paolicy

    $(".cancel_P_button").hover(function(){
         $(".cancel_policy_btn_pop").fadeIn("slow");
          $(".summary_pop").fadeOut("slow");
        $(".description_pop").fadeOut("slow");
         $(".availibility_btn_pop").fadeOut("slow");
         $(".aminitities_btn_pop").fadeOut("slow");
          $(".h_rule_btn_pop").fadeOut("slow");
           $(".reviews_policy_btn_pop").fadeOut("slow");
          }, function(){
      
          // $(".cancel_policy_btn_pop").fadeOut("slow");
          
    });
$( ".cancel_policy_btn_pop" ).mouseleave(function() {
  $(".cancel_policy_btn_pop").fadeOut("slow");
});
    // Reviews

    $(".reviews_Buttons").hover(function(){
         $(".reviews_policy_btn_pop").fadeIn("slow");
          $(".summary_pop").fadeOut("slow");
        $(".description_pop").fadeOut("slow");
         $(".availibility_btn_pop").fadeOut("slow");
         $(".aminitities_btn_pop").fadeOut("slow");
          $(".h_rule_btn_pop").fadeOut("slow");
           $(".cancel_policy_btn_pop").fadeOut("slow");
          }, function(){
      
          // $(".reviews_policy_btn_pop").fadeOut("slow");
    });
    $( ".reviews_policy_btn_pop" ).mouseleave(function() {
  $(".reviews_policy_btn_pop").fadeOut("slow");
});



    $(".lui").click(function(){
        //alert("jolo");
    })
    $("#lui1").click(function(){
       // alert("BOMB");
    })


   

    $(".closem3Arrow").click(function(){
        $(".reviews_policy_btn_pop").fadeOut("slow");
        $(".cancel_policy_btn_pop").fadeOut("slow");
        $(".h_rule_btn_pop").fadeOut("slow");
        $(".aminitities_btn_pop").fadeOut("slow");
        $(".availibility_btn_pop").fadeOut("slow");
        $(".description_pop").fadeOut("slow");
        $(".summary_pop").fadeOut("slow");
    });


    $(document).ready(function(){
         $(".sidebar").mouseleave(function() {
        //alert("he;;p")
 $(".reviews_policy_btn_pop").fadeOut("slow");
        $(".cancel_policy_btn_pop").fadeOut("slow");
        $(".h_rule_btn_pop").fadeOut("slow");
        $(".aminitities_btn_pop").fadeOut("slow");
        $(".availibility_btn_pop").fadeOut("slow");
        $(".description_pop").fadeOut("slow");
        $(".summary_pop").fadeOut("slow");
});
    });









    checkCookieExist();


    $(".ikoo").click(function(){
            sessionStorage.clear();
            window.location.href = '/'
         event.preventDefault();
    });


    $(document).ready(function(){

            setTimeout(function(){
                                 $(".arrow_box123").fadeOut(2000);
                                 $(".arrow_box1234").fadeOut(2000);
                                 $(".fa").removeClass("bounce");
                                 $(".fa").removeClass("bounceX");
                                 $(".fa").removeClass("bounceX1");
                                }, 10000);


    });

 
  $( function() {
    $('#accordion').accordion({
    active: false,
    collapsible: true            
});
  } );
  

    $(document).ready(function(){
        $(".sidebars").removeClass("hide-container");
        $(".sidebars").addClass("show-container");
    });

  /*  $(window).resize(function () {
    var height11 = $(window).height();
    var width11 = $(window).width();
    console.log('width is : ' + width11);
    console.log('height is : ' + height11);    
   
    if (height11 < width11) {
      //alert("YOKO")
       $(".sidebar.left").trigger("sidebar:open");
       $(".sidebar.right").trigger("sidebar:open");
    }
     else
    {
        $(".sidebar.left").trigger("sidebar:close");
       $(".sidebar.right").trigger("sidebar:close");
    }
});*/


    $(document).ready(function(){
         if (window.matchMedia("(max-width: 767px)").matches) {  
   function readDeviceOrientation() {
                     
    if (Math.abs(window.orientation) === 90) {
        // Landscape
       //alert("landscape")
       // $("#landscaperestrict").css("display","block")
       $(".landscaperestrict").css("background","black");
        $(".landscaperestrict").removeClass("none33");
        $(".intro").css("display","none");
        $("section").css("display","none");
        $(".sidebar.right.background.sdbrwdth").css("display","none");
        $(".sidebars > .sidebar").css("display","none");
        $(".navbar-fixed-top").css("display","none");
       /* $(".sidebar.right.background.sdbrwdth").css("position","fixed");
        $(".sidebar.right.background.sdbrwdth").css("right","0");*/
       
    } else {
        // Portrait
        //alert("port")
         $(".landscaperestrict").addClass("none33");
         $(".intro").css("display","block");
        $("section").css("display","block");
        $(".sidebar.right.background.sdbrwdth").css("display","block");
        $(".sidebars > .sidebar").css("display","block");
        $(".navbar-fixed-top").css("display","block");
        $(".propifrmheader").css("height","100vh");
        $("#FORGE-main-container-FORGE-instance-0").css("width","100vw");
        $("#divMap").css("display","block");
        $(".intro .intro-body").css("height","100vh");
        $("#property.intro").css("display","table");
    }
}

window.onorientationchange = readDeviceOrientation;
}


 

});

    
