$(document).ready(function(){
  $.each(alphabet, function(index, value){
    $('#alphabet').append($(`<p class="letter" id="${value}">` + value + `</p>`))
  })
    $.each(guess, function(index, val){
      $('#guess').append($(`<div class="hidden ${val}"><div class="let hide">${val}</div></div>`))
    })

    $('.letter').on('click', function() {
      $(this).toggleClass('selected')
      $(`.hide:contains('${this.innerText}')`).removeClass('hide')
    })
  })



  $(document).ready(function(){
    $.each(alphabet, function(index, value){
      $('#alphabet').append($(`<p class="letter" id="${value}">` + value + `</p>`))
    })
      $.each(guess, function(index, val){
        $('#guess').append($(`<div class="hidden ${val}"><div class="let hide">${val}</div></div>`))
      })
      $('.letter').on('click', function() {
        $(this).toggleClass('selected')
        let target = $(this)
        console.log($(this).html(), $(this).text())
            console.log('watching this>>>>>>>>', )
        if (guess.includes($(this).html())) {
            $(`.guess>.${$(this).html()}`).removeClass('hide')
          console.log('test')
          // }
        //($({target}.removeClass('hide')))
      //  console.log(target.innerText)
        // $(target).removeClass('hide')
      }
        else {
            imageCount += 1
          }
          //
        })
      })
