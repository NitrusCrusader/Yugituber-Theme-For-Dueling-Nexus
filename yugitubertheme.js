/* ==UserStyle==
@name           Dueling Nexus Yugituber Theme
@namespace      Nitrus' 2AM Creation
@author         NitrusCrusader
@description    `A cursed Nexus theme I made on my own time at 2AM. Honestly, I don't know why brain thought this would be a good idea, but hey, I did it and that's all that matters. Enjoy being able to look at your favorite Yu-Gi-Oh! role models every time you duel!`
@version        20210318.11.32
@license        CC0-1.0
@preprocessor   uso
@advanced text crdpctrsz "Card Pic Size (width: e.g. 250px, 70%), default: (enter: auto)" "auto"
@advanced dropdown sock_ext_stl "Are you using Sock's Chat Improvements Plugin?" {
	SockES_no "No*" <<<EOT  EOT;
SockES_yes "Yes" <<<EOT /* Sock's extension styling *\/
  #game-chat-area button:nth-child(1) {
    box-shadow: inset 0 0 0 0 transparent;
    background-color: transparent;
    text-shadow: 0 0 15px white;
    margin-left: 10px;
    margin-right: 0px;
    padding-left: 0px;
    padding-right: 10px;
  }

  #game-chat-area button:nth-child(3) {
    box-shadow: inset 0 0 0 0 transparent;
    background-color: transparent;
    text-shadow: 0 0 15px white;
    margin-left: 0px;
    margin-right: 0px;
    padding-left: 0px;
    padding-right: 0px;
  }

  #game-chat-area button:nth-child(2) {
    box-shadow: inset 0 0 0 0 transparent;
    background-color: transparent;
    text-shadow: 0 0 15px white;
    margin-left: 10px;
    margin-right: 14px;
    padding-left: 0px;
    padding-right: 0px;
  }

  #ci-ext-show-card-column {
    margin-top: 10px;
    border-radius: 10px;
    border: 1px solid rgba(187, 225, 250, 0.7) !important;
    margin-right: 5px !important;
      margin-left: 0px !important;
  }

  #ci-ext-show-chat-log {
    margin-top: 10px;
    border-radius: 10px;
    border: 1px solid rgba(187, 225, 250, 0.7) !important;
    margin-right: 5px !important;
      margin-left: 0px !important;
  }

  #ci-ext-show-event-log {
    margin-top: 10px;
    border-radius: 10px;
    border: 1px solid rgba(187, 225, 250, 0.7) !important;
    margin-right: 5px !important;
      margin-left: 0px !important;
  }

  #ci-ext-show-options {
    margin-top: 10px;
    border-radius: 10px;
    border: 1px solid rgba(187, 225, 250, 0.7) !important;
    margin-right: 5px !important;
      margin-left: 0px !important;
  }

  #ci-ext-event-log,
  #ci-ext-log,
  #ci-ext-options {
    background-color: transparent;
    height: 100vh;
    padding-left: 10px;
    min-height: 100vh;
    border-bottom-style: solid;
    border-bottom-width: 115px;
    border-color: transparent;
  }

  #ci-ext-misc-buttons > button {

  }

  #ci-ext-misc {
    padding-top: 0px;
    margin-top: 0px;
  }
  #ci-ext-misc-buttons {
    padding-top: 5px;
    padding-bottom: 5px;
    background-color: transparent;
  }

  #ci-ext-misc {
    border-right: 1px solid rgba(187, 225, 250, 0.7) !important;
    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(7px);
  }

  #card-description-box {
    background: none !important;
    border: 0px !important;
  }

  #ci-ext-chat-container {
    width: 100%;
    border-top: 0px;
    padding-bottom: 0px;
    padding-top: 20px;
  }

  #ci-ext-show-card-column {
    margin-left: 10px !important;
  }

  #ci-ext-show-options {
    margin-right: 10px !important;
  }

  #ci-ext-misc-buttons > button {
    background-color: rgba(0, 0, 0, 0.8);
    transition: 0.2s;
  }

  #ci-ext-misc-buttons > button.current {
    background-color: rgba(50, 50, 50, 0.7);
  }

  #ci-ext-misc-buttons > button:hover {
    background-color: rgba(50, 50, 50, 0.7);
  }

  #game-player-name {
    background: none;
    text-shadow: 0 1px 2px black !important;
  }

  #game-opponent-name {
    background: none;
    text-shadow: 0 1px 2px black !important;
  }

  #game-column {
    margin: 0px 0px 0px 0px;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    padding-top: 0;
  }

  #card-column {
    border-right: 0;
    background-color: transparent;
    padding-top: 5px;
    backdrop-filter: none;
    box-shadow: 0px 0px 0px 0px black;
  }

    #game-chat-textbox {
    width: 100%;
    border-radius: 10px !important;
  }

    #ci-ext-button-minimize-chat, #ci-ext-button-clear-chat {
    margin-left: 5px !important;
    margin-bottom: 10px !important;
    border-radius: 10px !important;
    border: 1px solid rgba(187, 225, 250, 0.7) !important;
    background-color: transparent !important;
    width: 90%;
        font-size: 9px;
        padding-left: 0px;
        padding-right: 0.1vw;
  }

    #ci-ext-button-minimize-chat:hover, #ci-ext-button-clear-chat:hover {
    background-color: rgba(50, 50, 50, 0.7) !important;
  }

    #ci-ext-chat-buttons-cell {
    text-align: center;
  }

    #ci-ext-chat-table > tr:nth-child(2) {
    text-align: center;
    display: grid;
    grid-template-columns: 75% 25%;
  }

    #ci-ext-chat-cell {
    width: 97%;
  }

    #ci-ext-chat-buttons-cell{
    width: 93%;
    display: grid;
    grid-template-columns: auto auto;
  }


  /* Sock's extension styling *\/ EOT;

}
@advanced dropdown attack-sword "Attack Sword" {
	default-atk-sword "Default Attack Sword*" <<<EOT  EOT;
blue-atk-sword "Blue Attack Sword" <<<EOT .game-attack-animation {
      background: url(https://raw.githubusercontent.com/sefeiba/duelingnexus/master/test/blue-attack-sword.svg) no-repeat;
      background-size: cover;
      display: block;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      padding-bottom: 100%;
  } EOT;
eldorado-atk-sword "Eldorado Attack Sword" <<<EOT .game-attack-animation {
      background: url(https://raw.githubusercontent.com/sefeiba/duelingnexus/master/test/eldorado-attack-sword.svg) no-repeat;
      background-size: cover;
      display: block;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      padding-bottom: 100%;
  } EOT;
eldorado-atk-knife "Eldorado Attack Knife" <<<EOT .game-attack-animation {
      background: url(https://raw.githubusercontent.com/sefeiba/duelingnexus/master/test/eldorado-attack-knife.svg) no-repeat;
      background-size: cover;
      display: block;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      padding-bottom: 100%;
  } EOT;
eldorado-atk-arrow "Eldorado Attack Arrow" <<<EOT .game-attack-animation {
      background: url(https://raw.githubusercontent.com/sefeiba/duelingnexus/master/test/eldorado-attack-arrow.svg) no-repeat;
      background-size: cover;
      display: block;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      padding-bottom: 100%;
  } EOT;
purple-pnk-atk-sword "Purple Pink Attack Sword" <<<EOT .game-attack-animation {
      background: url(https://raw.githubusercontent.com/sefeiba/duelingnexus/master/test/purple-pink-sword.svg) no-repeat;
      background-size: cover;
      display: block;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      padding-bottom: 100%;
  } EOT;
blue-gold-atk-sword "Blue Golden Attack Sword" <<<EOT .game-attack-animation {
      background: url(https://raw.githubusercontent.com/sefeiba/duelingnexus/master/test/blue-golden-sword.svg) no-repeat;
      background-size: cover;
      display: block;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      padding-bottom: 100%;
  } EOT;
white-glow-atk-sword "White Glowing Attack Sword" <<<EOT .game-attack-animation {
      background: url(https://raw.githubusercontent.com/sefeiba/duelingnexus/master/test/glowing-attack-sword.svg) no-repeat;
      background-size: cover;
      display: block;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      padding-bottom: 100%;
  } EOT;

}
@advanced dropdown background "Duel Background Image" {
bg1 "Yugituber Background" <<<EOT 
https://cdn.discordapp.com/attachments/674809040689430528/839749361301717022/YugituberWallpaper.jpg EOT;


}
@advanced dropdown blur_effect-toggle "Blur Effect" {
	blur-effect-on "Enable*" <<<EOT  EOT;
blur-effect-off "Disable" <<<EOT * {
    backdrop-filter: none !important;
}
#game-rps-container {
    background-color: rgba(0, 0, 0, 0.85);
}
.engine-window {
    background-color: rgba(0, 0, 0, 0.85);
}
#game-tooltip,
#game-end-window,
#game-waiting-window,
#game-message-window,
#options-window {
    background-color: rgba(0, 0, 0, 0.85);
}
#card-column {
    background-color: rgba(0, 0, 0, 0.9);
} EOT;

}

==/UserStyle== */

