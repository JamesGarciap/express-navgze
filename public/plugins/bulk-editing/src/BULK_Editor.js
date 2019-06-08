
var ForgePlugins = ForgePlugins || {};

ForgePlugins.Editor = function()
{
    this._ui = null;

    this._history = null;

    this._selected = null;

    this.onSelected = new FORGE.EventDispatcher(this);

    this.onLoadComplete = new FORGE.EventDispatcher(this);
};

ForgePlugins.Editor.HOTSPOT_DEFAULT_CONFIG =
{
    name: "untitled hotspot",
    facingCenter: true,
    material:{  
                     "image":"/img/pano-prop-marker.png",
                     "opacity":1
               }
};

ForgePlugins.Editor.prototype =
{
    boot: function()
    {
        console.log("Load first ")
        this._history = new ForgePlugins.EditorHistory(this);
        this._history.add();

        this._ui = new ForgePlugins.EditorUI(this);
        // this._viewer.camera.lookAt(-75, 0, 0, 90, 100);
        // this._viewer._mainConfig.story.val.phiVal
        this.viewer.camera.lookAt( this._viewer._mainConfig.story.val.thetaVal, this._viewer._mainConfig.story.val.phiVal, 0, 90, 100);
    },

    add: function(config, history)
    {
        console.log("hotpot array ")
        console.log(this._ui.HotspotChange);
        if(typeof config === "undefined" || config === null)
        {
            config = this._generateHotspotConfig();
            config.name = this._ui.HotspotChange[0] 
           
            
        }
        console.log("config  generate"+JSON.stringify(config))
        var hotspot = this.viewer.hotspots.create(config);
        hotspot.onClick.add(this._onClickHandler, this);
        this.reset();
        this.selected = hotspot.uid;

        if(history !== false)
        {
            this._history.add("hotspot add");
        }
        console.log("Hotspot generateed")
        console.log(hotspot)
    },

    addAll: function(config, history)
    {
        console.log("add all")
        console.log(this.viewer)
        if(this.viewer._mainConfig.story.hotspotsNew.length !=0){
        //console.log("config  generate"+JSON.stringify(config))
        

        for(var i =0;i< viewer._mainConfig.story.hotspotsNew.length;i++ ){
            var config = this.viewer._mainConfig.story.hotspotsNew[i];
        console.log("Config")
        console.log(JSON.stringify(config))
        var hotspot = this.viewer.hotspots.create(config);

        hotspot.onClick.add(this._onClickHandler, this);
        this.reset();
        this.selected = hotspot.uid;
        console.log("this selected add all"+this.selected)
        if(history !== false)
        {
            this._history.add("hotspot add");
        }
    }
    }
    },

    delete: function(uid, history)
    {
        console.log("delete hotspot UID:"+uid)
        this.viewer.hotspots.remove(uid);
        this.reset();

        this.selected = null;

        if(history !== false)
        {
            this._history.add();
        }
    },

    save: function()
    {
        var dump = this.dump();
        var json = JSON.stringify(dump, null, 4);
        var blob = new Blob([json], {type: "application/json"});

        if(window.navigator.msSaveOrOpenBlob)
        {
            window.navigator.msSaveOrOpenBlob(blob, "hotspots.json");
        }
        else
        {
            var url  = URL.createObjectURL(blob);

            var a = document.createElement('a');
            a.download = "hotspots.json";
            a.href = url;

            if(typeof document.createEvent === "function")
            {
                var event = document.createEvent("MouseEvents");
                event.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                a.dispatchEvent(event);
            }
            else if (typeof a.click === "function")
            {
                a.click();
            }
        }
    },

    load: function(hotspots, history)
    {
        console.log("Load")
        this.viewer.hotspots.clear();
        this.clear();

        for(var i = 0, ii = hotspots.length; i < ii; i++)
        {
            var hotspot = this.viewer.hotspots.create(hotspots[i]);
            hotspot.onClick.add(this._onClickHandler, this);
        }

        this.populate();

        if(history === true)
        {
            this._history.add("hotspot load");
        }

        this.onLoadComplete.dispatch(null, true);
    },

    clear: function()
    {
        this.viewer.renderer.objects.clear();
    },

    populate: function()
    {
        this.viewer.renderer.objects.createRenderScenes();
        this.viewer.renderer.renderPipeline.addRenderScenes(viewer.renderer.objects.renderScenes);
    },

    reset: function()
    {
        this.clear();
        this.populate();
    },

    lookAt: function(uid)
    {

        var hs = FORGE.UID.get(uid);
     console.log("Look At "+hs)
        if(FORGE.Utils.isTypeOf(hs, "Hotspot3D"))
        {
            var pos = hs.transform.position;
            var spherical = FORGE.Math.cartesianToSpherical(pos.x, pos.y, pos.z, FORGE.Math.DEGREES);
            this.viewer.camera.lookAt(spherical.theta, spherical.phi, 0, this.viewer.camera.fov, 100);
        }
    },

    update: function()
    {

    },

    dump: function()
    {
        var dump = this.viewer.hotspots.dump();
        return dump;
    },

    destroy: function()
    {
        this._ui.destroy;
        this._ui = null;
    },

    _generateHotspotConfig: function()
    {
        var config = FORGE.Utils.extendSimpleObject({}, ForgePlugins.Editor.HOTSPOT_DEFAULT_CONFIG);
        config.transform = { position: { theta: viewer.camera.yaw, phi: viewer.camera.pitch } };

        return config;
    },

    _onClickHandler: function(event)
    {
        this.selected = event.emitter.uid;
    }
};

Object.defineProperty(ForgePlugins.Editor.prototype, "history",
{
    get: function()
    {
        return this._history;
    }
});

Object.defineProperty(ForgePlugins.Editor.prototype, "selected",
{
    get: function()
    {
        return this._selected;
    },

    set: function(value)
    {
        if(value === null)
        {
            this._selected = null;
            this.onSelected.dispatch();
            return;
        }

        var hs = FORGE.UID.get(value);

        if(FORGE.Utils.isTypeOf(hs, "Hotspot3D"))
        {
            this._selected = value;
            this.lookAt(this._selected);
            this.onSelected.dispatch();
        }
    }
});