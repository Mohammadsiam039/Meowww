const fs = require('fs');
const moment = require('moment-timezone');
const NepaliDate = require('nepali-date');
const fast = require('fast-speedtest-api');

module.exports = {
  config: {
    name: "info",
    version: "1.3",
    author: "AceGun",
    countDown: 5,
    role: 0,
    shortDescription: {
      vi: "",
      en: "Sends information about the bot and admin along with an image."
    },
    longDescription: {
      vi: "",
      en: "Sends information about the bot and admin along with an image."
    },
    category: "utility",
    guide: {
      en: "{pn}"
    },
    envConfig: {}
  },

  onStart: async function ({ message, api, event }) {
    const speedTest = new fast({
        token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm",
        verbose: false,
        timeout: 10000,
        https: true,
        urlCount: 5,
        bufferSize: 8,
        unit: fast.UNITS.Mbps
      });
    const result = await speedTest.getSpeed();
    const botName = "FLAME-BOT";
    const botPrefix = "(.)";
    const authorName = "MD Abdur Rahman Siam";
    const authorFB = "FB.Me/100044530383890";
    const authorInsta = "Ssiyam69";
    const authorTele = "SIAM_039";
    const authorTwi = "Ssiyam69";
    const status = "Single";
