$(function(){

    // Single state object
    var state = {
        items: []
    }

    // State Modification functions
    var addItem = function(state, item){
        state.items.push(item);
    }

    var removeItem = function(state, item){
        state.items.splice(item);
    }

    // Render functions
    var renderList = function(state, element){
        var itemsHTML = state.items.map(function(item){
            var controls = '<div class="shopping-item-controls"> <button class="shopping-item-toggle"> <span class="button-label">check</span> </button> <button class="shopping-item-delete"> <span class="button-label">delete</span> </button> </div>'
            return '<li>' + '<span class="shopping-item">' + item + '</span>' + controls + '</li>';
        });
        element.html(itemsHTML);
    }

    // Event Listeners
    $('#js-shopping-list-form').submit(function(event){
        event.preventDefault();
        addItem(state, $('#shopping-list-entry').val());
        renderList(state, $('.shopping-list'))
    });

    $(document).on('click', '.shopping-item-toggle', function(event){
        // event.preventDefault();
        console.log('checked clicked');
        $(this).parent('.shopping-item-controls').parent('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });

    $(document).on('click', '.shopping-item-delete', function(event){
        console.log('delete clicked');
        removeItem(state, $(this).parent('.shopping-item-controls').parent('li').find('.shopping-item').text());
        $(this).parent('.shopping-item-controls').parent('li').remove();
        console.log(state);
    });

});