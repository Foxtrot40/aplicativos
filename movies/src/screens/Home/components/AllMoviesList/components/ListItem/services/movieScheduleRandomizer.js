import moment from 'moment';

export const movieTimeRandomizer = () => {
  let schedule = [];
  const times = Math.floor(Math.random() * 3) + 1; // + 1 garantees at least one time

  for (let i = 0; i < times; i++) {
    const hour = Math.floor(Math.random() * 3);
    const minutes = Math.floor(Math.random() * 30);
    const time = moment()
      .add(hour, 'h')
      .add(minutes, 'm')
      .format('hh:mm');

    schedule = [time.toString(), ...schedule];
  }

  return schedule;
};
