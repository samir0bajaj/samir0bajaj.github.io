$('#start').on('click', function(){
    game.start();
})

var questions =[{
    question: "How much does the average fox weigh?",
    answers: ["14 pounds", "12 pounds", "9 pounds", "22 pounds"],
    correctAnswer: "14 pounds",
}, {
    question: "From what distance can the call of a howler monkey be heard?",
    answers: ["500 feet", "3 miles", "5 miles", "2 miles"],
    correctAnswer: "3 miles",
}, {
    question: "How fast can a cheetah reach a running speed of 60 MPH?",
    answers: ["1 minute", "1 second", "3 seconds", "Faster than your car"],
    correctAnswer: "3 seconds",
}, {
    question: "What is the proper terminology used to refer to a group of hyenas?",
    answers: ["a herd", "a bloat", "a band", "a yoke", "a cackle"],
    correctAnswer: "a cackle",
}, {
    question: "How many adult men could a 2-inch-long golden poison dart frog kill with its venom?",
    answers: ["1", "7", "10", "0"],
    correctAnswer: "0",
}, {
    question: "How old was the oldest-recorded living Galapagos tortoise when it died?",
    answers: ["152", "18", "426", "89"],
    correctAnswer: "152",
}, {
    question:"At what speed can a Peregrine falcon dive-bomb its prey?",
    answers: ["88 MPH", "65 MPH", "150 MPH", "200 MPH"],
    correctAnswer: "200 MPH",
}, {
    question: "How long is the pregnancy of an African elephant?",
    answers: ["12 months", "8 months", "2 years", "3 months"],
    correctAnswer: "2 years",
}];

var game = {
    correct: 0, 
    incorrect: 0,
    counter: 120, 
    countdown: function(){
        game.counter--;
        $('#counter').html(game.counter);
        if(game.counter===0){
            console.log("Time is up!");
            game.done();
        }
    },
    start: function(){
        timer = setInterval(game.countdown,1000);
        $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>');
        $("#start").remove();
            for(var i=0;i<questions.length; i++){
                $("#subwrapper").append('<h2>' + questions[i].question + '</h2>');
                for(var j=0;j<questions[i].answers.length;j++){
                $('#subwrapper').append("<input type='radio' name='question-"+i+"'value='"+questions[i].answers[j]+"'>"+questions[i].answers[j])
        }
    }

    },
    done: function(){
        $.each($('input[name="question-0]":checked'), function(){
            if($(this).val()==questions[0].correctAnswer){
                game.correct++;
            }
            else{
                game.incorrect++;
            }
        });
        $.each($('input[name="question-1]":checked'), function(){
            if($(this).val()==questions[1].correctAnswer){
                game.correct++;
            }
            else{
                game.incorrect++;
            }
        });
        $.each($('input[name="question-2]":checked'), function(){
            if($(this).val()==questions[2].correctAnswer){
                game.correct++;
            }
            else{
                game.incorrect++;
            }
        });
        $.each($('input[name="question-3]":checked'), function(){
            if($(this).val()==questions[3].correctAnswer){
                game.correct++;
            }
            else{
                game.incorrect++;
            }
        });
        $.each($('input[name="question-4]":checked'), function(){
            if($(this).val()==questions[4].correctAnswer){
                game.correct++;
            }
            else{
                game.incorrect++;
            }
        });
        $.each($('input[name="question-5]":checked'), function(){
            if($(this).val()==questions[5].correctAnswer){
                game.correct++;
            }
            else{
                game.incorrect++;
            }
        });
        $.each($('input[name="question-6]":checked'), function(){
            if($(this).val()==questions[6].correctAnswer){
                game.correct++;
            }
            else{
                game.incorrect++;
            }
        });
        $.each($('input[name="question-7]":checked'), function(){
            if($(this).val()==questions[7].correctAnswer){
                game.correct++;
            }
            else{
                game.incorrect++;
            }
        });
        $.each($('input[name="question-8]":checked'), function(){
            if($(this).val()==questions[8].correctAnswer){
                game.correct++;
            }
            else{
                game.incorrect++;
            }
        });

        this.result();
    },

    result: function(){
        clearInterval(timer);
        $('#subwrapper h2').remove();

        $('#subwrapper').html("<h2>All done!</h2>");
        $('#subwrapper').append("<h3>Correct Answers: "+this.correct+"</h3>");
        $('#subwrapper').append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
        $('#subwrapper').append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
    }
}




