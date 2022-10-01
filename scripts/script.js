$(document).ready(function(){
    $('#home-page .hero-section').parallax({imageSrc: 'https://images.unsplash.com/photo-1655635949348-953b0e3c140a'});
    $('#publications-page .hero-section').parallax({imageSrc: 'https://images.unsplash.com/photo-1655993810480-c15dccf9b3a0'});
    $('#about-page .hero-section').parallax({imageSrc: 'https://images.unsplash.com/photo-1656331797721-b593b8f00297'});
    $('#contact-page .hero-section').parallax({imageSrc: 'https://images.unsplash.com/photo-1655474396177-e727349f44dc'});
    $('#error-page .hero-section').parallax({imageSrc: 'https://images.unsplash.com/photo-1530128051436-3ab3663a4683'});
    
    $("#menu").click(function() { $(".nav-section ul").toggleClass("open"); });
    $( window ).resize(function() {
        let width = $(document).width();
        if (width > 600) {
            $(".nav-section ul").removeClass("open");
        }
    });



    /* Product Tags ---------------------------------------------------------------------------------- */
    
    /* Products List */
    fixedListScrollUpdate($(".products-items a h3"), $("#products-toggle-list"));

    /* Publications List */
    fixedListScrollUpdate($(".bubblescroller-items div h4"), $("#bubblescroller-toggle-list"));

    /* Create Tags ----------------------------------------------------------------------------------- */
    function fixedListScrollUpdate(renderItemsString, renderListString){
        let tags = [];
        let renderedtags = "";
        let HEADINGID = [];
        renderItemsString.each(function(){
            let HEADINGTEXT = $(this).text();
            HEADINGID.push( HEADINGTEXT.replace(/ /g,'') );
            $(this).parent().parent().attr("id", HEADINGTEXT.replace(/ /g,'')); //Add ID to H2s
            tags.push($(this).text());
        })
        for(i=0; i<tags.length; i++){ renderedtags +="<li><a href='#"+HEADINGID[i]+"'>"+tags[i]+"</a></li>"; }
        renderListString.append(renderedtags);
    }

    $( window ).scroll(function() {
        $(".product-item").each(function( i ){
            let currentProduct = ".product-item:nth-child(" + (i+1) + ")";
            linkListProducts($(currentProduct), "products-toggle-list", i);
        })

        $(".bubblescroller-item").each(function( i ){
            let currentBubbleItem = ".bubblescroller-item:nth-child(" + (i+1) + ")";
            linkListProducts($(currentBubbleItem), "bubblescroller-toggle-list", i);
        })
    });

    function linkListProducts(element, listItemID, listIndex){
        let currentListItemString = "#" + listItemID + " li:nth-child(" + (listIndex + 1) + ")";

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

