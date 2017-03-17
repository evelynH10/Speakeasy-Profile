(function () {
   'use strict';

    angular
        .module('speakeasy')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = ['$scope', '$http', 'profileFactory'];

    function ProfileController($scope, $http, profileFactory) {
        var vm = this;
       
         vm.ProfileData = ProfileData;
         vm.UpdateForm = UpdateForm;
         vm.Address = Address;
         vm.GetCall = GetCall;

         vm._initialize = _initialize;
          vm.geocoder = null;
        vm.map = null;
        vm.geocodeResponse = null;
        vm.address = {};
       
        var submitStatus= "Update Success!"
          vm.form= true;
        _initialize();
        GetCall();
     
        function GetCall(){
        
            profileFactory.getProfile().then(ProfileData);
        }
       
        function ProfileData(profile) {
            vm.profile = profile.data.item    
        }
	//To Update Name, email and connects to about
        function UpdateForm (){
            
            var form ={ 
                firstName:vm.profile.firstName,
                lastName: vm.profile.lastName,
             
               email: vm.profile.email,
                id: sabio.page.UserId
            }
           profileFactory.updateProfileName(form).then(UpdateAbout);
           
        } 
        
        function onsuccessupdate(){
          vm.ServerResponse = submitStatus;
            profileFactory.getProfile().then(ProfileData);
        }
     
     //To update about section   
        function UpdateAbout(){
              var formAbout={
                   id: sabio.page.UserId,
                aboutStatement: vm.profile.aboutStatement,
            }
            profileFactory.profileAboutMe(formAbout).then(onsuccessupdate);
        }
	//To Add address and update address
        function Address(){
            var addressFormData={
                 id: sabio.page.UserId,
                AddressLine1: vm.profile.addressLine1,
                address2: vm.profile.addressLine2,
                city: vm.profile.city,
                StateProvinceCode: vm.profile.stateProvinceCode,
                zip: vm.profile.zip
            }
             profileFactory.profileAddress(addressFormData).then(GetCall).then(AddressMap);
        }
       

        function toggleForm(){
         vm.form= true;
         
           vm.form = vm.form === false ? true: false;
        }



	// Google map code
           _initialize()
         function _initialize() {
            vm.geocoder = new google.maps.Geocoder();
            var latlng = new google.maps.LatLng(34.263773, -118.425187);
            var mapOptions = {
                zoom: 19,
                center: latlng
            }
            vm.map = new google.maps.Map($('#map2')[0], mapOptions);
      }
       

         function AddressMap() {

            var addressString = vm.profile.addressLine1 + " " + vm.profile.city + " " + vm.profile.stateProvinceCode + " " + vm.profile.zip;

            _codeAddress(addressString);
        }

        function _codeAddress(address) {
            console.log("address string -> ", address);

            vm.geocoder.geocode({ 'address': address }, _onCodeAddress);
        }

        function _onCodeAddress(results, status) {
           

            if (status == google.maps.GeocoderStatus.OK) {

                var geometry = results[0].geometry;
                var loc = geometry.location;

                console.log("got location data from API", loc);

                vm.map.setCenter(loc);

                var marker = new google.maps.Marker({
                    map: vm.map,
                    position: loc,
                    icon: {
                        url: "/content/images/paris.png",
                          scaledSize: new google.maps.Size(64, 64)
                    }
                });

                if (geometry.viewport)
                    vm.map.fitBounds(geometry.viewport);

                var lat = loc.lat();
                var lon = loc.lng();

                console.log("found coordinates in reply -> (%s, %s)", lat, lon);

                vm.profile.latitude = lat;
                vm.profile.longitude = lon;

               _saveAddress();

            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        }
         function _saveAddress() {
            if (vm.addressId && vm.addressId.length > 0) {
                console.log("UPDATE address data", vm.address);
            }
            else {
                console.log("CREATE address data", vm.address);
            }
        }
    

      
    };

})();