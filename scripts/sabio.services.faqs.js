//AJAX calls
sabio.services.faqs = sabio.services.faqs || {};

sabio.services.faqs.getAllFaqs = function( onSuccess, onError){
var url= "https://http://pacoima-ypi.azurewebsites.net/api/faqs" 
var settings= {
cache:false
    ,contentType:"application/x-www-form-urlencoded; charset=UTF-8"
    ,data:null
    ,dataType: "json"
    ,success: onSuccess
    ,error: onError
    ,type: "GET"
     };

$.ajax(url, settings);
}



sabio.services.faqs.postFaq = function(id, onSucess, onError){
var url= sabio.services.faqs + "api/faqs/" + faqCategoryId;
var settings= {
cache:false
    ,contentType:"application/x-www-form-urlencoded; charset=UTF-8"
    ,dataType: "json"
    ,success: onSucccess
    ,error: onError
    ,type: "POST"
     };

$.ajax(url, settings);
}

sabio.services.faqs.getCourseDash= function(onSuccess, onError){
var url= "https://optiola.azurewebsites.net/api/certifications"
var settings= {
cache:false
    ,contentType:"application/x-www-form-urlencoded; charset=UTF-8"
    ,data:null
    ,dataType: "json"
    ,success: onSuccess
    ,error: onError
    ,type: "GET"
     };

$.ajax(url, settings);

}