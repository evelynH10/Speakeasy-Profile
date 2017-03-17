sabio.services = sabio.services || {};


sabio.services.getProfileId = function (id, onSuccess, onError) {
    
    var url = "https://pacoima-ypi.azurewebsites.net/api/profiles/" + Id;
    var settings = {
        cache: false,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        dataType: "json",
        success: onSuccess,
        error: onError,
        type: "GET",
        xhrFields: {
            withCredentials: true
        }
    };

    $.ajax(url, settings);

}

sabio.services.update = function (id, data, onSuccess, onError) {

    var url = "https://pacoima-ypi.azurewebsites.net/api/profiles/" + id;
    var settings = {
        cache: false,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        data: data,
        dataType: "json",
        success: onSuccess,
        error: onError,
        type: "PUT",
        xhrFields: {
            withCredentials: true
        }
    };

    $.ajax(url, settings);

}
sabio.services.postQuiz = function (data, onSuccess, onError) {

    var url = "https://pacoima-ypi.azurewebsites.net/api/questions/";
    var settings = {
        cache: false,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        data: data,
        dataType: "json",
        success: onSuccess,
        error: onError,

        type: "POST",
         xhrFields: {
            withCredentials: true
         }
    };

    $.ajax(url, settings);

}