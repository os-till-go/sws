import { update_rotation, query_pointer_position, update_text, create_text, gameobjects_overlap, update_color, 
update_scale, create_sprite, create_rectangle, query_position, update_position, update_loop, get_loop_count,set_scale,  
build_game, input_key_down, pointer_over_gameobject, input_left_mouse_down,set_fps, play_audio, create_audio, loop_audio
, debug_log, stop_audio, update_to_top, get_game_time } from "arcade_2d";

const start_up_text = create_text("Welcome to the arcade game box!");
const start_up_text2 = create_text("Move the ship to a game to start!");
const start_text = create_text("Press 'e' to start chasing the game!");
const start_text1 = create_text("are you sure ? press 'y' to start the game!");

update_position(start_up_text, [300, 25]);
update_position(start_up_text2, [300, 35]);

const boundry = [create_rectangle(20, 1200), create_rectangle(20, 1200), 
                create_rectangle(1200, 20), create_rectangle(1200, 20)];

const g1 = 3;
const g = 5;

const RIGHT = 1;
const LEFT = 0;
const UP = 2;
const DOWN = 3;

update_position(boundry[LEFT], [0, 0]);
update_position(boundry[UP], [0, 0]);
update_position(boundry[RIGHT], [600, 0]);
update_position(boundry[DOWN], [0, 600]);


// -------------------------------Using assets-------------------------------------

const gameobjects = [
   update_position(update_scale(create_sprite("https://raw.githubusercontent.com/Sanchez-Jupiter/project_of_SWS/main/Screenshot_20230717_181659_com.huawei.hinote.png"),[0.2, 0.2]), [200, 200]),
   update_position(update_scale(create_sprite("https://github.com/os-till-go/sws/blob/main/1457F358-FB17-4939-85B0-AC341D1A4477.png?raw=true"), [1, 1]), [400, 400]),
   update_position(update_scale(create_sprite("https://github.com/os-till-go/sws/blob/main/6CBFA9DB-D953-46F3-8331-173A7CFAFD3E.png?raw=true"), [1, 1]), [400, 200]),
   update_position(update_scale(create_sprite("https://raw.githubusercontent.com/os-till-go/sws/main/ship.png"),[0.1, 0.1]), [1000, 1000])
   ];

//-----------------------------move your character-----------------------------------

const start_player = update_position(gameobjects[3], [1000, 1000]);
const start_background = update_position(update_scale(create_sprite("https://github.com/os-till-go/sws/blob/main/galaxy.jpg"),[1, 1]), [300, 300]);
const movement_dist = 10;
let flag = true;


function add_vectors(to, from) {
   to[0] = to[0] + from[0];
   to[1] = to[1] + from[1];
}

// -----------------------------dragging function----------------------------

function drag_gameobject(gameobject) {
  if (input_left_mouse_down() && pointer_over_gameobject(gameobject)) {
      update_to_top(update_position(gameobject, query_pointer_position()));
  }
}

//--------------------------start loop-------------------------------------------------

update_loop(game_state => {
  
//-------------------------drag it--------------------------------------------------
  
  for (let i = 0; i < 3; i = i + 1) {
      drag_gameobject(gameobjects[i]);
    }
    
//--------------------------w a s d to a game to start-------------------------------------
    
    const new_position = query_position(start_player);

   if (input_key_down("w")) {
       add_vectors(new_position, [0, -1 * movement_dist]);
   }
   if (input_key_down("a")) {
       add_vectors(new_position, [-1 * movement_dist, 0]);
   }
   if (input_key_down("s")) {
       add_vectors(new_position, [0, movement_dist]);
   }
   if (input_key_down("d")) {
       add_vectors(new_position, [movement_dist, 0]);
   }

   update_position(start_player, new_position);
   
//-----------------------------------------------------------------------------------   
   
   
   
   const audio = create_audio("https://labs.phaser.io/assets/audio/SoundEffects/key.wav", 1);




//--------------------------catch the game---------------------------------------

update_position(start_text, [300, 45]);

if(input_key_down("e")){
      update_position(start_player, [300, 300]);
      update_position(start_text1, [1000, 1000]);
      update_text(start_up_text, "Welcome to the arcade game box!");
      update_text(start_up_text2, "Move your ship to a game to start!");
      flag = true;
      }
if(gameobjects_overlap(start_player, gameobjects[0])){
      update_text(start_up_text2, "Good choice!");
      update_text(start_up_text, "You choose 1");
      update_text(start_text1, "Or press 'e' to continue to choose a game!");
      update_text(start_text, "Are you sure ? press 'y' to start the game!");
      update_position(start_text1, [300, 55]);
      flag = false;
      if(input_key_down("y")){
          //game1
 
 
 
          
        update_loop(game_state => {
    // Press space to play audio
        if (input_key_down("p")) {
            play_audio(audio);
        }
        });
        build_game();




      }
}

if(gameobjects_overlap(start_player, gameobjects[1])){
      update_text(start_up_text2, "Good choice!");
      update_text(start_up_text, "You choose 2");
      update_text(start_text1, "Or press 'e' to continue to choose a game!");
      update_text(start_text, "Are you sure ? press 'y' to start the game!");
      update_position(start_text1, [300, 55]);
      flag = false;
      if(input_key_down("y")){
          //game2
          update_text(start_text1, "it work!");
      }
}
    
if(gameobjects_overlap(start_player, gameobjects[2])){
            update_text(start_up_text2, "Good choice!");
            update_text(start_up_text, "You choose 3");
            update_text(start_text1, "Or press 'e' to continue to choose a game!");
            update_text(start_text, "Are you sure ? press 'y' to start the game!");
            update_position(start_text1, [300, 55]);
            flag = false;
            if(input_key_down("y")){
                //game3
                update_text(start_text1, "it work!");
            
        }// else{
            // update_text(start_up_text2, "move your character to a game to start!");
            // }
}
   
//--------------------------------------------self moving-------------------------------------
   
if(flag){
    
    if(query_position(gameobjects[0])[0] >= 0 && query_position(gameobjects[0])[0] <= 300 
        && query_position(gameobjects[0])[1] >= 0 && query_position(gameobjects[0])[1] <= 300){
            update_position(gameobjects[0], [query_position(gameobjects[0])[0] - g, query_position(gameobjects[0])[1] + g]);
        }
    if(query_position(gameobjects[0])[0] >= 300 && query_position(gameobjects[0])[0] <= 600 
        && query_position(gameobjects[0])[1] >= 0 && query_position(gameobjects[0])[1] <= 300){
            update_position(gameobjects[0], [query_position(gameobjects[0])[0] - g, query_position(gameobjects[0])[1] - g]);
        }
    if(query_position(gameobjects[0])[0] >= 0 && query_position(gameobjects[0])[0] < 300 
        && query_position(gameobjects[0])[1] >= 300 && query_position(gameobjects[0])[1] <= 600){
            update_position(gameobjects[0], [query_position(gameobjects[0])[0] + g, query_position(gameobjects[0])[1] + g]);
        }
    if(query_position(gameobjects[0])[0] >= 300 && query_position(gameobjects[0])[0] <= 600 
        && query_position(gameobjects[0])[1] >= 300 && query_position(gameobjects[0])[1] <= 600){
            update_position(gameobjects[0], [query_position(gameobjects[0])[0] + g, query_position(gameobjects[0])[1] - g]);
        }
    if(query_position(gameobjects[0])[0] < 0 || query_position(gameobjects[0])[0] > 599 
        || query_position(gameobjects[0])[1] < 0 || query_position(gameobjects[0])[1] > 599){
            update_position(gameobjects[0], [200, 200]);
        }

        
        
    if(query_position(gameobjects[1])[0] >= 0 && query_position(gameobjects[1])[0] <= 300 
        && query_position(gameobjects[1])[1] >= 0 && query_position(gameobjects[1])[1] <= 300){
            update_position(gameobjects[1], [query_position(gameobjects[1])[0] + g, query_position(gameobjects[1])[1] - g]);
        }
    if(query_position(gameobjects[1])[0] >= 300 && query_position(gameobjects[1])[0] <= 600 
        && query_position(gameobjects[1])[1] >= 0 && query_position(gameobjects[1])[1] <= 300){
            update_position(gameobjects[1], [query_position(gameobjects[1])[0] + g, query_position(gameobjects[1])[1] + g]);
        }
    if(query_position(gameobjects[1])[0] >= 0 && query_position(gameobjects[1])[0] < 300 
        && query_position(gameobjects[1])[1] >= 300 && query_position(gameobjects[1])[1] <= 600){
            update_position(gameobjects[1], [query_position(gameobjects[1])[0] - g, query_position(gameobjects[1])[1] - g]);
        }
    if(query_position(gameobjects[1])[0] >= 300 && query_position(gameobjects[1])[0] <= 600 
        && query_position(gameobjects[1])[1] >= 300 && query_position(gameobjects[1])[1] <= 600){
            update_position(gameobjects[1], [query_position(gameobjects[1])[0] - g, query_position(gameobjects[1])[1] + g]);
        }
    if(query_position(gameobjects[1])[0] < 0 || query_position(gameobjects[1])[0] > 599 
        || query_position(gameobjects[1])[1] < 0 || query_position(gameobjects[1])[1] > 599){
            update_position(gameobjects[1], [400, 400]);
        }

        
        
if(query_position(gameobjects[2])[0] >= 0 && query_position(gameobjects[2])[0] <= 300 
        && query_position(gameobjects[2])[1] >= 0 && query_position(gameobjects[2])[1] <= 300){
            update_position(gameobjects[2], [query_position(gameobjects[2])[0] - g1, query_position(gameobjects[2])[1] + g1]);
        }
    if(query_position(gameobjects[2])[0] >= 300 && query_position(gameobjects[2])[0] <= 600 
        && query_position(gameobjects[2])[1] >= 0 && query_position(gameobjects[2])[1] <= 300){
            update_position(gameobjects[2], [query_position(gameobjects[2])[0] - g1, query_position(gameobjects[2])[1] - g1]);
        }
    if(query_position(gameobjects[2])[0] >= 0 && query_position(gameobjects[2])[0] < 300 
        && query_position(gameobjects[2])[1] >= 300 && query_position(gameobjects[2])[1] <= 600){
            update_position(gameobjects[2], [query_position(gameobjects[2])[0] + g1, query_position(gameobjects[2])[1] + g1]);
        }
    if(query_position(gameobjects[2])[0] >= 300 && query_position(gameobjects[2])[0] <= 600 
        && query_position(gameobjects[2])[1] >= 300 && query_position(gameobjects[2])[1] <= 600){
            update_position(gameobjects[2], [query_position(gameobjects[2])[0] + g1, query_position(gameobjects[2])[1] - g1]);
        }
    if(query_position(gameobjects[2])[0] < 0 || query_position(gameobjects[2])[0] > 599 
        || query_position(gameobjects[2])[1] < 0 || query_position(gameobjects[2])[1] > 599){
            update_position(gameobjects[2], [200, 400]);
        }
        
}
 //---------------------------------------------------------------------------------

});
build_game();

