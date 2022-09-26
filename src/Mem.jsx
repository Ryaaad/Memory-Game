import { useState , useEffect  } from 'react';

const cardImages = [
  { text: "A" },
  { text: "B" },
  { text: "C" },
  { text: "D" },
  { text: "E" },
  { text: "F" }
];
var x;
var z;
function Main() {
  const [CurrentCard, setCurrentCard] = useState();
  const [Cardid, setCardid] = useState(0);
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [win, setwin] = useState(1);
  function handelCard(e) {
    const y = e.target.getAttribute("id");
    console.log("Cardid:", Cardid);
    e.target.style.backgroundColor = "rgb(116, 116, 122)";
    setTimeout(() => {
      if (!CurrentCard) {
        setCurrentCard(x);
      } else {
        if (CurrentCard == x ) {
         
          setwin(win + 1);
           console.log("win",win);
          setCurrentCard();
          document.getElementById(Cardid).style.visibility = "hidden";
          e.target.style.visibility = "hidden";
        } else {
          console.log("false");
          setTurns(turns + 1);
          setCurrentCard();
          e.target.style.backgroundColor = "black";
          document.getElementById(Cardid).style.backgroundColor = "black";
        }
      }
    }, 100);
  }
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random()}));
    setCards(shuffledCards);
    setTurns(0);
    setCurrentCard();
    setwin(0);

    // understand sort() method
  };
  // even though rahom bara lfunction rahom y'atfficha f onclick why

  useEffect(() => {
    shuffleCards();
  }, []);
  return (
    <div className="App text-center p-4  bg-white h-[100vh] ">
     { win !== 6 &&  turns !== 10 && (
        <div>
          <h1 className="text-4xl font-bold  ">Magic Match</h1>
          <button
            onClick={shuffleCards}
            className="border-white border border-solid p-1 px-2 mt-4 "
          >
            New Game
          </button>

          <div className="X grid grid-cols-3 grid-rows-4 gap-5 h-[70vh] ">
            {cards.map((card) => (
              <div
                className="X1 bg-black text-black text-5xl font-bold  "
                id={card.id}
                key={card.id}
                onClick={(e) => {
                  x = card.text;
                  if (z !== card.id) {
                    z = card.id;
                    setCardid(card.id);
                    handelCard(e);
                  }
                }}
              >
                {card.text}
              </div>
            ))}
          </div>
          <h2> You have {10 - turns} </h2>
        </div>
      )}
      { win !== 6 &&  turns === 10 && (
        <div
          onClick={() => {
            shuffleCards();
          }}
        >
          {" "}
          Repeat{" "}
        </div>
      )}

      {win === 6 && (
        <div
          onClick={() => {
            shuffleCards();
          }}
        >
        
          You Win
        </div>
      )}
    </div>
  );
}

export default Main;

