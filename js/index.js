
// Start Jquery Area

$(document).ready(function(){
    console.log("hello jquery");
    $("#banner_carousel").owlCarousel({
        items : 1,
        loop : true,
    });

    $(window).scroll(function(){
        let getscrollcount = $(this).scrollTop();
        // console.log(getscrollcount);
        if(getscrollcount > 400){
            $(".navbar").addClass("active");
        }else{
            $(".navbar").removeClass("active");
        }
    })
})

// End Jquery Area

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


