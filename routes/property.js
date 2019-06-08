const express = require('express'),
    httpStatus = require('http-status-codes');
const router = express.Router();
const property = require('../models/properties');
const houserule =  require('../models/houserule');
const canclepolicy =  require('../models/cancellationpolicy');
const async = require('async');
var NearBy = require('../models/propnearby');
var propertyprice = require('../models/propertyprice');
var panoProperty = require('../models/panoproperties');
const fs = require('fs');
var ObjectId = require('mongoose').Types.ObjectId;



router.get("/", (req, res) => {
    console.log("inside get");
    property.find({}).populate('PlaceId').then((docs) => {
        return res.status(httpStatus.OK).send(docs);
    }).catch((err) => {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
    });
}).get("/:id", function (req, res,next) {
    console.log('call on single id')
    var id = req.params.id;
    property.findById({_id:id}, function (err, data) {
        if (err)
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.stack);
        else
            res.render('Admin/edit-property', {data:data});
    });
}).get("/:id/:q", function (req, res) {
    console.log("get params");
    console.log("ID:"+req.params.id+"::secval::"+req.params.q);
    var id = req.params.id;
    if(req.params.q=='h'){
        console.log('house rule');
    houserule.findById({_id:id}, function (err, data) {
        if (err)
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.stack);
        else
            res.status(httpStatus.OK).send(data);
    });
}else if (req.params.q=='c'){
        console.log('cancle policy');
    canclepolicy.findById({_id:id}, function (err, data) {
        if (err)
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.stack);
        else
            res.status(httpStatus.OK).send(data);
    });
}
}).post("/", function (req, res) {
     console.log('call property body');
    var body = req.body;
    console.log(JSON.stringify(body))
    var VRFrontThumbnailArr = [];
    if(req.files['mytext'] !== undefined){
     req.files['mytext'].map(function(item) {
                            VRFrontThumbnailArr.push('/img/'+item.filename);
                            });
    }
     if(req.files['mytext'] == undefined && req.body.homeAwayImages != undefined){
    VRFrontThumbnailArr = req.body.homeAwayImages
    }

    console.log(JSON.stringify(body));
     var propObj = new property();
          if(req.body.Status !== undefined){propObj.Status = req.body.Status;}else{propObj.Status = '';}
          propObj.Type = req.body.propType;
          propObj.Address = req.body.Address;
          propObj.PlaceId = req.body.PlaceId;
          propObj.VRUrl = req.body.VRUrl;
          propObj.UnitUrl = req.body.unitUrl;
          propObj.SourceSite = req.body.SourceSite;
          propObj.PropertyDetailURL = req.body.propertyDetailURL;
          propObj.VideosUrl = req.body.videosUrl;
          propObj.Levels = {};
          propObj.Levels.level0= req.body.level0_tilesize;
          propObj.Levels.level1= req.body.level1_tilesize;
          propObj.Levels.level2= req.body.level2_tilesize;
          propObj.Levels.level3= req.body.level3_tilesize;
          propObj.VRNeighbourhoodThumbnail = {}
          propObj.VRNeighbourhoodThumbnail.NbhPano = req.body.nbhPanoSrc;
          propObj.VRNeighbourhoodThumbnail.position =  {};
          propObj.VRNeighbourhoodThumbnail.position.theta =  req.body.nbhTheta;
          propObj.VRNeighbourhoodThumbnail.position.phi = req.body.nbhPhi ;
          propObj.VRNeighbourhoodThumbnail.position.radius = req.body.nbhRadius;
          propObj.OwnerEmail = req.body.owneremail;
          propObj.OwnerPhone = req.body.ownerphone;
          if(req.files['VRNeighbourhoodThumbnail_small'] !== undefined ) {propObj.VRNeighbourhoodThumbnailSmall = '/img/'+req.files['VRNeighbourhoodThumbnail_small'][0].filename;}else{propObj.VRNeighbourhoodThumbnail_small = '';}
          if(req.files['Allimage_thumb'] !== undefined ) {propObj.AllImageThumbnail = '/img/'+req.files['Allimage_thumb'][0].filename;}else{propObj.AllImageThumbnail = '';}
          if(req.files['VRThumbnail'] !== undefined ) {propObj.VRThumbnail = '/img/'+req.files['VRThumbnail'][0].filename;}else{propObj.VRThumbnail = '';}
          if(req.files['VRInteriorThumbnail'] !== undefined){ propObj.VRInteriorThumbnail = '/img/'+req.files['VRInteriorThumbnail'][0].filename;}else{propObj.VRInteriorThumbnail = ''}
          if(req.files['VRMapThumbnail'] !== undefined) {propObj.VRMapThumbnail = '/img/'+req.files['VRMapThumbnail'][0].filename;}else{propObj.VRMapThumbnail = '';}
          propObj.VRFrontThumbnail = VRFrontThumbnailArr;
          propObj.UserName = req.body.UserName;
          propObj.PropertyName = req.body.PropertyName;
          propObj.OwnerContact = req.body.OwnerContact;
          propObj.Price = req.body.Price;
          propObj.priceId = req.body.unitmaster;
          propObj.Sleeps = req.body.Sleeps;
          propObj.Bedrooms = req.body.Bedrooms;
          propObj.Bathrooms = req.body.Bathrooms;
          propObj.CameraPosition = {};
          propObj.CameraPosition.yaw = body.yaw;
          propObj.CameraPosition.pitch = body.pitch;
          propObj.CameraPosition.roll = body.roll;
          propObj.CameraPosition.fov = body.fov;

          propObj.MapLocation = {
                              "type" : "Point", 
                              "coordinates" : [
                                req.body.lang, 
                                req.body.lat
                               ]
                              };
         // propObj.HalfBaths = req.body.HalfBaths;
          propObj.MinimumStay = req.body.MinimumStay;
          propObj.Area = req.body.Area;
          propObj.AreaUnit = req.body.areaUnit;
          propObj.cancelpolicies = req.body.cancelpolicies;
          propObj.houserules = req.body.houserules;
          propObj.VRNeighbourhoodPanoIcon = req.body.VRNeighbourhoodPanoIcon;
          propObj.Description = req.body.Description;
          propObj.amenities = req.body.amenities;
        propObj.save(function (err, prop) {
            if (err) {
                console.log(err)
                res.status(500).json({ "error_code": "500", "message": err });
            } else {
              /*panoProperty.update({PropertyId:ObjectId(prop._id)},{Status:req.body.Status} , function (err, data) {
            if (err){
                res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.stack);
            }}); */  
/*
              if(req.body.nearbyId !== undefined){
                for(var i=0;i<req.body.nearbyId.length;i++){
               var propnearby =  new NearBy();
               propnearby.distance =req.body.nearby[i];
               propnearby.nearById = req.body.nearbyId[i];
               propnearby.propertyId= prop._id;
               propnearby.unitId = "5a15285e9084e1e28d68586b";
               propnearby.save(function (err, prop) {
                if(err){
                    console.log(err);
                }
               });
           }
          
          }*/
           res.redirect('/admin/viewProperty');
            }
        });
}).post("/:id", function (req, res) {
        var id = req.params.id;
        var body = req.body;
       console.log(JSON.stringify(body));
        var VRFrontThumbnailArr = [];
    if(req.files['mytext'] !== undefined){
     req.files['mytext'].map(function(item) {
                            VRFrontThumbnailArr.push('/img/'+item.filename);
                            });
    }
    if(req.files['mytext'] == undefined && req.body.homeAwayImages != undefined){
    VRFrontThumbnailArr = req.body.homeAwayImages
    }
       var updateObj = {
          Type : req.body.propType,
          Address : req.body.Address,
          PlaceId : req.body.PlaceId,
          priceId : req.body.unitmaster,
          VRUrl : req.body.VRUrl,
          VideosUrl : req.body.videosUrl,
          UnitUrl : req.body.unitUrl,
          UserName : req.body.UserName,
          Sleeps :   req.body.Sleeps,
          SourceSite : req.body.SourceSite,
          PropertyDetailURL : req.body.propertyDetailURL,
          Bedrooms : req.body.Bedrooms,
          Bathrooms :req.body.Bathrooms,
          PropertyName : req.body.PropertyName,
          OwnerContact : req.body.OwnerContact,
          Levels : {
         level0:   body.level0_tilesize,
         level1: body.level1_tilesize,
         level2:  body.level2_tilesize,
         level3  : body.level3_tilesize
          },
          CameraPosition : {
         yaw:   req.body.yaw,
         pitch: req.body.pitch,
         roll:  req.body.roll,
         fov  : req.body.fov
         },
          
          VRNeighbourhoodThumbnail : {
            NbhPano : req.body.nbhPanoSrc,
            position: {
            theta: req.body.nbhTheta,
            phi: req.body.nbhPhi,
            radius: req.body.nbhRadius
           }
          },
          OwnerEmail : req.body.owneremail,
          OwnerPhone : req.body.ownerphone,
          Price : req.body.Price, 
          MapLocation : {
                              "type" : "Point", 
                              "coordinates" : [
                                 req.body.lang, 
                                req.body.lat
                               ]
                              },
         // HalfBaths : req.body.HalfBaths,
          MinimumStay : req.body.MinimumStay,
          Area : req.body.Area,
          AreaUnit : req.body.areaUnit,
          cancelpolicies : req.body.cancelpolicies,
          houserules : req.body.houserules,
          VRNeighbourhoodPanoIcon : req.body.VRNeighbourhoodPanoIcon,
          Description : req.body.Description,
          amenities : req.body.amenities,
          $pushAll: { VRFrontThumbnail: VRFrontThumbnailArr}
         // VRFrontThumbnail : VRFrontThumbnailArr
        };
          if(req.files['VRNeighbourhoodThumbnail_small'] !== undefined ) updateObj.VRNeighbourhoodThumbnailSmall = '/img/'+req.files['VRNeighbourhoodThumbnail_small'][0].filename;
          if(req.files['Allimage_thumb'] !== undefined ) updateObj.AllImageThumbnail = '/img/'+req.files['Allimage_thumb'][0].filename;
          if(req.files['VRThumbnail'] !== undefined ) updateObj.VRThumbnail = '/img/'+req.files['VRThumbnail'][0].filename
          if(req.files['VRInteriorThumbnail'] !== undefined) updateObj.VRInteriorThumbnail = '/img/'+req.files['VRInteriorThumbnail'][0].filename

           if(req.files['VRMapThumbnail'] !== undefined) updateObj.VRMapThumbnail = '/img/'+req.files['VRMapThumbnail'][0].filename
          
          if(req.body.Status !== undefined){updateObj.Status = req.body.Status;}

        property.findByIdAndUpdate({_id:id}, updateObj, function (err, data) {
            if (err){
                res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.stack);
            }
            else{
               panoProperty.update({PropertyId: ObjectId(id)},{Status:req.body.Status }, function (err, data) {
                console.log(err)
                console.log("Pano property Status updated")
               });
            /*   var i=0;
                async.each(req.body.nearbyId, function (obj, done) {
                console.log("property id"+id);
                console.log("near by value"+req.body.nearby[i]);
                console.log("prop near by "+req.body.propnearbyId[i]);
               NearBy.update({ _id: req.body.propnearbyId[i] }, {
                distance :req.body.nearby[i],
                nearById : req.body.nearbyId[i],
                unitId   :  '5a15285e9084e1e28d68586b',
                propertyId : id
                }, done);
                i++;
                }, function allDone (err) {
                    console.log("all the queries updated");
               });*/
                res.redirect('/admin/viewProperty');
            }
        });
    }).delete("/", function (req, res) {
        //var id = req.params.id;
        console.log("call delete "+JSON.stringify(req.body));
        console.log("Path :"+__dirname)
        property.update( 
        { _id : req.body.id },
        { $pull: { VRFrontThumbnail : req.body.src  } },
      function removeConnectionsCB(err, obj) {
          console.log("Deleted Object "+obj)
          var imgSrc = req.body.src
          var resource = imgSrc.split("/");
            if(resource[1] == 'img'){
          fs.unlink(__dirname+"/../public/"+req.body.src,function(err){
        if(err) return  res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.stack);
         res.status(httpStatus.OK).send(obj);
        });
        }else{
        res.status(httpStatus.OK).send(obj);
        }
      });
    }).delete("/:id", function (req, res) {
        var id = req.params.id;
        console.log("call delete "+id);
        property.findByIdAndRemove({_id:id}, function (err, data) {
            if (err){
                console.log(err);
                res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.stack);
            }
            else{
                res.status(httpStatus.OK).send(data);
            }
        });
    });

module.exports = router;