const Http = {
  ajax: function(o) {
      return new Promise(function(resolve, reject) {
          var resolved = false;
          if (o.cache) {
              var cache = localStorage.getItem(o.url);
              if (cache !== null) {
                  resolve(JSON.parse(cache));
                  resolved = true;
              }
          }
          if (!o.method) o.method = 'GET';
          if (typeof o.async === 'undefined') o.async = true;

          var req = new XMLHttpRequest();
          req.open(o.method, o.url, o.async);
          req.overrideMimeType('application/json');
          var data;
          if (o.data) {
              if (typeof o.data === 'string') {
                  req.setRequestHeader('Content-Type', 'application/json');
                  req.setRequestHeader('')
                  data = o.data;
              } else {
                  data = new FormData();
                  for (var k in o.data) {
                      data.append(k, o.data[k]);
                  }
              }
          } else {
              data = null;
          }
          req.onreadystatechange = function() {
              if (req.readyState === XMLHttpRequest.DONE && req.status === 200) {
                  if (req.status === 200) {
                      var resp;
                      if (req.responseType !== 'json') {
                          resp = JSON.parse(req.response);
                      } else {
                          resp = req.response;
                      }
                      if (!resolved) {
                          resolve(resp);
                      }
                      if (typeof o.callback === 'function') {
                          o.callback(resp);
                      }
                      if (o.cache) {
                          localStorage.setItem(o.url, req.responseText);
                      }
                  }
              }
          };
          req.send(data);
      });
  },
  get: function(url) {
      return Http.ajax({
          url: url
      });
  },
  post: function(url, data) {
      return Http.ajax({
          url: url,
          method: 'POST',
          data: data,
          contentType: "json",
          dataType: 'json'
      });
  }
}

const setQuery = (url,data) => {
  var string=url+"?";
  for(o in data){
    string+=o+"="+data[o]+"&";
  }
  string=string.slice(0,-1);
  return string;
}

const access = (url) => {
  var host = "http://ali-weather.showapi.com/area-to-weather";
  if (url.indexOf('/') !== 0) url = '/' + url;
  return host + url;
};

const formatDate=(now)=>{        
  const month=now.getMonth()+1;     
  const date=now.getDate();        
  return  month+"/"+date;     
}     
export default {
  Http,
  setQuery,
  access,
  formatDate
}
