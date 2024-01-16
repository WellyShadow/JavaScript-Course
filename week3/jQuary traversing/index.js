$(document).ready(function(){
    var filteredItems = $('li').filter(function() {
        return $(this).text().includes('2')
    })

    filteredItems.addClass('highlight')
})