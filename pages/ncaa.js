import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import Text from '../components/Text.js';
import Button from '../components/Button.js';
import WeightRoom from '../components/WeightRoom.js';

export default function NCAA() {
  const [start, setStart] = useState(false);
  const [nextSlide, setNextSlide] = useState(false);
  const [weightRoom, setWeightRoom] = useState(true);

  return (
    <main>
      <h1>NCAA</h1>
      <Text
        text={
          nextSlide
            ? "As a freshman, you need to earn your spot on the team, but if you're grades start to fail your parents won't let you play anymore."
            : weightRoom
            ? "You've chosen to hit the weight room"
            : "You've chosen to start in the NCAA. You are a D1 Point Guard Recruit and have chosen to attend the University of Michigan."
        }
      />
      {nextSlide ? (
        <>
          <Button
            handleClick={() => {
              setWeightRoom(true);
              setNextSlide(false);
              setStart(false);
            }}
            text="Hit the weight room"
          />
          <button>Study</button>
        </>
      ) : (
        <></>
      )}
      {weightRoom && <WeightRoom />}
      <Button handleClick={() => setNextSlide(true)} text="Continue" />
      <br />
      <Footer />
    </main>
  );
}
