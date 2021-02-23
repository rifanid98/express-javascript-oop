/**
 * References Doc Citcall https://docs.citcall.com/?javascript#api
 * References Doc this code https://flaviocopes.com/node-http-post/
 * @param {*} phone 
 * @param {*} otp 
 */

import http from 'http';
import dotenv from 'dotenv';
import axios from 'axios';
import { printError } from './response';
import { resolve } from 'path';
dotenv.config();

const smsotp = async (phone, otp) => {
  const apiKey = process.env.CITCALL_API_KEY;

  // data have to be a string, don't use json or object
  const data = JSON.stringify({
    "msisdn": phone,
    "senderid": process.env.CITCALL_API_USER,
    "text": `Kode OTP ${otp}. Tolong jangan beritahu kepada siapapun.`,
  });

  const options = {
    hostname: process.env.CITCALL_API_URI,
    port: process.env.CITCALL_API_PORT,
    path: '/gateway/v3/smsotp',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Apikey ${apiKey}`,
      'Content-Length': data.length
    },
  };

  // ############################################
  //                   BACKUP
  // ############################################
  // const req = http.request(options, (res) => {
  //   res.on('data', (d) => {
  //     process.stdout.write(d);
  //     return d;
  //   })
  // });

  // req.on('error', (e) => {
  //   console.error(`problem with request: ${e.message}`);
  // });

  // // Write data to request body
  // req.write(data);
  // req.end();

  // ############################################
  //                 USE XHR HTTP
  // ############################################
  return new Promise((resolve, reject) => {
    try {
      var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
      var xhr = new XMLHttpRequest();
      xhr.withCredentials = false;
  
      xhr.addEventListener("readystatechange",function(){
        if(this.readyState === this.DONE) {
          resolve(this.responseText);
        }
      });
  
      xhr.open("POST", `http://${process.env.CITCALL_API_URI}/gateway/v3/smsotp`);
      xhr.setRequestHeader("content-type", options.headers['Content-Type']);
      xhr.setRequestHeader("accept", options.headers['Accept']);
      xhr.setRequestHeader("Authorization", options.headers['Authorization']);
  
      xhr.send(data);
    } catch (error) {
      reject(error);
      console.log(error);
    }
  });
}

export {
  smsotp
}