function path(a) {
  var list = [];
  (function(o, r) {
    r = r || '';
    if (typeof o != 'object') {
      return true;
    }
    for (var c in o) {
      if (arguments.callee(o[c], r + "." + c)) {
        list.push(r.substring(1) + "." + c);
      }
    }
    return false;
  })(a);
  return list;
}
var a = {
  great:{
    grand:{
      parent:{
        child:1
      },
      parent2:1
    }
  }
};

var b = {
    "bean": {},
    "beans": [],
    "object": {
        "result": {
            "custManagerInfo": [
                {
                    "beId": "***",
                    "employeeName": "***",
                    "mobile": "***"
                },
                {
                    "beId": "***",
                    "employeeName": "***",
                    "mobile": "***"
                }
            ]
        }
    },
    "rtnCode": "0",
    "rtnMsg": "成功"
}
console.log(JSON.stringify(path(a)));

console.log(JSON.stringify(path(b)));
