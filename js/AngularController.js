var myApp = angular.module("myModule",[]);
myApp.controller("myCTRL",main);
myApp.controller("dataFetchCTRL",fetch);



function main($scope){
	$scope.hello = "tarık";
	$scope.msg = "mesajım"; 
	$scope.indexinicerisi = "halaindexteyim";
	$scope.degisken= null;

}

function fetch($scope,$http){
	$scope.kisiler = [];
	$scope.showTable = false;

	$scope.fetchData = function(){
		 $http.get("http://localhost:3000/kisiler/"+$scope.idNumber)
 		 .then(function(response) {
      	$scope.kisiler.push(response.data); 
      	$scope.showTable = true;
  });
	}
}
