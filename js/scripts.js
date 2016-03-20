$(function() {
  $('form').submit(function(event) {
    event.preventDefault();

    // sentence into array .split()
    var sentence = $('input.sentence').val()
    var sentenceArray = sentence.split(' ');
    var wordsThree = [];

    // loop through array, build sentence for words > 3 letters
    sentenceArray.forEach(function(word) {
      if (word.length >= 3) {
        wordsThree.push(word);
      } else if (word === '') {
        $('.warpedSentence').hide();
        // $('.sentenceLabel results').empty();  // can't clear red text on additional clicks
        $('.sentenceLabel').append('<p class="red inline">&nbsp; *</p>');
        $('.results').append('<h4 class="red">Please enter something in the text field</h4>');
      }

    });

      wordsThree.reverse();
      wordsThree = wordsThree.join(' ');

      // console.log(wordsThree);
      $('.clear').empty();
      $('.results').show();
      $('.warpedSentence').append('<h4 class="clear"><i>"' + wordsThree + '"</i></h4>');

  });



  // Jumbotron background image - goes inside UI Logic
  var jumboHeight = $('.jumbotron').outerHeight();
    function parallax(){
        var scrolled = $(window).scrollTop();
        $('.bg').css('height', (jumboHeight-scrolled) + 'px');
    }

    $(window).scroll(function(e){
        parallax();
    });

});
