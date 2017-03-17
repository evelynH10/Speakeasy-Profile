sabio.services.speakeasy = sabio.services.speakeasy || {};

sabio.services.speakeasy.quizGet = function(id, onSuccess, onError) {
    var url = "http://pacoima-ypi.azurewebsites.net/api/quizzes/questions/" + id;
    var settings = {
        cache: false
        , contentType: "application/x-www-form-urlencoded; charset=UTF-8"      
        , dataType: "json"
        , success: onSuccess
        , error: onError
        , type: "GET"
    };
    $.ajax(url, settings)

}

sabio.services.speakeasy.quizGetSafe = function(id, onSuccess, onError) {
    var url = "http://pacoima-ypi.azurewebsites.net/api/quizzes/safe/" + id;
    var settings = {
        cache: false
        , contentType: "application/x-www-form-urlencoded; charset=UTF-8"      
        , dataType: "json"
        , success: onSuccess
        , error: onError
        , type: "GET"
    };
    $.ajax(url, settings)

}
sabio.services.speakeasy.quizPost = function(data, onSuccess, onError) {
    var url = "http://pacoima-ypi.azurewebsites.net/api/quizzes/results/";
    var settings = {
        cache: false
        , contentType: "application/x-www-form-urlencoded; charset=UTF-8"
        , dataType: "json"
        , data: data
        , success: onSuccess
        , error: onError
        , type: "POST"
        , xhrFields: {
                    withCredentials: true
                }
    };
    $.ajax(url, settings)
}

sabio.services.speakeasy.getPeople = function(id, onSuccess, onError) {
    var url = "http://pacoima-ypi.azurewebsites.net/api/people/" + id;
    var settings = {
        cache: false
        , contentType: "application/x-www-form-urlencoded; charset=UTF-8"
        , dataType: "json"
        , success: onSuccess
        , error: onError
        , type: "GET"
    };
    $.ajax(url, settings)
}

sabio.services.speakeasy.getResults = function(id, onSuccess, onError) {
    var url = "http://pacoima-ypi.azurewebsites.net/api/quizzes/results/" + id;
    var settings = {
        cache: false
        , contentType: "application/x-www-form-urlencoded; charset=UTF-8"
        , dataType: "json"
        , success: onSuccess
        , error: onError
        , type: "GET"
    };
    $.ajax(url, settings);
}

sabio.services.speakeasy.quizGet = function(id, onSuccess, onError) {
    var url = "http://pacoima-ypi.azurewebsites.net/api/quizzes/" + id;
    var settings = {
        cache: false
        , contentType: "application/x-www-form-urlencoded; charset=UTF-8"      
        , dataType: "json"
        , success: onSuccess
        , error: onError
        , type: "GET"
    };
    $.ajax(url, settings)

}