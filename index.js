const { CommandClient } = require('eris')

// Stupid ass bot creation
async function init(token) {
    const Discord = new CommandClient(`Bot ${token}`, { intents: ['guilds'], maxShards: 'auto',restMode: true })
    // Register the stupid ass command
    Discord.on('ready', async () => {
        await Discord.bulkEditCommands([{
            name: 'status',
            description: 'Bot status',
            type: 1,
        }])
        console.log(`Paste the URL below into your browser to invite your bot!\nhttps://discord.com/oauth2/authorize?client_id=${Discord.user.id}&scope=applications.commands%20bot&permissions=8`)
    })
    // Stupid ass interaction creation event
    Discord.on('interactionCreate', async (interaction) => {
        if (interaction?.data?.name === 'status') {
            await interaction.createMessage({
                content: 'Yey! The bot is currently online! Invite it to your discord server by clicking this link'
            })
            console.log('This shit aint have self destruct so your good to go')
        }
    })
    Discord.connect();
}

const tokenFromDiscordCommand = process.argv[2]
init(tokenFromDiscordCommand);
