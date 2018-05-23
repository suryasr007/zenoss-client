# Node-Zenoss-Client
 Inspired from [python-zenoss-client](https://github.com/sayanarijit/python-zenoss-client)
### Installation

```bash
git clone https://github.com/suryasr007/zenoss-client

# Then run
npm install
```

### Usage

* Import the client
```js
const ZenossClient = require('./zenoss_client');
```

* Intialize the class
```js
b = new ZenossClient("host", "user", "pass");
```

* Assign router_endpoints, action, method.
```js
  b.router_endpoint = 'device_router'; //Default
  b.action = "DeviceRouter"; //Default
  b.method = "getDevices"; //Default
```
* run the 'run' function with required parameters
```js
  res = b.run({params: {name:'xxxx'}});
```
* The above method returns a promise
```js
res.then((successMessage)=>{
    obj = successMessage.body;
    console.log(obj);
}).catch((err)=>{
    console.log(err);    
})
```

### Documentation

For full documentation of zenoss API, kindly refer to the link below:


[json_api.sh](http://wiki.zenoss.org/Working_with_the_JSON_API#v5_version_of_the_json_api.sh) SHELL script published on [zenoss official wiki](http://wiki.zenoss.org)


### [zenoss official documentation](https://www.zenoss.com/services-support/documentation/zenoss-json-api-0)

* Conventional naming of routers
```
Products.Zuul.routers.device -> device_router
Products.Zuul.routers.users -> users_router
Products.Zuul.routers.triggers -> triggers_router
```