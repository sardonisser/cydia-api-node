'use strict';
/**
 * cydia-api-node
 * @version 0.1.0
 * @author 1Conan <me@1conan.com> (https://1conan.com)
 */
 
 const cydiaapi = require('./index.js');
 
 const freeTweakName = 'cydia';
 const freeTweakDisplay = 'Cydia installer';
 const paidTweakName = 'com.ziph0n.pickpocket';
 const paidTweakDisplay = 'PickPocket'
 
 let price, info;
 
 console.log("Starting tests...");
 
 
 price = cydiaapi.getPrice(freeTweakName).then(info => {
	console.log("\nTesting getPrice() for Free Package (cydia)");
	console.log(info)
 });
 
 price = cydiaapi.getPrice(paidTweakName).then(info => {
	console.log("\nTesting getPrice() for Paid Package (PickPocket)");
	console.log(info)
 });
 
 
 info = cydiaapi.getInfo(freeTweakName).then(info => {
	console.log("\nTesting getInfo() for Free Package using package name (cydia)");
	console.log(info)
 });
 
 
 info = cydiaapi.getInfo(freeTweakDisplay).then(info => {
	console.log("\nTesting getInfo() for Free Package using display name (Cydia Installer)");
	console.log(info)
 });
 
 
 info = cydiaapi.getInfo(paidTweakName).then(info => {
	console.log("\nTesting getInfo() for Paid Package using package name (com.ziph0n.pickpocket)");
	console.log(info)
 });
 
 
 info = cydiaapi.getInfo(paidTweakDisplay).then(info => {
	console.log("\nTesting getInfo() for Paid Package using display name (PickPocket)");
	console.log(info)
 });
 
  
 info = cydiaapi.getAllInfo(freeTweakName).then(info => {
	console.log("\nTesting getAllInfo() for Free Package using package name (cydia)");
	console.log(info)
 });
 

 info = cydiaapi.getAllInfo(freeTweakDisplay).then(info => {
	 console.log("\nTesting getAllInfo() for Free Package using display name (Cydia Installer)");
	console.log(info)
 });
 
 
 info = cydiaapi.getAllInfo(paidTweakName).then(info => {
	console.log("\nTesting getAllInfo() for Paid Package using package name (com.ziph0n.pickpocket)");
	console.log(info)
 });
 
 
 info = cydiaapi.getAllInfo(paidTweakDisplay).then(info => {
	console.log("\nTesting getAllInfo() for Paid Package using display name (PickPocket)");
	console.log(info)
 });
 
 