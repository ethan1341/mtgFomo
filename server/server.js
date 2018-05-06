require('dot-env')
const express = require('express');
const app = express();
const request = require('request');
app.listen(4000, function () {

  	var options = {
    			method: 'GET',
    			url: 'http://api.tcgplayer.com/v1.9.0/catalog/products/78300',
    			headers: {
    				'Authorization': 'bearer ' + process.env.ACCESS_TOKEN
    			}
    		};

    		request(options, function (error, response, body) {
    		  if(error){

    		  }else{
    		    console.log(body,'this is response')
    		  }
    		});
});
