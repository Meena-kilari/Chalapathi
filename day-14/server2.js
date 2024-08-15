var url=require('url');
var adr='https://www.facebook.com?year=2024&month=August';

//parse the address
var q=url.parse(adr,true);
/*the parse method returns an object containing url properties*/
console.log(q.host);
console.log(q.pathname);
console.log(q.search);

var qdata=q.query;
console.log(qdata.month);