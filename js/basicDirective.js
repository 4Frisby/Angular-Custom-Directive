myApp.directive("showDataDirective",showData);
myApp.directive("myDirective",directive1);
myApp.directive("myDirective2",directive2);
myApp.directive("myDirective3",directive3);
myApp.directive("myDirective4",directive4);



function showData(){   // get metoduyla başka sayfada yüklenmiş olan tabloyu çağırır.

	return {
		templateUrl:"showData.htm"
	};
}

function directive1(){  // direk template'e yazılı olan başka sayfaya gitmeye gerek yok 


return {
	template : "<p> hosgeldin </p><br><span>{{hello}}</span>"
};
};


function directive2(){ // başka sayfadakini kullandıldığı yere inject eder.

	return {
		templateUrl :"ayriDosya.html"
	};
};	

function directive3(){	

	return {
		templateUrl :"onceIndexeBakar.html"
	};
};	

function directive4(){  // directive'i nerede kullanacağıma transclude yapısıyla karar veririm.

	return {
		template: '<p> hello world </p>',
		transclude : true
	};
};	
