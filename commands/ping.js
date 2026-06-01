/**
 * Ping Command
 * Check bot latency
 */

module.exports = {
  name: 'ping',
  description: 'Check bot latency',
  aliases: ['latency'],

  async execute(user, args, bot) {
    const ping = bot.client.ws.ping;

    await user.send({
      embeds: [
        {
          title: '🏓 Pong!',
          description: `Bot Latency: **${ping}ms**`,
          color: 0x00ff00,
          timestamp: new Date(),
        },
      ],
    });
  },
};
