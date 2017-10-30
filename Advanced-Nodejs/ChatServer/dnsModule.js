const dns = require('dns');

dns.lookup('pluralsight.com', (err, address) => {
    "use strict";
    //this method uses libuv thread since not network is required
    console.log('lookup: ', address);
});

dns.resolve('pluralsight.com', 'A', (err, address) => {
    "use strict";
    console.log('A record: ', address);
});

dns.reverse('35.162.130.220', (err, hostname) => {
    "use strict";
    console.log('hostName: ', hostname);
});
const dns = require('dns');

dns.lookup('pluralsight.com', (err, address) => {
    "use strict";
    //this method uses libuv thread since not network is required
    console.log('lookup: ', address);
});

dns.resolve('pluralsight.com', 'A', (err, address) => {
    "use strict";
    console.log('A record: ', address);
});

dns.reverse('35.162.130.220', (err, hostname) => {
    "use strict";
    console.log('hostName: ', hostname);
});