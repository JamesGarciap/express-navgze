// Create the namespace if it doesn't already exist
var ForgePlugins = ForgePlugins || {};

// Constructor
ForgePlugins.VRViewer = function () {
    this._displayObject = null;
};

ForgePlugins.VRViewer.prototype =
    {
        /**
         * Boot function
         */
        boot: function () {




            /*   $.getJSON("/services/SearchProperty", { "LocationId": "", "LocationType": 4 }, function (data) {
                   console.log("data", data); // John
   
               }, "json");
   
               var conf1 = {
                   "uid": "hotspot-dom-five",
                   "interactive": true,
                   "type": "dom",
   
                   "dom":
                   {
                       "id": "hotspot-five",
                       "width": "5em",
                       "height": "5em",
                       "color": "black",
                       "index": 5,
                       "class": ["content-style__above", "media-style__see-through", "hover-trig"]
                   },
   
                   "transform":
                   {
                       "position": {
                           "theta": -90,
                           "phi": 0
                       }
                   }
               };
               var hotspot = this.viewer.hotspots.create(conf1);
               alert();
   
   */
            // Create a display object with the factory
            /*   this._displayObject = this.plugin.create.displayObject();
   
               // Assign options to the displayObject
               this._displayObject.background = this.plugin.options.background;
               this._displayObject.width = 100;
               this._displayObject.height = 500;
   
               // Add the displayObject to the plugin container
               this.plugin.container.addChild(this._displayObject);*/

            if (this.viewer.customerAction == null) {
                var customAction = { one: 1 };
                this.viewer.customerAction = customAction;
            }
            var viewerLocal = this.viewer;

            if (this.viewer.customerAction != undefined && this.viewer.customerAction.getHotspotInfo != undefined && this.viewer.customerAction.getHotspotInfo() == 1) {
                var config = FORGE.Utils.extendSimpleObject({}, { name: "untitled hotspot", facingCenter: true });
                config.uid = "598c343cbb69660da9a591f4";
                config.transform =
                    {

                        "position":
                        {
                            "theta": -25,
                            "radius": 1000,
                            "phi": -1.5
                        }
                    };//{ position: { theta: viewer.camera.yaw, phi: viewer.camera.pitch } };
                config.geometry =
                    {
                        "type": "plane",
                        "options":
                        {
                            "width": 50,
                            "height": 50
                        }
                    };

                config.material =
                    {
                        "image": "/img/pano-prop-marker.png",
                        "opacity": 1
                    };
                config.events =
                    {
                        "onClick": ["action-story-onSceneLoadProgress"]
                    };

                var hotspot = this.viewer.hotspots.create(config);
                //   hotspot.onClick.add(this._onClickHandler, this);
                //  alert(1);
            }
            this.viewer.customerAction.updateHotSpots = function (property) {

            }

            /* 

            var config = {
                "uid": "hotspot-dom-five",
                "interactive": true,
                "type": "dom",

                "dom":
                {
                    "id": "hotspot-five",
                    "width": "5em",
                    "height": "5em",
                    "color": "black",
                    "index": 5,
                    "class": ["content-style__above", "media-style__see-through", "hover-trig"]
                },

                "transform":
                {
                    "position": {
                        "theta": -90,
                        "phi": 0
                    }
                }
            };
*/
        /*    config = {
                name: "untitled hotspot1aaq",
                facingCenter: true,
                "interactive": true,
                "type": "dom",
                "dom":
                {
                    "id": "hotspot-five",
                    "width": "5em",
                    "height": "5em",
                    "color": "black",
                    "index": 5,
                    "class": ["content-style__above", "media-style__see-through", "hover-trig"]
                }
            };

            config.transform = { position: { theta: this.viewer.camera.yaw, phi: this.viewer.camera.pitch } };
            var hotspot = this.viewer.hotspots.create(config);
           // hotspot.onClick.add(this._onClickHandler, this);
            this.viewer.renderer.objects.clear();
            this.viewer.renderer.objects.createRenderScenes();
            this.viewer.renderer.renderPipeline.addRenderScenes(this.viewer.renderer.objects.renderScenes);*/
        },

        /**
         * Destroy function
         */
        destroy: function () {
            this._displayObject = null;
        },
        reset: function () {

            if (this.viewer.story.sceneUid == "scene-1") {

                var config = FORGE.Utils.extendSimpleObject({}, { name: "untitled hotspot", facingCenter: true });
                config.uid = "598c343cbb69660da9a591f3";
                config.transform =
                    {

                        "position":
                        {
                            "theta": -25,
                            "radius": 1000,
                            "phi": -1.5
                        }
                    };//{ position: { theta: viewer.camera.yaw, phi: viewer.camera.pitch } };
                config.geometry =
                    {
                        "type": "plane",
                        "options":
                        {
                            "width": 50,
                            "height": 50
                        }
                    };

                config.material =
                    {
                        "image": "/img/pano-prop-marker.png",
                        "opacity": 1
                    };
                config.events =
                    {
                        "onClick": ["action-story-onSceneLoadProgress"]
                    };
                /*  config = {
                      "uid": "hotspot-3d-sphere1",
                      "interactive": false,
  
                      "geometry":
                      {
                          "type": "sphere",
                          "options":
                          {
                              "radius": 50
                          }
                      },
  
                      "material":
                      {
                          "color": "#ff3f7f",
                          "opacity": 0.4
                      },
                      "transform":
                      {
                          "position":
                          {
                              "theta": 82,
                              "phi": -2,
                              "radius": 1000
                          }
                      }
                  };*/
                var hotspot = this.viewer.hotspots.create(config);
                hotspot.onClick.add(this._onClickHandler, this);


                config.uid = "598c343cbb69660da9a591f6";
                config.transform =
                    {

                        "position":
                        {
                            "theta": 10,
                            "radius": 1000,
                            "phi": -5
                        }
                    };//{ position: { theta: viewer.camera.yaw, phi: viewer.camera.pitch } };
                config.geometry =
                    {
                        "type": "plane",
                        "options":
                        {
                            "width": 50,
                            "height": 50
                        }
                    };

                config.material =
                    {
                        "image": "/img/pano-prop-marker.png",
                        "opacity": 1
                    };
                config.events =
                    {
                        "onClick": ["action-story-onSceneLoadProgress"]
                    };
                /*  config = {
                      "uid": "hotspot-3d-sphere1",
                      "interactive": false,
  
                      "geometry":
                      {
                          "type": "sphere",
                          "options":
                          {
                              "radius": 50
                          }
                      },
  
                      "material":
                      {
                          "color": "#ff3f7f",
                          "opacity": 0.4
                      },
                      "transform":
                      {
                          "position":
                          {
                              "theta": 82,
                              "phi": -2,
                              "radius": 1000
                          }
                      }
                  };*/
                config.vrcustom = {
                    address: "hahahah",
                    description: "asadadad"
                }
                var hotspot = this.viewer.hotspots.create(config);
                hotspot.onClick.add(this._onClickHandler, this);
                console.log("test", config);
            }


        },
        _onClickHandler: function (event) {
            console.log(event.emitter);
            // alert(event.emitter.uid);
            console.log(event.emitter.f.vrcustom);
            $('#idPropertyDetails').modal('show')
        }
    };