var output = "";
$(document).ready(function() {

    for(var i=1;i<=151;i++){
        output += "<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" + i + ".png' id=" + i + "></img>";
    }
    $('.pokemon-list').html(output);

    var poke = 0;

    $('img').click(function() {

        poke = $(this).attr('id'); //store clicked pokemon's id
        console.log("pokemon #" + poke);

        $.get("https://pokeapi.co/api/v2/pokemon/" + poke, function(x) {
            var htmlStr = "<div class='info-header'>";
            htmlStr += "<h1>" + x.name + "</h1>"; //grab pokemon name
            htmlStr += "<img class='pokemon-info-img' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/"+ poke + ".png'></img>"; //grab pokemon image
            htmlStr += "</div>";
            htmlStr += "<h2>Types</h2>";
            htmlStr += "<ul>";
            for(var i=0;i<(x.types.length);i++) {
                htmlStr += "<li>" + x.types[i].type.name + "</li>";
            }
            htmlStr += "</ul>";
            htmlStr += "<h2>Height</h2>";
            htmlStr += "<p>" + x.height + "</p>";
            htmlStr += "<h2>Weight</h2>";
            htmlStr += "<p>" + x.weight + "</p>";

            console.log(htmlStr);

            $('.pokemon-info').html(htmlStr);
        }, "json");
    });
});