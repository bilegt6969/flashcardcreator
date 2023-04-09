import React, { useState } from "react";

const flashcardData = [
  "Abhor - to hate something or someone",
"Absolve - to forgive or release someone from blame",
"Acumen - the ability to understand things quickly and make good decisions",
"Adversity - difficult or unlucky situations",
"Ameliorate - to make something better",
"Anomaly - something that is different from what is expected or usual",
"Arduous - something that is difficult or tiring to do",
"Ascertain - to find out or confirm something",
"Avarice - extreme greed for money or material possessions",
"Benevolent - kind and generous towards others",
"Catalyst - an agent that provokes or speeds significant change or action",
"Conjecture - a guess or an opinion based on limited information",
"Conundrum - a confusing or difficult problem to solve",
"Cryptic - mysterious or difficult to understand",
"Deft - skillful and quick in movements or actions",
"Disparage - to criticize or speak negatively about something or someone",
"Disperse - to spread out or scatter in different directions",
"Dissent - to disagree with others or express a different opinion",
"Eloquent - able to express oneself clearly and effectively",
"Enigma - something that is mysterious and difficult to understand",
"Erratic - unpredictable or inconsistent in behavior or performance",
"Esoteric - known or understood by only a few people who have specialized knowledge or interest",
"Exacerbate - to make something worse or more severe",
"Expedient - practical or helpful in achieving a goal or objective",
"Facetious - humorous or playful, often in an inappropriate or sarcastic way",
"Fortuitous - happening by chance or luck",
"Frivolous - not having any serious purpose or value",
"Gregarious - enjoying the company of others and being sociable",
"Hapless - unlucky or unfortunate",
"Harbinger - a sign or signal that something is going to happen",
"Incisive - clear and sharp in thinking or expression",
"Indolent - lazy or inactive",
"Inevitable - something that is certain to happen or cannot be avoided",
"Insipid - dull or lacking flavor",
"Intrepid - fearless and adventurous",
"Jubilant - feeling or expressing great happiness or triumph",
"Languid - slow and relaxed in movement or activity",
"Maverick - someone who thinks and acts independently from others",
"Nuance - a subtle difference or variation in meaning, expression, or color",
"Opaque - not clear or transparent; difficult to understand or explain",
"Bring about - to cause something to happen",
"Carry out - to complete or perform a task or activity",
"Come across - to meet or find something or someone unexpectedly",
"Come up with - to think of or suggest an idea or solution",
"Figure out - to understand or solve a problem or mystery",
"Get along - to have a friendly or cooperative relationship with someone",
"Look into - to investigate or examine something in detail",
"Put off - to postpone or delay something until a later time",
"Take over - to assume control or responsibility for something",
"Turn out - to have a particular result or outcome",
"Alacrity - eagerness or willingness to do something",
"Ambivalent - having mixed feelings or contradictory ideas about something",
"Apathy - lack of interest, enthusiasm, or concern",
"Austere - severe or strict in manner, attitude, or appearance",
"Beneath - in a lower position; below",
"Coalesce - to come together to form one mass or whole",
"Condone - to accept or allow behavior that is considered wrong or offensive to continue",
"Cursory - hasty and superficial; not thorough or detailed",
"Daunting - seeming difficult to deal with in anticipation; intimidating",
"Debilitate - to weaken or impair the strength of someone or something",
"Diligent - hard-working and conscientious",
"Eccentric - unconventional and slightly strange",
"Ephemeral - lasting for a very short time; fleeting",
"Erudite - having or showing extensive knowledge; learned",
"Exacerbate - to make a problem or situation worse",
"Fastidious - very attentive to detail and accuracy; very concerned about cleanliness and orderliness",
"Gullible - easily fooled or deceived",
"Haughty - arrogantly superior or disdainful",
"Incessant - never-ending; ceaseless",
"Inevitable - certain to happen; unavoidable",
"Inquisitive - curious and eager to learn or understand",
"Insidious - proceeding in a gradual, subtle way, but with harmful effects",
"Insolent - showing a rude and arrogant lack of respect",
"Intuitive - using or based on what one feels to be true even without conscious reasoning",
"Juxtapose - to place two or more things side by side for comparison or contrast",
"Mitigate - to make less severe, serious, or painful",
"Myriad - a countless or extremely great number of things",
"Nostalgia - a sentimental longing or wistful affection for a period in the past",
"Onerous - involving a great deal of effort or difficulty",
"Paradox - a statement that appears to be self-contradictory or absurd but in reality expresses a possible truth",
"Perfunctory - carried out with a minimum of effort or reflection",
"Placate - to make someone less angry or hostile",
"Ponderous - slow and clumsy because of great weight; dull and laborious",
"Pragmatic - dealing with things sensibly and realistically in a way that is based on practical considerations",
"Prodigal - wastefully extravagant; spending money or resources freely and recklessly",
"Prolific - producing many works, results, or offspring",
"Quandary - a state of uncertainty or perplexity, especially as to what to do; a dilemma",
"Repudiate - to reject as having no authority or binding force; to disown or reject completely",
"Resilient - able to withstand or recover quickly from difficult conditions",
"Superfluous - unnecessary, especially through being more than enough"

];


const IndexPage = () => {
  const [cardIndex, setCardIndex] = useState(0);
  const [isRandomMode, setIsRandomMode] = useState(false);  
  const [currentFlashcard, setCurrentFlashcard] = useState(0);
  const [answerVisible, setAnswerVisible] = useState(false);

  function toggleRandomMode() {
    setIsRandomMode(!isRandomMode);
  }

  function nextCard() {
    if (isRandomMode) {
      setCardIndex(Math.floor(Math.random() * flashcardData.length));
    } else {
      setCardIndex(cardIndex === flashcardData.length - 1 ? 0 : cardIndex + 1);
    }
  }

  const handleNextClick = () => {
    nextCard();
    setCurrentFlashcard(cardIndex);
    setAnswerVisible(false);
  };

  const handleShowAnswerClick = () => {
    setAnswerVisible(true);
  };

  return (
    <div className="min-h-screen bg-black  flex  justify-center items-center">
      <h1 className="justify-center absolute top-[4rem] text-white font-mono text-2xl">Flash card system made by Bilegt</h1>
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-4 py-2 bg-white-200">
          <h1 className="text-xl font-bold text-gray-800">Flashcards</h1>
          <div className="flex justify-end">
            <label className="inline-flex items-center mt-3">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
                checked={isRandomMode}
                onChange={toggleRandomMode}
              />
              <span className="ml-2 text-gray-700">Random</span>
            </label>
          </div>
        </div>
        <div className="px-4 py-6">
          <div className="bg-white shadow-md rounded-md p-4 border h-[13rem] border-gray-300">
            <div className="text-gray-800 font-bold text-xl mb-4">
              {flashcardData[currentFlashcard].split(" - ")[0]}
            </div>
            {answerVisible && (
              <div className="text-gray-600 mb-4">
                {flashcardData[currentFlashcard].split(" - ")[1]}
              </div>
            )}
            {!answerVisible && (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full absolute bottom-[17rem] ml-[15rem]"
                onClick={handleShowAnswerClick}
              >
                Show Answer
              </button>
            )}
            {answerVisible && (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-[1rem]  absolute bottom-[16rem] ml-[17rem]"
                onClick={handleNextClick}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