@-moz-document url-prefix("https://duelingnexus.com/game/") {
  @font-face {
    font-family: "Source Sans Pro";
    src: url("https://rawcdn.githack.com/sefeiba/duelingnexus/c46f2a745dbf849dff5bccbebb792e5d63fcd60d/Source_Sans_Pro/SourceSansPro-Regular.ttf") format("truetype");
    font-weight: 400;
    text-rendering: optimizeLegibility;
  }

  @font-face {
    font-family: "Source Sans Pro";
    src: url("https://rawcdn.githack.com/sefeiba/duelingnexus/c46f2a745dbf849dff5bccbebb792e5d63fcd60d/Source_Sans_Pro/SourceSansPro-SemiBold.ttf") format("truetype");
    font-weight: 600;
    text-rendering: optimizeLegibility;
  }

  @font-face {
    font-family: "Source Sans Pro";
    src: url("https://rawcdn.githack.com/sefeiba/duelingnexus/c46f2a745dbf849dff5bccbebb792e5d63fcd60d/Source_Sans_Pro/SourceSansPro-Bold.ttf") format("truetype");
    font-weight: 700;
    text-rendering: optimizeLegibility;
  }

  @font-face {
    font-family: "Source Sans Pro";
    src: url("https://rawcdn.githack.com/sefeiba/duelingnexus/c46f2a745dbf849dff5bccbebb792e5d63fcd60d/Source_Sans_Pro/SourceSansPro-Black.ttf") format("truetype");
    font-weight: 900;
    text-rendering: optimizeLegibility;
  }

  body {
    margin: 0;
    overflow: hidden;
    color: #f0f0f0;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 14px;
  }

  html {
    background: url("/*[[background]]*/") no-repeat center center fixed !important;
    background-size: cover !important;
    /*
    background-position: 0% 0% !important;
    background-size: 123.5% !important;
    */
  }

 
  #game-field-player-hand > div:nth-child(1) > img:nth-child(n) {
  height: 80px !important;
}

  #game-announce-card-text {
    box-shadow: 0 0 3px 0px black, 0px 0px 2px 0.2px rgba(187, 225, 250, 0.7) inset, inset 0 0 10px 1px black;
    border-radius: 10px;
    color: white;
    border: 1px solid rgba(187, 225, 250, 0.7);
    width: -webkit-fill-available;
    margin-right: 6px;
    margin-left: 6px;
    margin-bottom: 3px;
    margin-top: 6px;
    padding: 0px 0px 0px 10px;
    background-color: rgba(10, 10, 10, 0.5);
    transition: 0.2s;
    height: 30px;
    font-family: "Source Sans Pro", sans-serif;
    font-weight: 600;
  }

  #game-announce-card-text:hover {
    box-shadow: 0 0 3px 0px black, 0px 0px 2px 0.2px rgba(187, 225, 250, 0.7) inset, inset 0 0 10px 1px black;
    border-radius: 10px;
    color: white;
    border: 1px solid rgba(187, 225, 250, 0.7);
    background-color: rgba(50, 50, 50, 0.7);
  }

  #game-announce-card-list {
    display: grid;
    /* grid-template-columns: repeat(2, 1fr); */
  }

  #game-announce-card-list > button:nth-child(n) {
    border-radius: 10px;
    margin: 6px;
    margin-bottom: 3px;
  }

  #game-field > tbody > tr:nth-child(1) > td:nth-child(5),
  #game-field > tbody > tr:nth-child(1) > td:nth-child(1) {
    padding: 0px;
  }

  #options-window > hr:nth-child(2) {
    display: none;
  }

  #options-speed-value, #options-music-value, #options-sounds-value {
    width: 35px;
    text-align: right;
  }

  input[type=range] {
    -webkit-appearance: none;
    background-color: #47525D;
    height: 10px;
    border-radius: 10px;
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    background-color: rgba(187, 225, 250, 0.7);
    width: 10px;
    height: 10px;
    border-radius: 10px;
  }


  input[type=checkbox] + label {
    margin-left: -22px;
    cursor: pointer;
  }

  input[type=checkbox] + label:before {
    content: "\25CF";
    border: 0px solid rgba(187, 225, 250, 0.7);
    border-radius: 5px;
    display: inline-block;
    height: 15px;
    width: 17px;
    padding-left: 0.2em;
    padding-bottom: 0.3em;
    margin-right: 10px;
    vertical-align: bottom;
    color: transparent;
    transition: .2s;
    background-color: #47525D;
  }

  input[type=checkbox]:checked + label:before {
    background-color: #47525D;
    border-color: #47525D;
    color: rgba(187, 225, 250, 0.7);
  }

  #options-window > p:nth-child(3), #options-window > p:nth-child(4) {
    padding: 1px;
  }

  #game-option-window {
    z-index: 202;
  }

  #game-tooltip-overlay-extension > img:nth-child(n) {
    margin-top: 6px;
    margin-right: 3px;
    margin-left: 3px;
  }

  #game-announce-list > div:nth-child(n) {
    margin-bottom: 6px;
  }

  /*[[attack-sword]]*/

  #game-loading-text, #game-result-container > p {
    margin-top: 5vh;
    margin-right: 1vw;
    margin-left: 1vw;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 50%, rgba(0, 0, 0, 0) 100%);
  }

  #game-rps-first, #game-rps-second {
    backdrop-filter: none !important;
    width: 15vw;
    border-radius: 10px;
    margin: 6px;
  }

  #game-rps-container {
    background-color: rgba(0, 0, 0, 0.7);
    height: 100vh;
    margin-top: 0px;
    padding-top: 5vh;
  }

  #game-rps-container > * {
    transform: translateY(10vh);
  }

  #game-action-menu {
    min-width: 8vw;
  }

  #game-room-players {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto auto auto auto auto repeat(4, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }

  #game-room-players > h4 {
    grid-area: 1 / 1 / 2 / 6;
  }

  #game-room-players-table {
    grid-area: 2 / 1 / 3 / 6;
  }

  #game-room-left-buttons {
    grid-area: 3 / 1 / 4 / 4;
  }

  #game-room-right-buttons {
    grid-area: 3 / 4 / 5 / 5;
    margin-bottom: 0px;
  }

  #game-room-deck-selection {
    grid-area: 4 / 1 / 5 / 4;
  }

  #game-deck-dropdown {
    margin-top: 6px;
    backdrop-filter: none !important;
  }

  #game-start-button {
    margin-top: 0px;
    backdrop-filter: none !important;
  }

  #game-room-left-buttons {
    margin-bottom: 0px;
  }

  #game-not-ready-button, #game-ready-button {
    margin-bottom: 9px !important;
    backdrop-filter: none !important;
  }

  #game-room-player1-kick-button, #game-room-player2-kick-button, #game-room-player3-kick-button, #game-room-player4-kick-button {
    border-radius: 10px;
    width: 40%;
    transform: translate(6px);
    backdrop-filter: none !important;
  }

  #game-room-players-table > tbody > tr:nth-child(n) > td:nth-child(3) {
    text-align: center;
  }

  #game-to-duelist-button, #game-to-spectator-button, #game-ready-button, #options-reset-button, #options-hide-button, #game-yesno-yes-button, #game-yesno-no-button, #game-end-button, #game-option-list > button:nth-child(n) {
    backdrop-filter: none !important;
  }

  .game-field-card, .engine-button, .game-field-zone > div > p, .game-card-negated
  {
    cursor: pointer;
  }
  #card-picture {
    cursor: grab;
  }
  #card-picture:active {
    cursor: grabbing;
  }

  #options-window > hr:nth-child(5) {
    display: none;
  }

  #options-window > p:nth-child(6) {
    display: grid;
    grid-template-columns: auto auto;
    margin-top: 12px;
  }

  #options-window > hr:nth-child(2) {
    color: rgba(187, 225, 250, 0.7);
    background-color: rgba(187, 225, 250, 0.7);
  }

  #game-position-def-up {
    margin-right: auto !important;
  }

  .engine-window-frame {
    padding: 6px;
    padding-right: 1vw;
    padding-left: 1vw;
  }

  /*testing*/
  .game-selection-card-image,
  #game-position-atk-up,
  #game-position-def-up,
  #game-position-atk-down,
  #game-position-def-down {
    box-shadow: 0 0 0px 0px #bbe1fa;
  }

  .game-selection-card-image:hover,
  #game-position-atk-up:hover,
  #game-position-def-up:hover,
  #game-position-atk-down:hover,
  #game-position-def-down:hover {

    outline: 0 solid rgba(0, 0, 0, 0);

    animation-name: game-card-hover;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: linear;
    cursor: pointer;
    filter: none;

  }

  @keyframes game-card-hover {
    from {
      box-shadow: 0 0 0.23vw 0.23vw #f4eeff;
    }
    50% {
      box-shadow: 0 0 0.23vw 0.23vw #bbe1fa;
    }
    to {
      box-shadow: 0 0 0.23vw 0.23vw #e0fffb;
    }
  }

  .game-selection-card {
    margin: 0px;
  }

  #game-position-window > p {
    margin-top: 6px;
    margin-bottom: 9px;
  }

  #game-selection-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(7.5em, 0fr));
    justify-items: center;
    justify-content: center;
    row-gap: 1em;
    padding-top: 2em;
    padding-bottom: 2em;
    column-gap: 0.5em;
  }

  .game-field-zone-content p,
  #game-player-name,
  #game-opponent-name,
  .game-avatar-area,
  #card-if-monster,
  #card-if-spell {
    font-weight: 600;
  }

  #card-if-monster, #card-if-spell {
    display: inline-block;
    margin-bottom: 8px;
  }

  #game-player-name,
  #game-opponent-name {
    white-space: nowrap;
  }

  #card-id {
    margin: 0px 0px 0px 0px;
  }

  #game-option-list {
    display: grid;
    /*
    grid-template-columns: repeat(2, 1fr);
    */
  }

  #game-option-list > button:nth-child(n) {
    border-radius: 10px;
    margin: 6px;
    margin-bottom: 3px;
  }

  *:focus {outline: none;}

  #ci-ext-misc-buttons {
    background-color: rgba(0, 0, 0, 0.8);
  }

  #game-selection-window {
    box-shadow: 3px 0 3px 0px black;
    width: 75%;
    margin-left: 25%;
    border-right: 0px;
    border-left: 0px;
    border-radius: 0px;
    margin-right: 0px;
    z-index: 201;
    padding: 0px;
    max-height: 100%;
    overflow: auto;
  }

  #game-container {
    margin: 24px 16px 0px 16px;
    margin: 0px 0px 0px 0px;
  }

  #game-column {
    margin: 0px 0px 0px 0px;
    padding-top: 24px;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    padding-left: 0px;
    text-align: -webkit-center;
  }

  #game-chat-area {
    left: 0px;
    bottom: 0px;
    width: 25%;
    min-width: 25%;
  }

  #game-chat-textbox {
    box-shadow: 0 0 3px 0px black, 0px 0px 2px 0.2px rgba(187, 225, 250, 0.7) inset, inset 0 0 10px 1px black;
    border-radius: 10px;
    color: white;
    border: 1px solid rgba(187, 225, 250, 0.7);
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    padding-left: 10px;
    width: calc(25vw - 20px);
    background-color: rgba(10, 10, 10, 0.5);
    transition: 0.2s;
  }

  #game-chat-textbox:hover {
    box-shadow: 0 0 3px 0px black, 0px 0px 2px 0.2px rgba(187, 225, 250, 0.7) inset, inset 0 0 10px 1px black;
    border-radius: 10px;
    color: white;
    border: 1px solid rgba(187, 225, 250, 0.7);
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    padding-left: 10px;
    background-color: rgba(50, 50, 50, 0.7);
  }

  #game-chat-content {
    background-color: transparent;
    margin-left: 10px;
    margin-right: 10px;
  }

  .game-field-zone {
    position: relative;
    border: 0px;
    background-size: cover !important;
  }

  .game-field-zone:hover {
    border-radius: 0.2vw;
    animation-name: game-field-zone-hover;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: ease-in-out;
    background-color: transparent;
  }

  @keyframes game-field-zone-hover {
    0% {
      box-shadow: inset 0 0 0.4vw rgba(187, 225, 250, 0.7),
        inset 0.8vw 0 0.8vw rgb(46, 134, 222, 0.7),
        inset -0.8vw 0 0.8vw rgb(46, 134, 222, 0.7),
        0 0 0.4vw rgb(46, 134, 222, 0.7);
    }
    100% {
      box-shadow: inset 0 0 0.8vw rgba(187, 225, 250, 0.7),
        inset 0.8vw 0 0.8vw #2e86de,
        inset -0.8vw 0 0.8vw #2e86de,
        0 0 0.4vw #2e86de;
    }
  }

  #card-description-box {
    background-color: rgba(0, 0, 0, 0);
    border: 0px solid;
    padding: 0px 4px 0px 4px;
    resize: vertical;
    overflow: auto;
  }

  #card-description-box > p {
    margin: 4px 0px 4px 0px;
  }

  #card-name.engine-dark-box {
    background-color: rgba(0, 0, 0, 0);
  }
  #card-name {
    padding: 0px 0px 0px 0px;
    font-weight: 600;
    margin-bottom: 8px;
  }
  #card-column {
    background-color: rgba(0, 0, 0, 0.8);
    min-height: 100vh;
    padding: 20px 10px 16px 10px;
    height: 100vh;
    max-height: 100vh;
    border-bottom-style: solid;
    border-bottom-width: 52px;
    border-color: transparent;
    border-right: 1px solid rgba(187, 225, 250, 0.7);
    box-shadow: 0px 0px 3px 0px black;
    backdrop-filter: blur(7px);
  }

  #card-picture {
    box-shadow: black 0px 0px 6px 0px;
    border-radius: 0.2vw;
    max-width: /*[[crdpctrsz]]*/ ;
  }

  #card-picture-container {
    margin: 4px 0px 4px 0px;
  }

  #game-highlight-card-img {
    box-shadow: black 0px 0px 6px 0px;
    border-radius: 0.2vw;
    width: /*[[crdpctrsz]]*/ ;
  }

  #game-field-extra-monster1.game-field-zone {
    background: url("https://cdn.discordapp.com/attachments/674809040689430528/839422782043717673/dzeeffextramonsterzone.png")
      no-repeat center center;
  }

  #game-field-extra-monster2.game-field-zone {
    background: url("https://cdn.discordapp.com/attachments/674809040689430528/839426679633477652/dzeeffextramonsterzone_1.png")
      no-repeat center center;
  }

  #game-field-opponent-monster5.game-field-zone,
  #game-field-opponent-monster4.game-field-zone,
  #game-field-opponent-monster3.game-field-zone,
  #game-field-opponent-monster2.game-field-zone,
  #game-field-opponent-monster1.game-field-zone {
    background: url("https://cdn.discordapp.com/attachments/674809040689430528/839426679776084008/cimomonsterzones_1.png")
      no-repeat center center;
  }

  #game-field-player-monster5.game-field-zone,
  #game-field-player-monster4.game-field-zone,
  #game-field-player-monster3.game-field-zone,
  #game-field-player-monster2.game-field-zone,
  #game-field-player-monster1.game-field-zone {
    background: url("https://cdn.discordapp.com/attachments/674809040689430528/839399965326311454/cimomonsterzones.png")
      no-repeat center center;
  }

  #game-field-player-spell6.game-field-zone {
    background: url("https://cdn.discordapp.com/attachments/674809040689430528/839422778226245642/nyhmnimfieldspellzone.png")
      no-repeat center center;
  }

  #game-field-opponent-graveyard.game-field-zone {
    background: url("https://cdn.discordapp.com/attachments/674809040689430528/839426679474880543/tsx1graveyard_1.png")
      no-repeat center center;
  }

  #game-field-opponent-spell6.game-field-zone {
    background: url("https://cdn.discordapp.com/attachments/674809040689430528/839426679579213844/nyhmnimfieldspellzone_1.png")
      no-repeat center center;
  }

  #game-field-player-graveyard.game-field-zone {
    background: url("https://cdn.discordapp.com/attachments/674809040689430528/839422774308634644/tsx1graveyard.png")
      no-repeat center center;
  }

  #game-field-opponent-deck.game-field-zone,
  #game-field-opponent-extra.game-field-zone {
    background: url(https://rawcdn.githack.com/sefeiba/duelingnexus/b434deb28f7b96ef5d972b86e6152baec71a989c/bns666.svg)
      no-repeat center center;
  }

  #game-field-player-deck.game-field-zone,
  #game-field-player-extra.game-field-zone {
    background: url(https://rawcdn.githack.com/sefeiba/duelingnexus/b434deb28f7b96ef5d972b86e6152baec71a989c/bns666.svg)
      no-repeat center center;
  }

  #game-field-player-spell5.game-field-zone {
    background: url("https://cdn.discordapp.com/attachments/674809040689430528/839399971987783680/trifpendzoneright.png")
      no-repeat center center;
  }

  #game-field-player-spell4.game-field-zone {
    background: url("https://cdn.discordapp.com/attachments/674809040689430528/839399968917291008/mbtspelltrapzones.png")
      no-repeat center center;
  }

  #game-field-player-spell3.game-field-zone {
    background: url("https://cdn.discordapp.com/attachments/674809040689430528/839399968917291008/mbtspelltrapzones.png")
      no-repeat center center;
  }

  #game-field-player-spell2.game-field-zone {
    background: url("https://cdn.discordapp.com/attachments/674809040689430528/839399968917291008/mbtspelltrapzones.png")
      no-repeat center center;
  }

  #game-field-player-spell1.game-field-zone {
    background: url("https://cdn.discordapp.com/attachments/674809040689430528/839399982255439882/trifpendzoneleft.png")
      no-repeat center center;
  }

  #game-field-opponent-spell5.game-field-zone {
    background: url("https://cdn.discordapp.com/attachments/674809040689430528/839426684512239636/trifpendzoneright_1.png")
      no-repeat center center;
  }

  #game-field-opponent-spell4.game-field-zone {
    background: url("https://cdn.discordapp.com/attachments/674809040689430528/839426679620632595/mbtspelltrapzones_1.png")
      no-repeat center center;
  }

  #game-field-opponent-spell3.game-field-zone {
    background: url("https://cdn.discordapp.com/attachments/674809040689430528/839426679620632595/mbtspelltrapzones_1.png")
      no-repeat center center;
  }

  #game-field-opponent-spell2.game-field-zone {
    background: url("https://cdn.discordapp.com/attachments/674809040689430528/839426679620632595/mbtspelltrapzones_1.png")
      no-repeat center center;
  }

  #game-field-opponent-spell1.game-field-zone {
    background: url("https://cdn.discordapp.com/attachments/674809040689430528/839426690760835092/trifpendzoneleft_1.png")
      no-repeat center center;
  }

  #game-field-opponent-banished.game-field-zone {
    position: relative;
    background: url("https://cdn.discordapp.com/attachments/674809040689430528/839426661816205342/farfabanishpile_1.png")
      no-repeat center center;
  }

  #game-field-opponent-banished div.game-field-zone-content {
    margin-top: 0;
    margin-left: 0;
  }

  #game-field-player-banished.game-field-zone {
    position: relative;
    background: url("https://cdn.discordapp.com/attachments/674809040689430528/839423118317715466/farfabanishpile.png")
      no-repeat center center;
  }

  #game-field-player-banished div.game-field-zone-content {
    margin-top: 0;
    margin-left: 0;
  }

  #game-field-player-banished, #game-field-player-graveyard, #game-field-player-spell6 {
    transform: translate(0, 50%);
  }

  #game-field-opponent-banished, #game-field-opponent-graveyard, #game-field-opponent-spell6 {
    transform: translate(0, -50%);
  }

  /*
  #game-field-opponent-spell1.game-field-zone:hover,
  #game-field-opponent-spell2.game-field-zone:hover,
  #game-field-opponent-spell3.game-field-zone:hover,
  #game-field-opponent-spell4.game-field-zone:hover,
  #game-field-opponent-spell5.game-field-zone:hover,
  #game-field-player-spell1.game-field-zone:hover,
  #game-field-player-spell2.game-field-zone:hover,
  #game-field-player-spell3.game-field-zone:hover,
  #game-field-player-spell4.game-field-zone:hover,
  #game-field-player-spell5.game-field-zone:hover,
  #game-field-player-graveyard.game-field-zone:hover,
  #game-field-opponent-graveyard.game-field-zone:hover,
  #game-field-player-spell6.game-field-zone:hover,
  #game-field-opponent-spell6.game-field-zone:hover,
  #game-field-player-banished.game-field-zone:hover,
  #game-field-opponent-banished.game-field-zone:hover {
  box-shadow: none;
} 
  #game-field-opponent-deck.game-field-zone:hover,
  #game-field-opponent-extra.game-field-zone:hover,
  #game-field-player-deck.game-field-zone:hover,
  #game-field-player-extra.game-field-zone:hover {
  box-shadow: none;
}
  */
  #game-field {
    background-color: rgba(0, 0, 0, 0);
  }

  /*
  @keyframes game-field-zone-flash {
  from {
  filter: brightness(80%);
  -webkit-filter: brightness(80%);
  box-shadow: inset 0 0 0 #2e86de, 0 0 0 #2e86de;
  border-radius: 0.4vw;
}
  to {
  filter: brightness(120%);
  -webkit-filter: brightness(120%);
  box-shadow: inset 0 0 0.8vw #2e86de, 0 0 0.4vw #2e86de;
  border-radius: 0.4vw;
}
}

  .game-field-zone.game-field-zone-selectable {
  cursor: pointer;
  animation: 0.5s game-field-zone-flash infinite alternate linear;
}
  */

  @keyframes game-field-zone-flash {
    0% {
      box-shadow: inset 0 0 0.4vw rgba(187, 225, 250, 0),
        inset 0 0 0.8vw rgb(46, 134, 222, 0),
        0 0 0.4vw rgb(46, 134, 222, 0);
    }
    100% {
      box-shadow: inset 0 0 0.4vw rgba(187, 225, 250, 0.7),
        inset 0 0 0.8vw #2e86de,
        0 0 0.4vw #2e86de;
    }
  }

  .game-field-zone.game-field-zone-selectable {
    cursor: pointer;
    border-radius: 0.2vw;
    animation-name: game-field-zone-flash;
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: ease-out;
    background-color: transparent;
  }

  @keyframes game-selectable-border {
    from {
      box-shadow: 0 0 0.13vw 0.13vw #f4eeff;
    }
    to {
      box-shadow: 0 0 0.23vw 0.23vw #bbe1fa;
    }
  }

  .game-selectable-card {
    outline: 0 solid rgba(0, 0, 0, 0);
    animation-name: game-selectable-border;
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: ease-out;
    cursor: pointer;
  }

  @keyframes game-selected-card-border {
    from {
      box-shadow: 0 0 0.23vw 0.23vw #f6e5f5;
    }
    to {
      box-shadow: 0 0 0.23vw 0.23vw #fbbedf;
    }
  }

  .game-selected-card {

    outline: 0 solid rgba(0, 0, 0, 0);

    animation-name: game-selected-card-border;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: ease-out;
    cursor: pointer;
    filter: none;
    /*
    filter: brightness(140%);
    -webkit-filter: brightness(140%);
    */
  }

  .game-field-zone-linked {
    background: url(https://rawcdn.githack.com/sefeiba/duelingnexus/3e339f537272929619e4b066c7409b71ffa72dc2/linkzone.svg)
      no-repeat center center;
    border-radius: 0.2vw !important;
    animation-name: game-field-zone-hover;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: ease-in-out;
    background-color: transparent;
  }

  #game-field-player-spell6.game-field-zone-disabled,
  #game-field-player-spell5.game-field-zone-disabled,
  #game-field-player-spell4.game-field-zone-disabled,
  #game-field-player-spell3.game-field-zone-disabled,
  #game-field-player-spell2.game-field-zone-disabled,
  #game-field-player-spell1.game-field-zone-disabled,
  #game-field-opponent-spell6.game-field-zone-disabled,
  #game-field-opponent-spell5.game-field-zone-disabled,
  #game-field-opponent-spell4.game-field-zone-disabled,
  #game-field-opponent-spell3.game-field-zone-disabled,
  #game-field-opponent-spell2.game-field-zone-disabled,
  #game-field-opponent-spell1.game-field-zone-disabled {
    background: url(https://rawcdn.githack.com/sefeiba/duelingnexus/e2bd8ab6fbca64984c96e00bc26e6e59913fe7f6/STBdisabled.svg)
      no-repeat center center;
  }

  #game-field-player-monster5.game-field-zone-disabled,
  #game-field-player-monster4.game-field-zone-disabled,
  #game-field-player-monster3.game-field-zone-disabled,
  #game-field-player-monster2.game-field-zone-disabled,
  #game-field-player-monster1.game-field-zone-disabled,
  #game-field-opponent-monster5.game-field-zone-disabled,
  #game-field-opponent-monster4.game-field-zone-disabled,
  #game-field-opponent-monster3.game-field-zone-disabled,
  #game-field-opponent-monster2.game-field-zone-disabled,
  #game-field-opponent-monster1.game-field-zone-disabled {
    background: url(https://rawcdn.githack.com/sefeiba/duelingnexus/e2bd8ab6fbca64984c96e00bc26e6e59913fe7f6/MZdisabled.svg)
      no-repeat center center;
  }

  .game-field-zone-disabled:hover {
    border-radius: 0.2vw !important;
    animation-name: game-field-zone-disabled-hover;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: ease-in-out;
    background-color: transparent;
  }

  @keyframes game-field-zone-disabled-hover {
    0% {
      box-shadow: inset 0 0 0.4vw rgb(250, 209, 209, 0.7),
        inset 0.8vw 0 0.8vw rgb(238, 82, 83, 0.7),
        inset -0.8vw 0 0.8vw rgb(238, 82, 83, 0.7),
        0 0 0.4vw rgb(238, 82, 83, 0.7);
    }
    100% {
      box-shadow: inset 0 0 0.8vw rgb(250, 209, 209, 0.7),
        inset 0.8vw 0 0.8vw #ee5253,
        inset -0.8vw 0 0.8vw #ee5253,
        0 0 0.4vw #ee5253;
    }
  }

  #game-dp-button {
    color: white;
    border-radius: 10px;
    position: fixed;
    bottom: 250px;
    left: calc(25vw + 10px);
  }

  #game-sp-button {
    color: white;
    border-radius: 10px;
    position: fixed;
    bottom: 210px;
    left: calc(25vw + 10px);
  }

  #game-mp1-button {
    color: white;
    border-radius: 10px;
    position: fixed;
    bottom: 170px;
    left: calc(25vw + 10px);
  }

  #game-bp-button {
    color: white;
    border-radius: 10px;
    position: fixed;
    bottom: 130px;
    left: calc(25vw + 10px);
  }

  #game-mp2-button {
    color: white;
    border-radius: 10px;
    position: fixed;
    bottom: 90px;
    left: calc(25vw + 10px);
  }

  #game-ep-button {
    color: white;
    border-radius: 10px;
    position: fixed;
    bottom: 50px;
    left: calc(25vw + 10px);
  }

  .game-phase-button {
    width: 5vw;
    margin: 0px !important;
  }

  #game-cancel-button.engine-button,
  #game-force-chain-button.engine-button {
    transition: 0.2s;
    border: 1px solid rgba(187, 225, 250, 0.7);
    text-align: left;
    width: 7vw;
    border-radius: 10px 0px 0px 10px;
    margin: 0px !important;
  }

  #game-cancel-button {
    position: fixed;
    bottom: 98px;
    right: -5px;
    height: 40px;
  }

  #game-force-chain-button {
    position: fixed;
    bottom: 50px;
    right: -5px;
    height: 40px;
  }

  #options-show-button {
    transition: 0.2s;
    border: 1px solid rgba(187, 225, 250, 0.7);
    min-width: 8vw;
    border-radius: 10px;
    position: fixed;
    bottom: 10px;
    right: 10px;
    white-space: nowrap;
  }

  #options-window {
    right: 10px;
    bottom: 10px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }


  #game-cancel-button.engine-button:hover,
  #game-force-chain-button.engine-button:hover {
    border: 1px solid rgba(187, 225, 250, 0.7);

    width: 7vw;
  }



  #game-action-menu.engine-button,
  #game-action-sp-summon.engine-button,
  #game-action-set-monster.engine-button,
  #game-action-attack.engine-button,
  #game-action-summon.engine-button,
  #game-action-attack.engine-button,
  #game-action-set-spell.engine-button,
  #game-action-repos.engine-button,
  #game-action-view.engine-button,
  #game-action-view-materials.engine-button,
  #game-surrender-button.engine-button,
  #game-action-view-materials.engine-button,
  #game-action-activate.engine-button {
    border: 1px solid rgba(187, 225, 250, 0.7);
    border-radius: 10px;
  }

  .engine-button {
    font-family: "Source Sans Pro", sans-serif;
    font-weight: 600;
    border: 1px solid rgba(187, 225, 250, 0.7);
    background-color: rgb(10, 10, 10, 0.5);
    transition: 0.2s;
    box-shadow: 0 0 3px 0px black, 0px 0px 2px 0.2px rgba(187, 225, 250, 0.7) inset, inset 0 0 10px 1px black;
    backdrop-filter: blur(7px);
  }

  .engine-button:hover {
    box-shadow: 0 0 3px 0px black, 0px 0px 2px 0.2px rgba(187, 225, 250, 0.7) inset, inset 0 0 10px 1px black;
  }

  #game-yesno-yes-button,
  #game-yesno-no-button {
    border-radius: 10px;
    margin: 6px;
  }

  #game-yesno-window > p {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  #options-reset-button,
  #options-hide-button {
    border-radius: 10px;
    margin: 6px;
    margin-top: 0px;
    margin-bottom: 3px;
  }

  #game-end-button,
  #game-to-spectator-button,
  #game-to-duelist-button,
  #game-not-ready-button,
  #game-ready-button,
  #game-start-button,
  #game-deck-dropdown {
    border-radius: 10px;
    width: -webkit-fill-available;
    margin-right: 6px;
    margin-left: 6px;
    margin-bottom: 3px;
  }

  .game-field-zone-activate {
    /*
    display: table-cell;
    vertical-align: middle;
    filter: hue-rotate(70deg) blur(1px) brightness(150%) opacity(90%) drop-shadow(0 0 0 #bbe1fa);
    */
    animation: 4s game-rotate360 infinite linear;
    background: url(https://raw.githubusercontent.com/sefeiba/duelingnexus/master/test/act-blue.svg) no-repeat;
    background-size: cover;
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 0%;
    padding-bottom: 100%;
    filter: none;
  }

  .engine-window {
    box-shadow: 0 0 3px 0px black, 0px 0px 2px 0.2px rgba(187, 225, 250, 0.7) inset;
    border: 1px solid rgba(187, 225, 250, 0.7);
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(7px);
  }

  #game-tooltip,
  #game-end-window,
  #game-waiting-window,
  #game-message-window,
  #options-window {
    border: 1px solid rgba(187, 225, 250, 0.7);
    border-radius: 10px;
    padding-right: 1vw;
    padding-left: 1vw;
    padding-top: 6px;
    padding-bottom: 6px;
    box-shadow: 0 0 3px 0px black, 0px 0px 2px 0.2px rgba(187, 225, 250, 0.7) inset;
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(7px);
  }

  #game-end-window {
    z-index: 200;
  }

  #game-deck-selection {
    border: 0;
    border-top: 1px solid rgba(187, 225, 250, 0.7);
    border-radius: 0;
    background-color: transparent;
    max-width: none;
    width: calc(75vw + 12px);
    position: initial;
    transform: translate(-20px, 0%);
    display: grid;
    margin-top: 10px;
    grid-template-columns: repeat(auto-fit, minmax(100%, 0fr));
    justify-items: center;
    justify-content: center;
    overflow: auto;
    box-shadow: inset 0px 3px 3px -3px black
  }

  #game-room-players-table > tbody > tr:nth-child(n) {
    border-top: 1px solid rgba(187, 225, 250, 0.7);
    border-bottom: 1px solid rgba(187, 225, 250, 0.7);
  }

  #game-room-information-table > tbody > tr:nth-child(n) {
    border-top: 0px solid rgba(187, 225, 250, 0.7);
    border-bottom: 0px solid rgba(187, 225, 250, 0.7);
  }

  #game-deck-selection > div:nth-child(n) {
    text-align: center;
    width: -webkit-fill-available;
  }

  #game-deck-template {
    all: unset;
    cursor: pointer;
    width: 100%;
    height: 22px;
  }

  #game-deck-template:hover {
    background: linear-gradient(90deg, rgba(187, 225, 250,0) 0%, rgba(187, 225, 250,0.7) 50%, rgba(187, 225, 250,0) 100%);
    color: black;
  }

  #game-deck-template:active {
    background: linear-gradient(90deg, rgba(187, 225, 250,0) 0%, rgba(187, 225, 250,0.9) 50%, rgba(187, 225, 250,0) 100%);
    color: black;
  }

  .engine-dark-box-border {
    border: 0;
    box-shadow: 0 0 3px 0px black;
  }

  .engine-button:active {
    padding-left: 9px;
    padding-right: 7px;
  }
  .engine-button-small {
    min-height: 24px;
    padding-left: 6px;
    padding-right: 6px;
  }
  .engine-button-small:active {
    padding-left: 7px;
    padding-right: 5px;
  }
  .engine-button-large {
    min-height: 48px;
    padding-left: 12px;
    padding-right: 12px;
  }
  .engine-button-large:active {
    padding-left: 14px;
    padding-right: 10px;
  }
  .engine-button-disabled {
    opacity: 0.8;
    color: #c0c0c0;
    cursor: not-allowed;
    pointer-events: none;
  }
  .engine-button:hover {
    background-color: rgba(50, 50, 50, 0.7);
  }
  .engine-button-primary {
    background-color: rgba(3, 90, 166, 0.5);
  }
  .engine-button-primary:hover {
    background-color: rgba(3, 90, 166, 0.7);
  }
  .engine-button-success {
    background-color: rgba(5, 102, 116, 0.5);
  }
  .engine-button-success:hover {
    background-color: rgba(5, 102, 116, 0.7);
  }
  .engine-button-danger {
    background-color: rgba(130, 23, 82, 0.5);
  }
  .engine-button-danger:hover {
    background-color: rgba(130, 23, 82, 0.7);
  }

  .engine-text-box,
  .engine-button {
    font-family: "Source Sans Pro", sans-serif;
  }

  .game-avatar {
    border-radius: 2px;
    border: 1px solid rgb(187, 225, 250, 70%);
    box-shadow: 0 0 3px 0px black, 0px 0px 2px 0.2px rgb(187, 225, 250, 70%) inset;
    width: 3.5vw;
    height: 3.5vw;
    object-fit: cover;
    margin-right: auto;
    margin-left: auto;
  }

  #game-life-bar-opponent,
  #game-life-bar-player,
  #game-timer-bar-player-part,
  #game-timer-bar-opponent-part {
    box-shadow: 0px 0px 2px 0.2px rgb(187, 225, 250, 70%) inset;
  }

  .game-life-bar-part {
    height: 100%;
    box-shadow: 0 0 5px 0px rgba(130, 23, 82);
    background-color: rgba(130, 23, 82);
    border-radius: 2px;
  }

  .game-life-bar {
    margin-top: 8px;
    background-color: black;
    width: 100%;
    height: 10px;
    border-radius: 2px;
    border: 0px solid rgba(187, 225, 250, 0.7);
    box-shadow: 0 0 3px 0px black, 0px 0px 2px 0.2px rgb(187, 225, 250, 70%) inset;
  }

  .game-timer-bar-part {
    height: 100%;
    box-shadow: 0 0 5px 0px rgba(3, 90, 166);
    background-color: rgba(3, 90, 166);
    border-radius: 2px;
  }

  #game-next-turn-text {
    font-family: "Source Sans Pro";
    font-size: 8vh;
    font-weight: 600;
    text-shadow: none;
    color: white;
    -webkit-text-fill-color: white;
    -webkit-text-stroke-width: 0px;
    white-space: nowrap;
    margin: 0;
    text-align: center;
    margin-bottom: 1vh;
  }

  #game-next-turn {
    position: fixed;
    z-index: 300;
    transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    left: 50% !important;
    background: rgb(0,0,0);
    background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 50%, rgba(0, 0, 0, 0) 100%);
    width: 50vw;
  }

  #game-life-change-text {
    font-size: 4.5em;
    white-space: nowrap;
    text-shadow: 2px 2px 10px black;
    -webkit-text-stroke-width: 0px;
    font-family: "Source Sans Pro";
    font-weight: 600;
  }

  .game-life-change-good {
    color: #7bed9f;
    text-shadow: 2px 2px 10px black;
    -webkit-text-fill-color: #7bed9f;
    -webkit-text-stroke-width: 0px;
  }

  .game-life-change-bad {
    color: #ff6b81;
    text-shadow: 2px 2px 10px black;
    -webkit-text-fill-color: #ff6b81;
    -webkit-text-stroke-width: 0px;
  }

  #options-area {
    position: fixed;
    right: 10px;
    bottom: 10px;
  }

  #game-room-container {
    box-shadow: 0 0 3px 0px black, 0px 0px 2px 0.2px rgba(187, 225, 250, 0.7) inset;
    width: 75%;
    border-radius: 10px;
    background-color: rgb(0, 0, 0, 0.8);
    border: 1px solid rgba(187, 225, 250, 0.7);
    height: 82.5vh;
    margin-top: 5vh;
    overflow-x: hidden;
    overflow-y: auto;
    backdrop-filter: blur(7px);
    min-width: unset;
  }

  #siding-main-deck {
    margin-top: 14px;
    padding: 3px;
    box-shadow: black 0px 0px 8px 0px;
    border-radius: 3px;
    border: 1px solid rgba(187, 225, 250, 0.7);
  }

  #siding-extra-deck {
    margin-top: 14px;
    box-shadow: black 0px 0px 8px 0px;
    border: 0px solid;
    border-radius: 3px;
    padding: 3px 0px 3px 3px;
    background-color: rgb(255, 255, 255, 0.5);
  }

  #siding-side-deck {
    margin-top: 14px;
    box-shadow: black 0px 0px 8px 0px;
    border: 0px solid;
    border-radius: 3px;
    padding: 3px 0px 1px 3px;
    background-color: rgb(255, 255, 255, 0.5);
    margin-bottom: 14px;
  }

  #siding-deck-extra-title,
  #siding-deck-side-title {
    background: transparent;
    padding-top: 4px;
  }

  #siding-deck-main-title,
  #game-siding-column-2 {
    background: transparent;
    padding-top: 16px;
  }

  html body div#game-container div#game-siding-column-2 h4.engine-dark-box {
    background: transparent;
  }

  #game-siding-column,
  #game-siding-column-2 {
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    min-height: 100vh;
    overflow-y: auto;
  }

  #game-siding-done {
    border-radius: 5px;
    width: 100%;
  }

  .editor-card-small {
    width: 10%;
    max-width: 177px;
    cursor: pointer;
  }
  .editor-card-small:hover {
    outline: 0.1vw solid rgba(0, 0, 0, 0);
    animation-name: game-card-hover;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: linear;
    cursor: pointer;
    filter: none;
  }
  
  /*[[blur_effect-toggle]]*/

  /*[[sock_ext_stl]]*/
}

/*[[deck_editor-toggle]]*/