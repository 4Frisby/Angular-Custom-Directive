    myApp.directive('elementDirective',function(){
      return {
        restrict:'E',
        controller:'myCTRL',
        link:function(scope,element,attrs) {
          element.bind('mouseenter',function(){
           element[0].innerHTML="<button>Inside the element</button>"; 
          });
          element.bind('mouseleave',function(){
           element[0].innerHTML="<button>Outside the element</button>"; 
          });
        }      }
    })

    myApp.directive('attributeDirective',function(){
      return {
        restrict:'A',
        controller:'myCTRL',
        link:function(scope,element,attrs) {
          element.bind('mouseenter',function(){
           element[0].innerHTML="<button>Inside the attribute element</button>"; 
          });
          element.bind('mouseleave',function(){
            element[0].innerHTML="<button>Outside the attribute element</button>"; 
          });
        }
      }
    })

    myApp.directive('classDirective',function(){
      return {
        restrict:'C',
        controller:'myCTRL',
        link:function(scope,element,attrs) {
          element.bind('mouseenter',function(){
            element[0].innerHTML="<button>Inside the class element</button>"; 
          });
          element.bind('mouseleave',function(){
            element[0].innerHTML="<button>Outside the class element</button>"; 
          });
        }
      }
    })

    .directive('commentDirective',function(){
      return {
        restrict:'M',
        controller:'myCTRL',
        link:function(scope,element,attrs) {
           alert("This is a comment");
        }
      }
    });