function shout(string) {
    return string.toUpperCase();
  };
  function whisper(string) {
    return string.toLowerCase();
  };  
  function logShout(string) {
    console.log(string.toUpperCase())
  };
  console.log("HELLO");
  function logWhisper(string) {
    console.log(string.toLowerCase())
  };
  console.log("hello");
  function sayHiToHeadphonedRoommate(string) {
    if (string === "hello") {
        return "I can't hear you!";
      } else if (string === "HELLO") {
        return "YES INDEED!";
      } else if (string === "Let's have dinner together!") {
        return "I would love to!";
      }
    }
