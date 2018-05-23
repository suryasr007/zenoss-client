# Node-Zenoss-Client

### Installation

```bash
git clone https://github.com/suryasr007/zenoss-client

# Then run
npm install
```

### Usage

* Import the client
```js
const ZenossClient = require('./zenClient_class');
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