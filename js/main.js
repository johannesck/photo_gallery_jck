$(function () { // start ready

    $(".fancybox")
        .attr('rel', 'gallery')
        .fancybox({
            padding : 0,
            margin : 10,
            fitToView: true,
            beforeShow: function () {
                this.width = 1281 * .7;
                this.height = 800 * .7;
            },
            arrows: true,
            closeBtn: false,
            closeClick: true,
            nextEffect: 'fade',
            prevEffect: 'fade',
            mouseWheel: true,
            helpers: {
                title: {
                    type : 'outside'
                }
            } // end helpers
        }); // end fancybox
    
    $(".various").fancybox({
        // support for iframe media types; just add the class .various to an a element in the gallery
        // and adjust the settings below
        type: "iframe",
        maxWidth: 800,
        maxHeight: 600,
        fitToView: false,
        width: '70%',
        height: '70%',
        autoSize: false,
        closeClick: false,
        openEffect: 'none',
        closeEffect: 'none'
    });


    var $imgs = $('div.gallery img'); // start livesearch
    var $search = $('#searchbox');
    var cache = [];

    $imgs.each(function() {
        cache.push({
            element: this,
            text: this.alt.trim().toLowerCase()
        });
    });

    function filter() {
        var searchInput = this.value.trim().toLowerCase();
        cache.forEach(function(img) {
            var index = 0;

            if (searchInput) {
                index = img.text.indexOf(searchInput);
            }

            var displayValue;
            if (index === -1) {
                displayValue = 'none';
            } else {
                displayValue = '';
            }
            img.element.style.display = displayValue;
            
        });
    } // end filter functio

    if ('oninput' in $search[0]) {
        $search.on('input', filter);
    } else {
        $search.on('keyup', filter);
    } // end livesearch
}); // end ready
