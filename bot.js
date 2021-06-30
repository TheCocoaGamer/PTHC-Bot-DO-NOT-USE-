const Discord = require('discord.js');
const client = new Discord.Client({ partials: ['React here.', '828667645226123324', ':green_square:' , ':yellow_square:'] });
const fs = require('fs')
var sleep = require('thread-sleep');
var i = 0;
var gameNumber = 1 + gameNumber
var Author = "no-one :("
var worldSize = 0;
var thcAmount = 0;
var sThcAmount = 0;
var thcAmount2 = 0;
var minPlaying = 5;
var sMinPlaying = 5;
var maxPlaying = 0;
var sMaxPlaying = 0;
var graceTime = 0;
var startedAlready = false;
var step1 = false;
var step2 = false;
var step3 = false;
var step4 = false;
var step5 = false;
var step6 = false;
var oldPass = false;
var oldID = false;
var gameStarted = 0;
var loop = 1;

var reactionAmountGreenSquare = 0;
var reactionAmountYellowSquare = 0;

const readline = require('readline');

client.on('ready', async (message, user, member) => {
  client.channels.cache.get('838910207186042920').send("Bot Online!");
  console.log(`Logged in as ${client.user.tag}!`);
  
  					if(startedAlready === true  ){
						if(step1 === true ){
							if(step2 === true ){
								if(step3 === true ){
									if(step4 === true ){
										if(step5 === true){
											if (step6 === true){
												
												
							
							

							
							while (loop == 1){
								console.log('working')
							simpleReadFileSync('gameStarted.txt');
							gameStarted = words;
							
						if(gameStarted != 0 & gameStarted != "started"){
							loop = 0
							message.channel.send('Congrats to ' + gameStarted + ' for winning pthc ' +  thcAmount2 + '!');
							client.channels.cache.get('854973503241584670').send("Thc " + thcAmount2 + " - " + gameStarted);
													startedAlready = false;
															step1 = false;
															step2 = false;
															step3 = false;
															step4 = false;
															step5 = false;
															step6 = false;
															simpleFileWriteSync('gameStarted.txt', "0");
															message.channel.send('Reloading...');	
															simpleFileWriteSync('gameStarted.txt', "0");
															simpleFileWriteSync('gameStarted2.txt', "0");
															simpleFileWriteSync('Reload.txt', "1");
						}
							}
					

					
					
												}
											}
										}
									}
								}
							}
						}
  
  
  
});

function simpleReadFileSync(filePath) {
	global.options = {encoding:'utf-8', flag:'r'};
	global.words = fs.readFileSync(filePath, options);
}
function simpleFileWriteSync(filePath2, content) {
    global.options2 = {encoding:'utf-8', flag:'w'};
    fs.writeFileSync(filePath2, content, options2);
	console.log('Write file data complete.')
}
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
//await delay(100);

client.on('messageReactionAdd', (reaction, user, message) => {
	
	
				if(reaction.emoji.name === '🟩'){
					
								Reactee = user.id;
								
								const one = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
								const two = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
								const three = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
								const four = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
								
								const random = Math.floor(Math.random()*one.length);
								const random2 = Math.floor(Math.random()*two.length);
								const random3 = Math.floor(Math.random()*three.length);
								const random4 = Math.floor(Math.random()*four.length);
								
								Password = one[random]+two[random2]+three[random3]+four[random4];
								
								simpleReadFileSync('Passwords.txt');
								oldPass = words;
								
								simpleReadFileSync('userid.txt');
								oldID = words;
								
								if(oldID != "1" & oldPass != "1"){
								simpleFileWriteSync('Passwords.txt', oldPass+"\n"+Password);
								simpleFileWriteSync('userid.txt', oldID+"\n"+Reactee);
								}
								else{
								simpleFileWriteSync('Passwords.txt', Password);
								simpleFileWriteSync('userid.txt', Reactee);
								}
								
								user.send("Copy the following message and paste it in chat with the enter key in terraria!");
								user.send("/login "+ Reactee + " " + Password);
							
								simpleReadFileSync('usernames.txt');
								oldusers = words;
								
								simpleFileWriteSync('usernames.txt', oldusers+"\n"+Reactee);
						}							
					
});


