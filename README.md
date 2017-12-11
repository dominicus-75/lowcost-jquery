# lowcost-jquery
Lowcost Jquery imitation :)

Example:

<script src="js/lowcost-jquery-1.0.0.js"></script>
<script>

$(document).ready(function() {

    $("#id").onkeyup = function() {
      if($("#id").value.length > 2) {
        ajaxy({
          type: "POST",
          url: "/example.php",
          data: "keyword="+this.value,
          success: function(data) {
            $("#resultId").innerHTML = xhr.responseText;
          }
        });
      }
    };

}
  
</script>
