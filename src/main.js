import { Client, Events, GatewayIntentBits } from 'discord.js'
import dotenv from 'dotenv'

dotenv.config()

const client = new Client({ intents: [GatewayIntentBits.Guilds] });


client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

//抓.env的TOKEN值
client.login(process.env.TOKEN)