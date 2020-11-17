/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict';

function main() {
  //attach a click handler to the add item button
  //in the event handler, process the form data and insert it into the store array
  $('#js-shopping-list-form').on('submit', function (event) {
    event.preventDefault();
    let listEntry = $('#shopping-list-entry').val();
    console.log(listEntry);

    //render the store (moves store array to unordered list)
    $('.shopping-list').append($(`<li><span class="shopping-item">${listEntry}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button> <button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`));


  });

  //set up an event handler for the "check" buttons
  $('.shopping-list').on('click', '.shopping-item-toggle', function (event) {
    console.log('This button is working');
    $(this).parent().siblings('.shopping-item').toggleClass('shopping-item__checked');
  });

  //attach form submission to unordered list -- specify handling "check" buttons
  //in the event handler (for check button) -- determine which item was "checked"

  //set up an event handler for the "delete" buttons
  $('.shopping-list').on('click', '.shopping-item-delete', function (event) {
    console.log('This button is also working');
    $(this).closest('li').remove();
  });

}

$(main);