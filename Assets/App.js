var characters = [{
        name: "Obi-Wan Kenobi",
        health: 120,
        attack: 8,
        imageUrl: "obi-wan.jpg",
        enemyAttackBack: 15,

    },
    {
        name: "Darth Sidious",
        health: 150,
        attack: 8,
        imageUrl: "darth-sidious.jpg",
        enemyAttackBack: 20,

    },
    {
        name: "Darth Maul",
        health: 180,
        attack: 7,
        imageUrl: "darth-maul.jpg",
        enemyAttackBack: 25,

    },
    {
        name: "Luke Skywalker",
        health: 100,
        attack: 14,
        imageUrl: "luke-skywalker.jpg",
        enemyAttackBack: 5,

    }
];
var attacker;
var defender;
var currentPlayers = [];
// console.log(characters[]);

function display() {
    for (var i = 0; i < characters.length; i++) {

        var newDiv = $("<div>")
        newDiv.css({
            display: inline - block,
            margintop: 60
        })
        newDiv.text(characters[i].name)

        newDiv.attr({
            "class": "Fidgeters",
            "data-name": characters[i].name,
            "title": "This Man May Have Robbed an Office-Furniture Supply-Store Near You!"


        })

        var imgDiv = $("<img>")
        imgDiv.attr("src", characters[i].imageUrl)
        imgDiv.attr("class", "star-warsIMG")
        newDiv.append(imgDiv)

        $(".characters").append(newDiv)
    }
};

display();
// console.log(display());

$(document).on("click", ".Fidgeters", function () {
    console.log($(this))
    console.log($(this)[0].dataset.name)
    var clickedCharacter = $(this)[0].dataset.name
    for (var y = 0; y < characters.length; y++) {
        if (characters[y].name === clickedCharacter) {
            displayContestGuys(characters[y])
            // console.log(characters[y])
        }
        remove(clickedCharacter)
    }

})


function displayContestGuys(player) {
    if (currentPlayers.length == 0) {
        attacker = player;
        currentPlayers.push(player);
        displayAttacker(player)
        // console.log(currentPlayers)

    } else if (currentPlayers.length < 2) {
        defender = player;
        currentPlayers.push(player);
        displayDefender(player)
        // console.log(currentPlayers)
    } else {
        alert("All Characters Have Already Been Chosen Sucka! Get Used to It!")
    }

}

function displayAttacker(player) {


    $(attacker).one("click", function () {
        $(".selectedAttacker").html("<br>", "You have selected: " + player + " for whatever reason..");

    });

    function displayDefender(player) {
        $(defender).one("click", function () {
            $(".selectedDefender").html("<br>", "You have selected: " + player + " for whatever reason..")
        })
    }
    console.log(player)
    // }

    function remove(player) {
        if (player === "Obi-Wan Kenobi") {
            characters.splice(0, 1)
            currentPlayers.push(characters[0])
        } else if (player === "Darth Maul") {
            characters.splice(0, 1)
            currentPlayers.push(characters[0])
        } else if (player === "Darth Sidious") {
            characters.splice(0, 1)
            currentPlayers.push(characters[0])
        } else if (player === "Luke Skywalker") {
            characters.splice(0, 1)
            currentPlayers.push(characters[0])
        }
    };



    function myFightFunction() {
        // if (currentPlayers.length === 0) {
        //     $("button").hide()
        // } else

        if (currentPlayers.length !== 0) {
            var newButton = $("<button> Fight </button>")
            // newbutton.text("Fight");
            var newDiv2 = $("<div>")
            $(newButton).css({
                display: inline - block
            })
            $(newButton).click(function playAudio() {
                $("#fightWAV").play();

                var finish = currentPlayers.length[Math.floor(Math.random() * currentPlayers.length)];
                $(newDiv2).html(finish)
            })
        }
    }
}