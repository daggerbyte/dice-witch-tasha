const Discord = require("discord.js");
const { getRandomNumber } = require("../helpers");

const generateEmbed = (resultArray, attachment, message, title) => {
  const grandTotal = resultArray.reduce((prev, cur) => {
    return prev + cur.result;
  }, 0);
  try {
    return title
      ? new Discord.MessageEmbed()
          .setColor("#966F33")
          .setTitle(title)
          .attachFiles(attachment)
          .setImage("attachment://currentDice.png")
          .setFooter(
            `sent to ${message.author.username} \n ${resultArray
              .map((roll) => `${roll.value}: ${roll.result}`)
              .join(" / ")}`
          )
      : new Discord.MessageEmbed()
          .setColor("#966F33")
          .attachFiles(attachment)
          .setImage("attachment://currentDice.png")
          .setFooter(
            `${resultArray
              .map((roll) => `${roll.value}: ${roll.result}`)
              .join("\n")} ${
              resultArray.length > 1 ? `\ngrand total: ${grandTotal}` : ""
            }\nsent to ${message.author.username}`
          );
  } catch (err) {
    console.log(err);
  }
};

const sendDiceResultMessage = async (
  resultArray,
  message,
  attachment,
  title,
  discord
) => {
  try {
    const embed = generateEmbed(resultArray, attachment, message, title);

    const sendMessageAndStopTyping = async () => {
      try {
        await message.channel.send(embed);
        message.channel.stopTyping();
      } catch (err) {
        message.channel.stopTyping();
      }
    };

    message.channel.startTyping();

    setTimeout(sendMessageAndStopTyping, getRandomNumber(5000));

    return;
  } catch (err) {
    console.log(err);
  }
};

module.exports = sendDiceResultMessage;