client.on('messageReactionAdd', async (reaction, message, user, members) => {

	if(startedAlready === true & step1 === true & step2 === true & step3 === true & step4 === true & step5 === true & step6 === false ){
					// When we receive a reaction we check if the reaction is partial or not
					if (reaction.partial) {
						// If the message this reaction belongs to was removed the fetching might result in an API error, which we need to handle
						try {
							await reaction.fetch();
						} catch (error) {
							console.error('Something went wrong when fetching the message: ', error);
							// Return as `reaction.message.author` may be undefined/null
							return;
						}
					}


					if(reaction.emoji.name === '🟩'){
						reactionAmountGreenSquare = reaction.count;
						if(reactionAmountGreenSquare >= maxPlaying){

														simpleFileWriteSync('gameStarted.txt', 'started')
							
							async function processLineByLine() { 
							
							
							
							
							  const fileStream = fs.createReadStream("C:/Users/PTHC1/Desktop/New folder/usernames.txt");

							  const rl = readline.createInterface({
								input: fileStream,
								crlfDelay: Infinity
							  });
							  
							  // Note: we use the crlfDelay option to recognize all instances of CR LF
							  // ('/r/n') in input.txt as a single line break.

							  for await (const line of rl) {
								// Each line in input.txt will be successively available here as `line`.
								console.log(`Line from file: ${line}`);
								penis = `${line}`
								console.log(penis);						
								(await message.guild.members.fetch(penis)).send(`<@`+penis+`> The game is starting!`)
							  }
							}
							
							processLineByLine();
							
							message.channel.send('The game will now start! In order to join, you will need the ip and port, which is PracticeTHC.epicgamer.org, the port is 7778. You need to join with a hardcore character, and if you want to be awarded a win, you will have to make your terrarian name similar to your discord name. Have fun!');
							message.channel.send('If you wish to join but have not reacted, react here');
							step6 =true;
							simpleFileWriteSync('gameStarted.txt', "started");
							 }
						}
						
					
					
					if(reaction.emoji.name === '🟨'){
						reactionAmountYellowSquare = reaction.count;
						if(reactionAmountYellowSquare >= Math.round(maxPlaying / 2 )){
						
														simpleFileWriteSync('gameStarted.txt', 'started')
							
							async function processLineByLine() {
							  const fileStream = fs.createReadStream("C:/Users/PTHC1/Desktop/New folder/usernames.txt");

							  const rl = readline.createInterface({
								input: fileStream,
								crlfDelay: Infinity
							  });
							  
							  // Note: we use the crlfDelay option to recognize all instances of CR LF
							  // ('/r/n') in input.txt as a single line break.

							  for await (const line of rl) {
								// Each line in input.txt will be successively available here as `line`.
								console.log(`Line from file: ${line}`);
								penis = `${line}`
								console.log(penis);						
								(await message.guild.members.fetch(penis)).send(`<@`+penis+`> The game is starting!`)
							  }
							}
							
							processLineByLine();
							
							message.channel.send('The game will now start! In order to join, you will need the ip and port, which is PracticeTHC.epicgamer.org, the port is 7778. You need to join with a hardcore character, and if you want to be awarded a win, you will have to make your terrarian name similar to your discord name. Have fun!');
							message.channel.send('If you wish to join but have not reacted, react here');
							step6 =true;
							simpleFileWriteSync('gameStarted.txt', "started");
							 }
							

						}
					
				}
});








