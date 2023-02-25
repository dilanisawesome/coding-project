import { useState } from 'react';
import Button from './Button.js';
import Text from './Text.js';

export default function ContinueBall() {
  const [play, setPlay] = useState(false);
  const [rest, setRest] = useState(false);

  return (
    <div>
      <>
        <p>
          After your huge game, you continue to put up a strong performance
          every game you play in, and your coach gives you more playing time as
          a reward. However, in one game towards the end of the season before
          the March Madness Tournament, you hurt your knee. The trainer tells
          you that you can still play, but you will risk further injury. What do
          you do?
        </p>
        <Button
          handleClick={rest ? () => {} : () => setPlay(true)}
          text="Play in the game"
        />
        <Button handleClick={() => setRest(true)} text="Rest for a few weeks" />
        <Text
          text={
            play
              ? "You decide to play and accept the risk. On a play in the 2nd half there's a loose ball and you try to make a play on it. On the play your knee twists under you and you collapse. After having to be taken out of the game, the trainer tells you that you need a complete knee rebuild and you will be out for the rest of the season. You know that when you're able to play again, you won't be the same player, and your NBA chances fall."
              : rest
              ? "You take some time to rest and in a couple weeks, you check in with the trainer again who, in his evaluation, tells you that you're good to play in the tournament."
              : ''
          }
        />
      </>
    </div>
  );
}
