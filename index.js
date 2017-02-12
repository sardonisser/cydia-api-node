/**
 * cydia-api-node
 * @version 0.1.0
 * @author 1Conan <me@1conan.com> (https://1conan.com)
 */
 
const request = require("superagent");

const useragent = "cydia-api-node/0.1.0";

let self = module.exports = {};

/**
 * @desc Retrieves price for package
 * @param {string} pkgnme
 * @return {number}
 */
self.getPrice = function(pkgname) {
	return new Promise(function(resolve, reject){
    const req = request.get(`https://cydia.saurik.com/api/ibbignerd?query=${pkgname}`)
    .set("User-Agent", useragent);
    
    req.then((res) => {
        let price;
        if(res.text == "null") {
            price = 0;
        } else {
            price = Math.round(res.body.msrp * 100) / 100;
        }
        resolve(price);        
    });
	});
};
    
/**
 * @desc Retrieves info for package
 * @param {string} displayname - Package Display Name or Package Name
 * @return {object} - (display, name ,section, summary, version)
 */
self.getInfo = function(displayname) {
	return new Promise(function(resolve, reject){
		 const req = request.get(`https://cydia.saurik.com/api/macciti?query=${displayname}`)
		.set("User-Agent", useragent);

		req.then((res) => {
			if(res.text == "{\"results\":[]}") {
				resolve(false);
			}
			const result = res.body;
			const results = result.results;
			const resultsLength = results.length; 
			let foundTweak = false;
			for(let i = 0; i < resultsLength; i++){
				if(results[i].display !== null) {
					if(displayname.toLowerCase() === results[i].display.toLowerCase()) {
						foundTweak = true;
						resolve(results[i]);
					}  
					if(displayname.toLowerCase() === results[i].name.toLowerCase()) {
						foundTweak = true;
						resolve(results[i]);
					}
				}    
			}
			if(!foundTweak) {
				resolve(false);
			}
		});
	});
};

/**
 * @desc Get all info for Package
 * @param {string} displayname - Package Display Name or Package Name
 * @return {object} - (display, name ,section, summary, version, price)
 */
 self.getAllInfo = function(displayname) {
	return new Promise(function(resolve, reject){
		let info = self.getInfo(displayname).then((info) => {
			if(!info) {
				resolve(false);
			} else {
				const price = self.getPrice(info.name).then(price => {
					info.price = price;
					resolve(info);
				});
			}
		});
	 });
};