client.on('message', async (message, user, member) => {
	
	if(message.author.id != 831240172867289088 ){
		
						
					if (message.author.id === Author ){
					if(message.content === '!stop'){
				if(step6 != true){
				if(startedAlready === false){
					startedAlready = false;
					step1 = false;
					step2 = false;
					step2 = false;
					step3 = false;
					step4 = false;
					step5 = false;
					step6 = false;
					message.channel.send('Stop completed! Use !new to start!');		
				}
				}
				if(startedAlready === true){
					if(step6 != true){
					startedAlready = false;
					step1 = false;
					step2 = false;
					step3 = false;
					step4 = false;
					step5 = false;
					step6 = false;
					thcAmount--
					sThcAmount = thcAmount.toString();
					simpleFileWriteSync('thcAmount.txt', sThcAmount);
					message.channel.send('Stop completed! Use !new to start!');	
				}
			}
				}
		
		
		
		
			if(message.content === '!reload'){

							
							if(startedAlready === false){
								startedAlready = false;
								step1 = false;
								step2 = false;
								step2 = false;
								step3 = false;
								step4 = false;
								step5 = false;
								step6 = false;
								message.channel.send('Reloading...');		
								simpleFileWriteSync('gameStarted.txt', "0");
								simpleFileWriteSync('gameStarted2.txt', "0");
								simpleFileWriteSync('Reload.txt', "1");
							
							}
							if(startedAlready === true){
								
								startedAlready = false;
								step1 = false;
								step2 = false;
								step3 = false;
								step4 = false;
								step5 = false;
								step6 = false;
								thcAmount--
								sThcAmount = thcAmount.toString();
								simpleFileWriteSync('thcAmount.txt', sThcAmount);
								message.channel.send('Reloading...');	
								simpleFileWriteSync('gameStarted.txt', "0");
								simpleFileWriteSync('gameStarted2.txt', "0");
								simpleFileWriteSync('Reload.txt', "1");
							
							}
						}
					}
			
		  			if(startedAlready === true  ){
						if(step1 === true ){
							if(step2 === true ){
								if(step3 === true ){
									if(step4 === true ){
										if(step5 === true){
											if (step6 === true){
												

							

							message.delete();
							message.channel.send('Please wait untill the game is over, if grace is not over you can react to the last message to get an invite, if you do not get an invite you will have to wait untill the game is over.');

						
					

					
					
												}
											}
										}
									}
								}
							}
						}
	
	
	if(message.author.id == 376522837693038593 || message.author.id ==  444887998790631425 || message.author.id == 321268590630273024 || message.author.id == 689529267658555448 || message.author.id == 516314535125319691 || message.author.id == 127632907878662144 || message.author.id == 173813978475134977 || message.author.id == 393499902900174860 || message.author.id == 112017670437621760 || message.author.id == 377796280879022083 || message.author.id == 300880687114878987 || message.author.id == 295238355204177921 || message.author.id == 646446527669075988 || message.author.id == 434724872497790991 )
	{
		
				if(message.content == '!stop'){
							if(step6 != true){
				if(startedAlready === false){
					startedAlready = false;
					step1 = false;
					step2 = false;
					step2 = false;
					step3 = false;
					step4 = false;
					step5 = false;
					step6 = false;
					message.channel.send('Stop completed! Use !new to start!');	
								simpleFileWriteSync('gameStarted.txt', "0");
								simpleFileWriteSync('gameStarted2.txt', "0");
				
				}
							}
				if(startedAlready == true){
					if(step6 != true){
					startedAlready = false;
					step1 = false;
					step2 = false;
					step3 = false;
					step4 = false;
					step5 = false;
					step6 = false;
					thcAmount--
					sThcAmount = thcAmount.toString();
					simpleFileWriteSync('thcAmount.txt', sThcAmount);
					message.channel.send('Stop completed! Use !new to start!');
								simpleFileWriteSync('gameStarted.txt', "0");
								simpleFileWriteSync('gameStarted2.txt', "0");
					}
				}
			}
		
					if(message.content == '!reload'){
							if(startedAlready == false){
								startedAlready = false;
								step1 = false;
								step2 = false;
								step2 = false;
								step3 = false;
								step4 = false;
								step5 = false;
								step6 = false;
								message.channel.send('Reloading...');		
								simpleFileWriteSync('gameStarted.txt', "0");
								simpleFileWriteSync('gameStarted2.txt', "0");
								simpleFileWriteSync('Reload.txt', "1");
							}
							if(startedAlready == true){
								startedAlready = false;
								step1 = false;
								step2 = false;
								step3 = false;
								step4 = false;
								step5 = false;
								step6 = false;
								thcAmount--
								sThcAmount = thcAmount.toString();
								simpleFileWriteSync('thcAmount.txt', sThcAmount);
								message.channel.send('Reloading...');	
								simpleFileWriteSync('gameStarted.txt', "0");
								simpleFileWriteSync('gameStarted2.txt', "0");
								simpleFileWriteSync('Reload.txt', "1");
							}
							}
					}
			

		
		
		
	
		
		

					

			if(startedAlready == true) {
		
					if (message.author.id == Author || message.author.id == 376522837693038593 || message.author.id ==  444887998790631425 || message.author.id == 321268590630273024 || message.author.id == 689529267658555448 || message.author.id == 516314535125319691 || message.author.id == 127632907878662144 || message.author.id == 173813978475134977 || message.author.id == 393499902900174860 || message.author.id == 112017670437621760 || message.author.id == 377796280879022083 || message.author.id == 300880687114878987 || message.author.id == 295238355204177921 || message.author.id == 646446527669075988 || message.author.id == 434724872497790991 ){

					if(message.author.id != 831240172867289088 & startedAlready === true & step1 === true & step2 === true & step3 === true & step4 === true & step5 === true & step6 === false){
						 if (message.content === '!start'){
					
									
							simpleReadFileSync('gameStarted.txt');
							gameStarted = words;
							
							 if(message.author.id == 376522837693038593 || message.author.id ==  444887998790631425 || message.author.id == 321268590630273024 || message.author.id == 689529267658555448 || message.author.id == 516314535125319691 || message.author.id == 127632907878662144 || message.author.id == 173813978475134977 || message.author.id == 393499902900174860 || message.author.id == 112017670437621760 || message.author.id == 377796280879022083 || message.author.id == 300880687114878987 || message.author.id == 295238355204177921 || message.author.id == 646446527669075988 || message.author.id == 434724872497790991){
								 	simpleFileWriteSync('gameStarted.txt', 'started')
							
							async function processLineByLine() {
							  const fileStream = fs.createReadStream("C:/Users/PTHC1/Desktop/New folder/usernames.txt");

							  const rl = readline.createInterface({
								input: fileStream,
								crlfDelay: Infinity
							  });
							  
							  // Note: we use the crlfDelay option to recognize all instances of CR LF
							  // ('/r/n') in input.txt as a single line break.

							  for await (const line of rl) {
								// Each line in input.txt will be successively available here as `line`.
								console.log(`Line from file: ${line}`);
								penis = `${line}`
								console.log(penis);						
								(await message.guild.members.fetch(penis)).send(`<@`+penis+`> The game is starting!`)
							  }
							}
							
							processLineByLine();
							
							message.channel.send('The game will now start! In order to join, you will need the ip and port, which is PracticeTHC.epicgamer.org, the port is 7778. You need to join with a hardcore character, and if you want to be awarded a win, you will have to make your terrarian name similar to your discord name. Have fun!');
							message.channel.send('If you wish to join but have not reacted, react here');
						
							step6 =true;
							simpleFileWriteSync('gameStarted.txt', "started");
							 }




							 if (gameStarted == 0 & message.author.id == Author & reactionAmountGreenSquare >= 5){
							
							simpleFileWriteSync('gameStarted.txt', 'started')
							
							async function processLineByLine() {
							  const fileStream = fs.createReadStream("C:/Users/PTHC1/Desktop/New folder/usernames.txt");

							  const rl = readline.createInterface({
								input: fileStream,
								crlfDelay: Infinity
							  });
							  
							  // Note: we use the crlfDelay option to recognize all instances of CR LF
							  // ('/r/n') in input.txt as a single line break.

							  for await (const line of rl) {
								// Each line in input.txt will be successively available here as `line`.
								console.log(`Line from file: ${line}`);
								penis = `${line}`
								console.log(penis);						
								(await message.guild.members.fetch(penis)).send(`<@`+penis+`> The game is starting!`)
							  }
							}
							
							processLineByLine();
							
							message.channel.send('The game will now start! In order to join, you will need the ip and port, which is PracticeTHC.epicgamer.org, the port is 7778. You need to join with a hardcore character, and if you want to be awarded a win, you will have to make your terrarian name similar to your discord name. Have fun!');
							message.channel.send('If you wish to join but have not reacted, react here');
							step6 =true;
							simpleFileWriteSync('gameStarted.txt', "started");
							 }
							 

					
						}
						
							else{
								message.delete();
							}

					}

			if(message.author.id != 831240172867289088 & startedAlready === true & step1 === true & step2 === true & step3 === true & step4 === true & step5 === false ){
				
					maxPlaying = message.content;
					
					
					if (maxPlaying >= minPlaying & maxPlaying <= 30){
					message.channel.send("Setup is finishing...");
					sMaxPlaying = maxPlaying.toString();
					simpleFileWriteSync('maxPlayerAmount.txt', sMaxPlaying);
					thcAmount2 = thcAmount - 1;
					message.channel.send('Ok, PTHC ' + thcAmount2 +' will have at least 5 players with a maximum of ' + maxPlaying + ' players. React with a :green_square: if you will play!');
					message.channel.send('-----------------------------------------------------------------');
					message.channel.send('The game will start if the :green_square: reactions match '+ maxPlaying +' players , if the reactions reach 5 players and the original author says !start, Or if the :yellow_square: reactions reaches ' + Math.round((maxPlaying/2)) + '.' );
					message.channel.send('-----------------------------------------------------------------');
					message.channel.send('*if there are ' +  maxPlaying + ' :green_square: reactions or ' + Math.round((maxPlaying/2)) + ' :yellow_square: reactions, please add a message to confirm the game. Also, if someone wins / everyone leaves the game, please add a message for the win confirmation.*');
					message.channel.send('-----------------------------------------------------------------');
					message.channel.send('React here.');
					step5 = true;
					}
					
				else if (10 >= minPlaying){
				 if(message.author.id != 831240172867289088 & message.content != "!new" & message.content != 10 & message.content != 11 & message.content != 12 & message.content != 13 & message.content != 14 & message.content != 15 & message.content != 16 & message.content != 17 & message.content != 18 & message.content != 19 & message.content != 20 & message.content != 21 & message.content != 22 & message.content != 23 & message.content != 24 & message.content != 25 & message.content != 26 & message.content != 27 & message.content != 28 & message.content != 29 & message.content != 30 ){
						message.delete();
						message.channel.send('Please enter a number from 10-30');
					}
				else if(message.author.id != 831240172867289088 & message.content === "!new"){
					message.delete();
					message.channel.send('Start has begun, please enter a number from 10-30');
						}
				}	
		}

					if(message.author.id != 831240172867289088 & startedAlready === true & step1 === true & step2 === true & step3 === true & step4 === false){
						
						if (message.content == 5 || message.content == 6 || message.content == 7 || message.content == 8 || message.content == 9 || message.content == 10 || message.content == 11 || message.content == 12 || message.content == 13 || message.content == 14 || message.content == 15 || message.content == 16 || message.content == 17 || message.content == 18 || message.content == 19 || message.content == 20 || message.content == 21 || message.content == 22 || message.content == 23 || message.content == 24 || message.content == 25 || message.content == 26 || message.content == 27 || message.content == 28 || message.content == 29 || message.content == 30 || message.content == 31 || message.content == 32 || message.content == 33 || message.content == 34 || message.content == 35 || message.content == 36 || message.content == 37 || message.content == 38 || message.content == 39 || message.content == 40 || message.content == 41 || message.content == 42 || message.content == 43 || message.content == 44 || message.content == 45 || message.content == 46 || message.content == 47 || message.content == 48 || message.content == 49 || message.content == 50 || message.content == 51 || message.content == 52 || message.content == 53 || message.content == 54 || message.content == 55 || message.content == 56 || message.content == 57 || message.content == 58 || message.content == 59 || message.content == 60){
							graceTime = message.content;
							message.channel.send('Grace will be ' + graceTime + ' minutes');
							simpleFileWriteSync('graceTime.txt', graceTime);
							message.channel.send("Whats the maximum players for this game? Minimum is 10, maximum is 30.");				
							step4 = true;
						}
						else if(message.author.id != 831240172867289088 & message.content === "!new"){
						message.delete();
						message.channel.send('Start has begun, please enter a number from 5-60');
			
					}
						else if(message.content != "!new" & message.content != 5 & message.content != 6 & message.content != 7 & message.content != 8 & message.content != 9 & message.content != 10 & message.content != 11 & message.content != 12 & message.content != 13 & message.content != 14 & message.content != 15 & message.content != 16 & message.content != 17 & message.content != 18 & message.content != 19 & message.content != 20 & message.content != 21 & message.content != 22 & message.content != 23 & message.content != 24 & message.content != 25 & message.content != 26 & message.content != 27 & message.content != 28 & message.content != 29 & message.content != 30 & message.content != 31 & message.content != 32 & message.content != 33 & message.content != 34 & message.content != 35 & message.content != 36 & message.content != 37 & message.content != 38 & message.content != 39 & message.content != 40 & message.content != 41 & message.content != 42 & message.content != 43 & message.content != 44 & message.content != 45 & message.content != 46 & message.content != 47 & message.content != 48 & message.content != 49 & message.content != 50 & message.content != 51 & message.content != 52 & message.content != 53 & message.content != 54 & message.content != 55 & message.content != 56 & message.content != 57 & message.content != 58 & message.content != 59 & message.content != 60 ){
								message.delete();
								message.channel.send('Please Enter in a number 5-60');
						}
					
					}
		
		
		
		if(message.author.id != 831240172867289088 & startedAlready === true & step1 === true & step2 === true & step3 === false){
						if (message.author.id != 831240172867289088 &  message.content === '1' ){
						message.channel.send('Random Evil it is!');
						simpleFileWriteSync('worldEvil.txt', '1');
						message.channel.send("How long do you want grace to be? Enter a value from 5-60.");				
						step3 = true;
					}
					
					else if (message.author.id != 831240172867289088 & message.content === '2'){
						
						message.channel.send('Corruption  it is!');
						simpleFileWriteSync('worldEvil.txt', '2');
						message.channel.send("How long do you want grace to be? Enter a value from 5-60.");
						step3 = true;
						
					}
					else if (message.author.id != 831240172867289088 & message.content === '3' ){
						
						message.channel.send('Crimson it is!');
						simpleFileWriteSync('worldEvil.txt', '3');			
						message.channel.send("How long do you want grace to be? Enter a value from 5-60.");							
						step3 = true;								
					}
					else if(message.author.id != 831240172867289088 & message.content != '3' & message.content != '2' & message.content != '1' & message.content != '!new'){
						message.delete();
						message.channel.send('Please Enter in a number 1-3');
					}
					else if(message.author.id != 831240172867289088 & message.content === "!new"){
						message.delete();
						message.channel.send('Start has begun, please enter a number from 1-3 (please enter 1 for right now)');
			
					}
		}

		if(message.author.id != 831240172867289088 & startedAlready === true & step1 === true & step2 === false){
								
					if (message.author.id != 831240172867289088 &  message.content === '1' ){
						message.channel.send('Normal difficulty it is!');
						simpleFileWriteSync('difficulty.txt', '1');
						message.channel.send('What world evil do you want the world to be? 1 for random :game_die: 2 for corruption :smiling_imp: and 3 for crimson :rage:');						
						step2 = true;
					}
					
					else if (message.author.id != 831240172867289088 &  message.content === '2'){
						
						//message.channel.send('Expert difficulty it is!');
						//simpleFileWriteSync('difficulty.txt', '2');
						//step2 = true;
						message.delete();
						message.channel.send('Please Enter 1 for now');
						
					}
					else if (message.author.id != 831240172867289088 &  message.content === '3' ){
						
						//message.channel.send('Master Mode difficulty it is!');
						//simpleFileWriteSync('difficulty.txt', '3');				
						//step2 = true;
						message.delete();
						message.channel.send('Please Enter 1 for now');
						
					}
						else if(message.author.id != 831240172867289088 & message.content === "!new"  & startedAlready === true & step1 === true & step2 === false ){
										message.delete();
						message.channel.send('Start has begun, please enter a number from 1-3 (please enter 1 for right now)');
					}
						else if(message.author.id != 831240172867289088 & message.content != '3' & message.content != '2' & message.content != '1' & message.content != '!new'){
						message.delete();
						message.channel.send('Please Enter in a number 1-3');
					}
					}
					
					
					
					
					
		if (message.author.id != 831240172867289088 & startedAlready == true & step1 == false ){
					
					if (message.author.id != 831240172867289088  & message.content == '1' ){
						message.channel.send('Small world it is!');
						simpleFileWriteSync('worldSize.txt', '1');
						step1 = true;
						message.channel.send("What difficulty do you want the world to be? 1 for normal :baby: 2 for expert :sunglasses: and 3 for master <:kekw:829569059606626334>  (only do 1 for now as boss scaling is enabled and is very bad for THC's");						
					}
					else if (message.author.id != 831240172867289088 & message.content == '2'  ){
						message.channel.send('Medium world it is!');
						simpleFileWriteSync('worldSize.txt', '2');
						message.channel.send("What difficulty do you want the world to be? 1 for normal :baby: 2 for expert :sunglasses: and 3 for master <:kekw:829569059606626334>   (only do 1 for now as boss scaling is enabled and is very bad for THC's");						
						step1 = true;
					}
					else if (message.author.id != 831240172867289088 & message.content == '3'  ){					
					message.channel.send('Large world it is!');
						simpleFileWriteSync('worldSize.txt', '3');				
						message.channel.send("What difficulty do you want the world to be? 1 for normal :baby: 2 for expert :sunglasses: and 3 for master <:kekw:829569059606626334>   (only do 1 for now as boss scaling is enabled and is very bad for THC's");
						step1 = true;						
					}
					else if(message.author.id != 831240172867289088 & message.content != '3' & message.content != '2' & message.content != '1' & message.content != '!new'){
						message.delete();
						message.channel.send('Please Enter in a number 1-3');
					}
					else if(message.author.id != 831240172867289088 & message.content === "!new"){
						message.delete();
						message.channel.send('Start has begun, please enter a number from 1-3.');
					}

		}
		
			}
			
							
	
	}
			
			
			
			 if(message.author.id != 831240172867289088 & startedAlready === false & message.content == '!new'){

				
				Author = message.author.id;
				simpleFileWriteSync('gameStarted.txt', '0')
				simpleReadFileSync('thcAmount.txt');
				thcAmount = words;
				message.reply('Hi there! The next game will begin soon, the game being PTHC ' + words);
				thcAmount++;
				sThcAmount = thcAmount.toString();
				simpleFileWriteSync('thcAmount.txt', sThcAmount);
				message.channel.send('What size do you want the world to be? 1 for small world :white_medium_small_square: 2 for medium :white_medium_square: and 3 for large :white_large_square:');
				startedAlready = true;
				simpleFileWriteSync('usernames.txt', "856031143287193610");
				simpleFileWriteSync('passwords.txt', "1");
				simpleFileWriteSync('userid.txt', "1");
				
						}
					

		 if(message.author.id != 831240172867289088 & startedAlready === false & message.content != '!new' & message.content != '!stop'  & message.content != '!reload'){
				message.delete();
				message.channel.send('Please use the !new command.');
				}
				
		if(startedAlready == true & message.author != Author){
			message.delete()
		}
	}
});
	client.login('')
