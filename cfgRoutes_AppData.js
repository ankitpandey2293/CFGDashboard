var http = require('http'),
    url  = require('url'),
    express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

// accessPath :  http://127.0.0.1:3000/blobs
//To be Updated
var paramTypeCompare = function(alertObject,referenceObject,paramType){
    switch (paramType) {
            case 'SCALAR':
                if (typeof(x[p]) != 'undefined') return false;
                break;
            case 'BOOLEAN':
                if(this[p]!==null && x[p]!==null && (this[p].constructor.toString() !== x[p].constructor.toString() || !this[p].equals(x[p]))) return false;
                break;
            case 'FILE_TYPE_COUNT':
                if (p != 'equals' && this[p].toString() != x[p].toString()) return false;
                break;
            default:
                if (this[p] !== x[p]) return false;
        }
	}

// Laod Application data Cache on initiation of App
	
applicationReferenceModel = "applicationReference" ;
var applicationReferenceObject
mongoose.model(applicationReferenceModel)
	.find({}, function (err, referenceAppModel) 
		{
			if(err) {
					console.log("Error : DB connection error while fetching Application Reference data :"+err);
				}
			else {
					applicationReferenceObject = referenceAppModel.; 
				}
	});




router.route('/getAppData')

//GET data for /getAppData

    .get(function(req, res, next) {
        var url_parts = url.parse(req.url, true),
            query = url_parts.query;

        collectionName  = "Alert_"+query.appName;
        metricValue = query.value;
	metric = query.metric;
	//console.log(JSON.parse(JSON.stringify(queryObject)));
	//console.log(req);
        
	mongoose.model(collectionName).find({ },{skip:0,limit:metricValue,sort:{sequenceId: -1}}, function (err, blobs) {
              if (err) {
                  return console.error(err);
              } else {
		  res.format({
                  //HTML response
		  
                  //JSON response
                  
		  json: function(){
						
	                    res.json(blobs);
        	            }
                });
              }     
        });
    });

