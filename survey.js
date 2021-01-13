/*
Instead of asking the user about what they think of Node.js, we can ask them the following questions, in order:

    What's your name? Nicknames are also acceptable :)
    What's an activity you like doing?
    What do you listen to while doing that?
    Which meal is your favourite (eg: dinner, brunch, etc.)
    What's your favourite thing to eat for that meal?
    Which sport is your absolute favourite?
    What is your superpower? In a few words, tell us what you are amazing at!

That said, feel free to change the narrative if you have better, more interesting questions to ask them.

Once all questions are answered, our survey app should output a fully formed paragraph for their online profile, similar to the one shown previously. It should then exit. The user would have to rerun the app to go through the process of generating another profile.

*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer1) => {
  rl.question('What\'s an activity you like doing? ', (answer2) => {
    rl.question('What do you listen to while doing that? ', (answer3) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer4) =>  {
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer5) => {
          rl.question('Which sport is your absolute favourite? ', (answer6) => {
            rl.question('Who is your superpower? In a few words, tell us what you are amazing at!', (answer7) => {
              console.log(`Thank you for your valuable feedback: ${answer1} loves to listen to ${answer3} while ${answer2}, always eat ${answer5} for ${answer4}, prefers ${answer6} over any other sport, is a big fan of ${answer7}`);
              rl.close();

            });
          });
          
        });
      });
    });
  });    
});
