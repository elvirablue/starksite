$(document).on('ready', function(){

  var utm_str = getUrlVars();
  if (utm_str == undefined) utm_str = null;
  
  var storage_utm = localStorage.getItem('utm_str');

  if (storage_utm) {
    if (storage_utm == utm_str) return;
    if (!utm_str) {
      var url = window.location.href;
      var ch = '?'
      if (~url.indexOf("?")) ch = '&'
      url += ch + storage_utm; 
      window.history.pushState(null, null, url); 
    }  
  } else {  
      if (utm_str) localStorage.setItem("utm_str", utm_str);
  }
});

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
    vars[key] = decodeURIComponent(value);

    });

    var utm;

   
      if (vars.utm_source) utm ='utm_source=' + vars.utm_source;      
      if (vars.utm_medium) utm += '&utm_medium=' + vars.utm_medium;
      if (vars.utm_campaign) utm += '&utm_campaign=' + vars.utm_campaign;
      if (vars.utm_term) utm += '&utm_term=' + vars.utm_term;
      if (vars.utm_content) utm += '&utm_content=' + vars.utm_content;
     

    return utm;

  }

$(window).unload(function(){ 
  var utm_str = getUrlVars();
  if (utm_str == undefined) utm_str = null;
  
  if (utm_str) localStorage.setItem("utm_str", utm_str);
});