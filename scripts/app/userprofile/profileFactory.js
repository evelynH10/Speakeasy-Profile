(function () {
    'use strict';
    angular
        .module('speakeasy')
        .factory('profileFactory', profileFactory);

    profileFactory.$inject = ['$http'];

    function profileFactory($http) {
        var urlPrefix = 'https://pacoima-ypi.azurewebsites.net/api/profiles/'
        return {
            getProfile: getProfile,
            updateProfileName: updateProfileName,
            profileAboutMe: profileAboutMe,
            profileAddress: profileAddress,
              updatePassword: updatePassword

        }

        function getProfile() {

            return $http.get(urlPrefix + sabio.page.UserId)
        }

        function updateProfileName(values) {
            var config ={
                method: "PUT",
                url: urlPrefix + sabio.page.UserId,
                data: values,
                withCredentials: true
            }

            return $http(config);
        }

        function profileAboutMe(values) {
            var config= {
                 method: "PUT",
                url: urlPrefix + sabio.page.UserId + '/about',
                data: values,
                withCredentials: true
            }
            return $http(config);
        }

        function profileAddress(values) {
             var config= {
                 method: "PUT",
                url: urlPrefix + sabio.page.UserId + '/address',
                data: values,
                withCredentials: true
            }
            return $http(config);
        }
           function updatePassword(data){

               var config = {

                   method: 'PUT',
                    url: urlPrefix + 'api/users/reset',
                    data: data,
                    withCredentials: true

               }

               return $http(config);

           }

    }



})();