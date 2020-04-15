//create the game class
class Game 
{

//create the cnstructor function 
constructor()
{


}
//read the gamestate from the database
getState()
{
  var gameStateRef = database.ref('gameState');
  gameStateRef.on("value" , function(data){
      gameState = data.val();
  });
}
//update the gamestate in the database
update(state)
{
database.ref('/').update({
    gameState:state
})
}
//start the game when four player inters
start()
{
if(gameState === 0)
{
player = new Player();
player.getCount();
 form = new Form();
 form.display();


}

//create all the cars and the array of car
car1 = createSprite(100,200);
car2 = createSprite(300,200);
car3 = createSprite(500,200);
car4 = createSprite(700,200);
cars = [car1,car2,car3,car4];


}

play()
{
 form.hide();
 
 Player.getPlayerInfo();
 console.log(allPlayers);
 if(allPlayers !== undefined )
 {
  //var display_position = 130;
  //index of the array
  var index = 0;
  //x and y position of the cars
  var x = 0;
  var y;
  for(var plr in allPlayers )
  {
    //add 1 to the index for every loop
    index = index + 1;

    //position the cars a little away from each other in x direction
    //calculating the x coordinate 
    x = x + 200;
    //use data from the database to display the cars in y direction 
    y = displayHeight-allPlayers[plr].distance;
    //setting the x and y coordinate for the cars
    cars[index-1].x = x;
    cars[index-1].y = y;
    //give color to the active car
    if(index === player.index)
    {
      cars[index-1].shapeColor = "blue";


       //add the camera to the current car
      camera.position.x = displayWidth/2;
      camera.position.y = cars[index-1].y;
    

    }

  }


 }

 if(keyIsDown(UP_ARROW) && player.index !== null)
 {
   player.distance += 10;
   player.update();



 }

drawSprites();

}

};