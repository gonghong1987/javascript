var regIE = /msie [\d.]+/gi ;
var regFirefox = /firefox\/[\d.]+/gi;
var regChrome = /chrome\/[\d.]+/gi;

var userAgent = navigator.userAgent;
if (userAgent.indexOf('Chrome') != -1) {
    alert(userAgent.match(regChrome));
} else if (userAgent.indexOf('Firefox') != -1) {
    alert(userAgent.match(regFirefox));
} else if (userAgent.indexOf('MSIE') != -1
    && navigator.userAgent.indexOf('MSIE') != -1
    && navigator.userAgent.indexOf('Opera') == -1) {
    alert(userAgent.match(regIE));
}