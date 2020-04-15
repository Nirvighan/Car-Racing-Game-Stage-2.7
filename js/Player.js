//craete the palyer class
class Player {

    //craete the constructor function
    constructor() {
        this.index = null;
        this.distance = 0;
        this.name = null;


    }

    //create the function for the player count
    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", function (data) {
            playerCount = data.val();
        });
    }

    //update the gamestate in the database
    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        })
    }

    //create the function to update the name
    update(name) {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({

            name: this.name,
            distance: this.distance
        });
    }

    //create the function for player information through the class
    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();

        });


    }



};