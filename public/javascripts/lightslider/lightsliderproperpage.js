 <script type="text/javascript">
          /************** LIGHT SLIDER **********************/
        $.getJSON("/services/GetDefaultLocation", { "LocationId": "", "LocationType": 4 }, function (data) {

           
                console.log("data", JSON.stringify(data.panoConfig)); // John
                $('#select2-selDestination-container').text(data.panoConfig.story.name);
             

            


                configGlobal = data.panoConfig;


              //  createHotSpotDOM();

               // alert(configGlobal);
                 


                var viewer = new FORGE.Viewer("divPano", data.panoConfig/*,{afterRender:function(){
                                   // alert(1);
                                    console.log("addConfig2", viewer.camera);
                                }}*/);
                viewer.debug = true;
                viewerGloal = viewer;

                //  hotspot.onClick.add(this._onClickHandler, this);

                if (viewer.customerAction == null) {
                    var customAction = { one: 1 };
                    viewer.customerAction = customAction;
                }
                //   var customAction = { one: 1 }
                //  viewer.customerAction = customAction;
                viewer.customerAction.openPropTour = function (property) {

                    viewerGloal.camera.lookAt(property.theta, property.phi, 0, 40, 1000);
                    //viewer.hotspots.remove("hotspot-5989967029bc7713698fd906");
                    // viewer.renderer.objects.clear();
                    // viewer.renderer.objects.createRenderScenes();
                    // viewer.renderer.renderPipeline.addRenderScenes(viewer.renderer.objects.renderScenes);
                    setTimeout(function () {
                        $(".hotspot").toggleClass("show-hide");
                        //    $(".hotspot").remove();

                        viewer.story.loadScene(property.scene);
                        console.log(viewer);
                        //  viewer.customerAction.updateHotSpots(12);
                    }, 1000);
                    ;
                };

                viewer.customerAction.openPropDetails = function (property) {

                    $('#idPropertyDetails').modal('show')
                };

                viewer.customerAction.onSceneLoadComplete = function (property) {


                };

                viewer.customerAction.onSceneLoadStart = function (property) {

                       //alert(property)
                };
                //  $('#divLoading').removeClass("loader");
                resfreshPropertyList(data.panoConfig);


            }, "json");



        function resfreshPropertyList(config) {
           

            var lightSlider = $('#lightSlider');
            lightSlider.empty();
            var propertyDoesNotExist = true;
            lightSlider.append('<li id="liInterior" class="list-group-item"><a id="aInterior" href="#" class="p-naighrhood-ainterior"><div class="qap-text">INTERIOR</div><img src="/img/property-thumbnail.jpg" alt="" /></a></li>');
            lightSlider.append('<li id="liNeighbourhood" class="list-group-item"><a id="aNeighbourhood" href="#" class="p-naighrhood-ainterior"><div class="qap-text">INTERIOR</div><img src="/img/scan-casa-interactive-media-thumbnail.jpg" alt="" /></a></li>');
            lightSlider.append('<li id="liMap" class="list-group-item"><a id="aMap" href="#" class="p-naighrhood-ainterior"><div class="qap-text">INTERIOR</div><img src="https://maps.googleapis.com/maps/api/staticmap?maptype=satellite&center=20.611556,-105.2342348&zoom=17&size=178x149&key=AIzaSyAee7X02J0gjxnc7Iq8oE-QtDXH1bOVONI" alt="" /></a></li>');
            lightSlider.append('<li id="liInterior" class="list-group-item"><a id="aInterior" href="#" class="p-naighrhood-ainterior"><div class="qap-text">INTERIOR</div><img src="/img/property-thumbnail.jpg" alt="" /></a></li>');
            lightSlider.append('<li id="liInterior" class="list-group-item"><a id="aInterior" href="#" class="p-naighrhood-ainterior"><div class="qap-text">INTERIOR</div><img src="/img/property-thumbnail.jpg" alt="" /></a></li>');
            lightSlider.append('<li id="liInterior" class="list-group-item"><a id="aInterior" href="#" class="p-naighrhood-ainterior"><div class="qap-text">INTERIOR</div><img src="/img/property-thumbnail.jpg" alt="" /></a></li>');
            lightSlider.append('<li id="liInterior" class="list-group-item"><a id="aInterior" href="#" class="p-naighrhood-ainterior"><div class="qap-text">INTERIOR</div><img src="/img/property-thumbnail.jpg" alt="" /></a></li>');
            lightSlider.append('<li id="liInterior" class="list-group-item"><a id="aInterior" href="#" class="p-naighrhood-ainterior"><div class="qap-text">INTERIOR</div><img src="/img/property-thumbnail.jpg" alt="" /></a></li>');
            /*lightSlider.append("<li class='list-group-item background'><a data-action='8' class='btn-prop' href='#'><div class='qap-text'>" + "SCAN VAS" + "</div><img src='/img/property-thumbnail.jpg' alt='' /></a></li>");*/
            propertyDoesNotExist = false;
            
            /*for (var i = 0; i < config.actions.length; i++) {
                var action = config.actions[i];
                if (action.type == 3) {
                    console.log(action.method.args[0]._id);
                    lightSlider.append("<li class='list-group-item background'><a data-action='" + action.method.args[0]._id + "' class='btn-prop' href='#'><div class='qap-text'>" + "SCAN VAS" + "</div><img src='" + action.method.args[0].VRThumbnail + "' alt='' /></a></li>");

                    propertyDoesNotExist = false;
                }
            }*/
            
            if (propertyDoesNotExist) {
                $('<div>', {
                    style: 'color:white',
                    id: hotspot.dom.id
                }).text("No Search Results").appendTo('#page-top');
            } else if (window.matchMedia("(max-width: 767px)").matches) {
    /* the viewport is at least 400 pixels wide */
       lightSlider.lightSlider({
                    item: 3,
                    autoWidth: false,
                    slideMove: 3, // slidemove will be 1 if loop is true
                    slideMargin: 0,

                    addClass: '',
                    mode: "slide",
                    useCSS: true,
                    cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
                    easing: 'linear', //'for jquery animation',////

                    speed: 400, //ms'
                    auto: false,
                    loop: false,
                    slideEndAnimation: true,
                    pause: 2000,

                    keyPress: false,
                    controls: true,
                    prevHtml: '',
                    nextHtml: '',

                    rtl: false,
                    adaptiveHeight: false,

                    vertical: true,
                    verticalHeight: 450,
                    vThumbWidth: 100,

                    thumbItem: 10,
                    pager: true,
                    gallery: false,
                    galleryMargin: 5,
                    thumbMargin: 5,
                    currentPagerPosition: 'middle',

                    enableTouch: true,
                    enableDrag: true,
                    freeMove: true,
                    swipeThreshold: 40,

                    responsive: [],

                    onBeforeStart: function (el) { },
                    onSliderLoad: function (el) { },
                    onBeforeSlide: function (el) { },
                    onAfterSlide: function (el) { },
                    onBeforeNextSlide: function (el) { },
                    onBeforePrevSlide: function (el) { }
                });
       /*$(".btn-prop").on("click", function () {
                    
                    console.log("cc", this)
                    var $this = $(this);
                    var action = $this.attr("data-action");
                    // alert(action);
                    //  $this.parent().removeClass("prop-selected");
                    //  $this.parent().addClass("prop-selected");
                    $('#idPropertyDetails').modal('show')
                     

                });*/
} else {
                lightSlider.lightSlider({
                    item: 5,
                    autoWidth: false,
                    slideMove: 3, // slidemove will be 1 if loop is true
                    slideMargin: 0,

                    addClass: '',
                    mode: "slide",
                    useCSS: true,
                    cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
                    easing: 'linear', //'for jquery animation',////

                    speed: 400, //ms'
                    auto: false,
                    loop: false,
                    slideEndAnimation: true,
                    pause: 2000,

                    keyPress: false,
                    controls: true,
                    prevHtml: '',
                    nextHtml: '',

                    rtl: false,
                    adaptiveHeight: false,

                    vertical: true,
                    verticalHeight: 600,
                    vThumbWidth: 100,

                    thumbItem: 10,
                    pager: true,
                    gallery: false,
                    galleryMargin: 5,
                    thumbMargin: 5,
                    currentPagerPosition: 'middle',

                    enableTouch: true,
                    enableDrag: true,
                    freeMove: true,
                    swipeThreshold: 40,

                    responsive: [],

                    onBeforeStart: function (el) { },
                    onSliderLoad: function (el) { },
                    onBeforeSlide: function (el) { },
                    onAfterSlide: function (el) { },
                    onBeforeNextSlide: function (el) { },
                    onBeforePrevSlide: function (el) { }
                });

               /* $(".btn-prop").on("click", function () {
                    
                    console.log("cc", this)
                    var $this = $(this);
                    var action = $this.attr("data-action");
                    // alert(action);
                    //  $this.parent().removeClass("prop-selected");
                    //  $this.parent().addClass("prop-selected");
                    $('#idPropertyDetails').modal('show')
                     

                });*/
            }
        }
    </script>