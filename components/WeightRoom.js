import Button from './Button.js';
import Text from './Text.js';
import { useState } from 'react';
import ContinueBall from './ContinueBall.js';

export default function WeightRoom() {
  const [weightRoom, setWeightRoom] = useState(true);
  const [play, setPlay] = useState(false);
  const [study, setStudy] = useState(false);
  const [continueBall, setContinueBall] = useState(false);

  return (
    <>
      {weightRoom && (
        <p>
          By hitting the weight room, you've shown your coach your dedication to
          the team. Because of this, your coach has decided to give you an
          opportunity to play in a rivalry game against the Ohio State
          Univeristy. You have an exam the next day, and if you play in the
          game, you won't be able to study. What do you do?
        </p>
      )}
      {weightRoom && (
        <>
          <Button
            handleClick={study ? () => {} : () => setPlay(true)}
            text="Play in the game"
          />
          <Button
            handleClick={() => setStudy(true)}
            text="Study for your exam"
          />
        </>
      )}
      {weightRoom && (
        <>
          <Text
            text={
              play
                ? "You play in the game and have the game of your life, dropping 36 points on 35 min, sinking 10 out of your 12 3's taken. Even more spectacular, you have the game-tying shot to force overtime and make the game winning 3-pointer at the buzzer. Your coach congratulates you on your outstanding performance and gives you a starting spot for the rest of the year. Even better, multiple NBA agents and scouts are at the game and congratulate you on your outstanding performance. You've earned your coaches respect and will now be a regular at practices. However, you got a C on your test the next day."
                : study
                ? 'You tell your coach you would rather study for your exam than play, even given the opportunity. Your coach is dissapointed in you and thinks you are wasting his time.'
                : ''
            }
          />
        </>
      )}

      {play && (
        <>
          <Button
            handleClick={() => {
              setContinueBall(true);
              setWeightRoom(false);
            }}
            text="Continue"
          />
        </>
      )}

      {continueBall && <ContinueBall />}
    </>
  );
}
