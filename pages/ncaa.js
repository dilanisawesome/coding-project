import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import Text from '../components/Text.js';
import Button from '../components/Button.js';
import WeightRoom from '../components/WeightRoom.js';

export default function NCAA() {
  const [start, setStart] = useState(false);
  const [nextSlide, setNextSlide] = useState(true);
  const [study, setStudy] = useState(false);
  const [weightRoom, setWeightRoom] = useState(false);

  return (
    <main>
      <h1>NCAA</h1>
      <Text
        text={
          nextSlide
            ? "As a freshman, you need to earn your spot on the team, but if you're grades start to fail your parents won't let you play anymore."
            : weightRoom
            ? ''
            : start
            ? "You've chosen to start in the NCAA. You are a D1 Point Guard Recruit and have chosen to attend the University of Michigan."
            : ''
        }
      />
      {nextSlide && (
        <>
          <Button
            handleClick={() => {
              setWeightRoom(true);
              setNextSlide(false);
              setStart(false);
            }}
            text="Hit the weight room"
          />
          <Button
            handleClick={() => {
              setNextSlide(false);
              setStudy(true);
              setStart(false);
            }}
            text="Study"
          />
        </>
      )}
      {weightRoom && <WeightRoom />}
      {study && (
        <Text text="You value your academics over playing basketball. You're still on the team, but you see very few minutes and sit on the bench most the time. Even though you go onto have a good career in your chosen major, you aren't going to the NBA." />
      )}
      {/* <Button handleClick={() => setNextSlide(true)} text="Continue" /> */}
      <br />
      <Footer />
    </main>
  );
}
