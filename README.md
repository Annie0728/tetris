# Tetris App

This project was created and coded with React and JS. The goal of this project is to build knowledge in JS and continue working with the React library.

This app mostly follows this guide, but there are some additions and changes I did in this app: [https://www.youtube.com/watch?v=yCEIgEOZ36g&ab_channel=RestfulCoder](https://www.youtube.com/watch?v=yCEIgEOZ36g&ab_channel=RestfulCoder)

But it also follows and takes inspiration from these guides: 
- [https://www.youtube.com/watch?v=ZGOaCxX8HIU&ab_channel=freeCodeCamp.org](https://www.youtube.com/watch?v=ZGOaCxX8HIU&ab_channel=freeCodeCamp.org)
- [https://www.youtube.com/watch?v=HEsAr2Yt2do&ab_channel=CodeExplained](https://www.youtube.com/watch?v=HEsAr2Yt2do&ab_channel=CodeExplained)

## App Summary
![start screen](./src/Photos/start_screen.JPG)
- This app implements a tetris game with a special "wacky" mode
    - Switch to wacky mode with the toggle below the start game button
- Features a menu where player can specify which mode they want to play
    - Rules button to explain the rules and controls of the game
    - Two sections for normal mode and wacky mode \
![rules](./src/Photos/rules.JPG)
- This app uses these following colors:
    - ![#282C34](https://placehold.co/15x15/282C34/282C34.png) `#282C34`: background
    - ![#32363D](https://placehold.co/15x15/32363D/32363D.png) `#32363D`: board background
    - ![#8A84E2](https://placehold.co/15x15/8A84E2/8A84E2.png) `#8A84E2` and ![#59588B](https://placehold.co/15x15/59588B/59588B.png) `#59588B`: buttons
    - ![#625BC2](https://placehold.co/15x15/625BC2/625BC2.png) `#625BC2` (T piece), ![#207AD5](https://placehold.co/15x15/207AD5/207AD5.png) `#207AD5` (J piece), ![#1FB7EA](https://placehold.co/15x15/1FB7EA/1FB7EA.png) `#1FB7EA` (I piece), ![#72C07B](https://placehold.co/15x15/72C07B/72C07B.png) `#72C07B` (S piece), ![#FFDA85](https://placehold.co/15x15/FFDA85/FFDA85.png) `#FFDA85` (O piece), ![#F9A287](https://placehold.co/15x15/F9A287/F9A287.png) `#F9A287` (L piece), ![#F26989](https://placehold.co/15x15/F26989/F26989.png) `#F26989` (Z piece): original block colors
    - ![#8A84E2](https://placehold.co/15x15/8A84E2/8A84E2.png) `#8A84E2` (I 2 blocks piece), ![#44CFCB](https://placehold.co/15x15/44CFCB/44CFCB.png) `#44CFCB` (Dot piece), ![#D373B3](https://placehold.co/15x15/D373B3/D373B3.png) `#D373B3` (V piece), ![#E2A1CC](https://placehold.co/15x15/E2A1CC/E2A1CC.png) `#E2A1CC` (I 3 blocks piece): additional wacky block colors

### Normal Tetris
![tetris](./src/Photos/tetris.JPG)
The current look of the tetris game in normal mode
- Features the original seven pieces: \
![original pieces](./src/Photos/normal_pieces.JPG)
- Player can hold a piece

### Wacky Tetris
![wacky tetris](./src/Photos/wacky_tetris.JPG)
The current look of the tetris game in wacky mode
- Four more pieces are available: \
![extra wacky pieces](./src/Photos/wacky_pieces.JPG)
- Can't hold pieces

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
