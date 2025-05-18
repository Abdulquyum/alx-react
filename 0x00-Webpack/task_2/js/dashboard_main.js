import $ from "jquery";
import _ from "lodash";

$(document).ready(function() {
  $('body').append(`
    <p>ALX Dashboard</p>
    <p>Dashboard data for the students</p>
    <button>Click here to get started</button>
    <p id='count'></p>
    <p>Copyright - ALX</p>
  `);
});

function updateCounter() {
  let count = 0;
  const $count = $('#count');
  const $button = $('button');

  count += 1;
  $count.text(`${count} clicks on the button`);
  });
}

$button.on('click', _.debounce(updateCounter(), 300));
