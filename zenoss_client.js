/*!
 * Zenoss Client
 * Author: Surya Teja Reddy V
 * MIT Licensed
 */


/**
 * Dependencies
 */

const request = require('request');

/**
 * Global constant
 */
const router_endpoints = [
    'application_router',
    'detailnav_router',
    'devicedumpload_router',
    'devicemanagement_router',
    'device_router',
    'evclasses_router',
    'evconsole_router',
    'host_router',
    'introspection_router',
    'jobs_router',
    'manufacturers_router',
    'messaging_router',
    'mib_router',
    'monitor_router',
    'network_6_router',
    'network_router',
    'process_router',
    'properties_router',
    'report_router',
    'search_router',
    'service_router',
    'settings_router',
    'template_router',
    'triggers_router',
    'users_router',
    'zenpack_router'
];

/**
 * Holds zenoss API call settings and runs the 'run' function to call API
 * @class
 */
class ZenossClient{
    
    /**
     * Holds default variables and parameters
     * @constructor 
     */

    constructor(host, user, pass){
        this.dmd = '/zport/dmd';
        this.headers= {'Content-Type': 'application/json', 'Accept': 'application/json'}
        this.tid=0;
    
        this.baseurl = 'https://' + host + this.dmd;
        this.username = user;
        this.pass = pass;
        this.router_endpoint = 'device_router';
        this.action= "DeviceRouter";
        this.method = "getDevices";
    }

    /**
     * 
     * Calls the api with given parameters
     * @returns
     *  A promise with rejection message if fail or success data if success
     *  
    */

    run(data) {
        return new Promise((resolve, reject) =>{
            if(!router_endpoints.includes(this.router_endpoint)){
                // console.log('end point not found');
                reject({message: "fail", error: this.router_endpoint + " end point not found."});
            }
            request.post({
            url: this.baseurl + '/' + this.router_endpoint,
            headers:this.headers,
            json:true,
            auth: {
                'user': this.username,
                'pass': this.pass
            },
            body:{
                "action": this.action,
                "method": this.method,
                "data" : [data],
                "tid":this.tid
            }
            },(err, httpRes, body)=>{
                if(err){
                    reject({message: "fail", error:err, httpResponse:httpRes});
                }
                this.tid += 1;
                resolve({message: "ok", httpResponse:httpRes, body:body});
            });
        });
    }
}

module.exports = ZenossClient;