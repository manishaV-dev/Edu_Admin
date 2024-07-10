

// cards table toggle starts in packageDisplay

var divs = ["Menu1", "Menu2"];
var visibleDivId = null;
function toggleVisibility(divId) {
  if (visibleDivId === divId) {
    //visibleDivId = null;
  } else {
    visibleDivId = divId;
  }
  hideNonVisibleDivs();
}
function hideNonVisibleDivs() {
  var i, divId, div;
  for (i = 0; i < divs.length; i++) {
    divId = divs[i];
    div = document.getElementById(divId);
    if (visibleDivId === divId) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
}

// cards table toggle ends in packageDisplay

// cloning of div in package form starts
// let cloneDiv = document.getElementById("cloneDiv");
// cloneDiv.addEventListener("click", function () {
//   let boxes = document.getElementById("boxes");
//   let clone = boxes.firstElementChild.cloneNode(true);
//   boxes.appendChild(clone);
// });


// cloning of div in package form starts
const cloneDiv = (cloneDivBtn, boxes) => {
  cloneDivBtn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      const clone = boxes[index].firstElementChild
        ? boxes[index].firstElementChild.cloneNode(true)
        : boxes[index].cloneNode(true);
        boxes[index].appendChild(clone);
    });
  });
};

const cloneDivBtn = document.querySelectorAll(".cloneDiv");
const boxes = document.querySelectorAll(".boxes");

if (cloneDivBtn && boxes) {
  cloneDiv(cloneDivBtn, boxes);
}






// image show
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $('#blah').attr('src', e.target.result).width(128).height(90);
    };

    reader.readAsDataURL(input.files[0]);
  }
}


// show div when checked
function valueChanged() {
  if ($(".invoice_question").is(":checked")) $(".answer").show();
  else $(".answer").hide();
}

function showOrderDiv() {
  if ($(".dashlog").is(":checked")) $(".showDivOrder").show();
  else $(".showDivOrder").hide();
}


// tagsinput
$(function() {
  $('input').on('change', function(event) {

    var $element = $(event.target);
    var $container = $element.closest('.example');

    if (!$element.data('tagsinput'))
      return;

    var val = $element.val();
    if (val === null)
      val = "null";
    var items = $element.tagsinput('items');
    console.log(items[items.length - 1]);

    $('code', $('pre.val', $container)).html(($.isArray(val) ? JSON.stringify(val) : "\"" + val.replace('"', '\\"') + "\""));
    $('code', $('pre.items', $container)).html(JSON.stringify($element.tagsinput('items')));

    console.log(val);
    console.log(items);
    console.log(JSON.stringify(val));
    console.log(JSON.stringify(items));

    console.log(items[items.length - 1]);

  }).trigger('change');
});



$("#button").click(function() {
  var input = $("input[name='tags']").tagsinput('items');
  console.clear();
  console.log(input);
  console.log(JSON.stringify(input));
  console.log(input[input.length - 1]);
});



 


//   var $checkbox = $('input[type=checkbox]').on('click', function () {
//     $checkbox.prop('checked', false);
//     this.checked = true;
// });

  var $checkbox = $('.onecheckonly').on('click', function () {
    $checkbox.prop('checked', false);
    this.checked = true;
});






$(function() {
  // Multiple images preview in browser
  var imagesPreview = function(input, placeToInsertImagePreview) {

      if (input.files) {
          var filesAmount = input.files.length;

          for (i = 0; i < filesAmount; i++) {
              var reader = new FileReader();

              reader.onload = function(event) {
                  $($.parseHTML('<img>')).attr('src', event.target.result).appendTo(placeToInsertImagePreview);
              }

              reader.readAsDataURL(input.files[i]);
          }
      }

  };

  $('#gallery-photo-add').on('change', function() {
      imagesPreview(this, 'div.gallery');
  });
});



  // $(".multiple").select2({
  //   allowClear: true
  // });




