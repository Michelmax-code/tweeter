"use strict";

const Chance      = require("chance"),
      chance      = new Chance();

const md5 = require('md5');


module.exports = {
  generateRandomUser: () => {
    const gender    = chance.gender();
    const firstName = chance.first({gender: gender});
    const lastName  = chance.last();
    const userName  = firstName + " " + lastName;
    
    let userHandle = "@";
    if (Math.random() > 0.5) {
      let prefix    = chance.prefix({gender: gender});
      prefix = prefix.replace(".", "");
      userHandle += prefix
    }

    userHandle += lastName;

    if (Math.random() > 0.5) {
      const suffix = Math.round(Math.random() * 100);
      userHandle += suffix;
    }
   
    const avatars = {
    
      Female: ["https://icons.iconarchive.com/icons/ph03nyx/super-mario/32/Mushroom-1UP-icon.png","https://icons.iconarchive.com/icons/ph03nyx/super-mario/32/Flower-Ice-icon.png","https://icons.iconarchive.com/icons/ph03nyx/super-mario/32/Lakitu-icon.png","https://icons.iconarchive.com/icons/ph03nyx/super-mario/32/Star-icon.png", "https://icons.iconarchive.com/icons/ph03nyx/super-mario/32/Yoshi-icon.png"],
      Male: ["https://icons.iconarchive.com/icons/ph03nyx/super-mario/32/Paper-Bowser-icon.png","https://icons.iconarchive.com/icons/ph03nyx/super-mario/32/Mushroom-Mini-icon.png","https://icons.iconarchive.com/icons/ph03nyx/super-mario/32/Super-Baby-Mario-icon.png","https://icons.iconarchive.com/icons/ph03nyx/super-mario/32/Yoshi-Star-icon.png", "https://icons.iconarchive.com/icons/ph03nyx/super-mario/32/Boo-icon.png"]
    
    };
    
    const avatarArray = avatars[gender]
    const userAvatar = avatarArray[Math.floor(Math.random()*avatarArray.length)]
  

    return {
      name: userName,
      handle: userHandle,
      avatars: userAvatar
    };
  }
};