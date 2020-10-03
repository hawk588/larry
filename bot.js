const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.author == client.user)
    {
        return
    }    
    
    if (hasSettra(message.content)) {

       message.reply("Oh mighty, Settra... Great King, the Imperishable, Khemrikhara, The Great King of Nehekhara, King of Kings, Opener of the Way, Wielder of the Divine Flame, Punisher of Nomads, The Great Unifier, Commander of the Golden Legion, Sacred of Appearance, Bringer of Light, Father of Hawks, Builder of Cities, Protector of the Two Worlds, Keeper of the Hours, Sailor of the Great Vitae, Sentinel of the Two Realms, The Undisputed, Begetter of the Begat, Scourge of the Faithless, Carrion-feeder, First of the Charnel Valley, Rider of the Sacred Chariot, Vanquisher of Vermin, Champion of the Death Arena, Mighty Lion of the Infinite Desert, Emperor of the Shifting Sands, He Who Holds The Sceptre, Great Hawk Of The Heavens, Arch-Sultan of Atalan, Waker of the Hierotitan, Monarch of the Sky, Majestic Emperor of the Shifting Sands, Champion of the Desert Gods, Breaker of the Ogre Clans, Terror of the Living, Master of the Never-Ending Horizon, Master of the Necropolises, Taker of Souls, Tyrant to the Foolish, The Great, Chaser of Nightmares, Banisher of the Grand Hierophant, High Lord Admiral of the Deathfleets, Guardian of the Charnal Pass, Tamer of the Liche King, Unliving Jackal Lord, Dismisser of the Warrior Queen, Charioteer of the Gods, He Who Does Not Serve, Slayer off Reddittras, Scarab Purger, Player of the Great Game, Liberator of Life, Lord Sand, Wrangler of Scorpions, Emperor of the Dunes, Eternal Sovereign of Khemri's Legions, Seneschal of the Great Sandy Desert, Curserer of the Living,  Herald of all Heralds, Caller of the Bitter Wind, God-Tamer, Deacon of the Ash River, Belated of Wakers, General of the Mighty Frame, Summoner of Sandstorms, Master of all Necrotects, Prince of Dust, Tyrant of Araby, Purger of the Greenskin Breathers, Killer of the False God's Champions, Tyrant of the Gold Dunes, Golden Bone Lord, Avenger of the Dead, Carrion Master, Eternal Warden of Nehek's Lands, Breaker of Djaf's Bonds... and many, many more...");

       }

});

function hasSettra(message)
{
    message = message.toLowerCase();
    if(message.includes("settra"))
    {
        return true;
    }
    else
    {
        return false;
    }
}


 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret