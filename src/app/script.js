var nums= [];
var objs = [];

var videos= [];
var iframes= [];

var afterImages= [];
var imageElements= [];

// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;
// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;



// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('/multimedia/ar2020/service-worker.js', {
//       scope: '/multimedia/ar2020/'
//     });
//   }


function hasClass(ele, cls) {
    return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function addClass(ele, cls) {
    if (!hasClass(ele, cls)) ele.className += " " + cls;
}

function removeClass(ele, cls) {
    if (hasClass(ele, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        ele.className = ele.className.replace(reg, ' ');
    }
}




//Add event from js the keep the markup clean

function loadscreen() {
    
    console.log("Loading....");

   
    

    nums = document.querySelectorAll('.onlynum');

    for (var i = 0, l = nums.length; i < l; i++) {
        
        objs.push(
            {
              elem: nums[i],
              inviewport: false,
              decimals: parseInt(nums[i].getAttribute("data-inc-decimal"))
               /*,
              speed: 50,
              decimal: 2,
              currency: '$'
              */
            }
          );
    }

    videos = document.querySelectorAll('.load-later');

    for (var i = 0, l = videos.length; i < l; i++) {
        
        iframes.push(
            {
              elem: videos[i],
              frameSrc: videos[i].getAttribute("data-frameSrc"),
              srcSwitched: false
               /*,
              speed: 50,
              decimal: 2,
              currency: '$'
              */
            }
          );
    }

    afterImages = document.querySelectorAll('.load-after');

    for (var i = 0, l = afterImages.length; i < l; i++) {
        
        imageElements.push(
            {
              elem: afterImages[i],
              imgSrc: afterImages[i].getAttribute("data-ARimgSrc"),
              srcSwitched: false
               /*,
              speed: 50,
              decimal: 2,
              currency: '$'
              */
            }
          );
    }


    if (document.querySelectorAll("section:target").length != 0) {
        
        document.getElementById("loading").style.display ='none';
        animateAll();

      }
       else {
        document.getElementById("loading").style.display ='block';     
        
      }

    
    window.addEventListener('scroll', function (event) {
        for (var i = 0, l = nums.length; i < l; i++) {     
        if (isInViewPort(nums[i])) {
           // objs[i].reset();
           if (!objs[i].inviewport) {
            objs[i].inviewport=true;
            
            //start animation


            // temporary disable:
            // temporary disable:
            // temporary disable:
            // temporary disable:
            // temporary disable:
            animateValue(objs[i].elem, objs[i].decimals);



           } 
          } else {
                if (objs[i].inviewport) {
                    objs[i].inviewport=false;
                    //cancel animation
                }
            }
        }

        for (var i = 0, l = videos.length; i < l; i++) {     
            if (isInViewPort(videos[i])) {
                if (!iframes[i].srcSwitched) {





                    if (window.location.hash.length > 0) {
                        
                        if (document.getElementById(window.location.hash.substr(1)).contains(iframes[i].elem)) {
                
                            iframes[i].srcSwitched = true;
                            replaceSrc(iframes[i].elem, iframes[i].frameSrc);
                            
                
                            }
                        }

                }

              }
            }

    }, false);

    //window.addEventListener("hashchange", doHashChange(), false);


    document.getElementById("open-menu").addEventListener("click", toggleMenu);
    document.getElementById("body-overlay").addEventListener("click", toggleMenu);
    document.getElementById("real-menu").addEventListener("click", toggleMenu);

    document.getElementById("social-share").addEventListener("click", share);
    document.getElementById("social-overlay").addEventListener("click", share);

}

function doHashChange() {
console.log('Hash change detected');
    //trigger all animations
    animateAll();
}

//init

function init() {

    console.log("Init");

    if (document.querySelectorAll("section:target").length == 0) {
        
        setTimeout(function(){  window.location = "#home"; }, 300);

        document.getElementById("loading").style.opacity ='0';
        
        //trigger all animations
        animateAll();

        //load all after images like financials and appendixes now
        
      }

      setTimeout(showDialogue, 3000);
      loadAfterImages();
}



//toggle menu open class
function toggleMenu() {
    var ele = document.getElementsByTagName('body')[0];
    if (!hasClass(ele, "menu-open")) {
        addClass(ele, "menu-open");
    } else {
        removeClass(ele, "menu-open");
    }
}

//toggle menu open class
function share() {
    var ele = document.getElementsByTagName('body')[0];
    if (!hasClass(ele, "social-open")) {
        addClass(ele, "social-open");
    } else {
        removeClass(ele, "social-open");
    }
}

//timer to check document.readyState
(function() {
    var state = document.readyState;
    if(state === 'interactive' || state === 'complete') {
        // do stuff
        loadscreen();
    }
    else setTimeout(arguments.callee, 100);
})();

//Prevent the function to run before the document is loaded
document.addEventListener('readystatechange', function() {
    
    if (document.readyState === "complete") {
        
        init();
    }
  
});

function navigateTo() {
    event.preventDefault();
    document.getElementById("viewport").style.left=(-2*window.innerWidth) + 'px';
    document.getElementById("board").style.height='auto';
    return false;
}

function maxmin(element) {
    element.classList.toggle("minimized");
 }






 function hashDetector(){
     console.log("Hash handler created.");
    this.oldHash = window.location.hash;
    this.Check;

    var that = this;
    var detect = function(){
        if(that.oldHash!=window.location.hash){
            console.log("New hash:" + window.location.hash);
            that.oldHash = window.location.hash;
            
            animateAll();
        }
    };
    this.Check = setInterval(function(){ detect() }, 100);
}


var hashDetection = new hashDetector();








function isInViewPort(element) {
    // Get the bounding client rectangle position in the viewport
    var bounding = element.getBoundingClientRect();

    // Checking part. Here the code checks if it's *fully* visible
    // Edit this part if you just want a partial visibility
    //if (
    //    (
    //    bounding.top >= 0 &&
    //    bounding.left >= 0
    //    ) || (
    //    bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
    //    bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    //    )
    //) 

    if ((bounding.bottom >= 0 && bounding.bottom <= window.innerHeight) || ( bounding.top <= window.innerHeight && bounding.top >= 0 )) {   
        /*console.log('In the viewport! :)');*/
        return true;
    } else {
        /*console.log('Not in the viewport. :(');*/
        return false;
    }
}




function animateAll() {

    

    /*console.log("Animate all!");*/
    for (var i = 0, l = nums.length; i < l; i++) {     

        /*console.log("Animating: " + i);*/
            //animate all at start in case they are on screen




           // temporary disable:
            // temporary disable:
            // temporary disable:
            // temporary disable:
            // temporary disable:
            animateValue(objs[i].elem, objs[i].decimals);

        }
}


function replaceSrc(obj, loadSrc) {
    console.log("replaceSrc");
    if (obj) {

            obj.src = loadSrc;
            console.log("Changed src: " + loadSrc);

    }
}










var overlayShown = false;
var scrollPosition = 0;
var mainElement = document.getElementById('appendixes');
var targetElement = document.getElementById('appendix1');


function showOverlay(appendixElement) {
    if (!overlayShown) {
        mainElement = document.getElementById('appendixes');
        // console.log('Appendixes overlay: ' + mainElement);
        scrollPosition = window.pageYOffset;
        // console.log('Scroll position: ' + scrollPosition);
        mainElement.style.top = -scrollPosition + 'px';
        document.body.classList.add('show-overlay');
        targetElement = document.getElementById(appendixElement);
        // console.log('Appendixes item: ' + targetElement);
        targetElement.classList.add('showing');
        document.getElementById('appendix-overlay').scrollTop = 0;
        overlayShown = !overlayShown;
    }
}

function removeOverlay() {
    // console.log("removeOverlay called");
    if (overlayShown) {
        document.body.classList.remove('show-overlay');
        mainElement.style.top = 0;
        // console.log('Should scroll to: ' + scrollPosition);
        window.scrollTo(0, scrollPosition);
        // console.log('Actually scrolled: ' + window.pageYOffset);
        targetElement.classList.remove('showing');
        
        overlayShown = !overlayShown;
    }
}


function isIOS() {
    if (/iPad|iPhone|iPod/.test(navigator.platform)) {
      return true;
    } else {
      return navigator.maxTouchPoints &&
        navigator.maxTouchPoints > 2 &&
        /MacIntel/.test(navigator.platform);
    }
  }

  console.log("The user platform: " + navigator.platform);
  console.log("Touchpoints: " + navigator.maxTouchPoints);

  var iOS = isIOS();
  /*var iOS = /(iPad|iPhone|iPod)/g.test(navigator.userAgent);*/
  var isSafari = (/(Safari|safari)/g.test(navigator.userAgent) && !/(Chrome|CriOS)/g.test(navigator.userAgent));
  
  var winNavigator = window.navigator;
  // Detects if device is in standalone mode
  var isInStandaloneMode = ('standalone' in winNavigator) && (winNavigator.standalone);

  console.log("The user agent: " + navigator.userAgent);
console.log("Is it Safari? " + isSafari);
console.log("Is it iOS? " + iOS);
console.log("Is it Standalone? " + isInStandaloneMode);
 
  function showDialogue() {

    console.log("ShowDialogue");

    if (iOS && !isInStandaloneMode) {

        document.getElementById('ios-incapable').style.display="block";
        document.getElementById('ios-capable').style.display="none";

        if (isSafari) {
            
            document.getElementById('ios-incapable').style.display="none";
            document.getElementById('ios-capable').style.display="block";


            

        }

        var ele = document.getElementById('ios-prompt');
            if (!hasClass(ele, "prompt-open")) {
                addClass(ele, "prompt-open");
            }

            setTimeout(closePrompt, 15000);

    }

  }

  function closePrompt() {
    console.log("ClosePrompt");
    var ele = document.getElementById('ios-prompt');
    if (hasClass(ele, "prompt-open")) {
        removeClass(ele, "prompt-open");
    }
   
}




function animateValue(obj, decimals, start, end, duration) {
    decimals = (decimals === undefined ? 0 : decimals);
    start = (start === undefined ? 0 : start);
    end = (end === undefined ? null : end);
    duration = (duration === undefined ? 2000 : duration);
    if (obj) {
        if (window.location.hash.length > 0) {
            if (document.getElementById(window.location.hash.substr(1)).contains(obj)) {
                var textStarting = obj.innerHTML;
                end = end || parseFloat(textStarting);
                decimals = parseInt(decimals);
                if (decimals == 0) {
                    start = 1;
                } else if (decimals == 1) {
                    start = 0.1;
                } else if (decimals == 2) {
                    start = 0.01;
                } else {
                }
                var range = end - start;
                var minTimer = 50;
                var numericStep = (range / (duration / minTimer));
                if (numericStep <= start) {
                    numericStep = start;
                    if ((duration / (range / numericStep)) > minTimer) {
                        minTimer = (duration / (range / numericStep));
                    }
                }
                obj.innerHTML = start.toFixed(decimals);
                var timer;
                function run() {
                    var oldValue = parseFloat(obj.innerHTML);
                    if ((end - oldValue) > numericStep) {
                        var value = oldValue + numericStep;
                        obj.innerHTML = value.toFixed(decimals);
                        timer = setTimeout(run, minTimer);
                    } else {
                        var value = end;
                        clearTimeout(timer);
                        obj.innerHTML = value.toFixed(decimals);
                    }
                }
                run();
            }
        }
    }
}

function linkHandler(event) {
    event.stopPropagation();
}

function loadAfterImages() {
    console.log("Loading after images.......");
    for (var i = 0, l = afterImages.length; i < l; i++) {     
        if (!imageElements[i].srcSwitched) {

            imageElements[i].srcSwitched = true;
            replaceSrc(imageElements[i].elem, imageElements[i].imgSrc);
            }
          }
}