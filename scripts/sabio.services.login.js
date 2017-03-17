sabio.services.speakeasy = sabio.services.speakeasy || {};

sabio.services.speakeasy.insert = function (data, onSuccess, onError) {
    var url = "https://pacoima-ypi.azurewebsites.net/api/users/register";

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
    $.ajax(url, settings)
}



sabio.services.speakeasy.loginUser = function (data, onSuccess, onError) {
    var url = "https://pacoima-ypi.azurewebsites.net/api/users/login/force";

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
    $.ajax(url, settings)
}