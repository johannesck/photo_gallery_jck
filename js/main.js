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

    var $imgs = $('div.gallery img'); // start search & filter
    var $search = $('#searchbox');
    var cache = [];

    $imgs.each(function() {
        cache.push({
            element: this,
            text: this.alt.trim().toLowerCase()
        });
    });

    function filter() {
        var query = this.value.trim().toLowerCase();
        cache.forEach(function(img) {
            var index = 0;

            if (query) {
                index = img.text.indexOf(query);
            }

            img.element.style.display = index === -1 ? 'none' : '';
        });
    }

    if ('oninput' in $search[0]) {
        $search.on('input', filter);
    } else {
        $search.on('keyup', filter);
    } // end search & filter
}); // end ready