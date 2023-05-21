import uuid from "react-uuid";
function chillHop() {
    return [
      {
        name: "Steady",
        artist: "J.Folk",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=58834",
        id: uuid(),
        cover:
          "https://chillhop.com/wp-content/uploads/2023/05/9e6aaa4e04b9e4054f8ed2586d331113e82247da-1024x1024.jpg",
        color: ["#7e816e", "#493127"],
        active: true,
      },
      {
        cover:
          "https://chillhop.com/wp-content/uploads/2022/09/8c2eab8525ace609b0c68b7564eb085d2244ee09-1024x1024.jpg",
        name: "Early Rise",
        artist: "illiterate, Mr Slipz",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=48087",
        active: false,
        id: uuid(),
        color: ["#295a3f", "#649697"],
      },
    ];
}
export default chillHop;
