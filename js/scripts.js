
$(document).ready(function() {
  $("form#trackQuestions").submit(function(event) {

    var end = parseInt($("input:radio[name=end]:checked").val());
    var career = parseInt($("input:radio[name=career]:checked").val());
    var performance = parseInt($("input:radio[name=performance]:checked").val());
    var employer = parseInt($("input:radio[name=employer]:checked").val());
    var colleagues = parseInt($("input:radio[name=colleagues]:checked").val());
    var score = (end + career + performance + employer + colleagues);


    if (score <= 8) {
      $("#result1").show();
    } else if (score <= 12){
        $("#result2").show();
      } else if (score <=14){
          $("#result3").show();
        } else if (score > 14){
            $("#result4").show();

    event.preventDefault();

    });


    $("#resetBtn").click(function() {
      $("#result1").hide();
      $("#result2").hide();
      $("#result3").hide();
      $("#result4").hide();
    	});
});
