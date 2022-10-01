$(document).ready(function(){
    $('.hero-section').parallax({imageSrc: 'https://images.unsplash.com/photo-1655635949348-953b0e3c140a'});
    
    $("#menu").click(function() { $(".nav-section ul").toggleClass("open"); });
    $( window ).resize(function() {
        let width = $(document).width();
        if (width > 600) {
            $(".nav-section ul").removeClass("open");
        }
    });

    /* Product Tags ---------------------------------------------------------------------------------- */
    
    updateH3Tags();
    function updateH3Tags(){
        let tags = [];
        let renderedtags = "";
        let H3ID = [];
        $(".products-items a h3").each(function(){
            let H3TEXT = $(this).text();
            H3ID.push( H3TEXT.replace(/ /g,'') );
            $(this).parent().parent().attr("id", H3TEXT.replace(/ /g,'')); //Add ID to H2s
            tags.push($(this).text());
        })
        for(i=0; i<tags.length; i++){ renderedtags +="<li><a href='#"+H3ID[i]+"'>"+tags[i]+"</a></li>"; }
        
        $("#products-toggle-list").append(renderedtags);
    }

    $( window ).scroll(function() {
        $(".product-item").each(function( i ){
            let currentProduct = ".product-item:nth-child(" + (i+1) + ")";
            linkListProducts($(currentProduct), i);
        })
    });

    function linkListProducts(element, listIndex){
        let currentListItemString = "#products-toggle-list li:nth-child(" + (listIndex + 1) + ")";

        let bounding = element.get(0).getBoundingClientRect();
        if (bounding.top >= 0 && bounding.left >= 0 && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
            //Element is in the viewport
            $(currentListItemString).addClass("bolded");
        } else {
            //Element is NOT in the viewport
            $(currentListItemString).removeClass("bolded");
        }
    }
})

