// shout function: receives one argument and returns it in all caps
function shout(string) {
    return string.toUpperCase();
  }
  
  // whisper function: receives one argument and returns it in all lowercase
  function whisper(string) {
    return string.toLowerCase();
  }
  
  // logShout function: takes a string argument and logs it in all caps using console.log()
  function logShout(string) {
    console.log(string.toUpperCase());
  }
  
  // logWhisper function: takes a string argument and logs it in all lowercase using console.log()
  function logWhisper(string) {
    console.log(string.toLowerCase());
  }
  
  // sayHiToHeadphonedRoommate function: returns different responses based on the provided string
  function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
      return "I can't hear you!";
    } else if (string === string.toUpperCase()) {
      return "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
      return "I would love to!";
    }
  }
  
  module.exports = {
    shout,
    whisper,
    logShout,
    logWhisper,
    sayHiToHeadphonedRoommate,
  };

  