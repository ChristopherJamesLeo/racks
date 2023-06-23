
// Start Jquery Area
$(window).on("load",function(){
    $("#preloader").delay(300).fadeOut(200);
})
$(document).ready(function(){
    console.log("hello jquery");
    // start nav bar section
    $(window).scroll(function(){
        let getscrollval = $(this).scrollTop();
        if(getscrollval > 500){
            $(".navbar").addClass("active");
        }else{
            $(".navbar").removeClass("active");
        }
    })
    // end nav bar section
    // start banner carousel
    $("#banner_carousel").owlCarousel({
        items : 1,
        loop : true,
    });

    // end banner carousel

    // start customer say section
    $("#customer_say_carousel").owlCarousel({
        items : 3,
        loop : true,
        nav : true,
        navText : ["<span class='left'><i class='fas fa-angle-left'></i></span>","<span class='right'><i class='fas fa-angle-right'></i></span>"],
        responsive : {
            0 : {
                items : 1
            },
            465 : {
                items : 1
            },
            768 : {
                items : 2
            },
            992 :{
                items : 3
            }
        },

    })

    // end customer say section

    
})

// End Jquery Area

// start banner text effect

let gettitles = ["Capture.","Design.","Explore.","Develop.","Graphic."];

let getbantitle = document.getElementById("banner_dic_title");


function* gen(){
    var ind = 0;

    while(true){
        yield ind;
        if(ind === gettitles.length-1){
            
            ind = 0;
        }else{
            ind++;
        }
    }
}

let getgen = gen();

// console.log(getgen.next().value);
// console.log(getgen.next().value);


// console.log(gettitles[getgen.next().value]);


function showtitle(word){
    getbantitle.textContent = " ";
    let int = 0 ;
    let showintval = setInterval(function(){

        if(int >= word.length){
            clearInterval(showintval);
            deletetitle();
        }else{
            getbantitle.textContent += word[int];
            int++;
        }
    },500)
}

showtitle(gettitles[getgen.next().value]);


function deletetitle(){
    let getword = getbantitle.textContent;
    // console.log(getword);
    let getlength = getword.length-1;
    setTimeout(function(){
        let delintval = setInterval(function(){
            if(getlength >= 0){
                getbantitle.textContent = getword.substring(0,getlength);
                getlength--;
            }else{
                showtitle(gettitles[getgen.next().value]);
                clearInterval(delintval);
            }
        },100)
    },3000)

}

// end banner text effect

// start achievement section

const counterUp = window.counterUp.default

const callback = entries => {
	entries.forEach( entry => {
		const el = entry.target
		if ( entry.isIntersecting && ! el.classList.contains( 'is-visible' ) ) {
			counterUp( el, {
				duration: 5000,
				delay: 16,
			} )
			el.classList.add( 'is-visible' )
		}
	} )
}

const IO = new IntersectionObserver( callback, { threshold: 1 } )

const  satisfied = document.querySelector( '#satisfied' )
const  amazing = document.querySelector( '#amazing' )
const  response = document.querySelector( '#response' )
IO.observe( satisfied );
IO.observe( amazing );
IO.observe( response );

// end achievement section

// start wow js 
new WOW().init();
// end wow js
