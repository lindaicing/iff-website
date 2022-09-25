$(document).ready(function(){
    $('.hero-section').parallax({imageSrc: 'https://images.unsplash.com/photo-1655635949348-953b0e3c140a'});

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

    
    $("#menu").click(function() { $(".nav-section ul").toggleClass("open"); });
    $( window ).resize(function() {
        let width = $(document).width();
        if (width > 600) {
            $(".nav-section ul").removeClass("open");
        }
    });

    // $( window ).scroll(function() {
    //     $(".product-item").each(function( i ){
    //         if ( $(this).is(":visible") ) {
    //             let currentProductListItem = "#products-toggle-list li:nth-child(" + (i+1) + ")";
    //             $(currentProductListItem).addClass("currentProductShown")
    //         } else {
    //             $("#products-toggle-list li").each(function (j){
    //                 $(this).removeClass("currentProductShown");
    //             });
    //         }
    //     })
    // });
})

