var images = [
  'hangman-assets/gallows.jpg',
  'hangman-assets/gallows2.jpg',
  'hangman-assets/gallows3.jpg',
  'hangman-assets/gallows4.jpg',
  'hangman-assets/gallows5.jpg',
  'hangman-assets/gallows6.jpg',
  'hangman-assets/gallows7.jpg',

];
var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let imageCount = 1;
//var guess = ["P","H","I","L","L","I","P","S"];
var guess = ["S","T","R","A","N","G","E","R"]
let wrongGuesses = 0;
let maxGuesses = 4;

$(document).ready(function(){
  $.each(alphabet, function(index, value){
    $('#alphabet').append($(`<p class="letter pop" id="${value}">` + value + `</p>`))
  })
    $.each(guess, function(index, val){
      $('#guess').append($(`<div class="hidden conor ${val}"><p class="let hide">${val}</p></div>`))
    })

    $('.letter').one('click', function() {
    if (guess.includes($(this).html())){
      $(this).toggleClass('selected')
      $(`.let:contains('${this.innerText}')`).removeClass('hide')
    } else if (wrongGuesses <= maxGuesses){
      $('.image').attr("src", images[imageCount])
      imageCount += 1
      wrongGuesses += 1
      $(this).addClass('wrong')
    } else {
        $('.image').attr("src", images[6])
      setTimeout(function () {
        alert('DEAD');
      location.reload()
    }, 100);
  }
    if((!$('.conor>p').hasClass('hide'))){
      setTimeout(function () {
      alert('YOU WON!')
      location.reload()
    }, 100);
  }
  })

})
