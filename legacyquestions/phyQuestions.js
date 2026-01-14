import { exp, formula, units, ion, isotope } from "./helpers.js";

const times = "&times;";
const density = `${units("kgm", -3)}`;
const deg = `&deg;`;
const sqrt = `&Sqrt;`;
const alpha = `&alpha;`;
const beta = `&beta;`;
const gamma = `&gamma;`
const theta = `&theta;`;
const ohm = `&ohm;`
const jkgk = `${units("JKg",-1,"K",-1)}`
const degC = `&deg;C`
const jg = `${units("Jg",-1)}`
const velocity = `${units("ms",-1)}`
const pi = `&pi;`
const micro = `&micro;`
const lambda = `&lambda;`

let phyQuestions = [
  // 1. measurement, scalars and vectors
  {
    topic: "Measurement, Scalars, and Vectors",
    questions: [
      {
        id: 1,
        question: `Which of the following are derived units?<br />
        I. Metre II. Coulomb III. Kilogram IV. Ampere V. Joule`,
        options: [
          `I and III only`,
          `II and V only`,
          `II, IV and V only`,
          `All of them`,
        ],
        ans: "B",
      },

      {
        id: 2,
        question: `Which of the following are derived quantities?<br />
        I. Thrust II. Temperature III. Area IV. Pressure`,
        options: [
          `I and IV only`,
          `II, III, and IV only`,
          `I, III, IV only`,
          `All of them`,
        ],
        ans: "C",
      },

      {
        id: 3,
        question: `The derived dimension ${units(
          "ML",
          -2,
          "T",
          -2
        )} is a dimension of<br /> I. acceleration II. Torque III. Energy`,
        options: [`I only`, `III only`, `I and II only`, `II and III only`],
        ans: "D",
      },

      {
        id: 4,
        question: `Which of the following are not fundamental units?<br />I. Kelvin II. Newton III. Second IV. Radian`,
        options: [
          `I and III only`,
          `II and IV only`,
          `I and II only`,
          `I, II and IV only`,
        ],
        ans: "B",
      },

      {
        id: 5,
        question: `The unit of momentum is`,
        options: [
          `${units("Js", -1)}`,
          `${units("Ns")}`,
          `${units("Ns", -1)}`,
          `${units("Nms")}`,
        ],
        ans: "B",
      },

      {
        id: 6,
        question: "The dimension of power is",
        options: [
          `${units("ML", 2, "T", -3)}`,
          `${units("MLT", -2)}`,
          `${units("ML", 2, "T", -2)}`,
          `${units("ML", -2, "T", -3)}`,
        ],
        ans: "A",
      },

      {
        id: 7,
        question: `In which of the following physical quantities are the units correctly indicated? <br />
        I. Weight[N] II. Energy[Nm]<br />
        III. Momentum[${units("kgms", -1)}] IV. Acceleration [${units(
          "Nkg",
          -1
        )}]`,
        options: [
          `I and II only`,
          `III and IV only`,
          `I, II, and III only`,
          `I, II, III, and IV`,
        ],
        ans: "D",
      },

      {
        id: 8,
        question: `The watt is equivalent to`,
        options: [
          `${units("Nms", -1)}`,
          `${units("Js")}`,
          `${units("Kgm", 2, "s", -2)}`,
          `${units("Ns")}`,
        ],
        ans: "A",
      },

      {
        id: 9,
        question: `Which of the following quantities has the same unit as the kilowatt-hour?`,
        options: [
          `Force ${times} acceleration`,
          `Force ${times} velocity`,
          `Force ${times} distance`,
          `Force ${times} time`,
        ],
        ans: "C",
      },

      {
        id: 10,
        question: `Which of the following are vector quantities?<br />
        I. Work II. Displacement III. Acceleration IV. Electric field intensity V. Magnetic induction`,
        options: [
          `I, II, and III only`,
          `II, III, and IV only`,
          `III, IV, and V only`,
          `II, III, IV, and V only`,
        ],
        ans: "D",
      },

      {
        id: 11,
        question: `Which of the following are scalar quantities?<br />
          I. Torque II. Electric potential III. Kinetic energy IV. Momentum`,
        options: [
          `I and IV only`,
          `II and III only`,
          `I, II and III only`,
          `II, III and IV only`,
        ],
        ans: "B",
      },

      {
        id: 12,
        question: "Which of the following is a set of vectors?",
        options: [
          `Weight, displacement and moment`,
          `Velocity, volume and upthrust`,
          `Density, capacitance, and impulse`,
          `Mass, force and impulse`,
        ],
        ans: "A",
      },

      {
        id: 14,
        question: `Which of the following readings gives the correct precision of the length of a rod using vernier callipers?`,
        options: [`4.1 cm`, `4.13 cm`, `4.120 cm`, `4.125 cm`],
        ans: "B",
      },

      {
        id: 15,
        question: `Which of the following readings gives the correct precision of the length of a rod using a metre rule?`,
        options: [`75 mm`, `75.0 mm`, `75.00 mm`, `75.01 mm`],
        ans: "B",
      },
      {
        id: 18,
        question: `Which of the following instruments is most suitable for measuring the outside diameter of a narrow pipe a few millimeters in diameter?`,
        options: [
          `Pair of callipers`,
          `Metre rule`,
          `Micrometer screw gauge`,
          `Tape rule`,
        ],
        ans: "C",
      },

      // DISPLAY ISSUE, RESEARCH HOW TO RENDER +- correctly.
      // {
      //   id: 19,
      //   question: `A student measures the internal and external diameters of a cylindrical vessel as 100()`,
      //   options: [
      //     `Pair of callipers`,
      //     `Metre rule`,
      //     `Micrometer screw gauge`,
      //     `Tape rule`,
      //   ],
      //   ans: "A",
      // },

      {
        id: 20,
        question:
          "The least possible error in using a scale graduated in millimetres is?",
        options: [`0.1 mm`, `0.5 mm`, `1.0 mm`, `2.0 mm`],
        ans: "B",
      },

      {
        id: 21,
        question: `A boy walks 10 m due west and then 10 m due south. His displacement is?`,
        options: [
          `10 m, S30${deg}W`,
          `10 m, S60${deg}W`,
          `10${sqrt}2 m, S45${deg}W`,
          `10${sqrt}2 m, S60${deg}W`,
        ],
        ans: "C",
      },

      {
        id: 22,
        question: `A girl walks 12 m northwards, 5 m eastwards and 7 m southwards. Her total displacement is?`,
        options: [
          `5 m, north`,
          `5 m, east`,
          `7.07 m, S45${deg}W`,
          `7.07 m, N45${deg}E`,
        ],
        ans: "D",
      },
      {
        id: 23,
        question:
          "A man walks 5 km south and then 3 km in the direction 60&deg; west of south. His distance from the starting point is?",
        options: [`7.00 km`, `7.50 km`, `8.00 km`, `10.72 km`],
        ans: "A",
      },

      {
        id: 27,
        question: `Two perpendicular forces have a resultant of 13 N. If one of the forces is 5 N, the other force is?`,
        options: [`8 N`, `9 N`, `12 N`, `18 N`],
        ans: "C",
      },

      {
        id: 28,
        question:
          "Two forces, 12 N and 16 N inclined at an angle &theta; to each other, have a resultant which is parallel to the 16 N force. The value of cos &theta; is",
        options: [`1.0`, `3/4`, `1/2`, `0`],
        ans: "A",
      },

      {
        id: 29,
        question: `A body of mass M rests on a plane inclined at an angle &alpha; to the horizontal. The component of the weight of the body along the normal to the plane is?`,
        options: [
          `Mgsin &alpha;`,
          `Mgcos &alpha;`,
          `Mgtan &alpha;`,
          `Mg/sin &alpha;`,
        ],
        ans: "B",
      },

      {
        id: 30,
        question: `A body pulls a box along a horizontal table with a rope inclined to the horizontal at an angle 60${deg}. If the tension in the rope is 40 N, what is the effective horizontal force?`,
        options: [`20 N`, `20&sqrt;3 N`, `40&sqrt;3 N`, `40/&sqrt;3 N`],
        ans: "A",
      },
    ],
  },
  // 2. motion
  {
    topic: "Motion",
    questions: [
      {
        id: 1,
        question: `A man runs a distance of 1.0 km in 5 minutes. His average speed is`,
        options: [
          `20.0 ${units("ms", -1)}`,
          `16.7 ${units("ms", -1)}`,
          `3.3 ${units("ms", -1)}`,
          `0.3 ${units("ms", -1)}`,
        ],
        ans: "C",
      },

      {
        id: 2,
        question: `A car travelling at a uniform speed of ${units(
          "kmh",
          -1
        )} spends 15 minutes moving from point A to point B along its route. The distance between A and B is`,
        options: [`50 km`, `25 km`, `15 km`, `10 km`],
        ans: "B",
      },

      {
        id: 3,
        question: `A train with an initial velocity of 20 ${units(
          "ms",
          -1
        )} is subjected to a uniform deceleration of ${units(
          "ms",
          -1
        )}. The time required to bring them the train to a complete halt is`,
        options: [`5 s`, `10 s`, `20 s`, `40 s`],
        ans: "B",
      },

      {
        id: 4,
        question: `A body accelerates uniformly from rest at 3 ${units(
          "ms",
          -1
        )}. Its velocity after travelling a distance of 24 m is`,
        options: [
          `144 ${units("ms", -1)}`,
          `72 ${units("ms", -1)}`,
          `36 ${units("ms", -1)}`,
          `12 ${units("ms", -1)}`,
        ],
        ans: "D",
      },

      {
        id: 6,
        question: `A body accelerates uniformly from rest at 6 ${units(
          "ms",
          -2
        )} for 8 seconds and then decelerates uniformly to rest in the next 5 seconds. The magnitude of the deceleration is?`,
        options: [
          `9.6 ${units("ms", -2)}`,
          `19.2 ${units("ms", -2)}`,
          `24.0 ${units("ms", -2)}`,
          `48.0 ${units("ms", -2)}`,
        ],
        ans: "A",
      },

      {
        id: 7,
        question: `A body undergoing a uniformly-accelerated motion has two points (1 s, 10 ${units(
          "ms",
          -1
        )}) and (20 s, 48 ${units(
          "ms",
          -1
        )}) on the velocity-time graph of its motion. The acceleration of the body is?`,
        options: [
          `0.26 ${units("ms", -2)}`,
          `0.50 ${units("ms", -2)}`,
          `2.00 ${units("ms", -2)}`,
          `4.80 ${units("ms", -2)}`,
        ],
        ans: "C",
      },
      {
        id: 8,
        question: `A motorist travelling at 72 ${units(
          "kmh",
          -1
        )}, on siting a STOP road sign applies the brakes such that under constant deceleration the car is brought to a stop within a distance of 50 m. The magnitude of the deceleration is?`,
        options: [
          `50 ${units("ms", -2)}`,
          `25 ${units("ms", -2)}`,
          `8 ${units("ms", -2)}`,
          `4 ${units("ms", -2)}`,
        ],
        ans: "D",
      },

      {
        id: 9,
        question: `Two bodies X and Y start from rest and move with uniform accelerations of a and 4a respectively. If the bodies cover the same distance in time t<sub>x</sub> and t<sub>y</sub>, then the ratio of t<sub>x</sub> to t<sub>y</sub> is`,
        options: [`1:4`, `1:2`, `2:1`, `4:1`],
        ans: "C",
      },

      {
        id: 10,
        question: `A car starting from rest moves with a uniform acceleration of 6${units(
          "ms",
          -2
        )}. The distance it covers in the fourth second of its motion is`,
        options: [`21 m`, `27 m`, `48 m`, `96 m`],
        ans: "A",
      },

      {
        id: 11,
        question: `A fruit drops from the top of a tree 20 m tall. The time it takes the fruit to reach the ground is`,
        options: [`5.0 s`, `4.0 s`, `2.5 s`, `2.0 s`],
        ans: "D",
      },

      {
        id: 13,
        question: `A ball is thrown vertically upwards from the ground with an initial velocity of 20 ${units(
          "ms",
          -1
        )}. The maximum height reached by the ball is`,
        options: [`7.5 m`, `10.0 m`, `20.0 m`, `22.5 s`],
        ans: "C",
      },

      {
        id: 15,
        question: `A ball is thrown vertically upwards from the top of a building with velocity of 10 ${units(
          "ms",
          -1
        )}. If it takes 4 s for the ball to reach the ground level, the height of the building is`,
        options: [`5 m`, `40 m`, `45 m`, `50 m`],
        ans: "B",
      },

      {
        id: 20,
        question: `A motorist driving a motor car of mass 750 kg at a speed of 108 ${units(
          "kmh",
          -1
        )}, suddenly observes a stationary dog 130 m ahead. If he applies a retarding force of 2,250 N through the brakes, the car will stop`,
        options: [
          `Immediately after the motorist notices the dog`,
          `30 m before reaching the dog`,
          `10 m after hitting the dog`,
          `20 m after hitting the dog`,
        ],
        ans: "D",
      },

      {
        id: 21,
        question: `A block of mass 5.0 kg at rest on a smooth horizontal surface is subjected to horizontal force of 20 N. The velocity of the block after 3 s is`,
        options: [
          `4.0 ${units("ms", -1)}`,
          `7.5 ${units("ms", -1)}`,
          `12.0 ${units("ms", -1)}`,
          `15.0 ${units("ms", -1)}`,
        ],
        ans: "D",
      },

      {
        id: 22,
        question: `A body of mass 3 kg initially at rest is subjected to two mutually perpendicular forces of 9 N and 12 N. The acceleration of the body is`,
        options: [
          `0.2 ${units("ms", -2)}`,
          `3.0 ${units("ms", -2)}`,
          `4.0 ${units("ms", -2)}`,
          `5.0 ${units("ms", -2)}`,
        ],
        ans: "D",
      },

      {
        id: 23,
        question: `A 500 g mass initially at rest is subjected to a force F. If the object attains a speed of 12 ${units(
          "ms",
          -1
        )} after moving a distance 60 m, the value of F is`,
        options: [`0.6 N`, `1.2 N`, `3.0 N`, `6.0 N`],
        ans: "A",
      },

      {
        id: 24,
        question: `The acceleration of a body which slides down freely on a smooth plane inclined at 60${deg} to the horizontal is`,
        options: [
          `5.00 ${units("ms", -2)}`,
          `7.50 ${units("ms", -2)}`,
          `8.66 ${units("ms", -2)}`,
          `10.00 ${units("ms", -2)}`,
        ],
        ans: "C",
      },

      {
        id: 25,
        question: `A war-plane on a levle flight releases a bomb X. Twenty seconds later, it releases a second bomb Y. The bomb Y will reach the ground`,
        options: [
          `at the same time with X`,
          `10 s after X`,
          `20 s after X`,
          `40 s after X`,
        ],
        ans: "C",
      },

      {
        id: 27,
        question: `A stationary block of mass 5 kg is set in motion by a force og 60 N. The object attains a speed of 9 ${units(
          "ms",
          -1
        )} in time t. The value of t is`,
        options: [`0.38 s`, `0.50 s`, `0.75 s`, `1.50 s`],
        ans: "C",
      },

      {
        id: 31,
        question: `A boy of mass 40 kg stands on weighing scale inside a lift. As the lift starts to ascend with an acceleration of 1.5 ${units(
          "ms",
          -2
        )}, its reading will be?`,
        options: [`46 kg`, `40 kg`, `34 kg`, `30 kg`],
        ans: "A",
      },

      {
        id: 32,
        question: `A mass of 5 kg is suspended from the ceiling of a lift with a light inextensible string. As the lift moves upwards with an acceleration of 2 ${units(
          "ms",
          -2
        )}, the tension in the string is`,
        options: [`25 N`, `40 N`, `50 N`, `60 N`],
        ans: "D",
      },

      {
        id: 33,
        question: `A girl of mass 50 kg stands on a scale inside a lift which descends at constant velocity. The reading indicated by the scale is`,
        options: [
          `less than 50 kg`,
          `equal to 50 kg`,
          `greater than 50 kg`,
          `zero`,
        ],
        ans: "B",
      },

      {
        id: 34,
        question: `An elevator of mass 1,200 kg moves vertically downwards with an acceleration of 1.0 ${units(
          "ms",
          -2
        )}. The tension in the suspending cable is`,
        options: [`13.2 kN`, `12.0 kN`, `10.8 kN`, `10.0 kN`],
        ans: "C",
      },

      {
        id: 36,
        question: `A body of mass m<sub>1</sub> moving with a velocity <em>u</em> collides with a stationary body of mass m<sub>2</sub>. Both bodies move together after the collision with a velocity of`,
        options: [
          `m<sub>1</sub>u/m<sub>1</sub>-m<sub>2</sub>`,
          `m<sub>1</sub>u/m<sub>1</sub>+m<sub>2</sub>`,
          `m<sub>2</sub>u/m<sub>1</sub>+m<sub>2</sub>`,
          `m<sub>2</sub>u/m<sub>1</sub>-m<sub>2</sub>`,
        ],
        ans: "B",
      },

      {
        id: 37,
        question: `A body of mass 5 kg moving with a velocity of 20 ${units(
          "ms",
          -1
        )} due south hits a stationary body of mass 3 kg. If they move together after collision with a velocity v due south, the value of v is?`,
        options: [
          `20.0 ${units("ms", -1)}`,
          `15.0 ${units("ms", -1)}`,
          `12.5 ${units("ms", -1)}`,
          `12.0 ${units("ms", -1)}`,
        ],
        ans: "C",
      },

      {
        id: 38,
        question: `A ball of mass 800 g moving horizontally with a speed of 5 ${units(
          "ms",
          -1
        )} hits a vertical wall and rebounds with the same speed. The impulse experienced by the ball is`,
        options: [
          `0 ${units("kgms", -1)}`,
          `2 ${units("kgms", -1)}`,
          `4 ${units("kgms", -1)}`,
          `8 ${units("kgms", -1)}`,
        ],
        ans: "D",
      },

      // will return to this question. thanks.

      {
        id: 39,
        question: `A footballer taking a penalty kick applies a force of 100 N for 0.03 s on a ball of mass 150 g. The ball moves off with a speed of`,
        options: [
          `50 ${units("ms", -1)}`,
          `25 ${units("ms", -1)}`,
          `20 ${units("ms", -1)}`,
          `10 ${units("ms", -1)}`,
        ],
        ans: "C",
      },

      {
        id: 40,
        question: `A constant force of 25 N acts on a body of mass 3 kg for 2 s. The change in velocity of the body is`,
        options: [
          `150.0 ${units("ms", -1)}`,
          `75.0 ${units("ms", -1)}`,
          `50.0 ${units("ms", -1)}`,
          `16.7 ${units("ms", -1)}`,
        ],
        ans: "D",
      },

      {
        id: 41,
        question: `A gun of mass 6 kg fires a 40 g bullet at a speed of 120 ${units(
          "ms",
          -1
        )}. The recoil speed of the gun is`,
        options: [
          `0.8 ${units("ms", -1)}`,
          `1.0 ${units("ms", -1)}`,
          `1.2 ${units("ms", -1)}`,
          `1.6 ${units("ms", -1)}`,
        ],
        ans: "A",
      },

      {
        id: 42,
        question: `A particle of mass m initially at rest splits into two. If one of the particles of mass m<sub>1</sub> moves with velocity v<sub>1</sub>, the second particle moves with velocity`,
        options: [
          `m<sub>1<sub>v<sub>1</sub>/m-m<sub>1</sub>`,
          `m<sub>1<sub>v<sub>1</sub>/m<sub>1</sub>-m`,
          `m<sub>1<sub>v<sub>1</sub>/m`,
          `mv/m-m<sub>1</sub>`,
        ],
        ans: "B",
      },

      {
        id: 43,
        question: `50 g fuel is burnt each second in a rocket engine and ejected as a gas with a speed of 4,000 ${units(
          "ms",
          -1
        )}. The thrust on the rocket is`,
        options: [`20 N`, `80 N`, `200 N`, `500 N`],
        ans: "C",
      },

      {
        id: 44,
        question: `The exhaust gases ejected at a speed of 800 ${units(
          "ms",
          -1
        )} from a jet engine produce a thrust of 560 N. The mass of gases ejected every second is`,
        options: [`0.70 kg`, `1.43 kg`, `7.00 kg`, `14.29 kg`],
        ans: "A",
      },

      {
        id: 45,
        question: `An object moves round a circle of radius 20 m with a linear constant speed of 5 ${units(
          "ms",
          -1
        )}. The object's angular speed is`,
        options: [
          `0.2 ${units("rads", -1)}`,
          `0.50 ${units("rads", -1)}`,
          `4.00 ${units("rads", -1)}`,
          `1.00 ${units("rads", -1)}`,
        ],
        ans: "A",
      },

      {
        id: 46,
        question: `A stone tied to the end of a string revolves in a horizontal circle of radius 5 m with an angular speed 3 ${units(
          "rads",
          -1
        )}. The tangential velocity with which the stone will move off if the string breaks is`,
        options: [
          `0.6 ${units("ms", -1)}`,
          `1.7 ${units("ms", -1)}`,
          `7.5 ${units("ms", -1)}`,
          `15.0 ${units("ms", -1)}`,
        ],
        ans: "D",
      },

      {
        id: 47,
        question: `A particle of mass 5 X ${exp(
          -6
        )} kg revolves in a circle with a radial acceleration of 8 X ${exp(
          5
        )} ${units("ms", -2)}. The centripetal force on the particle is`,
        options: [
          `6.25 X ${exp(-12)} N`,
          `4.00 X ${exp(-2)} N`,
          `4.00 X ${exp(0)} N`,
          `1.60 X ${exp(11)} N`,
        ],
        ans: "C",
      },

      {
        id: 48,
        question: `A body moves with a constant speed of 2.0 ${units(
          "ms",
          1
        )} along a circular path. If the angular speed of the body is 1.2 ${units(
          "rads",
          -1
        )}, the acceleration towards the center of the circle is`,
        options: [
          `0.60 ${units("ms", -2)}`,
          `1.67 ${units("ms", -2)}`,
          `2.40 ${units("ms", -2)}`,
          `4.80 ${units("ms", -2)}`,
        ],
        ans: "C",
      },

      {
        id: 49,
        question: `A body of mass 500 g moves with a speed of 4 ${units(
          "ms",
          -1
        )} in a circular path of radius of radius 5 m. The centripetal force on the body is`,
        options: [`8.00 N`, `1.60 N`, `0.80 N`, `0.16 N`],
        ans: "B",
      },

      {
        id: 51,
        question: `A ball thrown with an initial velocity V at an angle ${alpha} to the horizontal. The time taken to reach maximum height is`,
        options: [
          `V/g sin ${alpha}`,
          `V cos ${alpha}/g`,
          `V sin ${alpha}/g`,
          `V sin ${alpha}/2g`,
        ],
        ans: "C",
      },

      {
        id: 53,
        question: `A stone projected horizontally with a velocity of 15 ${units(
          "ms",
          -1
        )} from the top of a building lands at a horizontal distance of 60 m from the building. The height of the building is`,
        options: [`120 m`, `80 m`, `40 m`, `20 m`],
        ans: "B",
      },

      {
        id: 54,
        question: `A stone projected with a velocity of 50 ${units(
          "ms",
          -1
        )} from the ground level hits the ground 5 s later. The angle of projection is`,
        options: [`0 ${deg}`, `30 ${deg}`, `45 ${deg}`, `60 ${deg}`],
        ans: "B",
      },

      {
        id: 58,
        question: `To obtain maximum horizontal range, a projectile must be fired at an angle ${theta} to the horizontal which is equal to`,
        options: [`90 ${deg}`, `60 ${deg}`, `45 ${deg}`, `30 ${deg}`],
        ans: "C",
      },

      {
        id: 59,
        question: `The assumption made in a simple pendulum experiment are that:<br />
        I. the suspending string is inextensible<br />
        II. the angle of oscillation is small<br />
        III. the bob has a very small mass<br />
        IV. the length of the string is short<br />
        Which of the above statements are correct?`,
        options: [
          `I and II only`,
          `III and IV only`,
          `I, II and III only`,
          `1, II, III, and IV`,
        ],
        ans: "A",
      },

      {
        id: 60,
        question: `The period of oscillation of a simple pendulum which makes 75 oscillations in one minute is`,
        options: [`0.13 s`, `0.80 s`, `1.00 s`, `1.25 s`],
        ans: "B",
      },

      {
        id: 61,
        question: `The frequency of oscillation of a simple pendulum can be reduced by`,
        options: [
          `increasing the mass of the bob`,
          `reducing the mass of the bob`,
          `increasing the length of the string`,
          `reducing the length of the string`,
        ],
        ans: "C",
      },

      {
        id: 62,
        question: `A body in simple harmonic motion has an angular speed of 4.4 ${units(
          "rads",
          -1
        )}. The period of motion is`,
        options: [`0.70 s`, `1.43 s`, `3.14 s`, `4.40 s`],
        ans: "B",
      },

      {
        id: 63,
        question: `The length of a simple pendulum is plotted against the square of the corresponding period. The slope of the graph is equal to`,
        options: [
          `g<sup>2</sup>/4&pi;`,
          `&pi;/4g<sup>2</sup>`,
          `4&pi;<sup>2</sup>/g`,
          `g/4&pi;<sup>2</sup>/`,
        ],
        ans: "D",
      },

      {
        id: 64,
        question: `Two simple pendula P and Q make oscillation of 200 and 300 oscillations respectively in equal times. If the period of P is 1.2 s, the period of Q is`,
        options: [`0.60 s`, `0.80 s`, `1.25 s`, `1.80 s`],
        ans: "B",
      },

      {
        id: 65,
        question: `When the length of the inextensible string of a simple pendulum is increased by a factor of 4, its period is`,
        options: [
          `increased by a factor of 4`,
          `increased by a factor of 2`,
          `decreased by a factor of 4`,
          `decreased by a factor of 2`,
        ],
        ans: "B",
      },

      {
        id: 66,
        question: `A simple pendulum of length 0.64 m has a period of 2.4 s. The period of a simple pendulum of length 0.36 m is`,
        options: [`1.4 s`, `1.8 s`, `3.2 s`, `4.3 s`],
        ans: "B",
      },
    ],
  },
  // 3. equilibrium of forces
  {
    topic: "Equilibrium of Forces",
    questions: [
      {
        id: 1,
        question: `A nail is pulled from a wall with a string tied to the nail. If the string is inclined at an angle of 30${deg} to the wall and the tension in the string is 50 N, the effective force used in pulling the nail is`,
        options: [
          `25 N`,
          `25${sqrt}3 N`,
          `50 N`,
          `50${sqrt}3 N`,
        ],
        ans: "A",
      },

      {
        id: 14,
        question: `A meter rule pivoted at its center has masses m<sub>1</sub> and m<sub>2</sub> placed at the 20 cm and 65 cm marks respectively. If the metre rule balances horizontally, the ratio m<sub>2</sub>m<sub>1</sub> is`,
        options: [
          `2`,
          `3/2`,
          `2/3`,
          `1/2`,
        ],
        ans: "A",
      },

      {
        id: 16,
        question: `A uniform meter rod of weight 40 N has a piece of metal of weight 20 N attached to one of its ends. The center of gravity of the system from the weighted end is`,
        options: [
          `8.4 cm`,
          `16.7 cm`,
          `25.0 cm`,
          `33.3 cm`,
        ],
        ans: "D",
      },
      {
        id: 22,
        question: `A uniform beam of length 4 m and mass 20 kg is supported at both ends. A girl of mass 40 kg stands on the beam at a distance of 1.5 m from one of the supports. The reactions at the supports are`,
        options: [
          `150 N, 250 N`,
          `200 N, 200 N`,
          `250 N, 350 N`,
          `300 N, 300 N`,
        ],
        ans: "C",
      },
      
      {
        id: 23,
        question: `Weights of 0.2 N and 0.5 N are placed at the 30 cm and 80 cm marks respectively on a uniform metre rule. If the metre rule balances horizontally on a knife edge at 60 cm mark, the weight of the metre rule is`,
        options: [`0.1 N`, `0.3 N`, `0.4 N`, `0.7 N`],
        ans: "C",
      },

      {
        id: 24,
        question: `A uniform metre rod of mass 1.5 kg is pivoted at one end. A weight of 7 N is placed at the center of the rod. The vertical force which should be applied at the other end to maintain the rod in equilibruim in the horizontal position is`,
        options: [`22.0 N`, `11.0 N`, `10.5 N`, `8.5 N`],
        ans: "B",
      },

      {
        id: 32,
        question: `A mass of 10 g is attached to thw 0 cm mark of a light meter rule while a mass of 40 g is attached to the other end(the 100 cm) mark. The center of gravity of the system is located at the`,
        options: [`20 cm mark`, `mid-point of the meter rule`, `60 cm mark`, `80 cm mark`],
        ans: "D",
      },

      {
        id: 36,
        question: `The force required to just make a 6 kg object move along a horizontal surface where the coefficient of friction is 0.25 is`,
        options: [`150.0 N`, `24.0 N`, `15.0 N`, `1.5 N`],
        ans: "C",
      },

      {
        id: 37,
        question: `A force of 8.75 N is applied to a mass of 3.5 kg placed on a horizontal surface. If the coefficient of friction between the mass and the surface is 0.2, the acceleration of the mass is`,
        options: [
          `0.5 ${units("ms", -2)}`,
          `1.0 ${units("ms", -2)}`,
          `1.5 ${units("ms", -2)}`,
          `2.0 ${units("ms", -2)}`,
        ],
        ans: "A",
      },

      {
        id: 38,
        question: `A book of mass 150 g is pushed against a vertical wall with a horizontal force of F N. If the coefficient of friction between the book and the wall is 0.15, the minimum value of F required to hold the book in place is`,
        options: [
          `10 N`,
          `100 N`,
          `1,000 N`,
          `1,500 N`,
        ],
        ans: "A",
      },

      {
        id: 39,
        question: `A horizontal force of 10 N is required to just slide a block of mass 4 kg on a horizontal platform. The coefficient of limiting friction between the block and the platform is`,
        options: [
          `0.25`,
          `0.40`,
          `0.50`,
          `0.80`,
        ],
        ans: "A",
      },

      {
        id: 40,
        question: `A crate of mass 25 kg moving with a speed of 3 $${velocity} on a rough horizontal floor is brought to rest after sliding a distance of 2.5 m on the floor. The coefficient of sliding friction between the crate and the floor is`,
        options: [
          `0.09`,
          `0.18`,
          `0.36`,
          `0.54`,
        ],
        ans: "B",
      },

      {
        id: 43,
        question: `The limiting frictional force on a body of mass 4 kg resting on an inclined plane is 20 N. The angle of inclination ${theta} of the plane is`,
        options: [
          `75${deg}`,
          `60${deg}`,
          `45${deg}`,
          `30${deg}`,
        ],
        ans: "D",
      },

      {
        id: 44,
        question: `A 50 kg crate rests on a platform inclined at 30${deg} to the horizontal. The coefficient of friction between the crate and platform is 0.2. The minimum force needed to prevent the crate from sliding down the incline is`,
        options: [
          `86.6 N`,
          `163.4 N`,
          `250.0 N`,
          `433.0 N`,
        ],
        ans: "B",
      },
    ],
  },
  // 4. work, energy, and power
  {
    topic: "Work, Energy and Power",
    questions: [
      {
        id: 2,
        question: `A boy of weight 300 N climbs to the top of a hill of height 20 m. The work done by the boy against the force of gravity is`,
        options: [`6000 J`, `600 J`, `320 J`, `15 J`],
        ans: "A",
      },

      {
        id: 5,
        question: `A body initially at rest is accelerated at the rate of 0.2 ${units(
          "ms",
          -1
        )} for 5 s under a constant force of 50 N. The work done on the body is`,
        options: [`10 J`, `50 J`, `125 J`, `250 J`],
        ans: "C",
      },

      {
        id: 8,
        question: `An object is acted upon by two forces 3 N and 5 N inclined at 60 ${deg} to each other. If the object is moved through a distance 6 m by the resultant force, the work done is`,
        options: [`42 J`, `35 J`, `30 J`, `18 J`],
        ans: "A",
      },

      {
        id: 9,
        question: `A car of mass 800 kg initially at rest is accelerated at the rate of 4 ${units(
          "ms",
          -2
        )}. The kinetic energy of the car after 5 seconds is`,
        options: [
          `6.40 ${times} ${exp(3)} J`,
          `2.56 ${times} ${exp(4)} J`,
          `1.60 ${times} ${exp(5)} J`,
          `6.40 ${times} ${exp(5)} J`,
        ],
        ans: "C",
      },

      {
        id: 10,
        question: `An object of mass 20 kg is released from a height of 10 m above the ground level. The kinetic energy of the object just before it hits the ground is`,
        options: [`4000 J`, `2000 J`, `500 J`, `200 J`],
        ans: "B",
      },

      {
        id: 11,
        question: `A bullet of mass 40 g travelling at 300 ${units(
          "ms",
          -1
        )} strikes a target normally and penetrates a distance of 20 cm in the target before coming to rest. The average force exerted on the bullet by the target is`,
        options: [`90 N`, `400 N`, `900 N`, `9,000 N`],
        ans: "D",
      },

      {
        id: 12,
        question: `An object slides down an inclined plane from an initial height of 30 m. Its velocity at the foot of the plane is 20 ${units(
          "ms",
          -1
        )}. The percentage of its initial potential energy which is dissipated as heat is`,
        options: [`33.3%`, `50%`, `66.67%`, `75%`],
        ans: "A",
      },

      {
        id: 14,
        question: `A crate of mass 60 kg is dragged up a smooth plane inclined at 30 ${deg} to the horizontal. If the final height of the crate above the ground level is 5 m, the force F applied parallel to the plane to drag the crate is`,
        options: [`150 N`, `240 N`, `300 N`, `600 N`],
        ans: "C",
      },

      {
        id: 15,
        question: `A 70 kg man ascends a flight of stairs 4 m in 7 s. The power expended by the man is`,
        options: [`40 W`, `100 W`, `280 W`, `400 W`],
        ans: "D",
      },

      {
        id: 16,
        question: `A pump lifts water into an overhead tank at a height of 12 m at the rate of 5 ${units(
          "kgs",
          -1
        )}. The power of the pump is`,
        options: [`60 W`, `600 W`, `720 W`, `1200 W`],
        ans: "B",
      },

      {
        id: 17,
        question: `A 40 kg girl climbing a flight of stairs expends energy at the rate of 50 W. The time taken for her to reach a height of 20 m is`,
        options: [`16 s`, `32 s`, `80 s`, `160 s`],
        ans: "D",
      },

      {
        id: 18,
        question: `An engine develops a power of 750 W while moving a car at constant velocity 3 ${units(
          "ms",
          -1
        )}. The force exerted on the car by the engine is`,
        options: [`83.3 N`, `250 N`, `750.0 N`, `2250.0 N`],
        ans: "B",
      },

      {
        id: 19,
        question: `An object of mass 12 kg is held at a height of 5 metres above the ground for 30 seconds. The work done within this period is`,
        options: [`600 J`, `200 J`, `60 J`, `0 J`],
        ans: "D",
      },

      {
        id: 20,
        question: `A car of mass M kg is accelerated uniformly from rest by an engine of power P. The minimum time it will take to attain a speed V is`,
        options: [`MV/P`, `MV/2P`, `MV<sup>2</sup>/2P`, `MV<sup>2</sup>/P`],
        ans: "C",
      },

      {
        id: 21,
        question: `A water pump of 1.2 kW rating pumps 480 kg of water into an overhead tank at a height of 5 m in 30 seconds. The efficiency of the pump is`,
        options: [`90.0%`, `80.0%`, `66.7%`, `62.5%`],
        ans: "C",
      },

      {
        id: 22,
        question: `24 kJ of heat is produced by the combustion of a certain quantity of petrol in an engine rated at 10 W. If one-quarter of this heat is converted into mechanical energy, the engine will run for`,
        options: [`10 min`, `40 min`, `100 min`, `400 min`],
        ans: "A",
      },

      {
        id: 23,
        question: `A stone of mass 50 g projected vertically upwards from the ground acquires a velocity of 12 ${units(
          "ms",
          -1
        )} at a height of 20 m. The initial kinetic energy of the stone is`,
        options: [`3.6 J`, `10.0 J`, `13.6 J`, `27.2 J`],
        ans: "C",
      },

      {
        id: 25,
        question: `If M and R are the mass and radius of the earth respectively and G is the universal gravitational constant, the earth's gravitational potential at an altitude H above the ground level is`,
        options: [`-GM/H`, `-GM/R+H`, `1-GM/R+H`, `-GM/R-H`],
        ans: "B",
      },

      {
        id: 26,
        question: `An object having a mass of 24 kg on earth is taken to a planet where the acceleration due to gravity is one-half of its value on earth. The mass of the object on the planet is`,
        options: [`12 kg`, `24 kg`, `36 kg`, `48 kg`],
        ans: "B",
      },

      {
        id: 27,
        question: `An object of mass 40 kg will experience a gravitational force of 68 N on a planet on which the intensity of the gravitational field is`,
        options: [
          `0.4 ${units("NKg", -1)}`,
          `1.7 ${units("NKg", -1)}`,
          `9.8 ${units("NKg", -1)}`,
          `2,720 ${units("NKg", -1)}`,
        ],
        ans: "B",
      },

      {
        id: 28,
        question: `The mass of a certain planet P is one-hundredth that of the earth while its radius is one-quarter of the earth's radius. If the acceleration due to gravity on the earth is 10 ${units(
          "ms",
          -2
        )}, then its value on P is`,
        options: [
          `0.10 ${units("ms", -2)}`,
          `0.40 ${units("ms", -2)}`,
          `1.60 ${units("ms", -2)}`,
          `2.50 ${units("ms", -2)}`,
        ],
        ans: "C",
      },

      {
        id: 29,
        question: `The escape velocity of a body on the surface of a planet of radius R and mass M is [G = universal gravitational constant]`,
        options: [
          `${sqrt}2G R`,
          `${sqrt}2GR`,
          `${sqrt}2GM / R`,
          `${sqrt}2GM/R`,
        ],
        ans: "D",
      },

      {
        id: 30,
        question: `The radius of the earth is 6.4 ${times} ${exp(
          6
        )} m and the acceleration due to gravity is 10.0 ${units(
          "ms",
          -2
        )}. The escape velocity of a rocket launched from the earth's surface is`,
        options: [
          `4.2 ${units("kms", -1)}`,
          `4.0 ${units("kms", -1)}`,
          `11.3 ${units("kms", -1)}`,
          `25.3 ${units("kms", -1)}`,
        ],
        ans: "C",
      },
    ],
  },
  // 5. simple machine
  {
    topic: "Simple machine",
    questions: [
      {
        id: 1,
        question: `A machine has an efficiency of 75%. The work done when the machine is used to raise a load of 50 kg through a vertical distance of 6 m is`,
        options: [`4000 J`, `3000 J`, `2250 J`, `500 J`],
        ans: "D",
      },

      {
        id: 2,
        question: `A machine with an efficiency of 60% is used to overcome a load of 60 N through the application of a force of 40 N. The mechanical advantage of the machine is`,
        options: [`0.4`, `0.9`, `1.5`, `2.5`],
        ans: "D",
      },

      {
        id: 4,
        question: `A machine having a velocity ratio of 4 requires a weight of 20 kg to overcome a weight of 60 kg. The efficiency of the machine is`,
        options: [`33.3%`, `60%`, `75%`, `90%`],
        ans: "D",
      },

      {
        id: 7,
        question: `500 J of work is required by a machine to raise a load of 250 N through a vertical distance of 1.6 m. The efficiency of the machine is`,
        options: [`80%`, `75%`, `67%`, `50%`],
        ans: "D",
      },

      {
        id: 11,
        question: `A pulley system has three pulleys in the fixed block and two in the movable block. Its velocity ratio is`,
        options: [`5`, `4`, `3`, `2`],
        ans: "D",
      },

      {
        id: 12,
        question: `A pulley system has three pulleys in the fixed block and two in the movable block. If it has an efficiency of 72%, the mechanical advantage of the system is`,
        options: [`36.0`, `7.2`, `5.0`, `3.6`],
        ans: "D",
      },

      {
        id: 13,
        question: `A pulley system has a velocity ratio of 6 and an efficiency of 75%. The effort needed to lift a load of mass 135 kg is`,
        options: [`1013 N`, `300 N`, `225 N`, `30 N`],
        ans: "D",
      },

      {
        id: 14,
        question: `A block and tackle system made up of five pulleys is used to raise a load of 700 N with an effort of 200 N. The efficiency of the system is`,
        options: [`29%`, `57%`, `70%`, `85%`],
        ans: "D",
      },

      {
        id: 18,
        question: `A wheel and axle is used to  raise a weight of 720 N with an effort of 200 N. If the radii of the wheel and the axle are 40 cm and 10 cm respectively, the efficiency of the machine is`,
        options: [`60%`, `72%`, `80%`, `90%`],
        ans: "D",
      },

      {
        id: 20,
        question: `The wheel and axle of a wheel-and-axle have radii 50 cm and 10 cm respectively. If one-fifth of the work done by the effort is used in overcoming friction, an effort of 500 N applied to the wheel will raise a load of`,
        options: [`2,500 N`, `2,000 N`, `1,000 N`, `500 N`],
        ans: "D",
      },

      {
        id: 21,
        question: `The velocity ratio of a plane inclined at an angle of ${theta} to the horizontal is`,
        options: [`sin ${theta}`, `tan ${theta}`, `1/sin ${theta}`, `1/tan ${theta}`],
        ans: "D",
      },

      {
        id: 22,
        question: `A plane which is inclined at an angle of 30 ${deg} to the horizontal has a velocity ratio of`,
        options: [`2.00`, `1.00`, `0.87`, `0.50`],
        ans: "D",
      },

      {
        id: 23,
        question: `A body of mass 20 kg is pushed up a smooth plane inclined at an angle of 30${deg} to the horizontal. The force needed to push the body up the plane is`,
        options: [`200 N`, `100 N`, `20 N`, `10 N`],
        ans: "D",
      },

      {
        id: 25,
        question: `A force of 100 N is used to push a body up a plane inclined at an angle of 15&deg; to the horizontal. If one-half of the work done by the force is used in overcoming friction, the weight of the body in newtons is`,
        options: [
          `50/sin 15&deg;`,
          `50 sin 15&deg;`,
          `100/sin 15&deg`,
          `100 sin 15&deg;`,
        ],
        ans: "A",
      },

      {
        id: 26,
        question: `Two intermeshing gear wheels have 25 and 75 teeth respectively. If the smaller wheel rotates at 60 ${units("revs",-1)} the larger wheel rotates at`,
        options: [
          `20 ${units("revs",-1)}`,
          `180 ${units("revs",-1)}`,
          `1500 ${units("revs",-1)}`,
          `4500 ${units("revs",-1)}`,
        ],
        ans: "A",
      },

      {
        id: 27,
        question: `A screw jack has a pitch of 0.5 cm and a tommy bar of length 20 cm. The velocity ratio is`,
        options: [`40&pi;`, `40/&pi;`, `80&pi;`, `80/&pi;`],
        ans: "C",
      },

      
      {
        id: 28,
        question: `A spanner P of length 25 cm is used to turn a screw of pitch 3 mm through one complete rotation. A second spanner Q of length 30 cm is also used to turn the same screw through a complete rotation. The ratio of the velocity ratios of P to Q is`,
        options: [`5:6`, `6:5`, `2:5`, `5:2`],
        ans: "A",
      },

      {
        id: 29,
        question: `The handle of a screw jack of pitch 4 mm turns through a circle of radius 21 cm when the jack is used to raise a load. If &pi;=22/7, the velocity ratio of the jack is`,
        options: [`66`, `165`, `264`, `330`],
        ans: "A",
      },
    ],
  },
  // 6. elasticity
  {
    topic: "Elasticity",
    questions: [
      {
        id: 1,
        question:
          "A spiral spring extends by 5 cm under a load of 60 N. When the load is replaced by a steel block, the new extension is 7 cm. The weight of the steel block is",
        options: [`12 N`, `43 N`, `84 N`, `96 N`],
        ans: "C",
      },
      {
        id: 2,
        question:
          "A 20 g wt. causes an extension of 0.72 cm in a spring. The extension caused by a load of 80 g wt., assuming Hooke's law is obeyed by the spring, is",
        options: [`0.18 cm`, `0.36 cm`, `1.44 cm`, `2.88 cm`],
        ans: "D",
      },
      {
        id: 3,
        question:
          "With a mass of 25 g hung from its end, the total length of a spring is 15 cm. When the mass is increased to 40 g, the total length of the spring is 18 cm. The unstrectched length of the spring is",
        options: [`9.0 cm`, `10.0 cm`, `12.0 cm`, `12.5 cm`],
        ans: "B",
      },
      {
        id: 5,
        question:
          "An elastic string stretches to a total length of 30 cm under a load of 500 N. With an additional load of 100 N, the string strectches by a further 2 cm. The natural length of the string is",
        options: [`25 cm`, `24 cm`, `20 cm`, `15 cm`],
        ans: "C",
      },
      {
        id: 6,
        question:
          "A spring has a total length of 17.5 cm under a load of 250 g and 20.0 cm under a load of 300 g. The extension of the string per unit load is",
        options: [
          `5 X ${exp(-5)} ${units("mN", -1)}`,
          `8 X ${exp(-5)} ${units("mN", -1)}`,
          `5 X ${exp(-2)} ${units("mN", -1)}`,
          `8 X ${exp(-2)} ${units("mN", -1)}`,
        ],
        ans: "C",
      },
      {
        id: 7,
        question:
          "A spring has a total length of 17.5 cm under a load of 250 g and 20.0 cm under a load of 300 g. The force constant is?",
        options: [
          `12.5 ${units("Nm", -1)}`,
          `20.0 ${units("Nm", -1)}`,
          `1.25 X ${exp(4)} ${units("Nm", -1)}`,
          `2.00 X ${exp(4)} ${units("Nm", -1)}`,
        ],
        ans: "B",
      },
      {
        id: 8,
        question: `A spring with a force constant of 3 X ${exp(3)} ${units(
          "Nm",
          -1
        )} is ised to measure the mass of an object. If the spring extends by 5 cm when the object is hung from it, the mass of the object is`,
        options: [`600 kg`, `150 kg`, `60 kg`, `15 kg`],
        ans: "D",
      },
      {
        id: 9,
        question: `An elastic spring of length 20 cm stretches by 7 mm under a load of 50 N. The strain in the string is`,
        options: [
          `1.75 X ${exp(-1)}`,
          `1.75 X ${exp(-2)}`,
          `3.5 X ${exp(-2)}`,
          `7.0 X ${exp(-2)}`,
        ],
        ans: "C",
      },
      {
        id: 10,
        question: `An elastic string of force constant 2000 ${units(
          "Nm",
          -1
        )} undergoes a strain of 0.02 under load of 20 N. The natural length of the string is`,
        options: [`50 cm`, `75 cm`, `100 cm`, `200 cm`],
        ans: "A",
      },
      {
        id: 11,
        question: `A force F applied to an elastic string of length L and cross-sectional area A results in an extension x. If E is the Young's modulus of the string, then`,
        options: [
          `F = EAL/x`,
          `F = EAx/L`,
          `F = EAx<sup>2</sup>/L`,
          `F = EA/Lx`,
        ],
        ans: "B",
      },
      {
        id: 12,
        question: `A wire of cross-sectional area of 6 X ${exp(-5)} ${units(
          "m",
          2
        )} and length 50 cm strecthes by 0.2 mm under a load of 3,000 N. The Young's modulus for the wire is`,
        options: [
          `8 X ${exp(10)} ${units("Nm", -2)}`,
          `1.25 X ${exp(11)} ${units("Nm", -2)}`,
          `2.5 X ${exp(11)} ${units("Nm", -2)}`,
          `5 X ${exp(11)} ${units("Nm", -2)}`,
        ],
        ans: "B",
      },
      {
        id: 13,
        question: `A wire of diameter 2.8 mm supports a weight W. If the tensile stress in the wire is 2 X ${exp(
          7
        )} ${units("Nm", -2)}, the value of W is?`,
        options: [`123.2 N`, `98.4 N`, `56.0 N`, `49.2 N`],
        ans: "A",
      },
      {
        id: 14,
        question: `A wire has a tensile stress of 2 X ${exp(7)} ${units(
          "Nm",
          -2
        )}, a Young's modulus of 2 X ${exp(10)} ${units(
          "Nm",
          -2
        )} and an unstrected length of 100 cm, the extension is`,
        options: [`10 mm`, `5 mm`, `2 mm`, `1 mm`],
        ans: "D",
      },
      {
        id: 15,
        question: `A spring of natural length l extends to a new length L under tensile force F. If Hooke's law applies, thw work done in stretching the spring is`,
        options: [`1/2FL`, `1/2Fl`, `1/2F(L-l)`, `F(L-l)`],
        ans: "C",
      },
      {
        id: 16,
        question: `An elastic string of length 20 cm extends to 24 cm when it supports a weight of 50 N. The energy stored in the string is`,
        options: [`1 J`, `2 J`, `5 J`, `10 J`],
        ans: "A",
      },
      {
        id: 17,
        question: `As the tension in an elastic string is increased from 100 N to 180 N, the string extends to 10 cm. The work done in increasing the tension in the string is`,
        options: [`8 J`, `10 J`, `14 J`, `18 J`],
        ans: "C",
      },
      {
        id: 18,
        question: `The potential energy stored in a spring of force constant 2 X ${exp(
          4
        )} ${units("Nm", -1)} which is acted upon by a force of 600 N is`,
        options: [`3 J`, `9 J`, `18 J`, `90 J`],
        ans: "B",
      },
      {
        id: 19,
        question: `An object of mass 20 kg is dropped on a spring which is placed 5 m below. If the spring has a force constant of 5 X ${exp(
          4
        )} ${units("Nm", -1)}, the maximum compression of the string is`,
        options: [`1.0 m`, `0.5 m`, `0.2 m`, `0.04 m`],
        ans: "C",
      },
      {
        id: 20,
        question: `A stone of mass 20 g is projected vertically upwards with a catapult whose rubber cord has a force constant 72 ${units(
          "Nm",
          -1
        )}. If the tension in the cord at the point of release is 36 N, the velocity of projection of stone is and maximum height reached is?`,
        options: [
          `30 ${units("ms", -1)} and 45 m`,
          `24 ${units("ms", -1)} and 4.5 m`,
          `6 ${units("ms", -1)} and 18 m`,
          `3 ${units("ms", -1)} and 9.0 m`,
        ],
        ans: "A",
      },
    ],
  },
  // 7. hydrostatics
  {
    topic: "Hydrostatics",
    questions: [
      {
        id: 1,
        question: `Cold oil of volume 600 ${units(
          "cm",
          3
        )} has a density of 0.9 ${units(
          "gcm",
          -3
        )}. When heated, the density of the oil decreases to 0.6 ${units(
          "gcm",
          -3
        )}. The volume of the heated oil is`,
        options: [
          `324 ${units("cm", 3)}`,
          `400 ${units("cm", 3)}`,
          `720 ${units("cm", 3)}`,
          `900 ${units("cm", 3)}`,
        ],
        ans: "D",
      },
      {
        id: 2,
        question: `The relative densities of gold, silver, copper and zinc are given as 19.3, 10.5, 8.9 and 7.1 respectively. A piece of ornamental metal weighs 0.445 kg and displaces 5 &times; ${exp(
          -5
        )} ${units("m", 3)} when completely immersed in water. The metal is?`,
        options: ["zinc", "copper", "silver", "gold"],
        ans: "B",
      },

      {
        id: 3,
        question: `Seawater has specific gravity of 1.03. Neglecting the atmospheric pressure, the force exerted by seawater on the hatch door of a submarine of area 0.8 ${units(
          "m",
          3
        )} at a depth of 300 m is`,
        options: [
          `2.47 &times; ${exp(6)} N`,
          `2.47 &times; ${exp(3)} N`,
          `3.86 &times; ${exp(6)} N`,
          `3.86 &times; ${exp(3)} N`,
        ],
        ans: "A",
      },

      {
        id: 4,
        question: `Oil of mass 0.5 g and relative density 0.5 forms a thin film of area 0.25 ${units(
          "m",
          3
        )} on the surface of water. The thickness of the oil film is`,
        options: [
          `2.5 &times; ${exp(-7)} m`,
          `4.0 &times; ${exp(-7)} m`,
          `2.5 &times; ${exp(-6)} m`,
          `4.0 &times; ${exp(-6)} m`,
        ],
        ans: "D",
      },

      {
        id: 5,
        question: `The pressure of a gas supports 0.7 m of mercury of relative density 13.3. The height of a water column which the gas pressure will support is`,
        options: [`0.7 m`, `1.9 m`, `9.3 m`, `19.0 m`],
        ans: "C",
      },

      {
        id: 6,
        question: `The volume of water which has the same mass as 5.4 ${units(
          "m",
          3
        )} of petrol of relative density 0.72 is`,
        options: [
          `7.5 ${units("m", 3)}`,
          `6.0 ${units("m", 3)}`,
          `4.8 ${units("m", 3)}`,
          `3.9 ${units("m", 3)}`,
        ],
        ans: "D",
      },

      {
        id: 7,
        question: `A circular membrane lies 24 cm below the open surface of a pool of mercury of relative density 13.6. If thr barometric height is 76 cm of mercury, the pressure on the membrane is`,
        options: [
          `3.26 &times; ${exp(4)} ${units("Nm", -2)}`,
          `1.03 &times; ${exp(5)} ${units("Nm", -2)}`,
          `1.36 &times; ${exp(5)} ${units("Nm", -2)}`,
          `1.36 &times; ${exp(7)} ${units("Nm", -2)}`,
        ],
        ans: "C",
      },

      {
        id: 8,
        question: `Points X and Y are located at 30 m and 70 m respectively below the surface of a lake. If the atmospheric pressure is 10 m of water, the ratio of the pressure at X to that of Y is`,
        options: [`3 : 7`, `7 : 3`, `1 : 2`, `2 : 1`],
        ans: "C",
      },

      {
        id: 9,
        question: `A stone of volume 3.08 ${units(
          "cm",
          3
        )} is lowered into a measuring cylinder containing water. If the diameter of the cylinder is 14 mm, the water level will rise by? (&pi; = 22/7)`,
        options: [`20.0 mm`, `15.0 mm`, `2.2 mm`, `2.0 mm`],
        ans: "A",
      },

      {
        id: 10,
        question: `A water tank of cross-sectional area 2.5 ${units(
          "m",
          3
        )} and height 3 m contains 5.0 ${units(
          "m",
          3
        )} of water. If the density of water is ${exp(3)} ${units(
          "kgm",
          -3
        )}, the force on the base of the tank is`,
        options: [
          `2.0 &times; ${exp(4)} N`,
          `3.0 &times; ${exp(4)} N`,
          `5.0 &times; ${exp(4)} N`,
          `7.5 &times; ${exp(4)} N`,
        ],
        ans: "C",
      },

      {
        id: 11,
        question: `2 ${units(
          "m",
          3
        )} of liquid X of density 1.0 &times; ${units(
          "kgm",
          -3
        )} is mixed with 3 ${units(
          "m",
          3
        )} of liquid Y of density 0.8 &times; ${exp(3)} ${units(
          "kgm",
          -3
        )}. The relative density of the mixture is`,
        options: [`0.80`, `0.88`, `0.90`, `0.10`],
        ans: "B",
      },

      {
        id: 12,
        question: `A tank of dimension 3 m &times; 2 m &times; 1.5 m is filled with water of density 10 ${
          ("kgm", -3)
        } and sealed. Neglecting the weight of the tank, the maximum pressure which the tank can maintain on the supporting surface is`,
        options: [
          `1.5 &times; ${exp(4)} ${units("Nm", -2)}`,
          `2.0 &times; ${exp(4)} ${units("Nm", -2)}`,
          `3.0 &times; ${exp(4)} ${units("Nm", -2)}`,
          `6.5 &times; ${exp(4)} ${units("Nm", -2)}`,
        ],
        ans: "C",
      },

      {
        id: 13,
        question: `A 50 litre petrol tank of mass 12 kg is filled with petrol of relative density 0.70. The mass of the filled tank is`,
        options: [`15.5 kg`, `25.0 kg`, `35.0 kg`, `47.0 kg`],
        ans: "D",
      },

      {
        id: 14,
        question: `A rectangular tank of base 2 m &times; 1.5 m and height 3 m is filled with 7.5 &times; ${exp(
          3
        )} kg of a liquid. The pressure at the middle of the tank is`,
        options: [
          `1.25 &times; ${exp(4)} ${units("Nm", -2)}`,
          `2.50 &times; ${exp(4)} ${units("Nm", -2)}`,
          `7.50 &times; ${exp(4)} ${units("Nm", -2)}`,
          `3.75 &times; ${exp(5)} ${units("Nm", -2)}`,
        ],
        ans: "A",
      },

      {
        id: 15,
        question: `A tank of capacity 27 ${units(
          "m",
          3
        )} initially filled with water is drained at the rate of 5 ${units(
          "kgs",
          -1
        )}. If the density of water is ${exp(3)} ${units(
          "kgm",
          -3
        )}, the time it takes to empty the tank is`,
        options: [`13.5 min`, `54 min`, `90 min`, `135 min`],
        ans: "C",
      },

      {
        id: 17,
        question: `The normal atmospheric pressure at sea level is ${exp(
          5
        )} ${units(
          "Nm",
          -2
        )}. If the atmosphere has a uniform density of 1 ${units(
          "kgm",
          -3
        )}, the height of the atmosphere is`,
        options: [`${exp(5)} m`, `${exp(4)} m`, `${exp(3)} m`, `${exp(2)} m`],
        ans: "B",
      },

      {
        id: 18,
        question: `If the pressure in a confined liquid is changed at any point, the change is transmitted equally to all points in the liquid. This principle is called`,
        options: [
          `Archimedes' principle`,
          `Floatation principle`,
          `Pascal's Law`,
          `Boyle's Law`,
        ],
        ans: "C",
      },

      {
        id: 19,
        question: `A hydraulic press has pistons of areas 0.2 ${units(
          "m",
          2
        )} and 0.9 ${units(
          "m",
          2
        )} respectively. When a force of 300 N is exerted on the small piston, the force on the large piston is`,
        options: [`66.7 N`, `270 N`, `675 N`, `1,350 N`],
        ans: "D",
      },

      {
        id: 20,
        question: `An effort of 500 N exertedon a hydraulic press is just sufficient to move a load of 2,000 N. If the diameter of the small piston is 10 cm, that of the large piston is`,
        options: [`15 cm`, `20 cm`, `40 cm`, `80 cm`],
        ans: "B",
      },

      {
        id: 21,
        question: `A barometer can be used to measure<br />
        I. the height of a mountain<br />
        II. the dew point<br />
        III. the specific gravity of a liquid<br />
        IV. the depth of a mine<br />
        Which of the above statements are correct?`,
        options: [
          `I and II only`,
          `III and IV only`,
          `I and IV only`,
          `I, III, and IV only`,
        ],
        ans: "C",
      },

      {
        id: 22,
        question: `Which of the following devices can be used to measure pressure?<br />
        I. Hydrometer<br />
        II. Hygrometer<br />
        III. Aneroid barometer<br />
        IV. Altimeter`,
        options: [
          `I and II only`,
          `III and IV only`,
          `III only`,
          `II, III, and IV only`,
        ],
        ans: "B",
      },

      {
        id: 23,
        question: `Which of the following devices is most suitable for measuring altitude?`,
        options: [
          `Mercury barometer`,
          `Aneroid barometer`,
          `Mercury manometer`,
          `Fortin barometer`,
        ],
        ans: "B",
      },

      {
        id: 26,
        question: `An airline pilot records the pressure of the air outside his plane as 60 cm of mercry while the atmospheric pressure at the ground level is 76 cm of mercury. If the relative densities of mercury and air are 13.6 and 1.36 &times; ${exp(
          -3
        )} respectively, the height of the plane above the ground is`,
        options: [`1.6 km`, `6.0 km`, `7.6 km`, `16.0 km`],
        ans: "A",
      },

      {
        id: 27,
        question: `Which of the following forces act(s) on a piece of wood which is floating on water. I. Weight II. Viscosity III. Upthrust`,
        options: [
          `I only`,
          `I and II only`,
          `I and III only`,
          `I, II, and III`,
        ],
        ans: "C",
      },

      {
        id: 28,
        question: `A body which weighs 50 N in air displaces 3.7 kg of water when partially immersed in water. The upthrust on the body is`,
        options: [`8.7 N`, `13.0 N`, `37.0 N`, `87.0 N`],
        ans: "C",
      },

      {
        id: 29,
        question: `A solid object weighs 750 N in air and 525 N when completely immersed in a liquid of relative density 0.75. The volume of the solid is`,
        options: [
          `0.03 ${units("m", 3)}`,
          `0.07 ${units("m", 3)}`,
          `0.3 ${units("m", 3)}`,
          `0.7 ${units("m", 3)}`,
        ],
        ans: "A",
      },

      {
        id: 30,
        question: `A body of density 8 ${times} ${exp(
          3
        )} ${density} weighs 160 N in air. The apparent weight of the body when completely immersed in water of density ${exp(
          3
        )} ${density} is`,
        options: [`20 N`, `140 N`, `160 N`, `180 N`],
        ans: "B",
      },

      {
        id: 31,
        question: `An object weighs 30 N in air and 21 N in water. The weight of the object when completely immersed in a liquid of relative density 1.4 is`,
        options: [`25.2 N`, `17.4 N`, `12.6 N`, `9.0 N`],
        ans: "B",
      },

      {
        id: 32,
        question: `A stone weighs 40 N when completely immersed in water and 30 N when completely immersed in a liquid of relative density 2.0. The weight of the stone in air is?`,
        options: [`10 N`, `35 N`, `50 N`, `70 N`],
        ans: "C",
      },

      {
        id: 33,
        question: `A metal object of relative density 9.0 and volume 2 ${times} ${exp(
          -4
        )} ${units(
          "m",
          3
        )} is completely immersed in water. Its apparent weight is`,
        options: [`18 N`, `16 N`, `4.5 N`, `2.0 N`],
        ans: "B",
      },

      {
        id: 34,
        question: `A solid object of volume 60 ${units(
          "cm",
          3
        )} and density 4.0 ${units(
          "gcm",
          -3
        )} is suspended from a spring balance with half of its volume immersed in water of density 1.0 ${units(
          "gcm",
          -3
        )}. The reading on the spring balance is`,
        options: [`120 g`, `180 g`, `210 g`, `240 g`],
        ans: "C",
      },

      {
        id: 35,
        question: `An object of mass m and volume v suspended from a string is completely immersed in a liquid of density d. The tension in the string is`,
        options: [`mg`, `dvg`, `(m + dv) g`, `(m - dv) g`],
        ans: "D",
      },

      {
        id: 36,
        question: `A cylindrical piece of wood of mass 200 g and uniform cross-sectional area 40 ${units(
          "cm",
          3
        )} float upright in water of density 1.0 ${units(
          "gcm",
          -3
        )}. The length of the wood immersed in water is`,
        options: [`5 cm`, `10 cm`, `20 cm`, `40 cm`],
        ans: "A",
      },

      {
        id: 37,
        question: `A piece of wood of uniform cylindrical cross-section floats upright in a liquid density 0.8 with one-sixth of its height above the liquid. If placed in water, the fraction of its height above the water level will be`,
        options: [`1/3`, `1/5`, `4/5`, `5/6`],
        ans: "A",
      },

      {
        id: 38,
        question: `A solid cube of side 50 cm and mass 75 kg floats in a liquid with 1/3 of its height above the liquid surface. The relative density of the liquid is`,
        options: [`0.33`, `0.50`, `0.67`, `0.90`],
        ans: "D",
      },

      {
        id: 39,
        question: `A plastic object floats in water with 0.6 of its volume submerged and in oil with 0.75 of its volume submerged. The density of the oil is`,
        options: [
          `750 ${density}`,
          `800 ${density}`,
          `1,000 ${density}`,
          `1,250 ${density}`,
        ],
        ans: "B",
      },

      {
        id: 40,
        question: `A metal of real weight 10 N weighs 8 N in water and 8.5 N in a liquid L. The relative density of L is`,
        options: [`0.75`, `0.80`, `0.85`, `1.33`],
        ans: "A",
      },

      {
        id: 41,
        question: `A solid object weighs 24 g in air, 16 g in water and 20 g in oil. The ratio of the density of the solid to that of the oil is`,
        options: [`2`, `3`, `4`, `6`],
        ans: "D",
      },

      {
        id: 42,
        question: `A block of ice floats in water in a container. When the ice is completely melted, the water level in the container will`,
        options: [
          `rise`,
          `fall`,
          `remain the same`,
          `first rise and then fall`,
        ],
        ans: "C",
      },

      {
        id: 43,
        question: `A metal cube of side 0.2 m suspended on a string is completely immersed in water of density 1,000 ${density}. The upthrust on the cube is`,
        options: [`800 N`, `80 N`, `16 N`, `8 N`],
        ans: "B",
      },

      {
        id: 44,
        question: `A solid object floats in liquid X of relative density 0.9 but sinks in liquid Y of relative density 0.7. It can be inferred that the`,
        options: [
          `volume of X displaced is less than that of Y`,
          `volume of X displaced is greater than that of Y`,
          `weight of X displaced is less than that of Y`,
          `weight of X displaced is greater than that of Y`,
        ],
        ans: "D",
      },

      {
        id: 45,
        question: `A plastic object floats in water at room temperature. If the water is heated, the part of the plastic above the water level will`,
        options: [
          `decrease because the density of water decreases`,
          `increase because the density of water decreases`,
          `decrease because the density of water increases`,
          `increase because the density of water increases`,
        ],
        ans: "A",
      },

      {
        id: 46,
        question: `The relative density of the acid in a car battery can be measured with a`,
        options: [`hygrometer`, `manometer`, `hydrometer`, `barometer`],
        ans: "C",
      },

      {
        id: 47,
        question: `The relative density of a powdery substance can be measured using a beam balance and a`,
        options: [`burette`, `pipette`, `measuring cylinder`, `density bottle`],
        ans: "D",
      },

      {
        id: 48,
        question: `A specific gravity bottle of mass 20 g weighs 28 g when filled with water and 30 g when filled with a liquid X. The relative density of X is`,
        options: [`0.80`, `0.93`, `1.25`, `1.50`],
        ans: "C",
      },

      {
        id: 49,
        question: `Which of the following has the highest surface tension?`,
        options: [`Cold water`, `Hot water`, `Oily water`, `Soapy water`],
        ans: "A",
      },

      {
        id: 50,
        question: `Which of the following additions will not reduce the surface of tension of water?`,
        options: ["Detergent", "Grease", "Alcohol", "Camphor"],
        ans: "B",
      },

      {
        id: 51,
        question: `Certain insects can move about on the surface of water without sinking because`,
        options: [
          "water is denser than such insects",
          "the insects have tiny legs",
          "the upthrust on the insects is greater than their weight",
          "the water surfaces acts like an elastic membrane",
        ],
        ans: "D",
      },

      {
        id: 52,
        question: `Which of the following substances has the highest viscosity at room temperature?`,
        options: ["Water", "Kerosene", "Palm oil", "Alcohol"],
        ans: "C",
      },

      {
        id: 53,
        question: `A thin liquid film is trapped between two closely spaced glass plates. The force necessary to pull the plates apart will increase if the<br />
        I. surface tension of the liquid is increased<br />
        II. distance between the plates is increased<br />
        III. area of contact between the liquid and the plates is increased<br />
        IV. surface tension of the liquid is reduced<br />
        Which of the above statements are correct?`,
        options: [
          "I and III only",
          "II and IV only",
          "I, II and III only",
          "II, III and IV only",
        ],
        ans: "A",
      },

      {
        id: 54,
        question: `In which of the following phenomena is surface tension important?`,
        options: [
          "The floating of a boat in water",
          "The floating of a steel wire in water",
          "The floating of a ballon in air",
          "The floating of a plastic sphere in water",
        ],
        ans: "B",
      },

      {
        id: 55,
        question: `A body of mass m falls through a liquid. If V is the viscous force and U the upthrust, then at the terminal velocity`,
        options: ["V = mg/U", "V - U = mg", "V + mg = U", "V + U = mg"],
        ans: "D",
      },

      {
        id: 56,
        question: `A loaded tube of uniform cross-sectional area 2.0 ${units(
          "cm",
          3
        )} floats upright in water with 10.5 cm of its length immersed and then a liquid L with 12.0 cm of its length immersed. If the density of water is 1.0 ${units(
          "gcm",
          -3
        )}, the mass of the tube is`,
        options: ["5.25 g", "10.50 g", "21.00 g", "42.00 g"],
        ans: "C",
      },
      {
        id: 57,
        question: `When the temperature difference between the wet and dry bulbs of a hygrometer is high, this indicates that`,
        options: [
          `it is about to rain`,
          "the relative humidity is high",
          "there is plenty of sunshine",
          "the relative humidity is low",
        ],
        ans: "D",
      },
      // that's all. Thank you so much.
    ],
  },
  // 8. temperature
   {
    topic: "Temperature and Thermal Expansion",
    questions: [
      {
        id: 1,
        question: `The temperature 45${deg}C is the same as`,
        options: [
          `25${deg}F`,
          `57${deg}F`,
          `81${deg}F`,
          `113${deg}F`,
        ],
        ans: "D",
      },

      {
        id: 2,
        question: `The lower fixed point corresponds to a length od 20 mm on the stem of a thermometer while the upper fixed point corresponds to 160 mm. The temperature corresponding to a length of 48 mm is`,
        options: [
          `20.0${deg}C`,
          `30.0${deg}C`,
          `41.7${deg}C`,
          `50.0${deg}C`,
        ],
        ans: "A",
      },

      {
        id: 3,
        question: `The ice and steam points on a thermometer corresponds to X and 80 mm respectively. A temperature of 60${deg}C corresponds to 52 mm on the thermometer. The value of X is`,
        options: [
          `4 mm`,
          `8 mm`,
          `10 mm`,
          `20 mm`,
        ],
        ans: "C",
      },

      {
        id: 4,
        question: `The two fixed points in a thermometer are 60 mm apart. When the thermometer reads 48 mm above the ice point, the temperature is`,
        options: [
          `80${deg}C`,
          `72${deg}C`,
          `60${deg}C`,
          `48${deg}C`,
        ],
        ans: "A",
      },

      {
        id: 5,
        question: `The ice and steam points on a temperature scale are 50 mm and 190 mm respectively. The reading on this scale when the temperature is 70${deg}C is`,
        options: [
          `98 mm`,
          `138 mm`,
          `140 mm`,
          `148 mm`,
        ],
        ans: "D",
      },

      {
        id: 6,
        question: `A thermometer with an arbitrary scale Y registers -50${deg}Y at the lower fixed point and +70${deg}Y at the upper fixed point. The celcius temperature corresponding to 30${deg}Y is`,
        options: [
          `42.9${deg}C`,
          `50.0${deg}C`,
          `66.7${deg}C`,
          `75.0${deg}C`,
        ],
        ans: "C",
      },

      {
        id: 7,
        question: `The temperature of -93${deg}C corresponds to an absolute temperature of`,
        options: [
          `366 K`,
          `293 K`,
          `273 K`,
          `180 K`,
        ],
        ans: "D",
      },

      {
        id: 8,
        question: `A faulty mercury-in-glass thermometer has 1.5${deg}C and 103.0${deg}C as its ice and steam points respectively. When the true temperature is 40${deg}C the reading on the thermometer is`,
        options: [
          `42.7${deg}C`,
          `42.1${deg}C`,
          `40.6${deg}C`,
          `39.1${deg}C`,
        ],
        ans: "B",
      },

      {
        id: 9,
        question: `A platinum resistance thermometer has resistances of 5.35 ${ohm} and 9.75 ${ohm} at 0${deg}C and 100${deg}C respectively. When the resistance is 8.25 ${ohm}, the temperature is`,
        options: [
          `63.6${deg}C`,
          `66.7${deg}C`,
          `75.0${deg}C`,
          `84.6${deg}C`,
        ],
        ans: "B",
      },

      {
        id: 10,
        question: `A constant volume gas thermometer indicates a pressure of 250 mmHg at the ice point and 750 mmHg at the steam point. The temperature when the thermometer indicates a pressure of 450 mmHg is`,
        options: [
          `40 K`,
          `233 K`,
          `313 K`,
          `333 K`,
        ],
        ans: "C",
      },

      {
        id: 12,
        question: `A thermocouple works on the principle of`,
        options: [
          `variation of emf with temperature`,
          `variation of volume with temperature`,
          `variation of resistance with temperature`,
          `variation of pressure with temperature`,
        ],
        ans: "A",
      },

      {
        id: 13,
        question: `A wire of length 5 m is heated from a temperature of 10${deg}C to 60${deg}C. If it undergoes a change of length of 20 mm the linear expansivity of the wire is`,
        options: [
          `8 ${times} ${exp(-4)} ${units("K",-1)}`,
          `4 ${times} ${exp(-4)} ${units("K",-1)}`,
          `8 ${times} ${exp(-5)} ${units("K",-1)}`,
          `4 ${times} ${exp(-5)} ${units("K",-1)}`,
        ],
        ans: "C",
      },

      {
        id: 14,
        question: `A metal rod of length L is subjected to a temperature rise of ${theta}. If its final length is 1.05L, its linear expansivity is`,
        options: [
          `1.05/${theta}`,
          `1/1.05${theta}`,
          `1/20L`,
          `1/20${theta}`,
        ],
        ans: "D",
      },

      {
        id: 15,
        question: `A telegraph wire of length 100.0 m at 30${deg}C has a linear expansivity of 2 ${times} ${exp(-5)} ${units("K", -1)}. The length of the wire at a temperature of -10${deg}C is`,
        options: [
          `100.08 m`,
          `100.04 m`,
          `99.96 m`,
          `99.92 m`,
        ],
        ans: "D",
      },

      {
        id: 16,
        question: `A steel bridge is 500 m in length. If the temperature varies from a day-time high of 30${deg}C to a night-time low of 5${deg}C, and the linear expansivity of steel is 1.2 ${times} ${exp(-5)} ${units("K",-1)}, the daily variation in the length of the bridge is`,
        options: [
          `0.15 cm`,
          `1.50 cm`,
          `15.00 cm`,
          `1,5000 cm`,
        ],
        ans: "C",
      },

      {
        id: 17,
        question: `The linear expansivity of aluminium is approximately twice that of steel. A piece of aluminium and a piece of steel undergo the same increase in length per degree rise in temperature. The ratio of the original length of aluminium to that of steel is`,
        options: [
          `0.5`,
          `1.0`,
          `1.5`,
          `2.0`,
        ],
        ans: "A",
      },

      {
        id: 18,
        question: `Steel bars each 2 m long, are used to construct a rail line. The linear expansivity of steel is 1.2 ${times} ${exp(-5)} ${units("K",-1)} and the maximum daily variation in temperature is 40${deg}C. The safety gap that must be left between successive bars is`,
        options: [
          `0.48 mm`,
          `0.96 mm`,
          `4.80 mm`,
          `9.60 mm`,
        ],
        ans: "B",
      },

      {
        id: 19,
        question: `The diameter of a steel plug is 2.5 cm at 25${deg}C. If the linear expansivity of steel is 1.2 ${times} ${exp(-5)} ${units("K",-1)}, the temperature at which the plug will fit exactly into a hole of constant diameter 2.499 cm is`,
        options: [
          `-33.3${deg}C`,
          `-8.3${deg}C`,
          `8.3${deg}C`,
          `33.3${deg}C`
        ],
        ans: "B",
      },

      {
        id: 22,
        question: `A square plate of side 10 cm is made of a metal of linear expansivity 2 ${times} ${exp(-5)} ${units("K", -1)}. As the plate is heated from 30${deg}C to 100${deg}C, the area of one face of the plate will increase to`,
        options: [
          `100.1 ${units("cm", 2)}`,
          `100.3 ${units("cm", 2)}`,
          `101.4 ${units("cm", 2)}`,
          `102.8 ${units("cm", 2)}`,
        ],
        ans: "B",
      },

      {
        id: 23,
        question: `A metal cube of volume V and linear expansivity ${alpha} is heated through a temperature rise of T. The increase in volume of the cube is`,
        options: [
          `3${alpha}VT`,
          `2${alpha}VT`,
          `${alpha}VT`,
          `${alpha}VT/3`,
        ],
        ans: "A",
      },

      {
        id: 24,
        question: `A metal cube of side 5 cm and linear expansivity of 2${times} ${exp(-5)} ${units("K", -1)} is moved from an ice-water mixture into boiling water. The increase in the volume of the cube is`,
        options: [
          `0.25 ${units("cm",3)}`,
          `0.50 ${units("cm",3)}`,
          `0.75 ${units("cm",3)}`,
          `1.50 ${units("cm",3)}`,
        ],
        ans: "C",
      },

      {
        id: 25,
        question: `A glass bottle of initial volume 2 ${times} ${exp(4)} ${units("cm",3)} is heated from 20${deg}C to 50${deg}C. If the linear expansivity of glass is 9 ${times} ${exp(-6)} ${units("K",-1)}, the volume of the bottle at 50${deg}C is`,
        options: [
          `20,0005.4 ${units("cm",3)}`,
          `20,008.1 ${units("cm",3)}`,
          `20,013.5 ${units("cm",3)}`,
          `20,016.2 ${units("cm",3)}`,
        ],
        ans: "D",
      },

      {
        id: 26,
        question: `A glass flask of volume 1,000 ${units("cm",3)} filled with mercury is heated from 30${deg}C to 80${deg}C. If the cubic expansivity of glass and mercury are 2.4 ${times} ${exp(-4)} ${units("K",-1)} and 1.8 ${times} ${exp(-4)} ${units("K",-1)} respectively, the apparent increase in volume of mercury is`,
        options: [
          `3.0${units("cm",3)}`,
          `-3.0 ${units("cm",3)}`,
          `9.0 ${units("cm",3)}`,
          `12.0 ${units("cm",3)}`,
        ],
        ans: "B",
      },

      {
        id: 27,
        question: `A density bottle of volume 500 ${units("cm",3)} is filled with a liquid and heated from 20${deg}C to 60${deg}C. If 7.5${units("cm",3)} of liquid is expelled, the apparent cubic expansivity of the liquid is`,
        options: [
          `7.50 ${times} ${exp(-5)} ${units("K",-1)}`,
          `1.88 ${times} ${exp(-4)} ${units("K",-1)}`,
          `3.75 ${times} ${exp(-5)} ${units("K",-1)}`,
          `7.50 ${times} ${exp(-4)} ${units("K",-1)}`,
        ],
        ans: "C",
      },

      {
        id: 28,
        question: `A brass ball of volume 500 ${units("cm",3)} is moved from room temperature (30${deg}C) to an ice-water mixture at 0${deg}C. If the linear expansivity of brass is 2 ${times} ${exp(-5)} ${units("K",-1)}, the new volume of the ball is`,
        options: [
          `1,001.8 ${units("mm",3)}`,
          `1,000.6 ${units("mm",3)}`,
          `999.4 ${units("mm",3)}`,
          `998.2 ${units("mm",3)}`,
        ],
        ans: "D",
      },

      {
        id: 29,
        question: `A fixed mass of gas occupies a volume of 1,200 ${units("cm",3)} at a temperature of 27${deg}C. The change in volume as the gas is cooled at constant pressure to 0${deg}C is`,
        options: [
          `108 ${units("cm",3)}`,
          `216 ${units("cm",3)}`,
          `273 ${units("cm",3)}`,
          `300 ${units("cm",3)}`,
        ],
        ans: "A",
      },

      {
        id: 30,
        question: `A gas occupies a certain volume at 27${deg}C. If it is heated at constant pressure, its volume is exactly doubled at a temperature of`,
        options: [
          `54${deg}C`,
          `219${deg}C`,
          `327${deg}C`,
          `600${deg}C`,
        ],
        ans: "C",
      },

      {
        id: 31,
        question: `A fixed mass of gas at standard temperature and pressure is heated at constant volume. The temperature at which its pressure becomes equal to 228 cm of mercury is`,
        options: [
          `819${deg}C`,
          `546${deg}C`,
          `273${deg}C`,
          `0${deg}C`,
        ],
        ans: "B",
      },

      {
        id: 32,
        question: `A gas occupies a volume of 819${units("cm",3)} at 0${deg}C. If the gas is cooled at constant pressure, the temperature at which its volume drops to 480${units("cm",3)} is`,
        options: [
          `-113${deg}C`,
          `-56.5${deg}C`,
          `0${deg}C`,
          `160${deg}C`,
        ],
        ans: "A",
      },

      {
        id: 33,
        question: `A certain mass of gas exerts a pressure of 20 ${units("Nm",-2)} at a temperature of 127${deg}C. If the gas is heated while maintaining its volume constant, the pressure exerted by the gas at 254${deg}C is`,
        options: [
          `10.00 ${units("Nm", -2)}`,
          `26.35 ${units("Nm", -2)}`,
          `33.18 ${units("Nm", -2)}`,
          `40.00 ${units("Nm", -2)}`,
        ],
        ans: "B",
      },

      {
        id: 34,
        question: `A tyre is pumped to a pressure of 30 ${units("Nm",-2)} at 27${deg}C. When the tyre heats up to 54${deg}C the new pressure, assuming no change in volume is`,
        options: [
          `60.0 ${units("Nm", -2)}`,
          `54.0 ${units("Nm", -2)}`,
          `45.8 ${units("Nm", -2)}`,
          `32.7 ${units("Nm", -2)}`,
        ],
        ans: "D",
      },

      {
        id: 35,
        question: `An air bubble of volume 1 ${units("cm",3)} initially at a depth of 15 m below the water surface rises to the surface. If the atmospheric pressure is equal to 10 m of water, the volume of the bubble just before it reaches the water surface is`,
        options: [
          `0.25 ${units("cm", 3)}`,
          `0.67 ${units("cm", 3)}`,
          `1.50 ${units("cm", 3)}`,
          `2.50 ${units("cm", 3)}`
        ],
        ans: "D",
      },

      {
        id: 36,
        question: `The equation P<sup>a</sup>V<sup>b</sup>T<sup>c</sup> = constant reduces to Boyle's law if`,
        options: [
          `a = 1, b = 0, c = 0`,
          `a = 1, b = 1, c = 0`,
          `a = 0, b = 1, c = -1`,
          `a = 1, b = 1, c = 1`,
        ],
        ans: "B",
      },

      {
        id: 37,
        question: `The equation P<sup>a</sup>V<sup>b</sup>T<sup>c</sup> = constant reduces to Charles' law if`,
        options: [
          `a = 1, b = 0, c = 1`,
          `a = 0, b = 1, c = 0`,
          `a = 0, b = 1, c = -1`,
          `a = 1, b = 1, c = 0`,
        ],
        ans: "C",
      },

      {
        id: 38,
        question: `The product of pressure (P) and volume (V) has the unit of`,
        options: [
          `force`,
          `power`,
          `impulse`,
          `work`,
        ],
        ans: "D",
      },

      {
        id: 40,
        question: `At the absolute zero of temperature<br />
        I. thermal motion ceases<br />
        II. the pressure of a gas is zero<br />
        III. the mass of a gas is zero<br />
        III. ice melts<br />
        Which of the above statements are correct?`,
        options: [
          `I and II only`,
          `III and IV only`,
          `I, II, and III only`,
          `II, III, IV only`,
        ],
        ans: "A",
      },

      {
        id: 44,
        question: `A fixed mass of gas occupying a certain volume has its pressure reduced to 25 percent of its original value while the temperature is maintained constant. The ratio of the new volume to the original volume is`,
        options: [
          `2 : 1`,
          `1 : 2`,
          `1 : 4`,
          `4 : 1`,
        ],
        ans: "D",
      },

      {
        id: 45,
        question: `A little quantity of air is trapped on top of the mercury column in a barometer. When the volume of the trapped air is 7.5 ${units("cm",3)} and the atmospheric pressure is 76 cm, the barometer reads 74.0 cm. When he volume of the trapped air is 10 ${units("cm",3)} and the barometer reads 73.0 cm, the correct atmospheric pressure is`,
        options: [
          `75.5 cm`,
          `75.0 cm`,
          `74.5 cm`,
          `74.0 cm`,
        ],
        ans: "C",
      },

      {
        id: 46,
        question: `The volume of a certain mass of gas is doubled while its absolute temperature is halved. The pressure of the gas`,
        options: [
          `remain unchanged`,
          `is halved`,
          `increases by a factor of 4`,
          `decreases by a factor of 4`,
        ],
        ans: "D",
      },

      {
        id: 47,
        question: `A certain mass of gas is trapped in a tube of volume V at a temperature of 27${deg}C. If the pressure on the gas is doubled such that its volume is reduced to 75 percent of its original value, the new temperature of the gas is`,
        options: [
          `-73.0${deg}C`,
          `40.5${deg}C`,
          `177.0${deg}C`,
          `450.0${deg}C`,
        ],
        ans: "C",
      },

      {
        id: 48,
        question: `The pressure of a fixed mass of gas is reduced from three atmospheres to 1 atmosphere, while its temperature increases from -73${deg}C to 127${deg}C. The ratio of the final volume of the gas to its initial volume is`,
        options: [
          `6 : 1`,
          `1 : 6`,
          `3 : 2`,
          `2 : 3`,
        ],
        ans: "A",
      },

      {
        id: 49,
        question: `A certain mass of gas at -123${deg}C occupies a volume of 10 ${units("m",3)} under a pressure of 4 ${times} ${exp(5)} ${units("Nm",-2)}. If the gas occupies a volume of 20 ${units("m",3)} at 27${deg}C, its pressure is`,
        options: [
          `8 ${times} ${exp(5)} ${units("Nm",-2)}`,
          `4 ${times} ${exp(5)} ${units("Nm",-2)}`,
          `2 ${times} ${exp(5)} ${units("Nm",-2)}`,
          `1 ${times} ${exp(5)} ${units("Nm",-2)}`,
          `1 : 6`,
          `3 : 2`,
          `2 : 3`,
        ],
        ans: "B",
      },

      {
        id: 50,
        question: `A certain mass of gas occupies a volume of 3 ${times} ${exp(4)} ${units("cm",3)} under a pressure of 76 cm of mercury. When the pressure is reduced to 50 cm of mercury and the temperature is increased to 127${deg}C, its volume is`,
        options: [
          `3 ${times} ${exp(4)} ${units("cm",-2)}`,
          `4 ${times} ${exp(4)} ${units("cm",-2)}`,
          `6 ${times} ${exp(4)} ${units("cm",-2)}`,
          `1.2 ${times} ${exp(5)} ${units("cm",-2)}`,
        ],
        ans: "C",
      },
    ],
  },

  // 9. heat and vapours
  {
    topic: "Heat and Vapors",
    questions: [
      {
        id: 1,
        question: `A piece of iron of mass 100 g and specific heat capacity 460${jkgk} cools from 70${degC} to 20${degC}. The heat released by the iron is`,
        options: [
          `2.3 ${times} ${exp(6)} J`,
          `9.2 ${times} ${exp(5)} J`,
          `9.2 ${times} ${exp(3)} J`,
          `2.3 ${times} ${exp(3)} J`,
        ],
        ans: "D",
      },

      {
        id: 2,
        question: `If the specific heat capacity of water is 4.2 ${times} ${exp(3)} ${jkgk} and g = 10 ${units("ms",2)}, the difference in temperature of the water between the top and bottom of a 210 m high waterfall is`,
        options: [
          `0.05${degC}`,
          `0.5${degC}`,
          `1.0${degC}`,
          `4.2${degC}`,
        ],
        ans: "B",
      },

      {
        id: 3,
        question: `A cold water tap supllies water at 20${degC} and a hot water tap at 80${degC}. To obtain warm water at 40${degC}, the ratio of the mass of cold water to that of hot water to be mixed is`,
        options: [
          `2 : 1`,
          `1 : 2`,
          `4 : 1`,
          `1 : 4`,
        ],
        ans: "A",
      },

      {
        id: 4,
        question: `The quantity of heat needed to raise the temperature of a body by 1 K is the body's`,
        options: [
          `internal energy`,
          `specific heat capacity`,
          `latent heat of fusion`,
          `thermal capacity`,
        ],
        ans: "D",
      },

      {
        id: 5,
        question: `A metal object of mass 3.0 kg is heated from 25${degC} to 45${degC} in 10 minutes by an electric heater rated at 70 W. Neglecting heat loss to the surroundings, the specific heat capacity of the metal is`,
        options: [
          `1.07 ${times} ${exp(1)} ${jkgk}`,
          `4.2 ${times} ${exp(2)} ${jkgk}`,
          `7.0 ${times} ${exp(2)} ${jkgk}`,
          `4.2 ${times} ${exp(3)} ${jkgk}`,
        ],
        ans: "C",
      },

      {
        id: 6,
        question: `A hot solid X is dropped into a certain quantity of water at room temperature. A hot solid Y of equal mass and at the same temperature of X is dropped into an equal quantity of water also at room temperature. If X causes a higher temperature rise in the water than Y, then`,
        options: [
          `density of X is higher than that of Y`,
          `density of X is lower than that of Y`,
          `specific heat capacity of X is higher than that of Y`,
          `specific heat capacity of X is lower than that of Y`,
        ],
        ans: "C",
      },

      {
        id: 7,
        question: `Two liquids X and Y having the same mass are supplied with the same quantity of heat. If the temperature rise in X is twice that of Y, the ratio of the specific heat capacity of X to that of Y is`,
        options: [
          `2 : 1`,
          `1 : 2`,
          `4 : 1`,
          `1 : 4`,
        ],
        ans: "B",
      },

      {
        id: 8,
        question: `A body of mass 120 g and specific heat capacity 400 ${jkgk} loses 240 J of heat energy. The change in temperature of the body is`,
        options: [
          `5.0 K`,
          `4.5 K`,
          `2.0 K`,
          `0.5 K`,
        ],
        ans: "A",
      },

      {
        id: 9,
        question: `An electric boiling ring is used to heat 800 g of water from 30${degC} to 90${degC} in 10 minutes. If 25 percent of the heat generated is lost to the surroundings and the specific heat capacity of water is 4,200 ${jkgk}, the power rating of the boiling ring is`,
        options: [
          `251 W`,
          `335 W`,
          `448 W`,
          `500 W`,
        ],
        ans: "C",
      },

      {
        id: 10,
        question: `A body of specific heat capacity 900 ${jkgk} initially held at a height of 90 m falls to the ground. Neglecting heat loss to the surrounding, the rise in temperature of the body on striking the ground is [g = 10 ${units("ms",-2)}]`,
        options: [
          `0.5${degC}`,
          `1.0${degC}`,
          `2.0${degC}`,
          `5.0${degC}`,
        ],
        ans: "B",
      },

      {
        id: 11,
        question: `1 litre of hot water at temp T is added to 3 litres of cold water at a temperature of 30${degC}. If the final temperature of the mixture is 50${degC}, the value of T is`,
        options: [
          `56.7${degC}`,
          `80.0${degC}`,
          `110.0${degC}`,
          `150.0${degC}`,
        ],
        ans: "C",
      },

      {
        id: 12,
        question: `A metal ball of mass 2 kg and at a temperature of 290${degC} is dropped into a certain quantity of water at 30${degC}. If the temperature of the mixture is 80${degC} and the specific heat capacities of the metal and the water are 450 ${jkgk} and 4,200 ${jkgk} respectively, the mass of the water is`,
        options: [
          `45 g`,
          `90 g`,
          `450 g`,
          `900 g`,
        ],
        ans: "D",
      },

      {
        id: 13,
        question: `A 500 W immersion heater is used to heat a liquid of mass 500 g through a temperature rise of 50${degC} in 40 seconds. The specific heat capacity of the liquid is`,
        options: [
          `4,200 ${jkgk}`,
          `1,600 ${jkgk}`,
          `1,200 ${jkgk}`,
          `800 ${jkgk}`,
        ],
        ans: "D",
      },

      {
        id: 14,
        question: `The same quantity of heat which raises the temperature of a certain volume of water by 10${degC} also raises the temperature of an equal volume of oil by 20${degC}. If the relative density of the oil is 0.75, the ratio of the specific heat of oil to that of water is`,
        options: [
          `2 : 3`,
          `3 : 2`,
          `1 : 2`,
          `2 : 1`,
        ],
        ans: "A",
      },

      {
        id: 15,
        question: `Boiling water is added to a calorimeter of thermal capacity 105 ${units("JK", -1)} containing 500 g of water at 30${degC}. If the final temperature of the mixture is 70${degC}, and the heat capacity of water is 4.2 ${units("Jg",-1,"C",-1)}, the amount of boiling water added is`,
        options: [
          `300.0 g`,
          `145.7 g`,
          `29.1 g`,
          `14.6 g`,
        ],
        ans: "A",
      },

      {
        id: 16,
        question: `Equal masses of two liquids X and Y at temperatures 30${degC} and 80${degC} respectively are mixed such that the temperature of the mixture is T. If the specific heat of X is twice that of Y, the value of T is`,
        options: [
          `45.0${degC}`,
          `46.7${degC}`,
          `55.0${degC}`,
          `62.5${degC}`,
        ],
        ans: "B",
      },

      {
        id: 17,
        question: `Two containers P and Q of volumes V<sub>p</sub> and V<sub>q</sub> are filled with the same liquid at an initial temperature of 0${degC}. Both containers are heated such that the final temperature of P is twice that of Q. If V<sub>p</sub>/V<sub>q</sub> = 1/2, the ratio of the heat supplied to P and Q is`,
        options: [
          `1/4`,
          `1/2`,
          `1`,
          `4`,
        ],
        ans: "C",
      },

      {
        id: 18,
        question: `A mass of 0.5 kg of water at 10${degC} is converted into ice at 0${degC}. The specific heat capacit of water is 4.2 ${units("kJkg",-1,"C",-1)} and the specific latent heat of fusion of ice is 334 ${units("kJkg",-1)}. The amount of heat extracted from the water is`,
        options: [
          `21 kJ`,
          `146 kJ`,
          `167 kJ`,
          `188 kJ`,
        ],
        ans: "D",
      },

      {
        id: 19,
        question: `The specific heat capacity of water is 4.2 ${jkgk} and the specific latent heat of vaporization of water is 2,260 ${units("Jg",-1)}. The heat required to vaporize 200 g water initially at 80${degC} is`,
        options: [
          `16.8 kJ`,
          `452.0 kJ`,
          `468.8 kJ`,
          `937.6 kJ`,
        ],
        ans: "C",
      },

      {
        id: 20,
        question: `A 6 ${ohm} resistor which draws a current of 2 A takes 1 minute to evaporate 40 g of a liquid at its boiling point. The specific latent heat of vaporization of the liquid is`,
        options: [
          `36 ${units("Jg",-1)}`,
          `48 ${units("Jg",-1)}`,
          `72 ${units("Jg",-1)}`,
          `108 ${units("Jg",-1)}`,
        ],
        ans: "A",
      },

      {
        id: 21,
        question: `One kilogram of boiling water at 100${degC} changes to ice at 0${degC}. If the specific latent heat of fusion of ice is 3.36 ${times} ${exp(5)} ${units("Jkg",-1)} and the specific heat capacity of water is 4,200 ${jkgk}, the heat extracted from the water is`,
        options: [
          `1.09 ${times} ${exp(6)} J`,
          `7.56 ${times} ${exp(5)} J`,
          `4.20 ${times} ${exp(5)} J`,
          `3.36 ${times} ${exp(5)} J`,
        ],
        ans: "B",
      },

      {
        id: 22,
        question: `A heater rated at 400 W is used to melt a 50 g block of ice at 0${degC} in one minute. If the specific heat of fusion of ice is 336 ${jg}, how much of the heat supplied by the heater is lost to the surroundings?`,
        options: [
          `3,600 J`,
          `7,200 J`,
          `16,800 J`,
          `24,000 J`,
        ],
        ans: "B",
      },

      {
        id: 23,
        question: `One kilogram of copper at a temperature of 840${degC} is transferred into a lagged container holding 1.5 kg of ice at 0${degC}. The specific latent heat of fusion of ice = 3.36 ${times} ${exp(5)} ${units("Jkg",-1)} and the specific heat capacity of copper = 400 ${jkgk}. Neglecting the heat capacity of the container and the heat lost to the surroundings, the amount of ice left unmelted is`,
        options: [
          `1.00 kg`,
          `0.75 kg`,
          `0.50 kg`,
          `0.20 kg`,
        ],
        ans: "C",
      },

      {
        id: 24,
        question: `The specific latent heat of vaporization of steam is 2.26 ${times} ${exp(6)} ${units("JKg",-1)}. The difference in the quantity of heat released by 5 kg of steam and 5 kg of water which are both cooled from 100${degC} to 80${degC} is`,
        options: [
          `4.20 ${times} ${exp(5)} J`,
          `2.26 ${times} ${exp(6)} J`,
          `4.20 ${times} ${exp(6)} J`,
          `1.13 ${times} ${exp(7)} J`,
        ],
        ans: "D",
      },

      {
        id: 25,
        question: `An electric heater which draws a current of 20 A from a 12 V battery is used to convert 2 kg of ice at -10${degC} to water at 0${degC}. If the specific heat capacity of ice is 2.1 ${units("kJkg",-1,degC, -1)} and the latent heat of fusion of ice is 3.33 ${times} ${exp(5)} ${units("Jkg",-1)}, the time taken to completely melt the ice is`,
        options: [
          `49.2 min`,
          `46.3 min`,
          `24.0 min`,
          `2.9 min`,
        ],
        ans: "A",
      },

      {
        id: 26,
        question: `A heating coil rated at 1 kW is used to evaporate 700 g of water at 100${degC}. If the specific latent heat of vaporization of water = 2.3 ${times} ${exp(6)} ${units("Jkg",-1)}, the time taken to evaporate all of the water is`,
        options: [
          `1.61 ${times} ${exp(2)} s`,
          `1.61 ${times} ${exp(3)} s`,
          `1.61 ${times} ${exp(4)} s`,
          `1.61 ${times} ${exp(5)} s`,
        ],
        ans: "B",
      },

      {
        id: 27,
        question: `A certain quantity of ice at -20${degC} is heated to a temperature of 50${degC}. To determine the amount of heat absorbed, which of the following constants are required?<br />
        I. specific heat capacity of ice<br />
        II. specific heat capacity of water<br />
        III. specific latent heat of fusion of ice<br />
        IV. specific latent heat of vaporization of water`,
        options: [
          `I and III only`,
          `II and IV only`,
          `I, II, and III only`,
          `I, II, III, and IV`,
        ],
        ans: "C",
      },

      {
        id: 28,
        question: `${exp(6)} of heat is required to melt 500 g of a solid at its melting temperature of 80${degC}. The latent heat of fusioin of the solid is`,
        options: [
          `2 ${times} ${exp(3)} ${units("Jkg",-1)}`,
          `5 ${times} ${exp(5)} ${units("Jkg",-1)}`,
          `2 ${times} ${exp(6)} ${units("Jkg",-1)}`,
          `4 ${times} ${exp(7)} ${units("Jkg",-1)}`,
        ],
        ans: "C",
      },

      {
        id: 29,
        question: `A person suffers a more severe burn from steam than boiling water because`,
        options: [
          `steam is at a higer temperature than boiling water`,
          `steam spreads more easily over the skin than boiling water`,
          `steam penetrates more deeply into the skin than boiling water`,
          `steam possesses greater heat energy per unit mass than boiling water`,
        ],
        ans: "D",
      },

      {
        id: 30,
        question: `A glass of soft drink can be cooled more effectively by adding melting ice than by adding the same mass of water at 0${degC} because`,
        options: [
          `water has a higher specific heat capacity than ice`,
          `melting ice is at a lower temperature than the water`,
          `ice absorbs latent heat as it melts`,
          `ice makes better thermal contact than water`,
        ],
        ans: "C",
      },

      {
        id: 31,
        question: `A change of state is often accompanied by a change in<br />
        I. temperature<br />
        II. density<br />
        III. internal energy<br />
        IV. mass<br />
        Which of the above are correct?`,
        options: [
          `I and III only`,
          `II and III only`,
          `II and IV only`,
          `II, III and IV only`,
        ],
        ans: "B",
      },

      {
        id: 32,
        question: `A solid that changes directly into a gas upon heating is said to have undergone`,
        options: [
          `evaporation`,
          `vaporization`,
          `solidification`,
          `sublimation`,
        ],
        ans: "D",
      },

      {
        id: 33,
        question: `When the pressure of the vapour on top of an enclosed liquid is equal to the pressure of the atmosphere, the liquid is at its`,
        options: [
          `boiling point`,
          `dew point`,
          `freezing point`,
          `evaporation point`,
        ],
        ans: "A",
      },

      {
        id: 34,
        question: `When the atmospheric pressure is 750 mm of mercury, water will boil at`,
        options: [
          `a temperature of 100${degC}`,
          `a temperature less than 100${degC}`,
          `a temperature greater than 100${degC}`,
          `any temperature if heated rapidly`,
        ],
        ans: "B",
      },

      {
        id: 35,
        question: `The boiling point of water on top of a mountain is lower than at sea level because`,
        options: [
          `atmospheric pressure is lower on the mountain`,
          `atmospheric pressure is higher on the mountain`,
          `the sun heats the water more effectively on the mountain`,
          `the relative humidity is lower on the mountain`,
        ],
        ans: "A",
      },

      {
        id: 36,
        question: `An increase in pressure<br />
        I. increase the freezing point of a substance<br />
        II. reduces the freezing point of a substance<br />
        III. increases the boiling point of a substance<br />
        IV. reduces the boiling point of a substance<br />
        Which of the above statements are correct?`,
        options: [
          `I only`,
          `II only`,
          `I and IV only`,
          `II and III only`,
        ],
        ans: "D",
      },

      {
        id: 37,
        question: `The saturation vapor pressure of a liquid depends on the<br />
        I. volume of the liquid<br />
        II. external pressure<br />
        III. temperature of the liquid<br />
        IV. nature of the liquid<br />
        Which of the above statements are correct?`,
        options: [
          `I and II only`,
          `III and IV only`,
          `II, III and IV only`,
          `I, II, III and IV`,
        ],
        ans: "B",
      },

      {
        id: 38,
        question: `The vapor on top of an enclosed liquid is said to be saturated if`,
        options: [
          `the rate of condensation of the vapor is greater than the rate of vaporization of the liquid`,
          `the rate of condensation of the vapor is less than the rate of vaporization of the liquid`,
          `the rate of condensation of the vapor is equal to the rate of vaporization of the liquid`,
          `there is neither condensation of the vapor nor vaporization of the liquid`,
        ],
        ans: "C",
      },

      {
        id: 39,
        question: `An instrument used to measure relative humidity is called a`,
        options: [
          `hydrometer`,
          `barometer`,
          `manometer`,
          `hygrometer`,
        ],
        ans: "D",
      },

      {
        id: 40,
        question: `The temperature at which water vapor present in the air is just enough to saturate the air is the`,
        options: [
          `steam point`,
          `boiling point`,
          `ice point`,
          `dew point`,
        ],
        ans: "D",
      },

      {
        id: 41,
        question: `The formation of clouds results directly from`,
        options: [
          `condensation`,
          `sublimation`,
          `fusion`,
          `vaporization`,
        ],
        ans: "A",
      },

      {
        id: 42,
        question: `Food cooks faster in a pressure cooker than in an ordinary cooking pot because<br />
        I. the food is not affected by air convection current<br />
        II. the boiling point of water is greater than 100${degC} in the pressure cooker<br />
        III. less heat escapes from the pressure cooker<br />
        IV. the vapor pressure is higher in the pressure cooker<br />
        Which of the above statements are correct?`,
        options: [
          `I and III only`,
          `II and IV only`,
          `I, II, and III only`,
          `II, III and IV only`,
        ],
        ans: "B",
      },
    ],
  },

  // 10. molecular theory and heat transfer
  {
    topic: "Molecular theory and heat transfer",
    questions: [
      {
        id: 1,
        question: `The differences between a crystalline solid and an amorphous solid are that a crystalline solid<br />
        I. has a regularly repeating structure while an amorphous solid does not<br />
        II. has a definite melting point while an amorphous solid does not<br />
        III. is always hard while an amorphous solid is always soft<br />
        IV. melts upon heating while an amophous solid vaporizes upon heating<br />
        Which of the statements above are correct?`,
        options: [
          `I and II only`,
          `III and IV only`,
          `I, II, and III only`,
          `I,II and IV only`,
        ],
        ans: "A",
      },

      {
        id: 2,
        question: `When a certain quantity of sugar is dissolved in water in a glass container, the level of the water does not change appreciately. Which of the following statements best explains this?`,
        options: [
          `The sugar molecule is smaller than the water molecule`,
          `The sugar molecules are absorbed by the water molecules`,
          `Water is a suitable solvent for sugar`,
          `The sugar molecules occupy the spaces between water molecules`,
        ],
        ans: "D",
      },

      {
        id: 3,
        question: `The concave meniscus of water in a glass tube is due to the fact that the`,
        options: [
          `adhesion between water and glass molecules is greater than the cohesion between water molecules`,
          `adhesion between glass and water molecules is smaller than the cohesion between water molecules`,
          `molecules of water near the glass are lighter than the molecules in the central part of the water column`,
          `weight of the water pulls down on the central part of the water column`,
        ],
        ans: "A",
      },

      {
        id: 4,
        question: `The following phenomena are evidences of the particle nature of matter except`,
        options: [
          `diffusion`,
          `photoelectric effect`,
          `diffraction`,
          `brownian motion`,
        ],
        ans: "C",
      },

      {
        id: 5,
        question: `The action of a towel in drying the body after a bath is explained by`,
        options: [
          `diffusion`,
          `capillarity`,
          `osmosis`,
          `evaporation`,
        ],
        ans: "B",
      },

      {
        id: 6,
        question: `Evaporation of a liquid results in cooling because the`,
        options: [
          `volume of the liquid decreases`,
          `density of the liquid decreases`,
          `vapor pressure of the liquid decreases`,
          `average kinetic energy of the molecules of the liquid decreases`,
        ],
        ans: "D",
      },

      {
        id: 7,
        question: `Mercury which is spilled onto a glass surface forms ball-like shapes because`, 
        options: [
          `mercury is a metal`,
          `the cohesive force between its molecues is greater than the adhesive force between mercury and glass molecules`,
          `the cohesive force between its molecules is less than the adhesive force between mercury and glass molecules`,
          `the viscosity of mercury is high`,
        ],
        ans: "B",
      },

      {
        id: 8,
        question: `If water is gradually added to a few grains of table salt in a glass cup and left unstirred, the whole water will eventually taste salty. This is due to`, 
        options: [
          `diffusion`,
          `osmosis`,
          `capillarity`,
          `convection`,
        ],
        ans: "A",
      },

      {
        id: 9,
        question: `A vapor is said to be saturated when`, 
        options: [
          `more molecules return to the liquid than leave it`,
          `more molecules return to the vapor than leave it`,
          `the number of molecules leaving the liquid for the vapor is equal to the number leaving the vapor for the liquid`,
          `the vapor pressure is equal to the atmospheric pressure`,
        ],
        ans: "C",
      },

      {
        id: 10,
        question: `According to the kinetic theory of gases, the collision of the gas molecules with the walls of the container is responsible for the`, 
        options: [
          `pressure of the gas`,
          `temperature of the gas`,
          `viscosity of the gas`,
          `density of the gas`,
        ],
        ans: "A",
      },

      {
        id: 11,
        question: `In which of the following states will the average speed of the molecules of water be highest?`, 
        options: [
          `Ice`,
          `Water`,
          `Water-steam mixture`,
          `Steam`,
        ],
        ans: "D",
      },

      {
        id: 12,
        question: `Temperature is the property of a body which is proportional to the`, 
        options: [
          `total kinetic energy of its molecules`,
          `average kinetic energy of its molecules`,
          `average speed of its molecules`,
          `maximum speed of its molecules`,
        ],
        ans: "B",
      },

      {
        id: 13,
        question: `When a fixed mass of gas is cooled at constant volume, its pressure decreases because its molecules`, 
        options: [
          `decrease in number`,
          `occupy a smaller space`,
          `collide less frequently with the walls of the container`,
          `settle at the bottom of the container`,
        ],
        ans: "C",
      },

      {
        id: 14,
        question: `The density of a gas depends on the`, 
        options: [
          `speed of its molecules`,
          `potential energy of its molecules`,
          `volume of its molecules`,
          `separation between its molecules`,
        ],
        ans: "D",
      },

      {
        id: 15,
        question: `The expansion of an ideal gas at constant temperature results in an increase in the`, 
        options: [
          `average separation between its molecules`,
          `number of collisions between molecules per unit time`,
          `number of molecules per unit volume`,
          `average speed of its molecules`,
        ],
        ans: "A",
      },

      {
        id: 16,
        question: `A concrete floor feels colder than a rugged floor on a cold morning because`, 
        options: [
          `rug loses heat to the bare feet at a faster rate than concrete`,
          `rug loses heat to the bare feet at a much slower rate than concrete`,
          `rug is a better conductor of heat than concrete`,
          `concrete is a better conductor of heat than rug`,
        ],
        ans: "D",
      },

      {
        id: 17,
        question: `The following three substances are correctly listed in ascending order of their thermal conductivities as`, 
        options: [
          `glass, copper, steel`,
          `steel, glass, copper`,
          `copper, steel, glass`,
          `glass, steel, copper`,
        ],
        ans: "D",
      },

      {
        id: 18,
        question: `The mechanism of heat transfer from one point to another through the vibration of the molecules of the medium is called`, 
        options: [
          `convection`,
          `conduction`,
          `radiation`,
          `diffusion`,
        ],
        ans: "B",
      },

      {
        id: 19,
        question: `A lagged steel bar of length 50 cm has its ends immersed in melting ice and boiling water. The temperature at a point 20 cm from the hot end is`, 
        options: [
          `40${degC}`,
          `50${degC}`,
          `60${degC}`,
          `80${degC}`,
        ],
        ans: "C",
      },

      {
        id: 20,
        question: `The transfer of heat by convection in a liquid is due to the`, 
        options: [
          `increased vibration of the molecules of the liquid about their mean positions`,
          `translational motion of the molecules of the liquid`,
          `expansion of the liquid as it heated`,
          `latent heat of vaporization`,
        ],
        ans: "B",
      },

      {
        id: 21,
        question: `The heat from a fire in a room is transmitted to various parts of the room primarily by`, 
        options: [
          `convection`,
          `conduction`,
          `diffusion`,
          `radiation`,
        ],
        ans: "D",
      },

      {
        id: 22,
        question: `Which of the under-listed colors of surfaces will radiate heat energy best?`, 
        options: [
          `Black`,
          `White`,
          `Red`,
          `Yellow`,
        ],
        ans: "A",
      },

      {
        id: 23,
        question: `On a hot and sunny day, the most comfortable color of attire is`, 
        options: [
          `Black`,
          `White`,
          `Red`,
          `Blue`,
        ],
        ans: "B",
      },

      {
        id: 24,
        question: `The heat from the sun reaches the earth's surface by the process of`, 
        options: [
          `convection`,
          `conduction`,
          `radiation`,
          `precipitation`,
        ],
        ans: "C",
      },

      {
        id: 25,
        question: `Which of the following phenomena cannot be explained by the molecular theory of matter?`, 
        options: [
          `conduction`,
          `convection`,
          `expansion`,
          `radiation`,
        ],
        ans: "D",
      },

      {
        id: 26,
        question: `Two identical kettles X and Y are filled with water at 100${degC}. The outside surface of X is painted black while that of Y is polished.`, 
        options: [
          `X cools faster because a blackened surface radiates heat faster than a polished surface`,
          `X cools faster because it is a better conductor of heat`,
          `Y cools faster because it is better reflector of heat`,
          `Y cools faster because a polished surface is a better radiator of heat than a blackened surface`,
        ],
        ans: "A",
      },

      {
        id: 27,
        question: `A thermos flask has a double-walled glass container in which heat losses are minimized by<br />
        I. evacuating the space between the glass walls<br />
        II. silvering the surfaces on either side of the evacuated space<br />
        III. covering the container with a cork<br />
        Which of the above measures minimize(s) heat loss by conduction`, 
        options: [
          `I only`,
          `I and II only`,
          `I and III only`,
          `I, II, and III`,
        ],
        ans: "C",
      },

      {
        id: 28,
        question: `A thermos flask has a double-walled glass container in which heat losses are minimized by<br />
        I. evacuating the space between the glass walls<br />
        II. silvering the surfaces on either side of the evacuated space<br />
        III. covering the container with a cork<br />
        Which of the above measures minimize(s) heat loss by convection`, 
        options: [
          `I only`,
          `II only`,
          `I and II only`,
          `I, and III only`,
        ],
        ans: "A",
      },

      {
        id: 29,
        question: `A thermos flask has a double-walled glass container in which heat losses are minimized by<br />
        I. evacuating the space between the glass walls<br />
        II. silvering the surfaces on either side of the evacuated space<br />
        III. covering the container with a cork<br />
        Which of the above measures minimize(s) heat loss by radiation`, 
        options: [
          `I only`,
          `II only`,
          `I and II only`,
          `II, and III only`,
        ],
        ans: "B",
      },

      {
        id: 30,
        question: `In an electric kettle the heating element is usually located near the bottom of the kettle because<br />
        I. cold water is denser than hot water<br />
        II. heat is transmitted to all parts of the water primarily by convection<br />
        III. heat is quickly conducted to all parts of the water<br />
        IV. loss to the surroundings is minimized<br />
        Which of the above statements are correct?`, 
        options: [
          `I and II only`,
          `III and IV only`,
          `I, II and III only`,
          `I, II, and IV only`,
        ],
        ans: "A",
      },

      {
        id: 31,
        question: `Cooking pots are usually made of metals because metals`, 
        options: [
          `have high coefficient of expansion`,
          `have low specific heat capacity`,
          `are poor radiators of heat`,
          `are good conductors of heat`,
        ],
        ans: "D",
      },

      {
        id: 32,
        question: `A house whose roof is painted white feels cooler on a hot day than one whose roof is painted black because`, 
        options: [
          `white is a better conductor of heat than black`,
          `black is a better conductor of heat than white`,
          `white is a better reflector of heat than black`,
          `black is a better reflector of heat than white`,
        ],
        ans: "C",
      },

      {
        id: 33,
        question: `Which of the following is not a suitable method for reducing heat loss from a hot metal ball?`, 
        options: [
          `Placing it in a vacuum`,
          `Painting it black`,
          `Placing it on a rubber support`,
          `Wrapping it with cotton wool`,
        ],
        ans: "B",
      },

      {
        id: 34,
        question: `Diffusion<br />
        I. occurs in gases<br />
        II. occurs more slowly in liquids than in gases<br />
        III. never occurs in solids<br />
        IV. occurs at the same rate in all gases<br />
        Which of the above statements are correct?`, 
        options: [
          `I and II only`,
          `I, II, and III only`,
          `I, II, and IV only`,
          `I, II, III, and IV`,
        ],
        ans: "A",
      },

      {
        id: 35,
        question: `A bottle of perfume is opened in one corner of a room and the scent is soon picked up in another part of the room. The perfume moves through the air in the room by`, 
        options: [
          `convection`,
          `evaporation`,
          `diffusion`,
          `osmosis`,
        ],
        ans: "C",
      },

  
    ],
  },

  // 11. waves and sound
  {
    topic: "Waves and sound",
    questions: [
      {
        id: 8,
        question: `A flasher generates 3000 regular flashes in one minutes. The period of the flashes is`,
        options: [
          `50 s`,
          `20 s`,
          `0.50 s`,
          `0.02 s`,
        ],
        ans: "D",
      },

      {
        id: 11,
        question: `The rotating disc in a siren has 42 holes and makes 30 revs. per second. The frequency of the sound emitted by the siren is`,
        options: [
          `1.4 Hz`,
          `30 Hz`,
          `420 Hz`,
          `1260 Hz`,
        ],
        ans: "D",
      },

      {
        id: 12,
        question: `Water waves are generated by dropping stones at regular intervals at a point in a pool of water. The first crest reaches another point, 8 m away, in 4 s. If the distance between two successive crests is 0.5 m, the frequency of the wave is`,
        options: [
          `2 Hz`,
          `4 Hz`,
          `8 Hz`,
          `16 Hz`,
        ],
        ans: "B",
      },

      {
        id: 13,
        question: `An anchored boat is hit by wave crests every 5 s. If the wave crests are 60 m apart, the velocity of the wave is`,
        options: [
          `12 ${velocity}`,
          `6 ${velocity}`,
          `0.83 ${velocity}`,
          `0.41 ${velocity}`,
        ],
        ans: "A",
      },

      {
        id: 14,
        question: `The frequency of a wave having wavelength 20 cm and velocity 0.5 ${velocity} is`,
        options: [
          `0.0025 Hz`,
          `0.025 Hz`,
          `2.5 Hz`,
          `40 Hz`
        ],
        ans: "C",
      },

      {
        id: 15,
        question: `A wave is represented by the equation y = 0.20 sin [0.4${pi}(x-60t)], where x and y are in cm and t is in s. The velocity of the wave is`,
        options: [
          `120 ${units("cms",-1)}`,
          `60 ${units("cms",-1)}`,
          `24 ${units("cms",-1)}`,
          `4.8 ${units("cms",-1)}`,
        ],
        ans: "B",
      },

      {
        id: 16,
        question: `A wave is represented by the equation y = 0.20 sin [0.4${pi}(x-60t)], where x and y are in cm and t is in s. The wavelength of the wave is`,
        options: [
          `5 cm`,
          `10 cm`,
          `24 cm`,
          `60 cm`,
        ],
        ans: "A",
      },

      {
        id: 17,
        question: `A wave of period 0.02 has a frequency of`,
        options: [
          `0.02 Hz`,
          `0.2 Hz`,
          `5 Hz`,
          `50 Hz`,
        ],
        ans: "D",
      },

      {
        id: 18,
        question: `The velocity of a sound wave travelling in air is 330 ${velocity}. If the period of the sound wave is ${exp(3)} s, the distance between a rarefaction and an adjacent compression is`,
        options: [
          `0.33 cm`,
          `16.5 cm`,
          `33 cm`,
          `66 cm`,
        ],
        ans: "B",
      },

      {
        id: 19,
        question: `A vibrating plate is used to generate waves in a pool of water. The distance between successive troughs is 7 cm and a crest travels from the vibrator to the edge of the pool, 52.5 cm away, in 2.5 s. The frequency of the vibrator is`,
        options: [
          `3.0 Hz`,
          `7.5 Hz`,
          `21.0 Hz`,
          `147.0 Hz`,
        ],
        ans: "A",
      },

      {
        id: 20,
        question: `A radio station transmitting at a frequency of 200 kHz emits waves of wavelength 1.5 km. The velocity of the radio waves is`,
        options: [
          `3 ${times} ${exp(2)} ${velocity}`,
          `3 ${times} ${exp(3)} ${velocity}`,
          `3 ${times} ${exp(8)} ${velocity}`,
          `3 ${times} ${exp(10)} ${velocity}`,
        ],
        ans: "C",
      },

      {
        id: 21,
        question: `If the speed of light in air is 3 ${times} ${exp(8)} ${velocity}, the wavelength of radio waves transmitted by a radio station at a frequency of 1.2 MHz is`,
        options: [
          `0.004 m`,
          `25 m`,
          `40 m`,
          `250 m`,
        ],
        ans: "D",
      },

      {
        id: 22,
        question: `A rarefaction and an adjacent compression of a sound wave travelling in air are separated by a distance of 15 cm. If the velocity of sound in air is 330 ${velocity}, the frequency is`,
        options: [
          `11 Hz`,
          `22 Hz`,
          `1100 Hz`,
          `2200 Hz`,
        ],
        ans: "C",
      },

      {
        id: 23,
        question: `If the speed of sound in air is 340 ${velocity}, the period of vibration of sound waves of wavelength 1.7 m is`,
        options: [
          `0.005 s`,
          `0.02 s`,
          `0.05 s`,
          `200 s`,
        ],
        ans: "A",
      },

      {
        id: 24,
        question: `A body emits 50 vibrations per second of waves travelling at 20 ${velocity}. The wavelength of the wave is`,
        options: [
          `1000.0 m`,
          `100.0 m`,
          `2.5 m`,
          `0.4 m`,
        ],
        ans: "D",
      },

      {
        id: 25,
        question: `A man hears a thunderstorm 3 s after observing the lightning flash. How far is he from the thunderstorm if the speed of sound in air is 330 ${velocity}?`,
        options: [
          `990 m`,
          `495 m`,
          `330 m`,
          `165 m`,
        ],
        ans: "A",
      },

      {
        id: 26,
        question: `A radio transmits at a frequency of 6 ${times} ${exp(5)} Hz. If the speed of the signals is 3 ${times} ${exp(8)} ${velocity}. the wavelength is ?`,
        options: [
          `2 ${times} ${exp(-3)} m`,
          `2 ${times} ${exp(-2)} m`,
          `2 ${times} ${exp(2)} m`,
          `2 ${times} ${exp(3)} m`,
        ],
        ans: "C",
      },

      {
        id: 27,
        question: `The echo from a sound wave sent out from a ship towards the seabed is received on the ship 1.6 s later. Taking the velocity of sound in water as 1.5 ${units("kms",-1)} the depth of the sea is`,
        options: [
          `1.20 km`,
          `1.50 km`,
          `2.40 km`,
          `3.60 km`,
        ],
        ans: "A",
      },

      {
        id: 28,
        question: `A boy claps his hands at regular intervals such that the echo of a clap coincides with the next clap. If his claps are reflected by a cliff 110m away and the speed of sound is 330 ${velocity}, the frequency of clapping is`,
        options: [
          `1.0 Hz`,
          `1.5 Hz`,
          `2.0 Hz`,
          `3.0 Hz`,
        ],
        ans: "B",
      },

      {
        id: 29,
        question: `A man shouts and receives the echo from a nearby hill 2 s later. If the sound emitted by the man has frequency 250 Hz and wavelength 1.2 m, how far is he from the hill?`,
        options: [
          `1200 m`,
          `600 m`,
          `300 m`,
          `150 m`,
        ],
        ans: "C",
      },

      {
        id: 30,
        question: `Radio waves emitted from an antenna and reflected by an aircraft are picked up by a radar 0.05 s after emission. If the speed of light is 3 ${times} ${exp(8)} ${velocity}, the distance of the aircraft from the antenna is`,
        options: [
          `250 km`,
          `750 km`,
          `1500 km`,
          `3000 km`,
        ],
        ans: "B",
      },

      {
        id: 31,
        question: `A sound pulse projected vertically downwards into the earth is reflected from two different layers of the earth such that the echoes are received after 1.5 s and 1.8 s. If the speed of the pulse is 2000 ${velocity}, the distance between the layers is`,
        options: [
          `1,800 m`,
          `1,500 m`,
          `600 m`,
          `300 m`,
        ],
        ans: "D",
      },

      {
        id: 32,
        question: `A boy receives the echo of his clap reflected by a nearby hill 0.8 s later. If the speed of sound in air is 340 ${velocity}, how far is he from the hill?`,
        options: [
          `66 m`,
          `136 m`,
          `264 m`,
          `528 m`,
        ],
        ans: "B",
      },

      {
        id: 33,
        question: `The echo of a sound of wavelength 1.5 m and frequency 200 Hz emitted by a source is heard at the source 1.0 s later. The distance of the source from the reflector is?`,
        options: [
          `75 m`,
          `150 m`,
          `300 m`,
          `600 m`,
        ],
        ans: "B",
      },

      {
        id: 34,
        question: `Which of the following phenomena does not apply to longitudinal waves`,
        options: [
          `interference`,
          `refraction`,
          `diffraction`,
          `polarization`,
        ],
        ans: "D",
      },

      {
        id: 35,
        question: `It is customary to cover the walls and ceilings of a standard auditorium with perforated pads in order to`,
        options: [
          `reduce the effect of reverberations of sound waves`,
          `increase the intensity of sound waves`,
          `increase the frequency of sound waves`,
          `reduce the interference effect of sound waves`,
        ],
        ans: "A",
      },

      {
        id: 36,
        question: `A sound wave moving at 340 ${velocity} in air approaches a pool of water in which its wavelength is four times that of the wavelength in air. The speed of the wave in the water is`,
        options: [
          `85 ${velocity}`,
          `170 ${velocity}`,
          `340 ${velocity}`,
          `1360 ${velocity}`,
        ],
        ans: "D",
      },

      {
        id: 37,
        question: `Which of the following waves are both mechanical and tranverse?`,
        options: [
          `Radio`,
          `Sound`,
          `Water`,
          `X-rays`,
        ],
        ans: "C",
      },

      {
        id: 38,
        question: `The frequnecy of the beats produced when two turning forks of frequencies 258 Hz and 270 Hz are sounded close to each other is`,
        options: [
          `6 Hz`,
          `12 Hz`,
          `264 Hz`,
          `528 Hz`,
        ],
        ans: "B",
      },

      {
        id: 39,
        question: `One of two identical tuning fork is loaded so that 6 beats per second are heard when they are sounded together. If the natural frequency of the tuning forks is 260 Hz, the frequency of the loaded tuning fork is`,
        options: [
          `272 Hz`,
          `266 Hz`,
          `254 Hz`,
          `248 Hz`,
        ],
        ans: "C",
      },

      {
        id: 40,
        question: `The wavelength of the fundamental note of a one-metre long guitar string is`,
        options: [
          `25 cm`,
          `50 cm`,
          `100 cm`,
          `200 cm`,
        ],
        ans: "D",
      },

      {
        id: 41,
        question: `A strectched string has a fundamental frequency of 25 Hz. The number of overtones between 25 Hz and 120 Hz is`,
        options: [
          `2`,
          `3`,
          `4`,
          `5`,
        ],
        ans: "B",
      },

      {
        id: 42,
        question: `A string, one-metre long, under tension is plucked at its center such that a wave of velocity 250 ${velocity} is produced. The number of vibrations made by the string in one second is`,
        options: [
          `2.5`,
          `25`,
          `125`,
          `250`,
        ],
        ans: "C",
      },

      {
        id: 43,
        question: `A piano wire which is 25 cm long has a total mass of 5 g. The fundamental frequency of the wire under a tension of 200 N is`,
        options: [
          `50 Hz`,
          `100 Hz`,
          `200 Hz`,
          `400 Hz`,
        ],
        ans: "C",
      },

      {
        id: 44,
        question: `The frequencies of the notes produced by two strings having the same length and placed under the same tension are in the ratio 1 : 4. The corresponding ratio of the masses of the strings is`,
        options: [
          `16 : 1`,
          `2 : 1`,
          `1 : 2`,
          `4 : 1`,
        ],
        ans: "A",
      },

      {
        id: 45,
        question: `The tension in a sonometer wire is tripled. The ratio of the new frequency to the initial frequency is`,
        options: [
          `1/3`,
          `3`,
          `1/${sqrt}3`,
          `${sqrt}3`,
        ],
        ans: "D",
      },


      {
        id: 46,
        question: `A sonometer wire of length 50 cm has a fundamental frequency of 200 Hz under a tension of 30 N. The tension in the wire is now adjusted to produce a new frequency of 400 Hz, keeping the length of the wire constant. The new tension is`,
        options: [
          `120 N`,
          `60 N`,
          `15 N`,
          `7.5 N`,
        ],
        ans: "A",
      },

      {
        id: 47,
        question: `When the tension of a vibrating sonometer wire is increased in the ratio 9 : 1, the velocity of the wave produced is`,
        options: [
          `increased three times`,
          `increased nine times`,
          `decreased three times`,
          `decreased nine times`,
        ],
        ans: "A",
      },

      {
        id: 48,
        question: `A string of length 50 cm and mass ${exp(-3)} kg vibrates in 5 loops. If the tension in the string is 20 N, the frequency of vibration is`,
        options: [
          `500 Hz`,
          `250 Hz`,
          `100 Hz`,
          `50 Hz`,
        ],
        ans: "A",
      },

      {
        id: 49,
        question: `A vibrating sonometer wire under a tension of 20 N emits a note of frequency 250 Hz. If the tension is adjusted to 80 N, the new frequency is`,
        options: [
          `1000 Hz`,
          `500 Hz`,
          `125 Hz`,
          `62.5 Hz`,
        ],
        ans: "B",
      },

      {
        id: 50,
        question: `The fundamental frequency of a closed pipe organ is 165 Hz. If the speed of sound in air is 330 ${velocity}, the length of the pipe is`,
        options: [
          `200 cm`,
          `100 cm`,
          `75 cm`,
          `50 cm`
        ],
        ans: "D",
      },

      {
        id: 51,
        question: `If the speed of sound in air is 340 ${velocity}, the frequency of the fundamental note of an organ pipe, 85 cm long, closed at one end is`,
        options: [
          `400 Hz`,
          `340 Hz`,
          `100 Hz`,
          `85 Hz`,
        ],
        ans: "C",
      },

      {
        id: 52,
        question: `In a resonance tube experiment performed with a vibrating tuning fork of frequency 300 Hz, the lengh of the air column at first resoncance is 20cm. The velocity of sound in air is`,
        options: [
          `360 ${velocity}`,
          `350 ${velocity}`,
          `340 ${velocity}`,
          `330 ${velocity}`,
        ],
        ans: "A",
      },

      {
        id: 56,
        question: `An organ pipe open at both ends has a fundammental frequency of 400 Hz. The frequency of the second overtone is`,
        options: [
          `400 Hz`,
          `600 Hz`,
          `800 Hz`,
          `1200 Hz`,
        ],
        ans: "D",
      },

      {
        id: 57,
        question: `A stationary wave pattern is formed by a wave of frequency 20 Hz and velocity 50 ${units("cms",-1)}. The distance between adjacent nodes is`,
        options: [
          `0.625 cm`,
          `1.25 cm`,
          `2.5 cm`,
          `10.0 cm`,
        ],
        ans: "B",
      },

      {
        id: 58,
        question: `Transverse stationary waves of frequency 50 Hz are generated in a long, thin wire. If the distance between successive nodes on the wire is 15 cm, the speed of the waves is`,
        options: [
          `7.5 ${velocity}`,
          `15 ${velocity}`,
          `30 ${velocity}`,
          `75 ${velocity}`,
        ],
        ans: "B",
      },

      {
        id: 60,
        question: `A progressive wave of frequency 20 Hz and speed 60 ${units("cms",-1)} is reflected upon itself such that a stationary wave is formed. The distance between a node and an adjacent antinode is`,
        options: [
          `0.75 cm`,
          `1.50 cm`,
          `6.00 cm`,
          `12.00 cm`,
        ],
        ans: "A",
      },
    ],
  },

  // 12. reflection of light
  {
    topic: "Reflection of light",
    questions: [
      {
        id: 1,
        question: `An object of height 20 cm is located at a distance of 50 cm from a pinhole camera. If the distance of the pinhole from the screen is 25 cm, the height of the image is`,
        options: [
          `10 cm`,
          `15 cm`,
          `20 cm`,
          `40 cm`,
        ],
        ans: "A",
      },

      {
        id: 2,
        question: `The distance between an object and the pinhole of a pinhole camera is reduced by half. The size of the image of the object`,
        options: [
          `is halved`,
          `remains the same`,
          `is doubled`,
          `is quadrupled`,
        ],
        ans: "C",
      },

      {
        id: 5,
        question: `A ray of light strikes a plane mirror at an angle of incidence of 25${deg}. The angle made by the reflected ray with the surface of the mirror is`,
        options: [
          `25${deg}`,
          `50${deg}`,
          `55${deg}`,
          `65${deg}`,
        ],
        ans: "D",
      },

      {
        id: 6,
        question: `A ray of light strikes a plane mirror at an angle of incidence ${theta}. The angle of deviation of the ray after reflection from the mirror is`,
        options: [
          `${theta}`,
          `2${theta}`,
          `90 - ${theta}`,
          `180 - 2${theta}`,
        ],
        ans: "D",
      },

      {
        id: 7,
        question: `A man walks towards a plane mirror at a speed of 2 ${velocity} along a direction normal to the surface of the mirror. His image moves towards him at a speed of`,
        options: [
          `1 ${velocity}`,
          `2 ${velocity}`,
          `4 ${velocity}`,
          `8 ${velocity}`,
        ],
        ans: "C",
      },

      {
        id: 10,
        question: `An object is placed between two mirrors inclined at 90${deg} to each other. The number of images observed is`,
        options: [
          `5`,
          `4`,
          `3`,
          `2`,
        ],
        ans: "C",
      },

      {
        id: 11,
        question: `An object is placed between two mirrors inclined at 120${deg} to each other. The number of images observed is`,
        options: [
          `5`,
          `4`,
          `3`,
          `2`,
        ],
        ans: "D",
      },

      {
        id: 12,
        question: `A boy in a barber's shop sits between two parallel mirrors. The number of images observed by him will be`,
        options: [
          `infinite`,
          `10`,
          `8`,
          `4`,
        ],
        ans: "A",
      },

      {
        id: 13,
        question: `A ray of light incident on a plane mirror. If the plane mirror is rotated through an angle ${theta}, the reflected ray will be rotated through`,
        options: [
          `3${theta}`,
          `2${theta}`,
          `${theta}`,
          `${theta}/2`,
        ],
        ans: "B",
      },

      {
        id: 15,
        question: `An object is placed 20 cm from a concave mirror of focal length 10 cm. The linear magnification of the image produced is`,
        options: [
          `0`,
          `1/2`,
          `1`,
          `2`,
        ],
        ans: "C",
      },

      {
        id: 16,
        question: `An object is placed 12 cm from a concave mirror of radius 32 cm. The image formed is`,
        options: [
          `virtual and 48 cm behind the mirror`,
          `real and 48 cm in front of the mirror`,
          `virtual and 19.2 cm behind the mirror`,
          `real and 19.2 cm in front of the mirror`,
        ],
        ans: "A",
      },

      {
        id: 17,
        question: `A concave mirror positioned at a distance of 5 cm from an object gives a linear magnification of 4. If the image is upright, the radius of curvature of the mirror is`,
        options: [
          `4 cm`,
          `6.7 cm`,
          `8 cm`,
          `13.3 cm`,
        ],
        ans: "D",
      },

      {
        id: 18,
        question: `An object is placed 6 cm in front of a concave mirror of focal length 9 cm. The image formed is`,
        options: [
          `virtual and 18 cm from the mirror`,
          `real and 18 cm from the mirror`,
          `virtual and 3.6 cm from the mirror`,
          `real and 3.6 cm from the mirror`,
        ],
        ans: "A",
      },

      {
        id: 19,
        question: `An object of height 2.5 cm positioned 10 cm from a concave mirror produces an image 30 cm from the mirror. The height of the image is`,
        options: [
          `0.83 cm`,
          `1.25 cm`,
          `5.0 cm`,
          `7.5 cm`,
        ],
        ans: "D",
      },

      {
        id: 20,
        question: `A concave mirror having a radius of 24 cm produces a real image four times the size of the object. The distance of the object from the mirror is`,
        options: [
          `7.5 cm`,
          `15 cm`,
          `24 cm`,
          `30 cm`,
        ],
        ans: "B",
      },

      {
        id: 21,
        question: `If u and v are the object and image distances from a concave mirror of radius r, the magnification can be expressed as`,
        options: [
          `2u/r-1`,
          `u/r-1`,
          `2v/r-1`,
          `v/r-1`,
        ],
        ans: "C",
      },

      {
        id: 22,
        question: `A pin is positioned at 21 cm from a concave mirror of radius 28 cm. The magnification of the image formed is`,
        options: [
          `3.0`,
          `2.0`,
          `1.3`,
          `1.0`,
        ],
        ans: "B",
      },

      {
        id: 23,
        question: `The image formed on a screen by a concave mirror of radius 30 cm is three times the size of the object. The distance of the screen from the mirror is`,
        options: [
          `15 cm`,
          `20 cm`,
          `30 cm`,
          `60 cm`,
        ],
        ans: "D",
      },

      {
        id: 24,
        question: `A ray of light which passes through the center of curvature of a concave mirror is reflected by the mirror at an angle of`,
        options: [
          `0${deg}`,
          `45${deg}`,
          `90{deg}`,
          `180${deg}`,
        ],
        ans: "A",
      },

      {
        id: 28,
        question: `An object is placed half-way between the principal focus and the pole of a concave mirror. The image is located`,
        options: [
          `at the principal focus`,
          `one focal length behind the mirror`,
          `one-half length behind the mirror`,
          `at the center of curvature`,
        ],
        ans: "B",
      },

      {
        id: 30,
        question: `A convex mirror produces an image which is one-quarter the size of an object place in front of it. If the radius of curvature of the mirror is 32 cm, the distance between the object and its image is`,
        options: [
          `60 cm`,
          `48 cm`,
          `32 cm`,
          `12 cm`,
        ],
        ans: "A",
      },

      {
        id: 32,
        question: `An object is placed 15 cm from a convex mirror of radius of curvature 20 cm. The image is located`,
        options: [
          `6 cm in front of the mirror`,
          `6 cm behind the mirror`,
          `30 cm in front of the mirror`,
          `30 cm behind the mirror`,
        ],
        ans: "B",
      },

      {
        id: 33,
        question: `An object is located at a distance of 20 cm from a concave mirror of radius of curvature 30 cm. The separation between the object and its image is`,
        options: [
          `20 cm`,
          `40 cm`,
          `50 cm`,
          `80 cm`,
        ],
        ans: "B",
      },

      {
        id: 34,
        question: `An enlarged image of an object is to be produced on a screen placed in front of a concave mirror. The object must be positioned`,
        options: [
          `at the center of curvature`,
          `at the principal focus`,
          `beyond the center of curvature`,
          `between the principal focus and the center of curvature`,
        ],
        ans: "D",
      },

      {
        id: 35,
        question: `A real image of a candle produced by a concave mirror is located mid-way between the candle and the pole of the mirror. The candle must have been positioned`,
        options: [
          `beyond the center of curvature`,
          `at the center of curvature`,
          `at the principal focus`,
          `between the center of curvature and the pole`,
        ],
        ans: "A",
      },
    ],
  },

  // 13. refraction of light
  {
    topic: "Refraction of light",
    questions: [
      {
        id: 1,
        question: `The speed of light in air is 3 ${times} ${exp(8)} ${velocity}. If the refractive index of water is 4/3, the speed of light in water is`,
        options: [
          `4 ${times} ${exp(8)} ${velocity}`,
          `2.25 ${times} ${exp(8)} ${velocity}`,
          `4.33 ${times} ${exp(8)} ${velocity}`,
          `4.56 ${times} ${exp(8)} ${velocity}`,
        ],
        ans: "B",
      },

      {
        id: 2,
        question: `The speed of light in a glass medium is 1.80 ${times} ${exp(8)} ${velocity}. If the speed of light in air is 3 ${times} ${exp(8)}, the refractive index of the glass is`,
        options: [
          `1.67`,
          `1.50`,
          `1.40`,
          `1.33`
        ],
        ans: "A",
      },

      {
        id: 3,
        question: `Light of wavelength 5 ${times} ${exp(-7)} m has a speed of 3 ${times} ${exp(8)} in air. Its wavelength in glass of refractive index 1.5 is`,
        options: [
          `7500 ${times} ${exp(-8)} cm`,
          `6666 ${times} ${exp(-8)} cm`,
          `5000 ${times} ${exp(-8)} cm`,
          `3333 ${times} ${exp(-8)} cm`,
        ],
        ans: "D",
      },

      {
        id: 4,
        question: `A ray of light travelling in air is incident at an angle of 30${deg} on the surface of water of refractive index 4/3. The angle of refraction is`,
        options: [
          `15${deg}`,
          `18${deg}`,
          `22${deg}`,
          `24${deg}`,
        ],
        ans: "C",
      },

      {
        id: 5,
        question: `The speeds of light in air and in glass are 3.0 ${times} ${exp(8)} ${velocity} and 1.8 ${times} ${exp(8)} ${velocity} respectively. If the angle of refracton of a ray of light incident on an air/glass interface is 30${deg}, the sine of the angle of incidence is`,
        options: [
          `0.30`,
          `0.60`,
          `0.83`,
          `1.00`,
        ],
        ans: "C",
      },

      {
        id: 6,
        question: `A ray of light which is incident normally on an air glass interface is, upon refraction in the glass, deviated through an angle of`,
        options: [
          `0${deg}`,
          `45${deg}`,
          `60${deg}`,
          `90${deg}`,
        ],
        ans: "A",
      },

      {
        id: 8,
        question: `The refractive index of a medium is ${sqrt}2. The critical angle is`,
        options: [
          `30${deg}`,
          `45${deg}`,
          `60${deg}`,
          `90${deg}`,
        ],
        ans: "B",
      },

      {
        id: 9,
        question: `The critical angle for light travelling from a transparent medium to air is measured as 34${deg}. The refractive index of the medium is`,
        options: [
          `0.56`,
          `1.50`,
          `1.79`,
          `2.02`,
        ],
        ans: "C",
      },

      {
        id: 10,
        question: `Two rays of light which are equally inclined to the vertical emanate from a point below the surface of a pool of water(refractive index = 4/3). If the two rays are inclined to each other at an angle of 80${deg} in the water, the angle between the rays when they emerge into air is`,
        options: [
          `59${deg}`,
          `105${deg}`,
          `118${deg}`,
          `160${deg}`,
        ],
        ans: "C",
      },

      {
        id: 12,
        question: `A ray of light is incident on one side of a parallel sided block of refractive index 1.50 and emerges from the other side after refraction through the block. If the angle of incidence is 40${deg}, the angular deviation of the emergent ray is`,
        options: [
          `80${deg}`,
          `40${deg}`,
          `20${deg}`,
          `0${deg}`,
        ],
        ans: "D",
      },

      {
        id: 13,
        question: `The refractive index for a given transparent medium is 1.4. The minimum angle required for total internal reflection to take place in the medium is`,
        options: [
          `46${deg}`,
          `44${deg}`,
          `40${deg}`,
          `30${deg}`,
        ],
        ans: "A",
      },

      {
        id: 34,
        question: `An object is placed at a distance of 2f from a converging lens of focal length f. The image distance is`,
        options: [
          `2f`,
          `f`,
          `f/2`,
          `f/4`,
        ],
        ans: "A",
      },

      {
        id: 35,
        question: `An object is placed 12 cm from a converging lens. If a virtual image is formed which is twice the size of the object, the focal length of the lens is`,
        options: [
          `8 cm`,
          `12 cm`,
          `18 cm`,
          `24 cm`,
        ],
        ans: "D",
      },

      {
        id: 36,
        question: `An object placed a distance d from a converging lens of focal length 10 cm forms an image which is 20 cm from the lens and on the same side of the lens as the object. The value of d is`,
        options: [
          `3.3 cm`,
          `6.7 cm`,
          `10.0 cm`,
          `20.0 cm`,
        ],
        ans: "B",
      },

      {
        id: 37,
        question: `A real image which is four times the size of the object is produced with a converging lens of focal length 16 cm. The separation between the object and its image is`,
        options: [
          `60 cm`,
          `80 cm`,
          `100 cm`,
          `120 cm`,
        ],
        ans: "C",
      },

      {
        id: 38,
        question: `A concave lens of focal length 15 cm forms an image 1/3 the size of the object. The object distance is`,
        options: [
          `10 cm`,
          `20 cm`,
          `30 cm`,
          `60 cm`,
        ],
        ans: "C",
      },

      {
        id: 39,
        question: `For an object placed 6 cm from a diverging lens of focal length 18 cm, the image is`,
        options: [
          `4.5 cm in front of the lens`,
          `4.5 cm behind the lens`,
          `9.0 cm in front of the lens`,
          `9.0 cm behind the lens`,
        ],
        ans: "A",
      },

      {
        id: 40,
        question: `The image of an object formed by a diverging lens of focal length 12 cm is located 6 cm from the lens. The distance of the object from the lens is`,
        options: [
          `4 cm`,
          `6 cm`,
          `12 cm`,
          `24 cm`,
        ],
        ans: "C",
      },

      {
        id: 41,
        question: `The image formed by a diverging lens is always`,
        options: [
          `magnified, virtual and erect`,
          `diminished, real and inverted`,
          `diminished, virtual and inverted`,
          `diminished, virtual and erect`,
        ],
        ans: "D",
      },

      {
        id: 42,
        question: `The image of a real object formed by a diverging lens is always`,
        options: [
          `inverted`,
          `real`,
          `larger than the object`,
          `situated between the object and the lens`
        ],
        ans: "D",
      },

      {
        id: 43,
        question: `Of the four lenses whose focal lengths are provided below, the most suitable for use as a microscope objective is`,
        options: [
          `-4 mm`,
          `+4 mm`,
          `-4 cm`,
          `+4 cm`,
        ],
        ans: "B",
      },

      {
        id: 44,
        question: `A camera lens having a focal length of 18 cm is focused on an object which is 90 cm away. To obtain a sharp image, the distance between the lens and the film must be`,
        options: [
          `15 cm`,
          `20 cm`,
          `22.5 cm`,
          `45 cm`,
        ],
        ans: "C",
      },

      {
        id: 45,
        question: `A lens of focal length 10 cm which is used as a simple microscope forms an image five times the size of the object. The distance of the object from the lens is`,
        options: [
          `8 cm`,
          `10 cm`,
          `12 cm`,
          `24 cm`,
        ],
        ans: "A",
      },

      {
        id: 46,
        question: `The projection lens in a slide projector has a focal length of 8 cm. The distance between the lens and the slide must be`,
        options: [
          `less than 8 cm`,
          `equal to 8 cm`,
          `greater than 8 cm but less than 16 cm`,
          `greater than 16 cm`,
        ],
        ans: "C",
      },

      {
        id: 47,
        question: `An exact copy of a document is to be produced using a duplicationg camera. The document should be placed`,
        options: [
          `at the optical center of the lens of the camera`,
          `at the principal focus of the lens`,
          `between the principal focus and a point twice the focal length of the lens`,
          `at a point which is twice the focal length of the lens`,
        ],
        ans: "D",
      },

      {
        id: 48,
        question: `The image in a simple microscope is`,
        options: [
          `magnified, real and erect`,
          `magnified, virtual and erect`,
          `magnified, virtual and inverted`,
          `magnified, real and inverted`,
        ],
        ans: "B",
      },

      {
        id: 49,
        question: `A magnifying glass produces an image which is positioned 30 cm from the lens and is five times the size of the object. The distance between the object and the magnifying glass is`,
        options: [
          `3.0 cm`,
          `4.5 cm`,
          `6.0 cm`,
          `7.5 cm`,
        ],
        ans: "C",
      },

      {
        id: 50,
        question: `The image formed by the objective lens in a compound microscope is positioned at 4 cm from the eye-piece. If the final image is at 25 cm from the eyepiece, the focal length of the eyepiece is`,
        options: [
          `3.4 cm`,
          `4.8 cm`,
          `21.0 cm`,
          `29.0 cm`,
        ],
        ans: "B",
      },

      {
        id: 51,
        question: `The two converging lenses of a telescope have focal lengths of 25 cm and 5 cm. The distance between the lenses in normal adjustment is`,
        options: [
          `0.2 cm`,
          `5.0 cm`,
          `20.0 cm`,
          `30.0 cm`,
        ],
        ans: "D",
      },

      {
        id: 52,
        question: `Which of the following statements is not correct about long sight?`,
        options: [
          `The image of a distant object falls behind the retina`,
          `Nearby objects appear blurred`,
          `It is sometimes due to the eyeball being too short`,
          `It is corrected with a converging lens`,
        ],
        ans: "A",
      },

      {
        id: 53,
        question: `A long-sighted person cannot clearly see objects that are less than 75 cm away. The type and focal length of lens which will enable him to read a book at 25 cm are?`,
        options: [
          `convex, 18.8 cm`,
          `concave, 18.8 cm`,
          `convex, 37.5 cm`,
          `concave, 37.5 cm`,
        ],
        ans: "C",
      },

      {
        id: 54,
        question: `A shorted-sighted person cannot see clearly objects which are further away than 5 m. The type and focal length of lens required to make him see distant objects clearly are`,
        options: [
          `convex, 5 m`,
          `concave, 5m`,
          `convex, insufficient data to determine f`,
          `concave, insufficient data to determine f`,
        ],
        ans: "B",
      },
    ],
  },

  // 14. dispersion of light
  {
    topic: "Dispersion of light",
    questions: [
      {
        id: 1,
        question: `The component of the spectrum of white light having the shortest wavelength is`,
        options: [
          `green`,
          `orange`,
          `red`,
          `violet`,
        ],
        ans: "D",
      },

      {
        id: 2,
        question: `A narrow beam of white light travelling in air is incident on a triangular glass prism. The color that experiences the greatest deviation is`,
        options: [
          `red`,
          `violet`,
          `blue`,
          `yellow`,
        ],
        ans: "B",
      },

      {
        id: 3,
        question: `Which of the following pairs of light rays are most widely separated in the spectrum of white light?`,
        options: [
          `blue and green`,
          `orange and blue`,
          `red and indigo`,
          `blue and violet`,
        ],
        ans: "C",
      },

      {
        id: 4,
        question: `When a beam of white light is dispersed by a glass prism, the agnular deviation of the colors of the spectrum decreases in the order`,
        options: [
          `blue, orange, red`,
          `orange, red, blue`,
          `red, orange, blue`,
          `blue, red, orange`,
        ],
        ans: "A",
      },

      {
        id: 5,
        question: `The arrangement which is used to attain a pure spectrum of white light is`,
        options: [
          `source, slit, prism, converging lens, screen`,
          `source, converging lens, prism, diverging lens, screen`,
          `source, slit, converging lens, prism, converging lens, screen`,
          `source, slit, converging lens, prism, screen`,
        ],
        ans: "C",
      },

      {
        id: 6,
        question: `Which of the following electromagnetic waves have the lowest frequency?`,
        options: [
          `radio waves`,
          `infra-red`,
          `ultra-violet`,
          `x-rays`,
        ],
        ans: "A",
      },

      {
        id: 7,
        question: `The following electromagnetic waves are arranged in the order of increasing wavelength`,
        options: [
          `Infra-rad, radio, x-rays, gamma rays`,
          `Gamma rays, x-rays, infra-red, radio`,
          `Radio, x-rays, gamma rays, infra-red`,
          `Gamma rays, infra-red, x-rays, radio`,
        ],
        ans: "B",
      },

      {
        id: 8,
        question: `The following are not part of the electromagnetic spectrum:<br />
        I. Alpha rays II. Beta rays<br />
        III. Gamma rays IV. Radio waves`,
        options: [
          `I and II only`,
          `III and IV only`,
          `I and III only`,
          `II and IV only`,
        ],
        ans: "A",
      },

      {
        id: 9,
        question: `A spectrum of white light is not a pure spectrum when`,
        options: [
          `it does not contain all the colors`,
          `it is made up of only three colors`,
          `it has no red color in it`,
          `the different colors in it overlap`,
        ],
        ans: "D",
      },

      {
        id: 10,
        question: `The electromagnetic waves which can be detected by their heating effect are`,
        options: [
          `infra-red`,
          `gamma rays`,
          `infra-red rays`,
          `ultra-violet rays`,
        ],
        ans: "C",
      },

      {
        id: 11,
        question: `Which of the following waves have the shortest wave-length?`,
        options: [
          `x-rays`,
          `infra-red rays`,
          `ultra-violet rays`,
          `radio waves`,
        ],
        ans: "A",
      },

      {
        id: 12,
        question: `The speed of electromagnetic waves in air is 3 ${times} ${exp(8)} ${velocity}. The wavelength of a wave of frequency 6 ${times} ${exp(14)} Hz is`,
        options: [
          `2 ${times} ${exp(-7)} m`,
          `5 ${times} ${exp(-7)} m`,
          `2 ${times} ${exp(6)} m`,
          `5 ${times} ${exp(6)} m`,
        ],
        ans: "B",
      },

      {
        id: 13,
        question: `Infra-red rays of frequency 6 ${times} ${exp(12)} Hz have a wavelength of 5 ${times} ${exp(-5)} m in a vacuum. The wavelength of x-rays of frequency 3 ${times} ${exp(18)} Hz is`,
        options: [
          `${exp(-10)} m`,
          `3.6 ${times} ${exp(-10)} m`,
          `25 m`,
          `${exp(10)} m`,
        ],
        ans: "A",
      },

      {
        id: 14,
        question: `A beam of light consisting of orange and blue colors is incident on a glass prism, which of the following statements is (are) correct?<br />
        I. Orange is more deviated than blue light<br />
        II. Blue is more deviated than orange light<br />
        III. The refractive index of glass is higher for orange than for blue light<br />
        IV. The refractive index of glass is higher for blue than for orange light`,
        options: [
          `I only`,
          `II only`,
          `I and III only`,
          `II and IV only`,
        ],
        ans: "D",
      },

      {
        id: 15,
        question: `A blue flower appears blue in sunlight because it`,
        options: [
          `transmits blue light`,
          `refracts blue light`,
          `absorbs blue light`,
          `reflects blue light`,
        ],
        ans: "D",
      },

      {
        id: 16,
        question: `A red shirt when viewed in pure green light appears`,
        options: [
          `red`,
          `green`,
          `black`,
          `yellow`,
        ],
        ans: "C",
      },

      {
        id: 17,
        question: `The color(s) absorbed when white light is incident on an object which is magenta in color is (are)`,
        options: [
          `green only`,
          `red only`,
          `red and blue`,
          `red and green`,
        ],
        ans: "A",
      },

      {
        id: 18,
        question: `Which of the following is a primary color of light?`,
        options: [
          `orange`,
          `yellow`,
          `white`,
          `red`,
        ],
        ans: "D",
      },

      {
        id: 19,
        question: `A yellow card observed through a blue glass would appear`,
        options: [
          `white`,
          `black`,
          `green`,
          `red`,
        ],
        ans: "B",
      },

      {
        id: 22,
        question: `A red pen is placed on a yellow table mat. In green light, the pen and the mat will appear respectively`,
        options: [
          `red and yellow`,
          `black and green`,
          `black and white`,
          `blue and green`,
        ],
        ans: "B",
      },

      {
        id: 23,
        question: `If yellow and cyan paints are mixed, the color of the mixture is`,
        options: [
          `green`,
          `blue`,
          `white`,
          `red`,
        ],
        ans: "A",
      },

      {
        id: 24,
        question: `The colors seen in a rainbow are due to`,
        options: [
          `polarization`,
          `absorption`,
          `refraction`,
          `interference`,
        ],
        ans: "C",
      },

      {
        id: 25,
        question: `A white screen is illuminated simultaneously by red and green light beams. The color seen is`,
        options: [
          `yellow`,
          `blue`,
          `white`,
          `black`,
        ],
        ans: "A",
      },
    ],
  },

  // 15. electrostatics
  {
    topic: "Electrostatics",
    questions: [
      {
        id: 1,
        question: `Which of the following substances is not an insulator?`,
        options: [
          `Glass`,
          `Silver`,
          `Plastic`,
          `Clay`
        ],
        ans: "B",
      },

      {
        id: 2,
        question: `An electric charge can be transmitted through?`,
        options: [
          `rubber, wood and stone`,
          `clay, paper and plastic`,
          `the human body, water and metals`,
          `acid, cloth and glass`
        ],
        ans: "C",
      },

      {
        id: 4,
        question: `The leaves of a negatively charged electroscope collapse completely as an object is brought close to the cap of the electroscope. The object possesses`,
        options: [
          `an equal quantity of negative charge`,
          `an equal quantity of positive charge`,
          `less quantity of negative charge`,
          `less quantity of positive charge`
        ],
        ans: "B",
      },

      {
        id: 6,
        question: `The magnitudes of charges on two bodies are to be compared. Which of the following instruments would be most suitable?`,
        options: [
          `Gold leaf electroscope`,
          `Capacitor`,
          `The electrophorus`,
          `Ebonite rod`
        ],
        ans: "A",
      },

      {
        id: 7,
        question: `A short chain is usually attached to the rear side of a petrol tanker trailing behind it to ensure that?`,
        options: [
          `the heat generated in the engine is conducted to the earth`,
          `the charges generated by friction in the tanker are conducted to the earth`,
          `the tanker does not exceed a certain speed limit`,
          `the chain vibrates in resonance with the tanker's engine`
        ],
        ans: "B",
      },

      {
        id: 8,
        question: `A gold leaf electroscope is to be charged by induction. Which of the following indicates the correct sequence of steps to be taken?<br />
        I. Touch the cap with a finger<br />
        II. Bring a charged rod near the cap<br />
        III. Remove the charged rod<br />
        IV. Remove the finger from the cap`,
        options: [
          `I, II, III and IV`,
          `II, III, I and IV`,
          `II, I, IV and III`,
          `II, I, III, and IV`
        ],
        ans: "C",
      },

      {
        id: 9,
        question: `An electrostatic force F acts between two stationary charges. If the distance separating the charges is doubled, the new electrostatic between them is`,
        options: [
          `2F`,
          `F/2`,
          `4F`,
          `F/4`
        ],
        ans: "D",
      },

      {
        id: 10,
        question: `The force acting on an electron carrying a charge of 1.6 ${times} ${exp(-19)} C in an electric field of intensity 5 ${times} ${exp(8)} ${units("Vm",-1)} is`,
        options: [
          `3.2 ${times} ${exp(-29)} N`,
          `8.0 ${times} ${exp(-11)} N`,
          `8.0 ${times} ${exp(-8)} N`,
          `3.1 ${times} ${exp(27)} N`,
        ],
        ans: "B",
      },

      {
        id: 11,
        question: `An electron (charge 1.6 ${times} ${exp(-19)} C) initially at rest is accelerated from a plate at zero volt to another plate at 60 kV. The kinetic energy acquired by the electron at the second plate is`,
        options: [
          `2.7 ${times} ${exp(-34)} J`,
          `2.7 ${times} ${exp(-21)} J`,
          `9.6 ${times} ${exp(-15)} J`,
          `3.8 ${times} ${exp(23)} J`,
        ],
        ans: "C",
      },
      // questions 12 and 13 requires mathematical rendering... Please make some research regarding this aspect
      // {
      //   id: 12,
      //   question: ``,
      //   options: [
      //     `2.7 ${times} ${exp(-34)} J`,
      //     `2.7 ${times} ${exp(-21)} J`,
      //     `9.6 ${times} ${exp(-15)} J`,
      //     `3.8 ${times} ${exp(23)} J`,
      //   ],
      //   ans: "A",
      // },


      {
        id: 15,
        question: `Two unequal, insulated, charged spheres carrying unlike charges are connected together with a short wire. Charges will flow from sphere to the other until both spheres`,
        options: [
          `carry equal charges of opposite signs`,
          `carry equal charges of the same sign`,
          `are at the same potential`,
          `become uncharged`,
        ],
        ans: "C",
      },

      {
        id: 16,
        question: `Which of the following statements are true of an insulated positively-charged sphere?<br />
        I. It contains excess positive charges<br />
        II. It has an electric field associated with it<br />
        III. It possesses potential energy<br />
        IV. It carries an electric current`,
        options: [
          `I and II only`,
          `I, II and III only`,
          `II and III only`,
          `I, II, III, and IV`,
        ],
        ans: "A",
      },

      {
        id: 17,
        question: `A charged ball is placed in contact with the inner wall of a hollow conducting sphere. The resulting electric field is`,
        options: [
          `inside the sphere`,
          `outside the sphere`,
          `inside and outside the sphere`,
          `on the surface of the ball`,
        ],
        ans: "B",
      },

      {
        id: 19,
        question: `If 20 mJ of work is done in moving 5 ${micro}C of charge between two points in an electric field, the potential difference between the two points is`,
        options: [
          `4 ${times} ${exp(3)} V`,
          `2.5 ${times} ${exp(-1)} V`,
          `2.5 ${times} ${exp(-4)} V`,
          `${exp(-7)} V`,
        ],
        ans: "A",
      },

      {
        id: 20,
        question: `A charge of magnitude 2 ${times} ${exp(-4)} coulomb experiences a force of 80 N in an electric field. The electric field intensity is`,
        options: [
          `8 ${times} ${exp(5)} ${units("NC",-1)}`,
          `4 ${times} ${exp(5)} ${units("NC",-1)}`,
          `1.6 ${times} ${exp(-2)} ${units("NC",-1)}`,
          `2.5 ${times} ${exp(-6)} ${units("NC",-1)}`
        ],
        ans: "B",
      },

      {
        id: 22,
        question: `A potential difference of 3.6 V is maintained between two plates which are 20 cm apart. The electric field intensity between the two plates is`,
        options: [
          `5.6 ${times} ${exp(-2)} ${units("Vm",-1)}`,
          `1.8 ${times} ${exp(-1)} ${units("Vm",-1)}`,
          `7.2 ${times} ${exp(-1)} ${units("Vm",-1)}`,
          `18.0 ${units("Vm",-1)}`,
        ],
        ans: "D",
      },

      {
        id: 23,
        question: `50 J of work is done in moving a charge of magnitude 10 ${micro}C through a distance of 10 cm against a uniform electric field. The electric field intensity is`,
        options: [
          `5 ${times} ${exp(5)} ${units("Vm",-1)}`,
          `5 ${times} ${exp(6)} ${units("Vm",-1)}`,
          `5 ${times} ${exp(7)} ${units("Vm",-1)}`,
          `5 ${times} ${exp(8)} ${units("Vm",-1)}`,
        ],
        ans: "C",
      },

      {
        id: 24,
        question: `The magnitude of the force experienced by a charge of 1.6 ${times} ${exp(-8)} C in a uniform electric field of intensity 5 ${times} ${exp(5)} ${units("NC",-1)} is`,
        options: [
          `3.2 ${times} ${exp(-14)} N`,
          `8.0 ${times} ${exp(-3)} N`,
          `8.0 ${times} ${exp(3)} N`,
          `3.1 ${times} ${exp(3)} N`,
        ],
        ans: "B",
      },

      {
        id: 25,
        question: `If k = 9.0 ${times} ${exp(9)} ${units("Nm",2,"C",-2)}, the electric potential at a distance of 10 cm from a point charge of 15 mC is`,
        options: [
          `1.7 ${times} ${exp(-11)} V`,
          `1.35 ${times} ${exp(7)} V`,
          `1.35 ${times} ${exp(9)} V`,
          `6 ${times} ${exp(10)} V`,
        ],
        ans: "C",
      },

      {
        id: 26,
        question: `Which of the following quantities is a vector?`,
        options: [
          `Electric potential`,
          `Electric charge`,
          `Electrical capacitance`,
          `Electric field`,
        ],
        ans: "D",
      },

      {
        id: 27,
        question: `Which of the following is not a suitable dielectric material?`,
        options: [
          `Brass`,
          `Paraffin wax`,
          `Glass`,
          `Ebonite`,
        ],
        ans: "A",
      },

      {
        id: 28,
        question: `A parallel plate capacitor of plate area 20 ${units("cm",2)} in vacuum has a capacitance of 0.02 ${micro}F. If permitivity of free space = 9 ${times} ${exp(-12)} ${units("Fm",-1)}, the distance between the plates is`,
        options: [
          `9.0 ${times} ${exp(-13)} m`,
          `9.0 ${times} ${exp(-7)} m`,
          `9.0 ${times} ${exp(-3)} m`,
          `9.0 ${times} ${exp(-1)} m`,
        ],
        ans: "B",
      },

      {
        id: 29,
        question: `When the plates of a capacitor are separated by air, its capacitance is 5 ${micro}F. With a dielectric medium inserted between the plates, its capacitance is 50 ${micro}F. The relative permitivity of the medium is`,
        options: [
          `1/50`,
          `1/10`,
          `5`,
          `10`,
        ],
        ans: "D",
      },

      {
        id: 30,
        question: `The plates of a 0.5 ${micro}F uncharged capacitor are connected to a 10 V battery. The charge on the capacitor after a long time is`,
        options: [
          `50 ${micro}C`,
          `10.0 ${micro}C`,
          `20.0 ${micro}C`,
          `50.0 ${micro}C`,
        ],
        ans: "A",
      },

      {
        id: 34,
        question: `A 4 ${micro}F capacitor is connected in series with a 6 ${micro}F capacitor. The additional capacitance which must be connected in series with this combination to give an equivalent of 2 ${micro}F is`,
        options: [
          `2 ${micro}F`,
          `8 ${micro}F`,
          `12 ${micro}F`,
          `24 ${micro}F`,
        ],
        ans: "C",
      },

      {
        id: 35,
        question: `Three 2 ${micro}F capacitors are to be connected in such a way as to give an effective capacitance of 3 ${micro}F. This can be done by connecting`,
        options: [
          `two parallel capacitors in series with the third capacitor`,
          `two series capacitors in parallel with the third capacitor`,
          `all three capacitors in series`,
          `all three capacitors in parallel`,
        ],
        ans: "B",
      },

      {
        id: 38,
        question: `The equivalent capacitance of three capacitors, each of capacitance C connected in parallel is`,
        options: [
          `C/3`,
          `C`,
          `3C/2`,
          `3C`,
        ],
        ans: "D",
      },

      {
        id: 39,
        question: `The equivalent capacitance of three capacitors, each of capacitance C connected in series is`,
        options: [
          `C/3`,
          `C`,
          `3C/2`,
          `3`,
        ],
        ans: "A",
      },

      {
        id: 43,
        question: `25 J of energy is stored in a capacitor of capacitanve 2 ${micro}F. The voltage across the capacitor's terminals is`,
        options: [
          `5000 V`,
          `250 V`,
          `25 V`,
          `5 V`,
        ],
        ans: "A",
      },

      {
        id: 44,
        question: `The energy stored in a capacitor of capacitance 10 ${micro}F whose plates are maintained at a potential difference of 200 V is`,
        options: [
          `1 ${times} ${exp(2)} J`,
          `2 ${times} ${exp(-1)} J`,
          `1 ${times} ${exp(6)} J`,
          `2 ${times} ${exp(3)} J`,
        ],
        ans: "B",
      },

      {
        id: 45,
        question: `A capacitor is charged by connecting its plates to the terminals of a 10 V battery. When a charge of 1 ${micro}C has piled up on the plates, the energy stored in the capacitor is`,
        options: [
          `5 ${times} ${exp(-8)} J`,
          `5 ${times} ${exp(-3)} J`,
          `5 J`,
          `5 ${times} ${exp(5)} J`,
        ],
        ans: "A",
      },

      {
        id: 46,
        question: `3 ${times} ${exp(-8)} J of energy is stored in a 0.01 ${micro}F  capacitor. The charge on each of the plates is`,
        options: [
          `2 ${times} ${exp(-8)} ${micro}C`,
          `2 ${micro}C`,
          `2 ${times} ${exp(3)} ${micro}C`,
          `2 ${times} ${exp(8)} ${micro}C`,
        ],
        ans: "B",
      },

    ],
  },

  // 16. current electricity
  {
    topic: "Current electricity",
    questions: [
      {
        id: 1,
        question: `Ohm's law states that the ratio V/I is constant for<br />
        I. Steel II. An electrolytes<br />
        III. Silver VI. A diode<br />
        Which of the above are correct?`,
        options: [
          `I and II only`,
          `I and III only`,
          `III and IV only`,
          `I, II, III, and IV`
        ],
        ans: "B",
      },

      {
        id: 2,
        question: `A quantity of electricity is measured in the unit of`,
        options: [
          `the ampere`,
          `the volt`,
          `the coulomb`,
          `the electromotive force`
        ],
        ans: "C",
      },

      {
        id: 3,
        question: `The energy needed to move a unit positive charge around a complete electric circuit is called the`,
        options: [
          `electromotive force`,
          `electric potential difference`,
          `electrical energy`,
          `kinetic energy`
        ],
        ans: "A",
      },

      {
        id: 4,
        question: `A current of 180 mA passes through a conductor for 5 minutes. The quantity of electricity transported is`,
        options: [
          `54 C`,
          `0.9 C`,
          `3.6 ${times} ${exp(-2)} C`,
          `6.0 ${times} ${exp(-4)} C`,
        ],
        ans: "A",
      },

      {
        id: 5,
        question: `60 mC of electricity passes through a conductor for 2 minutes. The current through the conductor is`,
        options: [
          `7.2 A`,
          `120.0 mA`,
          `30.0 mA`,
          `0.5 mA`,
        ],
        ans: "D",
      },

      {
        id: 6,
        question: `Wire X has twice the diameter and twice the length of wire Y made of the same material. The ratio of the resistance of X to Y is`,
        options: [
          `1 : 4`,
          `4 : 1`,
          `1 : 2`,
          `1 : 1`,
        ],
        ans: "C",
      },

      {
        id: 7,
        question: `A 2 m long wire of cross-sectional area 4 ${times} ${exp(-7)} ${units("m",2)} has a resistance of 0.5 ${ohm}. The cross-sectional area of the wire is`,
        options: [
          `1.6 ${times} ${exp(-7)} ${units("m",2)}`,
          `1.6 ${times} ${exp(-6)} ${units("m",2)}`,
          `4.0 ${times} ${exp(-6)} ${units("m",2)}`,
          `2.5 ${times} ${exp(-5)} ${units("m",2)}`,
        ],
        ans: "B",
      },

      {
        id: 8,
        question: `A 0.4 ${ohm} resistor is made from a wire of length 5 m and resistivity 2 ${times} ${exp(-6)}${ohm}m. The cross-sectional area of the wire is`,
        options: [
          `1.6 ${times} ${exp(-7)} ${units("m",2)}`,
          `1.6 ${times} ${exp(-6)} ${units("m",2)}`,
          `4.0 ${times} ${exp(-6)} ${units("m",2)}`,
          `2.5 ${times} ${exp(-5)} ${units("m",2)}`,
        ],
        ans: "D",
      },

      {
        id: 9,
        question: `A standard resistor of resistance 14${ohm} is to be made from a constantan wire of cross-sectional area 2${pi} ${times} ${exp(-8)} ${units("m",2)} and resistivity 1.1 ${times} ${exp(-6)} ${ohm}m. Taking ${pi} - 22/7, the length of wire required is`,
        options: [
          `0.80 m`,
          `1.10 m`,
          `1.25 m`,
          `8.00 m`,
        ],
        ans: "A",
      },

      {
        id: 10,
        question: `A 4 m long wire of cross-sectional area 2 ${times} ${exp(-8)} ${units("m",2)} has a resistance of 5 ${ohm}. The conductivity of the wire is`,
        options: [
          `2.5 ${times} ${exp(-8)} ${units(ohm,-1,"m",-1)}`,
          `4.0 ${times} ${exp(-8)} ${units(ohm,-1,"m",-1)}`,
          `2.5 ${times} ${exp(7)} ${units(ohm,-1,"m",-1)}`,
          `4.0 ${times} ${exp(7)} ${units(ohm,-1,"m",-1)}`,
        ],
        ans: "D",
      },

      {
        id: 11,
        question: `A cell has an open circuit voltage V<sub>o</sub>. When the cell delivers current I, the closed circuit voltage is V<sub>c<s/sub>. The internal resistance of the cell is`,
        options: [
          `V<sub>c</sub>/I`,
          `V<sub>o</sub>/I`,
          `(V<sub>o</sub> - V<sub>c</sub>)/I`,
          `(V<sub>c</sub> - V<sub>o</sub>)/I`,
        ],
        ans: "C",
      },

      {
        id: 12,
        question: `An electric cell of internal resistance 0.5 ${ohm} delivers a current of 2.0 A when a resistance of 3 ${ohm} is connected across it. The electromotive force of the cell is`,
        options: [
          `1.0 V`,
          `1.5 V`,
          `2.5 V`,
          `7.0 V`,
        ],
        ans: "D",
      },

      {
        id: 13,
        question: `The reading on a high resistance voltmeter connected across the terminals of a cell on open circuit is 5.0 V. When the cell delivers a current of 0.5 A to a lamp, the voltmeter reading falls to 4.5 V. The resistance of the lamp is`,
        options: [
          `1 ${ohm}`,
          `9 ${ohm}`,
          `10 ${ohm}`,
          `19 ${ohm}`,
        ],
        ans: "B",
      },

      {
        id: 14,
        question: `The reading on a high resistance voltmeter connected across the terminals of a cell on open circuit is 5.0 V. When the cell delivers a current of 0.5 A to a lamp, the voltmeter reading falls to 4.5 V. The internal resistance of the cell is`,
        options: [
          `0.25 ${ohm}`,
          `0.50 ${ohm}`,
          `1.00 ${ohm}`,
          `9.00 ${ohm}`,
        ],
        ans: "C",
      },

      {
        id: 15,
        question: `The potential difference between the terminals of a battery is 2.8 V. Wih a 5 ${ohm} resistor connected acroos the terminals of the cell, the p.d is 2.5 V. The internal resistance of the cell is`,
        options: [
          `0.3 ${ohm}`,
          `0.5 ${ohm}`,
          `0.6 ${ohm}`,
          `5.0 ${ohm}`,
        ],
        ans: "C",
      },

      {
        id: 16,
        question: `A cell delivers a current of 0.2 A through a resistance of 10 ${ohm}. When the resistance is changed to 6 ${ohm} the current delivered is 0.3 A. The internal resistance of the cell is`,
        options: [
          `2.0 ${ohm}`,
          `1.5 ${ohm}`,
          `1.0 ${ohm}`,
          `0.7 ${ohm}`,
        ],
        ans: "A",
      },

      {
        id: 18,
        question: `The efficiency of a cell of internal resistance 0.5 ${ohm} which supplies current to a 2 ${ohm} resistor is`,
        options: [
          `20%`,
          `25%`,
          `75%`,
          `80%`,
        ],
        ans: "D",
      },

      {
        id: 19,
        question: `The voltage across the terminals of a cell drops to three-quarters of its nominal value when a resistance R is connected across the cell. The cells internal resistance is`,
        options: [
          `R/4`,
          `R/3`,
          `R/2`,
          `R`,
        ],
        ans: "B",
      },

      {
        id: 20,
        question: `A battery delivering a current of 1.0 A has a terminal potential difference of 2 V. When delivering a current of 1.5 A, the terminal p.d is 1 V. The internal resistance of the battery is`,
        options: [
          `0.5 ${ohm}`,
          `1.0 ${ohm}`,
          `2.0 ${ohm}`,
          `4.0 ${ohm}`,
        ],
        ans: "C"
      },

      {
        id: 21,
        question: `A cell of internal resistance 2 ${ohm} and emf 12 V is connected to a resistor of 4 ${ohm}. The terminal p.d of the cell is`,
        options: [
          `12 V`,
          `10 V`,
          `8 V`,
          `6 V`,
        ],
        ans: "C",
      },

      {
        id: 22,
        question: `A cell of emf 3 V is connected in series with a resistor of 6 ${ohm}. A high resistance voltmeter connected across the cell reads 2.4 V. The internal resistance of the cell is`,
        options: [
          `1.2 ${ohm}`,
          `1.5 ${ohm}`,
          `2.4 ${ohm}`,
          `4.8 ${ohm}`,
        ],
        ans: "B",
      },

      {
        id: 23,
        question: `A cell of emf 2 V and internal resistance 0.5 ${ohm} delivers a current of 0.4 A to an external resistance R. The value of R is`,
        options: [
          `0.5 ${ohm}`,
          `1.0 ${ohm}`,
          `4.0 ${ohm}`,
          `4.5 ${ohm}`,
        ],
        ans: "D",
      },

      {
        id: 25,
        question: `Three cells each of emf 1.1 V and internal resistance 2 ${ohm} are connected in parallel across a 3 ${ohm} resistor. The current in the resistor is`,
        options: [
          `0.12 A`,
          `0.30 A`,
          `0.39 A`,
          `0.90 A`,
        ],
        ans: "B",
      },

      {
        id: 26,
        question: `A cell of emf 1.2 V and internal resistance 1.5 ${ohm} is connected in series with an ammeter of resistance 0.5 ${ohm} and a load of resistance 4 ${ohm}. The current in the circuit is`,
        options: [
          `0.20 A`,
          `0.24 A`,
          `0.30 A`,
          `0.40 A`,
        ],
        ans: "A",
      },

      {
        id: 29,
        question: `A 20 A car fuse operates on a 12 V battert. The resistance of the fuse wire is`,
        options: [
          `240 ${ohm}`,
          `32.0 ${ohm}`,
          `1.6 ${ohm}`,
          `0.6 ${ohm}`,
        ],
        ans: "D",
      },

      {
        id: 30,
        question: `Two resistors R<sub>a</sub> and R<sub>b</sub> are connected in parallel. If R<sub>a</sub> < R<sub>b</sub>, the combined resistance is`,
        options: [
          `less than R<sub>a</sub>`,
          `greater than R<sub>b</sub>`,
          `R<sub>a</sub> + R<sub>b</sub>`,
          `greater than R<sub>a</sub> but less than R<sub>b</sub>`,
        ],
        ans: "A",
      },

      {
        id: 31,
        question: `Three 6 ${ohm} resistors are connected in parallel. If a potential difference of 24 V is applied across the combination, the current in each resistor is`,
        options: [
          `12.0 A`,
          `4.0 A`,
          `1.5 A`,
          `0.8 A`,
        ],
        ans: "B",
      },

      {
        id: 36,
        question: `Which of the following combinations of the three resistors 4 ${ohm}, 6 ${ohm} and 12 ${ohm} will give an equivalent of 2 ${ohm}?`,
        options: [
          `All three resistors in series`,
          `A parallel combination of the 4 ${ohm} and the 6 ${ohm} resistor, in series with thw 12 ${ohm} resistor`,
          `A parallel combination of the 6 ${ohm} and the 12 ${ohm} resistor, in series with the 4 ${ohm} resistor`,
          `All three resistors in parallel`,
        ],
        ans: "D",
      },

      {
        id: 56,
        question: `A calibrated potentiometer can be used to measure an unknown emf E of a cell only when<br />
        I. the source of emf is greater than E<br />
        II. the cell's internal resistance is negligible<br />
        III. no current flows through the cell<br />
        IV. the potentiometer wire has a uniform diameter<br />
        Which of the above statements are correct?`,
        options: [
          `I and II only`,
          `III and IV only`,
          `II, III, and IV only`,
          `I, III, and IV only`,
        ],
        ans: "D",
      },

      {
        id: 61,
        question: `A standard cell of emf 1.6 V gives a balance point of 40 cm on a potentiometer wire. If the standard cell is now replaced by a cell emf 2.4 V, the new balance point is at`,
        options: [
          `26.7 cm`,
          `50.0 cm`,
          `60.0 cm`,
          `64.0 cm`,
        ],
        ans: "C",
      },

      {
        id: 64,
        question: `With a standard resistor of 6 ${ohm} connected to the 0.0 cm end of a metre bridge, the balance point is at 75 cm. The value of the unknown resistor is`,
        options: [
          `1.5 ${ohm}`,
          `2.0 ${ohm}`,
          `4.0 ${ohm}`,
          `18.0 ${ohm}`,
        ],
        ans: "B",
      },

      {
        id: 65,
        question: `If the cost of electricity is #1.20 per kWh, the cost of operating for 50 hrs a lamp drawing 1 A from a 220 V line is`,
        options: [
          `#6.60`,
          `#11.00`,
          `#13.20`,
          `#26.40`,
        ],
        ans: "C",
      },

      {
        id: 66,
        question: `A man has three 100 W bulbs, five 60 W bulbs and five 40 W light bulbs in his apartment. If he turns all the lights on for five hours daily and the cost of electricity is #1.20 per unit, his bill for 30 days is`,
        options: [
          `#4.80`,
          `#12.00`,
          `#28.80`,
          `#144.00`,
        ],
        ans: "D",
      },

      {
        id: 67,
        question: `The resistance of a 40 W car head lamp, drawing current from a 12 V battery is`,
        options: [
          `0.3 ${ohm}`,
          `3.3 ${ohm}`,
          `3.6 ${ohm}`,
          `4.8 ${ohm}`,
        ],
        ans: "C",
      },

      {
        id: 68,
        question: `A heating coil of resistance 5 ${ohm} drawing a current of 10 A is used to evaporate 500 g of a liquid in 1 minute. Assuming 100% heating efficiency, the specific latent heat of vaporization of the liquid is`,
        options: [
          `1 ${units("Jg",-1)}`,
          `6 ${units("Jg",-1)}`,
          `60 ${units("Jg",-1)}`,
          `120 ${units("Jg",-1)}`,
        ],
        ans: "C",
      },

      {
        id: 69,
        question: `An electric iron is rated at 1100 W, 220 V. The iron's resistance and the current it draws are`,
        options: [
          `5 ${ohm}, 44 A`,
          `44 ${ohm}, 5 A`,
          `5.5 ${ohm}, 5 A`,
          `5.5 ${ohm}, 44 A`,
        ],
        ans: "B",
      },

      {
        id: 70,
        question: `3 kg of water is to be heated from 30${deg}C to 80${deg}C using a heating coil which draws a current of 6 A from a 200 V mains. If the specific heat capacity of water is 4200 ${units("Jkg",-1,"K",-1)}, the heating time required is `,
        options: [
          `120 s`,
          `360 s`,
          `480 s`,
          `525 s`,
        ],
        ans: "D",
      },

      {
        id: 72,
        question: `An electric kettle connected to a 200 V mains generates 3 ${times} ${exp(5)} J of heat energy in 2.5 minutes. The resistance of the heating element of the kettle is`,
        options: [
          `2 ${ohm}`,
          `4 ${ohm}`,
          `8 ${ohm}`,
          `20 ${ohm}`,
        ],
        ans: "D",
      },

      {
        id: 73,
        question: `A resistor connected to a 12 V battery draws a current of 2 A. The energy dissipated in the resistor in 5 minutes is`,
        options: [
          `3,600 J`,
          `6,000 J`,
          `7,200 J`,
          `14,000 J`,
        ],
        ans: "C",
      },

      {
        id: 76,
        question: `An electric heating coil is rated at 1 kw is used to heat 2 kg of water for 2 minutes. The initial water temperature is 30${degC}. Taking the specific heat of the water as 4,000 ${units("Jkg",-1)} and neglecting that of the container, the final water temperature is`,
        options: [
          `15.0${degC}`,
          `45.0${degC}`,
          `52.5${degC}`,
          `60.0${degC}`,
        ],
        ans: "B",
      },

      {
        id: 77,
        question: `A 30 ${ohm} resistance coil is used to melt 50 g of ice in 35 seconds. If there are no heat losses and the latent heat of fusion of ice is 336 ${units("Jg",-1)}, the current drawn by the coil is`,
        options: [
          `0.25 A`,
          `0.50 A`,
          `2.00 A`,
          `4.00 A`,
        ],
        ans: "D",
      },

      {
        id: 78,
        question: `A heating coil is used to boil a certain quantity of water in 10 minutes. If heat losses are negligible and the same heating coil is to be used to boil the same quantity of water, but with the current now doubled it will take`,
        options: [
          `20 min`,
          `5 min`,
          `2.5 min`,
          `1 min`,
        ],
        ans: "C",
      },

      {
        id: 79,
        question: `An elecric heater of resistance 110 ${ohm} is connected to a 220 V mains supply. The time it takes to dissipate 121 kJ of energy is`,
        options: [
          `275 s`,
          `137.5 s`,
          `55 s`,
          `27.5 s`,
        ],
        ans: "A",
      },

      {
        id: 81,
        question: `A 1.2 kW electric iron drawing from a 240 V mains is to be protected with a fuse. The most suitable fuse rating is`,
        options: [
          `0.2 A`,
          `5.0 A`,
          `8.0 A`,
          `12.0 A`,
        ],
        ans: "B",
      },

      {
        id: 82,
        question: `Which of the following appliances draws the highest current?`,
        options: [
          `1.1 kW, 220 V`,
          `440 W, 110 V`,
          `100 W, 200 V`,
          `40 W, 6 V`,
        ],
        ans: "D",
      },

      {
        id: 83,
        question: `A 5760 ${micro}F capacitor is charged to a voltage V such that it stores the same energy as a fully charged 12 V, 60 Ah storage battery. The magnitude of the voltage V is`,
        options: [
          `30.0 kV`,
          `28.8 kV`,
          `12.0 kV`,
          `8.7 kV`,
        ],
        ans: "A",
      },
    ],
  },

  // 17. magnetism, electromagnetism
  {
    topic: "Magnetism, Electromagnetism",
    questions: [
      {
        id: 1,
        question: `A magnet is similar to a bi-polar charged system in the following respect:<br />
        I. It has two opposite poles - the N and S poles<br />
        II. The earth's magnetic N-pole is close to the geographic S-pole and the earth's magnetic S-pole is close to the geographic N-pole<br />
        III. The force of attraction or repulsion between opposite or like poles obeys a law identical in form to Coulomb's law for electric charges<br />
        Which of the above statements is(are) true`,
        options: [
          `I only`,
          "II only",
          "I and III only",
          "I, II, and III"
        ],
        ans: "C",
      },

      {
        id: 2,
        question: `Which of the following methods cannot be used to convert a steel bar into magnet?<br />
        I. Passing of an electric current through a solenoid<br />
        II. Repeated stroking of the steel bar with a magnet<br />
        III. Heating of the steel bar<br />
        IV. Hammering the steel in the earth's magnetic field`,
        options: [
          `I and II only`,
          "III and IV only",
          "I, II and III only",
          "I, II, and IV only"
        ],
        ans: "B",
      },

      {
        id: 4,
        question: `Soft iron is preferred to steel in electromagnets because<br />
        I. soft iron is more readily magnetized than steel<br />
        II. soft iron retains its magnetism more than steel<br />
        III. soft iron is more readily demagnetized than steel<br />
        Which of the above statements is(are) true?`,
        options: [
          `I only`,
          "I and II only",
          "I and III only",
          "I, II, and III only"
        ],
        ans: "C",
      },

      {
        id: 5,
        question: `The ammature of an electric bell is made of soft iron because<br />
        I. soft iron can be made into a permanent magnet<br />
        II. soft iron loses its magnetism readily<br />
        III. soft iron retains its magnetism for a long time<br />
        Which of the above statements is(are) correct?`,
        options: [
          `I only`,
          "II only",
          "III only",
          "II, and III only"
        ],
        ans: "B",
      },

      {
        id: 6,
        question: `Which of the following methods will effectively demagnetize a bar magnet?<br />
        I. Passing an electric current through the magnet<br />
        II. Bringing its N-pole in contact with the N-pole of a strong magnet<br />
        III. Heating the magnet`,
        options: [
          `I only`,
          "III only",
          "I and III only",
          "I, II, and III only"
        ],
        ans: "B",
      },

      {
        id: 8,
        question: `Which of the following statements about magnetism is true?`,
        options: [
          `A freely suspended bar magnet comes to rest in the geographic north-south direction`,
          "Like poles attract",
          "Iron fillings will concentrate mainly round the end of a bar magnet",
          "Lodestone is a non-magnetic material"
        ],
        ans: "C",
      },

      {
        id: 9,
        question: `Which of the following are magnetic materials?`,
        options: [
          `Copper, steel and iron`,
          "Iron, lead and brass",
          "Steel, glass and lead",
          "Nickel, steel and iron"
        ],
        ans: "D",
      },

      {
        id: 10,
        question: `The angle which the earth's magnetic field makes with the horizontal is called the?`,
        options: [
          `magnetic declination`,
          "magnetic meridian",
          "angle of dip",
          "angle of deviation"
        ],
        ans: "C",
      },

      {
        id: 11,
        question: `At a location on earth where the declination is 15${deg}E, a compass needle indicates the direction N50${deg}E. The true geographic bearing is`,
        options: [
          `N65${deg}E`,
          `N50${deg}E`,
          `N35${deg}E`,
          `N15${deg}E`,
        ],
        ans: "A",
      },

      {
        id: 12,
        question: `The magnetic field strength at a point close to, and lying along the axis of a solenoid, will be greatest if the core of the solenoid is made of`,
        options: [
          `brass`,
          `iron`,
          `copper`,
          `steel`,
        ],
        ans: "B",
      },

      {
        id: 13,
        question: `The angles which a suspended magnetic needle will make with the horizontal at the earth's magnetic poles and at a point on the magnetic equator are respectively`,
        options: [
          `90${deg} and 0${deg}`,
          `0${deg} and 90${deg}`,
          `0${deg} and 0${deg}`,
          `90${deg} and 90${deg}`,
        ],
        ans: "A",
      },

      {
        id: 14,
        question: `The angle between the geographic and the magnetic meridians at a point on the earth's surface is called the`,
        options: [
          `angle of inclination`,
          `angle of dip`,
          `angle of declination`,
          `longitude of the point`,
        ],
        ans: "C",
      },

      {
        id: 21,
        question: `A particle of charge 0.5 C moves at a velocity of 2.5 ${velocity} in a direction perpendicular to a magnetic field of strength 0.20 T. The magnetic force experienced by the particle is`,
        options: [
          `0.025 N`,
          `0.050 N`,
          `0.250 N`,
          `0.500 N`,
        ],
        ans: "C",
      },

      {
        id: 22,
        question: `An electron of charge e moving with velocity v enters into a magnetic field of flux density B. If the electron moves in a direction parallel to the field, the force on the electron is`,
        options: [
          `evB`,
          `ev/B`,
          `eB-v`,
          `zero`,
        ],
        ans: "D",
      },

      {
        id: 23,
        question: `A galvanometer can be converted into an ammeter by connecting`,
        options: [
          `a low resistance shunt in parallel with the galvanometer`,
          `a low resistance shunt in series with the galvanometer`,
          `a high resistance multiplier in parallel with the galvanometer`,
          `a high resistance multiplier in series with the galvanometer`,
        ],
        ans: "A",
      },

      {
        id: 24,
        question: `Which of the following connections will convert a milliameter into a voltmeter?`,
        options: [
          `a high series resistance`,
          `a high parallel resistance`,
          `a low series resistance`,
          `a low parallel resistance`,
        ],
        ans: "A",
      },

      {
        id: 26,
        question: `A 0-10 mA galvanometer of resistance 100 ${ohm} is to be converted to a 0.1 A ammeter. This can be done by connecting`,
        options: [
          `a 9.99 ${ohm} shunt resistor`,
          `a 9.99 ${ohm} series resistor`,
          `a 1.0 ${ohm} shunt resistor`,
          `a 1.0 ${ohm} series resistor`,
        ],
        ans: "C",
      },

      {
        id: 27,
        question: `A galvanometer of resistance 38 ${ohm} is to be connected with a shunt such that 1/20 of the current in a circuit passes through the galvanometer. The shunt resistance required is`,
        options: [
          `1.9 ${ohm}`,
          `2.0 ${ohm}`,
          `36.1 ${ohm}`,
          `38.0 ${ohm}`,
        ],
        ans: "B",
      },

      {
        id: 28,
        question: `An milliammeter of resistance 10 ${ohm} has a full scale deflection of 60 mA. The full scale deflection of the meter when a shunt of 0.20 ${ohm} is connected across its terminals is`,
        options: [
          `1.00 A`,
          `1.06 A`,
          `3.00 A`,
          `3.06 A`,
        ],
        ans: "D",
      },

      {
        id: 30,
        question: `A milliameter of resistance 100 ${ohm} and full scale deflection of 50 mA is to be converted into a voltmeter with a full scale deflection of 100 V. The resistance required is`,
        options: [
          `0.05 ${ohm} parallel with the milliammeter`,
          `0.05 ${ohm} in series with the milliammeter`,
          `1.900 ${ohm} in parallel with the milliammeter`,
          `1.900 ${ohm} in series with the milliammeter`,
        ],
        ans: "D",
      },

      {
        id: 31,
        question: `A moving-coil meter of internal resistance 20 ${ohm} has a full scale deflection of 10 mA. A series resistance of 980 ${ohm} is connected to the galvanometer in order to convert it into a voltmeter. The full scale deflection of the voltmeter is`,
        options: [
          `1 V`,
          `10 V`,
          `20 V`,
          `100 V`,
        ],
        ans: "B",
      },

      {
        id: 32,
        question: `The operation of a moving-coil galvanometer is based on`,
        options: [
          `electromagnetic induction`,
          `magnetic effect of electric current`,
          `force on a current-carrying conductor in a magnetic field`,
          `electrochemical effect`,
        ],
        ans: "C",
      },

      {
        id: 33,
        question: `A rectangular coil of wire rotating in magnetic field has its two ends connected to slip rings. Two carbon brushes make light electrical contact with the slip rings. When the brushes are connected to an external circuit with a battery and rheostat, the coil rotates. This is a description of`,
        options: [
          `an electric motor`,
          `an a.c generator`,
          `an induction coil`,
          `a moving-coil galvanometer`,
        ],
        ans: "A",
      },

      {
        id: 34,
        question: `To convert an a.c generator into a d.c generator, the`,
        options: [
          `coil is wound on a soft iron armature`,
          `slip rings are replaced with split rings`,
          `number of turns in the coil is increased`,
          `field magnet is made stronger`,
        ],
        ans: "B",
      },

      {
        id: 35,
        question: `Which of the following is(are) not part of an a.c generator?<br />
        I. Carbon brushes   II. Commutator<br />
        III. Slip rings     IV. Field magnet`,
        options: [
          `I only`,
          `II only`,
          `I and III only`,
          `II and IV only`,
        ],
        ans: "B",
      },

      {
        id: 36,
        question: `An electric motor essentially convert`,
        options: [
          `electrical energy into heat energy`,
          `mechanical energy into electrical energy`,
          `electrical energy into chemical energy`,
          `electrical energy into mechanical energy`,
        ],
        ans: "D",
      },

      {
        id: 37,
        question: `A dynamo converts`,
        options: [
          `mechanical energy into electrical energy`,
          `electrical energy into mechanical energy`,
          `heat energy into electrical energy`,
          `electrical energy into heat energy`,
        ],
        ans: "A",
      },

      {
        id: 38,
        question: `In a simple generator, the main function of a commutator is to`,
        options: [
          `change the direction of rotation of the armature`,
          `provide a uniform magnetic field around the armature`,
          `change the direction of current in the coil`,
          `increase the magnetic flux linking the coil`,
        ],
        ans: "C",
      },

      {
        id: 39,
        question: `The mouthpiece of a telephone primarily converts sound energy into`,
        options: [
          `mechanical energy`,
          `heat energy`,
          `electrical energy`,
          `chemical energy`,
        ],
        ans: "C",
      },

      {
        id: 40,
        question: `Which of the following is not a component of an electric bell?`,
        options: [
          `Solenoid`,
          `Contact breaker`,
          `Iron core`,
          `Permanent magnet`,
        ],
        ans: "D",
      },

      {
        id: 41,
        question: `Which of the following devices converts sound into electrical energy`,
        options: [
          `telephone earpiece`,
          `a microphone`,
          `a horn`,
          `an electric bell`,
        ],
        ans: "B",
      },

      {
        id: 42,
        question: `A bar magnet is moved through a coil of wire. On which of the following factors does thw induced emf depend?<br />
        I. The strength of the magnet<br />
        II. The speed of the magnet<br />
        III. The number of turns in the coil`,
        options: [
          `I only`,
          `III only`,
          `II and III only`,
          `I, II and III`,
        ],
        ans: "D",
      },

      {
        id: 43,
        question: `A bar magnet is placed close to and lying along the axis of a closed coil. There will be no current in the coil when`,
        options: [
          `both the coil and the magnet are held stationary`,
          `the coil is moved towards the stationary magnet`,
          `the coil is moved away from the stationary magnet`,
          `the magnet is moved away from the stationary coil`,
        ],
        ans: "A",
      },

      {
        id: 44,
        question: `A straight conducting wire carries current into the plane of the paper. The magnetic field due to the current-carrying conductor is`,
        options: [
          `parallel to the conductor and directed into the plane of the paper`,
          `parallel to the conductor and directed out of the plane of the paper`,
          `in the clockwise direction around a circular path enclosing the wire`,
          `in the counter-clockwise direction around a circular path enclosing the wire`,
        ],
        ans: "C",
      },

      {
        id: 47,
        question: `Which of the following methods can be used to increase the emf produced by a simple dynamo?<br />
        I. Increasing the speed of rotation of the coil<br />
        II. Using a longer field magnet<br />
        III. Increasing the cross-sectional area of the coil wire<br />
        IV. Increasing the number of coil windings`,
        options: [
          `I and III only`,
          `I and IV only`,
          `I, III, and IV only`,
          `I, II, III, and IV`,
        ],
        ans: "B",
      },
    ],
  },

  // 18. electrochemical effects
  {
    topic: "Electrochemical Effects",
    questions: [
      {
        id: 1,
        question: `Which of the following is not a component of a dry cell?`,
        options: [
          `carbon rod`,
          `paste of magnesium dioxide`,
          `zinc case`,
          `copper rod`
        ],
        ans: "D",
      },

      {
        id: 2,
        question: `The type of energy stored by a dry Leclanche cell is?`,
        options: [
          `electrical`,
          `chemical`,
          `nuclear`,
          `thermal`
        ],
        ans: "B",
      },

      {
        id: 3,
        question: `In a Leclanche cell, the role of granulated carbon mixed with manganese (IV) oxide is to<br />
        I. increase the emf of the cell<br />
        II. prevent local action in the cell<br />
        III. prevent polarization in the cell<br />
        IV. reducre the internal resistance of the cell<br />
        Which of the above is (are) correct?`,
        options: [
          `II only`,
          `III only`,
          `I and II only`,
          `III and IV only`
        ],
        ans: "D",
      },

      {
        id: 4,
        question: `In a simple cell, the zinc electrode is almagamated with mercury in order to prevent`,
        options: [
          `local action`,
          `polarization`,
          `overheating`,
          `corrosion`
        ],
        ans: "A",
      },

      {
        id: 5,
        question: `The presence of hydrogen bubbles around the copper plate of a primary cell results in<br />
        I. local action<br />
        II. increase in the cell's internal pressure<br />
        III. production of less current by the cell<br />
        IV. polarization<br />
        Which of the above statements are true`,
        options: [
          `I and II only`,
          `III and IV only`,
          `II, III and IV only`,
          `I, II and III only`
        ],
        ans: "C",
      },

      {
        id: 6,
        question: `Which of the following cells convert(s) light energy to electrical energy<br />
        I. Leclanche cell <br />
        II. photocell<br/>
        III. Daniel cell<br />
        IV. Solar cell`,
        options: [
          `I only`,
          `IV only`,
          `I and III only`,
          `II and IV only`
        ],
        ans: "D",
      },

      {
        id: 7,
        question: `A light bulb is connected to a simple voltaic cell. When the circuit is closed the bulb glows brightly for a short while and then becomes dim. This is because`,
        options: [
          `hydrogen gas is produced at the cathode`,
          `hydrogen bubbles accumulate on the anode`,
          `copper sulfate is formed in the solution`,
          `the filament of the bulb gradually burns out`
        ],
        ans: "B",
      },

      {
        id: 8,
        question: `The container in which electrolysis takes place is called`,
        options: [
          `a voltmeter`,
          `an electrolyte`,
          `a voltameter`,
          `a voltaic cell`
        ],
        ans: "C",
      },

      {
        id: 9,
        question: `In an electrolyte through which no current is passing`,
        options: [
          `the ions move randomly`,
          `the ions remain at rest`,
          `positive and negative ions move in opposite directions`,
          `there are no ions present`
        ],
        ans: "A",
      },

      {
        id: 10,
        question: `Which of the underlisted factors determine the emf of a voltaic cell?<br />
        I. Quality of the electrolyte<br />
        II. Type of electrodes<br />
        III. Dimensions of the cell`,
        options: [
          `I only`,
          `II only`,
          `II and III only`,
          `I, II and III`
        ],
        ans: "B",
      },

      {
        id: 11,
        question: `The depolarization agent in a Leclanche cell is the`,
        options: [
          `carbon rod`,
          `ammonium chloride`,
          `manganese dioxide`,
          `powdered carbon`
        ],
        ans: "C",
      },

      {
        id: 13,
        question: `When a storage cell is re-charged`,
        options: [
          `chemical energy is converted into heat energy`,
          `heat energy is converted into chemical energy`,
          `chemical energy is converted into electrical energy`,
          `electrical energy is converted into chemical energy`
        ],
        ans: "D",
      },

      {
        id: 14,
        question: `An accumulator is rated in the unit of ampere-hour. This is equivalent to the unit of`,
        options: [
          `power`,
          `energy`,
          `potential difference`,
          `charge`
        ],
        ans: "D",
      },

      {
        id: 15,
        question: `The internal resistance of a cell depends on<br />
        I. the cell's dimensions<br />
        II. the arrangement of the electrodes<br />
        III. the quantity of the electrolyte<br />
        IV. the conductivity of the electrolyte<br />
        Which of the above are true?`,
        options: [
          `I and III only`,
          `II and IV only`,
          `I, II and IV only`,
          `I, II, III, and IV`
        ],
        ans: "D",
      },

      {
        id: 16,
        question: `A metal has an electrochemical equivalent of 0.12 ${times} ${exp(-4)} ${units("kg/C")}. The mass of the metal that will be deposited by a current of 10 A in 1 hour is`,
        options: [
          `4.32 g`,
          `3.00 g`,
          `0.43 g`,
          `0.30 g`
        ],
        ans: "A",
      },

      {
        id: 17,
        question: `1 g of copper is liberated by a charge flow of ${exp(3)}C in a voltameter. In order to liberate 7.2 g of copper in the same voltameter, a current of 2 A should be maintained for`,
        options: [
          `6 min`,
          `30 min`,
          `60 min`,
          `120 min`
        ],
        ans: "C",
      },

      {
        id: 18,
        question: `In an experiment to determine the electrochemical equivalent of a metal X, a cathode of mass 50 g weighs 50.3 g after a current of 5 A had been passed through the electrolyte for 20 minutes. The electrochemical equivalent of X is`,
        options: [
          `5 ${times} ${exp(-4)}g/C`,
          `5 ${times} ${exp(-5)}g/C`,
          `3 ${times} ${exp(-4)}g/C`,
          `3 ${times} ${exp(-3)}g/C`,
        ],
        ans: "B",
      },

      {
        id: 19,
        question: `Electricity is conducted through a salt-water electrolyte by`,
        options: [
          `atoms`,
          `free electrons`,
          `salt molecules`,
          `ions`,
        ],
        ans: "D",
      },

      {
        id: 20,
        question: `Silver has an electrochemical equivalent of 1.2 ${times} ${exp(-3)}g/C. To deposit 18 g of silver in 25 minutes in a voltameter, the current required is`,
        options: [
          `1 A`,
          `5 A`,
          `10 A`,
          `100 A`,
        ],
        ans: "C",
      },

      {
        id: 21,
        question: `A metal M has an electrochemical equivalent of 5 ${times} ${exp(-7)}kg/C. To plate out 180 g of the metal, a current of 20 A must be maintained in an appropriate voltameter for`,
        options: [
          `0.5 h`,
          `1.0 h`,
          `5.0 h`,
          `10.0 h`,
        ],
        ans: "C",
      },

      {
        id: 22,
        question: `Copper of density ${exp(4)} ${units("g/cm",3)} and electrochemical equivalent 3.3 ${times} ${exp(-4)} g/C is to be plated on the cathode of a voltameter. If the total surface area of the cathode is 66 ${units("cm",2)} and a current of 50 A is maintained for 1 hour, the thickness of copper plated will be approximately`,
        options: [
          `1.80 ${micro}m`,
          `0.90 ${micro}m`,
          `0.18 ${micro}m`,
          `0.09 ${micro}m`,
        ],
        ans: "B",
      },

      {
        id: 23,
        question: `The electrochemical equivalent of a metal Y is specified as 1.1 ${times} ${exp(-4)} ${units("kgC",-1)}. This means that during electrolysis, 1.1 ${times} ${exp(-4)} kg of Y will be deposited on the cathode`,
        options: [
          `by a current of 1 A`,
          `in 1 s`,
          `by a current of 1 A through the electrolyte for 1 h`,
          `by a current of 1 A passing through the electrolyte for 1 s`,
        ],
        ans: "D",
      },

      {
        id: 24,
        question: `A 60 Ah uncharged car battery is to be re-charged using a current of 12 A. The time required for the battery to acquire a full charge is`,
        options: [
          `5 h`,
          `12 h`,
          `60 h`,
          `720 h`,
        ],
        ans: "A",
      },

      {
        id: 25,
        question: `Which of the following are true of a discharge tube?<br />
        I. The tube must have two electrodes, one at each end<br />
        II. The potential difference between the electrodes must be very low<br />
        III. The pressure of the gas must be very low<br />
        IV. The gas in the tube must be air`,
        options: [
          `I and II only`,
          `I and III only`,
          `I, II and IV only`,
          `I, II, III and IV`,
        ],
        ans: "B",
      },

      {
        id: 26,
        question: `Which of the following is not true of a discharge tube?`,
        options: [
          `The glass tube must be very long`,
          `The characteristic light produced can be used to study the structure of the atoms and molecules of the gas`,
          `The gas pressure must be somewhat less than atmospheric pressure`,
          `it is used to obtain light of different colors`,
        ],
        ans: "C",
      },
    ],
  },

  // 19. alternating currents
  {
    topic: "Alternating Currents",
    questions: [
      {
        id: 3,
        question: `The rms current I<sub>rms</sub> and the peak current I<sub>o</sub> in alternating currents are related according to`,
        options: [
          `I<sub>rms</sub> = 1/I<sub>o</sub>${sqrt}2`,
          `I<sub>o</sub> = 1/I<sub>rms</sub>${sqrt}2`,
          `I<sub>rms</sub> = I<sub>o</sub>/${sqrt}2`,
          `I<sub>o</sub> = I<sub>rms</sub>/${sqrt}2`
        ],
        ans: "C",
      },

      {
        id: 4,
        question: `The peak voltage of a 110 V rms mains supply is`,
        options: [
          `220 V`,
          `156 V`,
          `120 V`,
          `110 V`
        ],
        ans: "B",
      },

      {
        id: 5,
        question: `The peak value of the p.d in an AC circuit is 240 V. The instantaneous p.d at 1/8th of a cycle is`,
        options: [
          `240${sqrt}2 V`,
          `120${sqrt}2 V`,
          `120 V`,
          `60 V`
        ],
        ans: "B",
      },

      {
        id: 7,
        question: `The units of inductance and reactance are respectively`,
        options: [
          `farad and henry`,
          `henry and farad`,
          `ohm and henry`,
          `henry and ohm`
        ],
        ans: "D",
      },

      {
        id: 8,
        question: `An inductor of inductance 10 mH having negligible resistance is connected to a 1.5 ${times} ${exp(3)} Hz osscilator. The inductive reactance is`,
        options: [
          `188.5 ${ohm}`,
          `94.3 ${ohm}`,
          `42.4 ${ohm}`,
          `30.0 ${ohm}`,
        ],
        ans: "B",
      },

      {
        id: 17,
        question: `The resistance in a series R-C circuit is 15 ${ohm}. If the impedance of the circuit is 25 ${ohm}. the reactance of the capacitor is`,
        options: [
          `40 ${ohm}`,
          `25 ${ohm}`,
          `20 ${ohm}`,
          `10 ${ohm}`,
        ],
        ans: "C",
      },

      {
        id: 18,
        question: `A coil of resistance 30 ${ohm} is connected to a 100 V, 50/${pi} Hz AC source. If the coil draws an rms current of 2 A, its inductance is`,
        options: [
          `0.4 H`,
          `0.6 H`,
          `1.25 H`,
          `2.50 H`,
        ],
        ans: "A",
      },

      {
        id: 19,
        question: `In a series R-L-C circuit, the current indicated by the ammeter is I. If X<sub>L</sub> and X<sub>C</sub> are the inductive and capacitive reactances respectively while R is the resistance, the power consumed in the circuit is`,
        options: [
          `I<sup>2</sup>${sqrt}R<sup>2</sup>+(X<sub>L</sub>-X<sub>C</sub>)<sup>2</sup>`,
          `I<sup>2</sup>${sqrt}R<sup>2</sup>+X<sub>L</sub><sup>2</sup>-X<sub>C</sub><sup>2</sup>`,
          `I<sup>2</sup>(R+X<sub>L</sub>-X<sub>C</sub>)`,
          `I<sup>2</sup>R`,
        ],
        ans: "D",
      },

      {
        id: 24,
        question: `The inductance and capacitance are 0.25 H and 2.5 ${micro}F respectively in a series R-L-C circuit. The resonance frequency of the circuit is`,
        options: [
          `500/${pi} Hz`,
          `250/${pi} Hz`,
          `200/${pi} Hz`,
          `100/${pi} Hz`,
        ],
        ans: "C",
      },

      {
        id: 26,
        question: `The back emf induced in a current-carrying coil causes`,
        options: [
          `resistance`,
          `inductance`,
          `eddy currents`,
          `resonance`,
        ],
        ans: "B",
      },

      {
        id: 27,
        question: `The heat generated when an alternating current of peak value 10 A passes through a resistor of 4 ${ohm} for 30 seconds is`,
        options: [
          `24,000 J`,
          `12,000 J`,
          `6,000 J`,
          `3,000 J`,
        ],
        ans: "C",
      },

      {
        id: 28,
        question: `An electric motor powered by a 110 V rms supply draws a current of 8 A. The motor is used to lift a mass of 50 kg through a vertical distance of 5.5 m in 5 s. If g = 10 ${units("ms",-2)} the efficiency of the motor is`,
        options: [
          `80.0 %`,
          `62.5 %`,
          `8.0 %`,
          `6.3 %`,
        ],
        ans: "B",
      },

      {
        id: 29,
        question: `A motor whose output is 5.0 kW is used to drive a generator which delivers an rms current of 18 A at a terminal voltage of 250 V. The efficiency of the generator is`,
        options: [
          `22.5 %`,
          `45.0 %`,
          `80.0 %`,
          `90.0 %`,
        ],
        ans: "D",
      },

      {
        id: 30,
        question: `The primary to secondary transformation ratio in a transformer is 2 : 5. If the voltage across the primary is 10 kV, the voltage across the secondary is`,
        options: [
          `4 kV`,
          `5 kV`,
          `25 kV`,
          `50 kV`,
        ],
        ans: "C",
      },

      {
        id: 32,
        question: `A transformer having 500 turns in its primary coil is connected between a 200 V mains supply and a door-bell rated at 10 V. The number of turns in its secondary is`,
        options: [
          `25`,
          `100`,
          `5,000`,
          `10,000`,
        ],
        ans: "A",
      },

      {
        id: 33,
        question: `Which of the following is associated with alternating currents only`,
        options: [
          `A moving-coil galvanometer`,
          `A transformer`,
          `A lead-acid accumulator`,
          `An induction coil`,
        ],
        ans: "B",
      },
    ],
  },

  // 20. elementary atomic physics
  {
    topic: "Elementary Atomic Physics",
    questions: [
      {
        id: 1,
        question: `In addition to a neutron, which of the following particles also exists in the nucleus`,
        options: [
          `An electron`,
          `An ${alpha} particle`,
          `A ${beta} particle`,
          `A proton`
        ],
        ans: "D",
      },

      {
        id: 2,
        question: `The number of neutrons in the uranium isotope ${isotope(238, 92, "X")} is`,
        options: [
          `330`,
          `238`,
          `146`,
          `92`
        ],
        ans: "C",
      },

      {
        id: 3,
        question: `An atom which loses or gains a charge becomes`,
        options: [
          `a neutron`,
          `an ion`,
          `an electron`,
          `a proton`
        ],
        ans: "B",
      },

      {
        id: 4,
        question: `The symbolic representation for an atom X with 33 electrons and 42 neutrons is`,
        options: [
          `${isotope(42, 9, "X")}`,
          `${isotope(42, 33, "X")}`,
          `${isotope(75, 42, "X")}`,
          `${isotope(75, 33, "X")}`,
        ],
        ans: "D",
      },

      {
        id: 5,
        question: `The kinetic energy of a photoelectron ejected from a metal surface illuminated with radiation depends on the<br />
        I. wavelength of the radiation<br />
        II. intensity of the radiation<br />
        III. source of the radiation<br />
        IV. nature of the surface<br />
        Which of the above statement is(are) correct`,
        options: [
          `I only`,
          `I and IV only`,
          `II and III only`,
          `I, II and IV only`,
        ],
        ans: "B",
      },

      {
        id: 6,
        question: `The number of photoelectrons emitted from a metal surface depends on the`,
        options: [
          `intensity of radiation`,
          `nature of the metal surface`,
          `source of radiation`,
          `duration of radiation`,
        ],
        ans: "A",
      },

      {
        id: 7,
        question: `A beam of light falls on a metallic surface. The maximum kinetic energy of the photoelectrons depends on the`,
        options: [
          `area of the metal surface`,
          `color of the light`,
          `intensity of the light`,
          `duration of exposure to the light`,
        ],
        ans: "B",
      },

      {
        id: 8,
        question: `The threshold frequency for photoelectric effect depends on the`,
        options: [
          `frequency of incident light`,
          `intensity of incident light`,
          `p.d between the cathode and the anode`,
          `material of the photocathode`,
        ],
        ans: "D",
      },

      {
        id: 9,
        question: `A metal having a work function of 5.76 eV is illuminated with a radiation of 7.88 eV. The kinetic energy of the electrons emitted from the metal surface is`,
        options: [
          `2.12 eV`,
          `4.24 eV`,
          `6.82 eV`,
          `13.64 eV`,
        ],
        ans: "A",
      },

      {
        id: 10,
        question: `Ultraviolet light has a wavelength of 400 nm. If the speed of light in air is 3 ${times} ${exp(8)} ${units("ms",-1)}, the frequency of ultraviolet radiation is`,
        options: [
          `7.5 ${times} ${exp(14)} Hz`,
          `1.2 ${times} ${exp(11)} Hz`,
          `7.5 ${times} ${exp(5)} Hz`,
          `1.3 ${times} ${exp(-15)} Hz`,
        ],
        ans: "A",
      },

      {
        id: 11,
        question: `The energy associated with an x-ray of wavelength 9.0 ${times} ${exp(-10)} m is [Planck's constant = 6.6 ${exp(-34)} Js, velocity of light = 3.0 ${times} ${exp(8)} ${velocity}]`,
        options: [
          `2.2 ${times} ${exp(-12)} J`,
          `2.2 ${times} ${exp(-16)} J`,
          `1.1 ${times} ${exp(-16)} J`,
          `2.2 ${times} ${exp(-24)} J`,
        ],
        ans: "B",
      },

      {
        id: 12,
        question: `The threshold frequency for a metal surface is 3.0 ${times} ${exp(14)} Hz. If h = 6.6 ${times} ${exp(-34)} Js, the work function for the surface is`,
        options: [
          `4.54 ${times} ${exp(48)} J`,
          `3.00 ${times} ${exp(14)} J`,
          `1.98 ${times} ${exp(-19)} J`,
          `2.20 ${times} ${exp(-48)} J`,
        ],
        ans: "C",
      },

      {
        id: 13,
        question: `A metal has a work function of 4.4 ${times} ${exp(-19)} J. If the speed of light in vacuum is 3.0 ${times} ${exp(8)} ${velocity} and Planck's constant is 6.6 ${times} ${exp(-34)} Js, the wavelength of its threshold frequency is`,
        options: [
          `5.0 ${times} ${exp(-34)} m`,
          `4.5 ${times} ${exp(-7)} m`,
          `9.0 ${times} ${exp(-7)} J`,
          `2.0 ${times} ${exp(23)} J`,
        ],
        ans: "B",
      },

      {
        id: 14,
        question: `An electron is accelerated from rest through a potential difference of 18.2 kV in vacuum. If electric charge = 1.6 ${times} ${exp(-19)} C and mass of electron = 9.1 ${times} ${exp(-31)} kg, the maximum speed acquired by the electron is`,
        options: [
          `4.00 ${times} ${exp(7)} ${velocity}`,
          `5.66 ${times} ${exp(7)} ${velocity}`,
          `8.00 ${times} ${exp(7)} ${velocity}`,
          `1.13 ${times} ${exp(8)} ${velocity}`,
        ],
        ans: "C",
      },

      {
        id: 15,
        question: `In which of the following is the principle of photoelectric effect put into use?<br />
        I. Photographic light waves>br />
        II. Activation of automatic doors<br />
        III. Setting off of burglary alarms<br />
        IV. Production of second from film tracks`,
        options: [
          `I and II only`,
          `III and IV only`,
          `I, II and III only`,
          `I, II, III and IV`,
        ],
        ans: "D",
      },

      {
        id: 16,
        question: `Cathode rays<br />
        I. consist of tiny particles bearing negative electric charges<br />
        II. Consist of fast-moving protons and are defined in a magnetic field<br />
        III. are deflected in an electric field but not in a magnetic field<br />
        IV. can cause the emission of x-rays on hitting a metal target<br />
        Which of the above statements are correct?`,
        options: [
          `I and II only`,
          `III and IV only`,
          `I and IV only`,
          `II and III only`,
        ],
        ans: "C",
      },

      {
        id: 17,
        question: `An atom in the ground state is said to be`,
        options: [
          `grounded`,
          `ionized`,
          `excited`,
          `stable`,
        ],
        ans: "D",
      },

      {
        id: 18,
        question: `Bright spectral lines obtained from atoms are due to`,
        options: [
          `the kinetic energy of a moving atom`,
          `the potential energy of an electron inside the atom`,
          `the drop of an electron from a higher to a lower energy level in the atom`,
          `the excitation of an electron from a lower to a higher energy level in the atom`,
        ],
        ans: "C",
      },

      {
        id: 19,
        question: `6.0 ${times} ${exp(-19)} J of energy is radiated by an atom as an electron jumps from one level to another within the atom. If Planck's constant is 6.6 ${times} ${exp(-34)} Js and the speed of light in vacuum is 3.0 ${times} ${exp(8)} ${velocity}, the wavelength of the emitted radiation is`,
        options: [
          `1.65 ${times} ${exp(-7)} m`,
          `3.30 ${times} ${exp(-7)} m`,
          `6.60 ${times} ${exp(-7)} m`,
          `1.32 ${times} ${exp(-6)} m`,
        ],
        ans: "B",
      },

      {
        id: 20,
        question: `Of the underlisted elements, the best absorber of x-rays is`,
        options: [
          `Lead`,
          `Copper`,
          `Calcium`,
          `Hydrogen`,
        ],
        ans: "A",
      },

      {
        id: 21,
        question: `X-rays cannot be used`,
        options: [
          `to take photograph of bone structure in the body`,
          `to detect finger prints`,
          `to detect flaws in metal castings`,
          `to detect alterations to works of art`,
        ],
        ans: "B",
      },

      {
        id: 22,
        question: `The one which is fundamentally different from the others in the following list is`,
        options: [
          `x-rays`,
          `${gamma}-rays`,
          `infra-red rays`,
          `cathode rays`,
        ],
        ans: "D",
      },

      {
        id: 23,
        question: `The following are emitted in natural radioactivity`,
        options: [
          `${alpha}-particles and ${beta}-rays only`,
          `${alpha}-particles, ${beta}-rays and x-rays`,
          `${alpha}-particles, ${beta}-rays and ${gamma}-rays`,
          `${alpha}-particles, ${beta}-rays, ${gamma}-rays and x-rays`,
        ],
        ans: "C",
      },

      {
        id: 24,
        question: `Of the following types of radiation, the one that does not originate from the nucleus is`,
        options: [
          `alpha`,
          `beta`,
          `gamma`,
          `x-rays`,
        ],
        ans: "D",
      },

      {
        id: 25,
        question: `Which of the following radiations cannot be deflected by an electric field or a magnetic field?<br >
        I. ${alpha}-rays<br />
        II. ${beta}-rays<br />
        III. ${gamma}-rays<br />
        IV. x-rays`,
        options: [
          `I and II only`,
          `III and IV only`,
          `I and III only`,
          `II and IV only`,
        ],
        ans: "B",
      },

      {
        id: 26,
        question: `Which of the radiations below is most strongly deflected by a magnetic field<br />
        I. ${alpha}-rays<br />
        II. ${beta}-rays<br />
        III. ${gamma}-rays<br />
        IV. x-rays`,
        options: [
          `I`,
          `II`,
          `III`,
          `IV`,
        ],
        ans: "B",
      },

      {
        id: 27,
        question: `Which of the following particles may be found in light nuclei<br />
        I protons <br />
        II neutrons <br />
        III ${alpha}-rays<br />
        IV ${beta}-rays<br />`,
        options: [
          `I and II only`,
          `III and IV only`,
          `I and III only`,
          `II and IV only`,
        ],
        ans: "A",
      },

      {
        id: 29,
        question: `Which of the following radiations will pass through a sheet of paper?<br />
        I Alpha rays <br />
        II Beta rays <br />
        III Gamma rays<br />`,
        options: [
          `I only`,
          `II only`,
          `III only`,
          `II and III only`,
        ],
        ans: "D",
      },

      {
        id: 30,
        question: `A radioactive sample initially contains n atoms. The number of atoms that would have disintegrated after four half-lives is`,
        options: [
          `n/16`,
          `n/8`,
          `7n/8`,
          `15n/16`,
        ],
        ans: "D",
      },

      {
        id: 32,
        question: `An atom of ${isotope(238, 92, "U")} undergoes eight ${alpha}-decays and six ${beta}-decays. The final product has atomic and nucleon nucleon numbers of`,
        options: [
          `70, 206`,
          `78, 222`,
          `82, 206`,
          `82, 222`,
        ],
        ans: "C",
      },

      {
        id: 33,
        question: `A substance with a half-life of 5 minutes has a count rate of 500 after 15 minutes. The count rate at zero time was`,
        options: [
          `8,000`,
          `4,000`,
          `2,000`,
          `250`,
        ],
        ans: "B",
      },

      {
        id: 35,
        question: `A radioactive material has an initial activity of 7000 counts per second and an activity of 875 counts per second after 6 hours. The half-life of the material is`,
        options: [
          `6 hr`,
          `3 hr`,
          `2 hr`,
          `1 hr`,
        ],
        ans: "C",
      },

      {
        id: 34,
        question: `A radioactive substance of initial mass 8 g has a half-life of 10 days. 7 g of the substance would have disintegrated after`,
        options: [
          `30 days`,
          `20 days`,
          `5 days`,
          `2.5 days`,
        ],
        ans: "A",
      },

      {
        id: 36,
        question: `A sample of half-life 5 years presently weighs w newtons. Its weight in newtons 20 years ago was`,
        options: [
          `20w`,
          `16w`,
          `8w`,
          `4w`,
        ],
        ans: "B",
      },

      {
        id: 37,
        question: `${isotope(238, 92, 'U')} undergoes an alpha decay to become thorium. The proton and nucleon numbers of thorium are respectively`,
        options: [
          `92, 237`,
          `92, 235`,
          `90, 238`,
          `90, 234`,
        ],
        ans: "D",
      },

      {
        id: 38,
        question: `A nucleus ${isotope(3,2,"He")} is formed by the decay of the nucleus ${isotope(3,1,"H")}. The decay is accompanied by the emission of`,
        options: [
          `an alpha particle`,
          `a beta particle`,
          `a gamma particle`,
          `a neutron`,
        ],
        ans: "B"
      },

      {
        id: 39,
        question: `The equation ${isotope(140, 54, "X")} -> ${isotope(140, 53, "Y")} + k + energy represents`,
        options: [
          `${alpha}-decay`,
          `${beta}-decay`,
          `${gamma}-decay`,
          `photon emission`,
        ],
        ans: "B",
      },

      {
        id: 40,
        question: `Two radioactive elements P and Q initially have the same mass. If their half-lives are 10 and 5 years, the ratio of their masses (i.e P:Q) after 20 years is`,
        options: [
          `4 : 1`,
          `2 : 1`,
          `1 : 2`,
          `1 : 4`,
        ],
        ans: "A",
      },

      {
        id: 41,
        question: `In the nuclear reaction ${isotope(27,13,"Al")} + ${isotope(1,0,"n")}->${isotope(24,11,"Na")} + X, the product denoted by X is`,
        options: [
          `a proton`,
          `a neutron`,
          `an alpha particle`,
          `a gamma ray`,
        ],
        ans: "C",
      },

      {
        id: 42,
        question: `An element X of atomic number 92 and nucleon number 238 emits an ${alpha}-particle, a ${beta}-particle and ${gamma}-rays. The respective proton and nucleon numbers of the new element formed are`,
        options: [
          `92, 234`,
          `91, 234`,
          `90, 234`,
          `89, 232`,
        ],
        ans: "B",
      },

      {
        id: 43,
        question: `A radioactive element of decay constant ${lambda} has a half-life of`,
        options: [
          `ln 2/ ${lambda}<sup>2</sup>`,
          `-ln 2/ ${lambda}<sup>2</sup>`,
          `ln 2 / ${lambda}`,
          `2 ln 2/${lambda}<sup>2</sup>`,
        ],
        ans: "C",
      },

      {
        id: 44,
        question: `A radioactive substance with a half-life of 5 s has a decay constant of`,
        options: [
          `0.693 ${units("s",-1)}`,
          `0.347 ${units("s",-1)}`,
          `0.218 ${units("s",-1)}`,
          `0.319 ${units("s",-1)}`,
        ],
        ans: "D",
      },

      {
        id: 45,
        question: `A deuterium (${isotope(2,1,"H")}) nucleus fuses with a tritium (${isotope(3,1,"H")}) nucleus to produce an ${alpha}-particle and a second product X which is`,
        options: [
          `a proton`,
          `an electron`,
          `a neutron`,
          `a gamma ray`,
        ],
        ans: "C",
      },

      {
        id: 46,
        question: `What type of reaction is represented by the equation ${isotope(2,1,"X")} + ${isotope(2,1,"X")} -> ${isotope(3,2,"Y")} + ${isotope(1,0,"n")} + energy ?`,
        options: [
          `Fusion`,
          `Fission`,
          `Chain`,
          `Ionization`,
        ],
        ans: "A",
      },

      {
        id: 47,
        question: `If four protons each of mass M<sub>p</sub> are fused to produce a nucleus X of mass M<sub>x</sub> in a nuclear fission process, then`,
        options: [
          `M<sub>p</sub> = M<sub>x</sub>`,
          `4M<sub>p</sub> > M<sub>x</sub>`,
          `4M<sub>p</sub> < M<sub>x</sub>`,
          `4M<sub>p</sub> = M<sub>x</sub>`,
        ],
        ans: "B",
      },

      {
        id: 48,
        question: `The process by which protons are converted into helium atoms with a tremendous release of energy is called`,
        options: [
          `thermionic emission`,
          `nuclear fission`,
          `thermonuclear fusion`,
          `photoelectric emission`,
        ],
        ans: "C",
      },

      {
        id: 49,
        question: `Which of the following is not a product of nuclear fission`,
        options: [
          `x-ray`,
          `${gamma}-ray`,
          `${alpha}-particle`,
          `neutron`,
        ],
        ans: "A",
      },

      {
        id: 50,
        question: `A uranium nucleus splits into two fragments of nearly equal masses. The total mass of the fragments is less than the mass of the original nucleus. The difference in masses is accounted for by the`,
        options: [
          `potential energy lost`,
          `kinetic energy lost`,
          `nuclear energy released`,
          `experimental error in the measurement of the masses`,
        ],
        ans: "C",
      },

      {
        id: 51,
        question: `Which of the following is used to slow fast-moving neutrons in a nuclear reactor?`,
        options: [
          `Concrete shield`,
          `Carbon dioxide gas`,
          `Boron rods`,
          `Graphite block`,
        ],
        ans: "D",
      },

      {
        id: 52,
        question: `Which of the following is used to shield radiation fallouts?`,
        options: [
          `Lead`,
          `Wood`,
          `Plastic`,
          `Aluminium`,
        ],
        ans: "A",
      },

      {
        id: 53,
        question: `In the radioactive series<br />
        ${isotope(235, 92, "W")} -> ${isotope(235, 93, "X")} -> ${isotope(231, 91, "Y")} -> ${isotope(231, 92, "Z")}<br />
        the particles emitted are respectively`,
        options: [
          `${alpha},  ${alpha}, ${beta}`,
          `${alpha}, ${beta}, ${alpha}`,
          `${beta}, ${beta}, ${alpha}`,
          `${beta}, ${alpha}, ${beta}`,
        ],
        ans: "D",
      },

      // to be completed later...
    ],
  },

  // model 1
  {
    topic: "Model examination 1",
    questions: [
      {
        id: 1,
        question:
          "The expression M<sup>a</sup>L<sup>b</sup>T<sup>c</sup>, when a = 1, b = 2 and c = -2 is the dimension of",
        options: [`Force`, `Energy`, `Acceleration`, `Power`],
        ans: "B",
      },
      {
        id: 2,
        question:
          "The most suitable instrument for measuring the diameter of a thin wire accurately is",
        options: [
          `a metre rule`,
          `a pair of vernier callipers`,
          `a micrometer screw gauge`,
          `a ruler`,
        ],
        ans: "C",
      },
      {
        id: 3,
        question:
          "A body accelerated uniformly from rest covers a distance of 8 m in 2 seconds. The distance covered in the third second is",
        options: [`18 m`, `12 m`, `10 m`, `4 m`],
        ans: "C",
      },
      {
        id: 4,
        question:
          "A stone P of mass 20 g is projected horizontally from a tall building. At the same instant, a second stone Q of mass 40 g is dropped from the same position so that it falls freely under gravity. Neglecting air resistance,",
        options: [
          `P will reach the ground first because it has a smaller mass`,
          `Q will reach the ground first because it has a bigger mass`,
          `Q will reach the ground first because it has no horizontal component of motion`,
          `Both P and Q will reach the ground at the same instant`,
        ],
        ans: "D",
      },
      {
        id: 5,
        question:
          "A crate which is pulled up a smooth inclined plane with a force F moves up the plane with an acceleration of a, if F is doubled, the accleration",
        options: [
          `is doubled`,
          `remains the same`,
          `is more than doubled`,
          `is less than doubled`,
        ],
        ans: "C",
      },
      {
        id: 6,
        question:
          "A simple pendulum makes 90 oscillations in one minute on the earth's surface. The number of oscillations per minute which the same pendulum will execute at an altitude where the acceleration due to gravity is 81 percent of its value on earth is",
        options: [`73`, `81`, `100`, `111`],
        ans: "B",
      },
      {
        id: 8,
        question:
          "A horizontal force of 12 N is applied to a body of mass 10 kg which rests on a horizontal surface of coefficient of friction 0.1. The body will",
        options: [
          `accelerate`,
          `remain at rest`,
          `move with uniform speed`,
          `first accelerate, and then move with uniform speed`,
        ],
        ans: "A",
      },
      {
        id: 9,
        question:
          "A lift of weight 30 kN moves upwards through height of 20 m. If 25% of the work done on the lift is used in overcoming friction, the work done is",
        options: [
          `4.5 &times;${exp(5)} J`,
          `6.0 &times;${exp(5)} J`,
          `7.5 &times;${exp(5)} J`,
          `8.0 &times;${exp(5)} J`,
        ],
        ans: "D",
      },
      {
        id: 10,
        question:
          "Two masses separated by a distance d attract each other with a gravitational force of 12 N. If the separation between the mass is reduced to d/2, the gravitational force will",
        options: [
          `increase to 48 N`,
          `increase to 24 N`,
          `decrease to 6 N`,
          `decrease to 3 N`,
        ],
        ans: "A",
      },
      {
        id: 11,
        question:
          "A weight of 500 N is pushed up a platform inclined at 30&deg; to the horizontal. If the efficiency of the plane is 60%, the effort needed to push the weight up the platform is",
        options: [`300 N`, `417 N`, `833 N`, `1,667 N`],
        ans: "B",
      },
      {
        id: 12,
        question: `A metal rod of diameter 7 mm and length 100 mm is made from steel of Young's modulus 2 &times;${exp(
          11
        )} ${units("Nm", -2)}. The force constant for the rod is`,
        options: [
          `7.7 &times;${exp(7)} ${units("Nm", -1)}`,
          `3.5 &times;${exp(7)} ${units("Nm", -1)}`,
          `2.8 &times;${exp(7)} ${units("Nm", -1)}`,
          `7.7 &times;${exp(6)} ${units("Nm", -1)}`,
        ],
        ans: "A",
      },
      {
        id: 13,
        question: `The pressure on a diver is 1.5 &times;${exp(7)} ${units(
          "Nm",
          -1
        )}. Taking the density of water as ${exp(3)} ${units(
          "kgm",
          -3
        )}, the depth of the diver below the water surface is`,
        options: [`150 m`, `200 m`, `1500 m`, `15,000 m`],
        ans: "C",
      },
      {
        id: 14,
        question: `An object floats in water with 90% of its volume submerged and in a liquid L with 60% of its volume submerged. The relative density of L is`,
        options: [`0.54`, `0.67`, `1.20`, `1.50`],
        ans: "D",
      },
      {
        id: 15,
        question: `The net downward force on a metal ball falling through a liquid at the terminal velocity is`,
        options: [`zero`, `its weight`, `the viscous force`, `the upthrust`],
        ans: "A",
      },
      {
        id: 16,
        question: `A change in temperature of 45&deg;C is equivalent to a change in temperature on the Kelvin scale of`,
        options: [`25 K`, `45 K`, `81 K`, `318 K`],
        ans: "B",
      },
      {
        id: 17,
        question: `One advantage of alcohol over mercury as a thermometeric fluid is that alcohol`,
        options: [
          `expands more uniformly than mercury`,
          `is a better conductor of heat than mercury`,
          `has a lower freezing point than mercury`,
          `has a lower specific heat capacity`,
        ],
        ans: "C",
      },
      {
        id: 18,
        question: `As water is cooled from 10&deg;C to 2&deg;C, its density`,
        options: [
          `increases`,
          `decrease`,
          `first decreases then increases`,
          `first increases and then decreases`,
        ],
        ans: "D",
      },
      {
        id: 19,
        question: `A metal ring of diameter 2.0000 cm is to fitted on a rod of diameter 2.0002 cm by heating the ring through a temperature rise of  &theta;. If the coefficient of linear expansion of the metal is 1.25 &times; ${exp(
          -5
        )} ${units("K", -1)}, the minimum value of  &theta; is`,
        options: [`4&deg;C`, `8&deg;C`, `16&deg;C`, `25&deg;C`],
        ans: "B",
      },
      {
        id: 20,
        question: `Ice at 0&deg;C is added to 10 kg of water at 50&deg;C. If the final temperature of the water is 30&deg;C, the mass of the ice added is <br />
          Specific heat capacit of water = 4 200 ${units(
            "Jkg",
            -1,
            "&deg;C",
            -1
          )} and <br />
        Specific latent heat of fusion of ice = 336,000${units("Jkg", -1)}`,
        options: [`1.8 kg`, `2.7 kg`, `4.5 kg`, `6.7 kg`],
        ans: "A",
      },
      {
        id: 22,
        question: `When water condenses on the surface of a cup of cold water placed on a table, the temperature of the surrounding air`,
        options: [
          `decreases slightly`,
          `increases slightly`,
          `remains unchanged`,
          `first decreases and then increases`,
        ],
        ans: "B",
      },
      {
        id: 23,
        question: `Which of the following emit(s) radiant heat energy? <br />
          I. A forest fire<br />
          II. The human body<br />
          III. Ice cubes placed on a table<br />
          IV. The walls of a room`,
        options: [
          `I only`,
          `I and II only`,
          `I, II, and IV only`,
          `I, II, III, and IV`,
        ],
        ans: "D",
      },
      {
        id: 24,
        question: `A fixed mass of gas is compressed isothermally until its volume is appreciably reduced. Which of the following statements is (are) correct about the gas?<br />
          I. The average kinetic energy of its molecules is increased<br />
          II. The rate of molecular collisions is increased<br />
          III. The average inter-molecular spacing is reduced`,
        options: [
          `II only`,
          `I and II only`,
          `II, and III only`,
          `I, II, and III`,
        ],
        ans: "C",
      },
      {
        id: 26,
        question: `A wave is represented by the equatin y = 0.10sin(5&pi;x - 300t), where x and y are in m, and t is in s. The frequency of the wave is`,
        options: [`30/&pi; Hz`, `60/&pi; Hz`, `150/&pi; Hz`, `300/&pi; Hz`],
        ans: "C",
      },
      {
        id: 27,
        question: `A student attempts to estimate the speed of sound in air by dropping a stone into an 80 m deep well. He heard the sound of the stone's splash in the water 4.25 s after its release. If g = 10 ${units(
          "ms",
          -2
        )}, the estimated speed of sound in air in ${units("ms", -1)} is`,
        options: [`320`, `330`, `335`, `340`],
        ans: "A",
      },
      {
        id: 28,
        question: `The speed of sound is independent of the<br />
          I. temperature<br />
          II. pressure<br />
          III. transmitting medium<br />
          Which of the above is(are) correct`,
        options: [`I only`, `II only`, `I and III only`, `II and III only`],
        ans: "B",
      },
      {
        id: 29,
        question: `A closed organ pipe and an open organ pipe emit notes of the same pitch. The ratio of the length of the air column in the closed pipe to that of the open pipe is`,
        options: [`1:4`, `1:2`, `1:1`, `2:1`],
        ans: "B",
      },
      {
        id: 30,
        question: `Beats of frequency 6 Hz are produced by tuning forks sounded close together. If one of the forks has a frequency of 500 Hz, which of the following could be the frequency of the other fork? I. 3000 Hz II. 494 Hz III. 506 Hz`,
        options: [`I only`, `II only`, `III only`, `II and III only`],
        ans: "D",
      },
      {
        id: 32,
        question: `An object is placed at a distance of 15 cm from a concave mirror of focal length 10 cm. The distance between the object and its image is`,
        options: [`15 cm`, `30 cm`, `45 cm`, `infinite`],
        ans: "A",
      },
      {
        id: 34,
        question: `A converging lens of focal length 25 cm is used to produce an image of a candle on a screen. If the height of the image is five times that of the candle, the distance between the lens and the screen is`,
        options: [`30 cm`, `120 cm`, `150 cm`, `180 cm`],
        ans: "C",
      },
      {
        id: 35,
        question: `Which of the following nay produce a virtual image?<br />
        I. Convex mirror<br />
        II. Concave mirror<br />
        III. Convex lens<br />
        IV. Concave lens`,
        options: [
          `I and IV only`,
          `I and III only`,
          `I, II and IV only`,
          `1, II, III and IV`,
        ],
        ans: "D",
      },
      {
        id: 36,
        question: `Light waves of different frequencies will have different`,
        options: [`speeds`, `amplitudes`, `colours`, `intensities`],
        ans: "C",
      },
      {
        id: 37,
        question: `When light crosses into a transparent medium, its speed decreases by 40%. The refractive index of the medium is`,
        options: [`1.40`, `1.50`, `1.67`, `2.50`],
        ans: "C",
      },
      {
        id: 39,
        question: `Two point charges which are spaced a distance d apart, repel each other with a force of 8 ${times} ${exp(
          -5
        )} N. If the distance between the two charges is increased to 2d, the force of repulsion between them is`,
        options: [
          `3.2 ${times} ${exp(-4)} N`,
          `1.6 ${times} ${exp(-4)} N`,
          `4.0 ${times} ${exp(-5)} N`,
          `2.0 ${times} ${exp(-5)} N`,
        ],
        ans: "D",
      },
      {
        id: 40,
        question: `Which of the following capacitances cannot be obtained from a combination of three 2 &micro;F capacitors?`,
        options: [`6 &micro;F`, `3 &micro;F`, `1.33 &micro;F`, `1 &micro;F`],
        ans: "D",
      },
      {
        id: 41,
        question: `For a wire of a specified material, which of the following will give the lowest resistance in a circuit?`,
        options: [
          `A short, thin wire`,
          `A long, thin wire`,
          `A short, thick wire`,
          `A long, thick wire`,
        ],
        ans: "C",
      },
      {
        id: 42,
        question: `If Ohm's law is written as I = kV, the proportionality constant K is the`,
        options: [`resistance`, `conductance`, `resistivity`, `conductivity`],
        ans: "B",
      },
      {
        id: 43,
        question: `A lamp X is connected across a battery. If a second (identical) lamp Y is now connected in parallel with X,`,
        options: [
          `X will become brighter`,
          `X will become dimmer`,
          `the brightness of X will remain unchanged`,
          `the lamps will not glow due to a short circuit`,
        ],
        ans: "C",
      },
      {
        id: 45,
        question: `The horizontal component of the earth's magnetic field is<br/>
        I. Zero at the magnetic equator<br />
        II. Zero at the magnetic poles<br />
        III. Maximum at the magnetic equator<br />
        IV. Maximum at the magnetic poles<br />
        Which of the above statements is(are) correct?`,
        options: [`I only`, `II only`, `II and III only`, `I and IV only`],
        ans: "C",
      },
      {
        id: 46,
        question: `During electrolysis, electric charge is transported through the electrolyte by`,
        options: [
          `positive ions`,
          `free electrons`,
          `negative ions`,
          `positive and negative ions`,
        ],
        ans: "D",
      },
      {
        id: 47,
        question: `An A.C supply whose voltage is represented by the equation V = 50 sin 100 &pi;t is connected to a circuit of impendence 12.5 &ohm;. An ammeter connected to the supply will indicate a current of`,
        options: [`2.0 A`, `2.8 A`, `4.0 A`, `5.6 A`],
        ans: "B",
      },
      {
        id: 48,
        question: `A coil of resistance 3 &ohm; has an inductive reactance of 4 &ohm;. The power dissipated in the coil when connected to an A.C supply of 50 V rms is`,
        options: [`300 W`, `400 W`, `500 W`, `633 W`],
        ans: "A",
      },
      {
        id: 49,
        question: `A metallic surface exposed to radiation of certain frequency f emits photoelectrons. If the surface is exposed to radiation of frequency 2f, the maximum kinetic energy of the photoelectrons emitted will`,
        options: [
          `be doubled`,
          `be halved`,
          `remain unchanged`,
          `increase but not exactly doubled`,
        ],
        ans: "D",
      },
      {
        id: 50,
        question: `The following radiations are electrically neutral EXCEPT`,
        options: [`&alpha;-rays`, `&beta-rays`, `x-rays`, `neutrons`],
        ans: "A",
      },
      {
        id: 44,
        question: `Two resistors, 3 &ohm; and 6 &ohm; connected in parallel, are connected across a cell of internal resistance 0.5 &ohm; and e.m.f. of 10 V. The power dissipated in the 6 &ohm; resistor in the circuit is?`,
        options: [`10.7 W`, `13.3 W`, `21.3 W`, `96.0 W`],
        ans: "A",
      },
    ],
  },
  // model 2
  {
    topic: `Model examination 2`,
    questions: [
      {
        id: 1,
        question: `A spring balance measures<br />
              I. the mass of the body hung on it<br />
              II. the earth's gravitational pull on the body hung on it<br />
              III. the weight of the body hung on it<br />
              Which of the above statements is(are) correct?`,
        options: [`I only`, `III only`, `II and III only`, `I, II and III`],
        ans: "C",
      },
      {
        id: 2,
        question: `An aircraft travelled from a point X to a point Y 100 km away in the N 45&deg; E direction. It then travelled westwards to a point Z which is N 45&deg; W from X. The distance of the aircraft from X is`,
        options: [`50 km`, `100/&Sqrt;2 km`, `100 km`, `100&Sqrt;2 km`],
        ans: "C",
      },
      {
        id: 3,
        question: `A body initially at rest falls freely under gravity. If g = 10 ${units(
          "ms",
          -2
        )}, the distance covered by the body in the fourth second of fall is`,
        options: [`35 m`, `40 m`, `45 m`, `80 m`],
        ans: "A",
      },
      {
        id: 5,
        question: `An automobile travelling at a speed of 20 ${units(
          "ms",
          -1
        )} is brought uniformly to a halt in 10 seconds when a braking force of 5 kN is applied. The mass of the automobile is`,
        options: [`1,000 kg`, `1,500 kg`, `2,000 kg`, `2,500 kg`],
        ans: "D",
      },
      {
        id: 6,
        question: `The centripetal acceleration of an object moving at constant speed around a circular path is<br />
        I. directly proportional to the speed of the object<br />
        II. directly proportional to the mass of the object<br />
        III. directly proportional to the square of the speed of the object<br />
        IV. inversely proportional to the radius of the circular path<br />
        Which of the above statements are correct?`,
        options: [
          `I and II only`,
          `II, III and IV only`,
          `III and IV only`,
          `II and III only`,
        ],
        ans: "C",
      },
      {
        id: 7,
        question: `A box is pulled along a horizontal surface with the aid of a rope of length 80 cm. One end of the rope is attached to the box while the other end is held 48 cm above the ground. If the horizontal component of force on the box is 80 N, the tension in the rope is`,
        options: [`64 N`, `80 N`, `100 N`, `133.3 N`],
        ans: "C",
      },
      {
        id: 9,
        question: `An object of mass 10 kg initially at rest on a horizontal surface is subjected to a horizontal force of 40 N. The body moves in the direction of the applied force with an acceleration of 3 ${units(
          "ms",
          -2
        )}. The work done against friction after moving the object for two seconds is`,
        options: [`240 J`, `180 J`, `120 J`, `60 J`],
        ans: "D",
      },
      {
        id: 10,
        question: `The escape velocity of an object from the gravitational field of a planet<br />
        I. increases with the mass of the object<br />
        II. increases with the mass of the planet<br />
        III. is smaller on the moon than on the earth<br />
        Which of the above statements is(are) correct`,
        options: [
          `I only`,
          `I and II only`,
          `II and III only`,
          `I, II and III`,
        ],
        ans: "C",
      },
      {
        id: 11,
        question: `A pulley system with four pulleys is used to raise a mass of 100 kg. If the effort F needed to raise the load is 750 N, the efficiency of the machine is`,
        options: [`20%`, `33.33%`, `50%`, `75%`],
        ans: "B",
      },
      {
        id: 12,
        question: `The load supported by a string is increased from 50 N to 90 N. If the force constant for the spring is 2000 ${units(
          "Nm",
          -1
        )}, the additional energy stored in the spring due to the increase in load is`,
        options: [`1.40 J`, `0.90 J`, `0.50 J`, `0.40 J`],
        ans: "A",
      },
      {
        id: 13,
        question: `Two objects P and Q have the same weight W in air. When completely immersed in a liquid, the apparent weight of P is 3W/4 while that of Q is W/2. It can be concluded that the<br />
        I. the volume of P is twice the volume of Q</br >
        II. volume of Q is twice the volume of P<br />
        III. density of P is twice the density of Q<br />
        IV. density of Q is twice the density of P<br />
        WHich of the above conclusions is (are) valid?`,
        options: [`I only`, `II only`, `I and IV only`, `II and III only`],
        ans: "D",
      },
      {
        id: 14,
        question: `The ratio of the diameter of the large piston to that of the small piston in a hydraulic press is 3:1. To move a load of 180 N on the large piston, the effort applied to the small piston must be`,
        options: [`20 N`, `60 N`, `540 N`, `1,620`],
        ans: "A",
      },
      {
        id: 15,
        question: `A change in temperature of 90&deg; is equivalent to a change in temperature on the Fahrenheit scale of`,
        options: [`50&deg; F`, `90&deg; F`, `162&deg; F`, `194&deg; F`],
        ans: "C",
      },
      {
        id: 16,
        question: `The volume of a bubble is doubled as it rises from the bottom to the top of a lake. If the atmospheric pressure is equivalent to 10.3m of water, the depth of the lake is`,
        options: [`5.15 m`, `10.3 m`, `20.6 m`, `30.9 m`],
        ans: "B",
      },
      {
        id: 17,
        question: `At which of the following temperatures will a given mass of water occupy the greatest volume?`,
        options: [`0&deg; C`, `4&deg; C`, `80&deg; C`, `100&deg; C`],
        ans: "D",
      },
      {
        id: 18,
        question: `A fixed mass of gas is heated at constant volume so that its Celcius temperature is doubled. The pressure of the gas`,
        options: [
          `is halved`,
          `is doubled`,
          `is more than doubled`,
          `increases but is less than doubled`,
        ],
        ans: "D",
      },
      {
        id: 19,
        question: `The specific heat capacity of water 4.2 ${units(
          "kJKg",
          -1,
          "&deg;C",
          -1
        )}. This statement means that 4.2 kj of heat will`,
        options: [
          `change 1kg of ice to water at 0&deg;C`,
          `vaporize 1kg of ice to water at 100&deg;C`,
          `raise the temperature of 1kg of water from  70&deg;C to  70&deg;C`,
          `raise the temperature of a given mass of water by  1&deg;C`,
        ],
        ans: "C",
      },
      {
        id: 20,
        question: `The effect of increased pressure on the transformation temperatures of water is that the<br />
        I. melting point is reduced<br />
        II. melting point is increased<br />
        III. boiling point is reduced<br />
        IV. boiling point is increased<br />
        Which of the above statements are correct?`,
        options: [
          `I and III only`,
          `II and IV only`,
          `II and III only`,
          `I and IV only`,
        ],
        ans: "D",
      },
      {
        id: 21,
        question: `A 2Kw immersion heater is used to heat 1 kg of water initially at a temperature of 20&deg;C. How much water will boil away in 3 minutes? [specific heat capacity of water = 4.2 ${units(
          "kJKg",
          -1,
          "&deg;C",
          -1
        )}, specific latent heat of vaporization of water = 2.4 X ${exp(
          3
        )} ${units("kJkg", -1)}]`,
        options: [`10 g`, `100 g`, `140 g`, `150 g`],
        ans: "A",
      },
      {
        id: 22,
        question: `A person in a room feels cooler under a rotating fan because the fan`,
        options: [
          `lowers the room temperature`,
          `increases the rate of evaporation`,
          `reduces the relative humidity in the room`,
          `blows cooler air to the skin`,
        ],
        ans: "B",
      },
      {
        id: 23,
        question: `On a hot and sunny day, the inside of a car with the glass windows rolled up is hotter if the upholstery is black than if it is made of a bright and shiny material because a`,
        options: [
          `bright and shiny surface is a better reflector of heat`,
          `bright and shniy surface is a better radiator of heat`,
          `black surface is a better conductor of heat`,
          `black surface has a lower thermal capacity`,
        ],
        ans: "A",
      },
      {
        id: 24,
        question: `In a perfectly still liquid, the molecules`,
        options: [
          `are perfectly at rest`,
          `undergo translational motion`,
          `undergo only vibrational motion`,
          `exerts no intermolecular forces on one another`,
        ],
        ans: "B",
      },
      {
        id: 25,
        question: `The vibrator which is used to generate ripples in a pool of water produces 300 ripples in one minute. If the ripples are spaced 5 cm apart, their speed is`,
        options: [
          `1,500 ${units("cms", -1)}`,
          `300 ${units("cms", -1)}`,
          `60 ${units("cms", -1)}`,
          `25 ${units("cms", -1)}`,
        ],
        ans: "D",
      },
      {
        id: 26,
        question: `Which of the following statements is(are) <strong>not</strong> correct?<br />
        I. The pitch of a note emitted by a vibrating string depends on its length<br />
        II. Two identical strings may emit notes of the same pitch and intensity but different quality<br />
        III. The loudness of a note emitted by a vibrating string depends on the nunmber of overtones`,
        options: [`I only`, `II only`, `III only`, `II and III only`],
        ans: "C",
      },
      {
        id: 27,
        question: `A pipe organ X produces a note whose pitch is twice that of the note produced by a second pipe organ Y. If the speed of the wave in X is v, then the speed of the wave in Y is`,
        options: [`v/2`, `v`, `2v`, `4v`],
        ans: "B",
      },
      {
        id: 28,
        question: `A boy standing between two cliffs which are 850 m apart claps his hands and receives the echo from the nearest cliff after 2 s. If the speed of sound in air is 340 ${units(
          "ms",
          -1
        )}, he will receive the echo from the second cliff after`,
        options: [`1.5 s`, `2.5 s`, `2.8 s`, `3.0 s`],
        ans: "D",
      },
      {
        id: 29,
        question: `A vibrating string of length 50 cm produces a note of frequency 250 Hz. In order to produce a note which is an octave higher, the length of the string required is`,
        options: [`25 cm`, `25&Sqrt;2 cm`, `50&Sqrt;2 cm`, `100 cm`],
        ans: "A",
      },
      {
        id: 31,
        question: `A candle placed 12 cm from a spherical mirror produces an image on a screen placed 36 cm from the mirror. The separation between the candle and its image is`,
        options: [`12 cm`, `24 cm`, `36 cm`, `48 cm`],
        ans: "B",
      },
      {
        id: 32,
        question: `A beam of light is incident normally on an air/glass interface. Upon passing into the glass, which of the following properties of the light beam will change? <br />
        I. Frequency<br />
        II. Speed<br />
        III. Direction<br />
        IV. Amplitude`,
        options: [
          `I and III only`,
          `II and IV only`,
          `I, II and IV only`,
          `None of the option`,
        ],
        ans: "B",
      },
      {
        id: 33,
        question: `A beam of white light passes through a glass prism. The widest separation in the refracted beam occurs between the colors`,
        options: [
          `red and violet`,
          `white and black`,
          `blue and yellow`,
          `green and orange`,
        ],
        ans: "A",
      },
      {
        id: 34,
        question: `A convex lens of focal length 0.1 m is used in a camera. When focusing on a distant object, the distance from the lens to the film is approximately`,
        options: [`5 cm`, `10 cm`, `20 cm`, `100 cm`],
        ans: "B",
      },
      {
        id: 35,
        question: `A yellow liquid in a green, transparent bottle will appear`,
        options: [`red`, `yellow`, `green`, `black`],
        ans: "C",
      },
      {
        id: 36,
        question: `Electromagnetic waves which are usually associated with heat are called`,
        options: [`&gamma;-rays`, `x-rays`, `microwaves`, `infra-red rays`],
        ans: "D",
      },
      {
        id: 37,
        question: `The divergence of the leaves of a negatively-charged electroscope increases as an object is brought close to its cap. The object is`,
        options: [
          `a glass rod`,
          `a silk cloth`,
          `negatively charged`,
          `positively charged`,
        ],
        ans: "C",
      },
      {
        id: 39,
        question: `The plates of a parallel-plate capacitor with air separating the plates are connected to a battery so that the potential difference between the plates is constant. If the separation between the plate is decreased <br />
        I. the capacitance of the capacitor decreases<br />
        II. the capacitance of the capacitor increases<br />
        III. the charge on each plate decrease<br />
        IV. the charge on each plate increases<br />
        Which of the above statements are correct?`,
        options: [
          `I and IV only`,
          `II and III only`,
          `I and III only`,
          `II and IV only`,
        ],
        ans: "D",
      },
      {
        id: 41,
        question: `Which of the following resistances cannot be produced from a combination of three 6 &ohm; resistors?`,
        options: [`2 &ohm;`, `4 &ohm;`, `9 &ohm;`, `12 &ohm;`],
        ans: "D",
      },
      {
        id: 42,
        question: `A 12 V battery of internal resistance 0.1 &ohm; is connected across a lamp of resistance R. If a current of 10 A flows through the circuit, the value of R is`,
        options: [`0.9 &ohm;`, `1.0 &ohm;`, `1.1 &ohm;`, `1.2 &ohm;`],
        ans: "C",
      },
      {
        id: 43,
        question: `Two resistors P and Q are connected in parallel across a D.C voltage supply. The resistance of P is three times that of Q. The ratio of the power dissipated in P to the power dissipated in Q is?`,
        options: [`1 : 3`, `3 : 1`, `1 : 9`, `9 : 1`],
        ans: "A",
      },
      {
        id: 45,
        question: `A particle bearing a charge of 0.2 moves parallel to a magnetic field of 0.05 T. If the velocity of the particle is 40 ${units(
          "ms",
          -1
        )}, the force experienced by the particle is`,
        options: [`4.0 N`, `2.0 N`, `0.4 N`, `0.0 N`],
        ans: "D",
      },
      {
        id: 46,
        question: `A voltmeter is connected to simple cell of emf 1.1 V. When the circuit is closed,`,
        options: [
          `the voltmeter gives no deflection`,
          `the voltmeter gives an initial deflection of 1.1 V which steadily decreases to a small value`,
          `the voltmeter reading increases steadily to a value of 1.1 V and remains constant at this value.`,
          `the voltmeter gives a deflection of 1.1 V which remains constant for a long period of time`,
        ],
        ans: "B",
      },
      {
        id: 47,
        question: `An alternating current with rms voltage of 50 V has a frequency of 60 Hz. The A.C can be represented by the equation`,
        options: [
          `v = 50 sin 60&pi;t`,
          `v = 50 sin 120&pi;t`,
          `v = 70.7 sin 60&pi;t`,
          `v = 70.7 sin 120&pi;t`,
        ],
        ans: "D",
      },
      {
        id: 50,
        question: `A certain radioactive element of initial mass 160 g has a half-life of 20 years. After a period of T years, only 5 g of the element is left undecayed. The value of T is`,
        options: [`8`, `40`, `80`, `100`],
        ans: "D",
      },
    ],
  },
  // model 3
  {
    topic: "Model examination 3",
    questions: [
      {
        id: 1,
        question: `The unit cycles per second is the same as`,
        options: [`watt`, `metres per second`, `hertz`, `radians per second`],
        ans: "C",
      },
      {
        id: 3,
        question: `A stone of mass 50 g tied to the end of a string of length 0.5 m is whirled around in a horizontal circle of radius 0.5 m at a constant speed of 20 ${units(
          "ms",
          -1
        )}. The tension in the string is`,
        options: [`100 N`, `40 N`, `10 N`, `4 N`],
        ans: "B",
      },
      {
        id: 4,
        question: `Two stones P and Q are projected with same speed at angles 30&deg; and 60&deg; respectively to the horizontal. The ratio of the horizontal distance covered by P to that of Q after a given time is`,
        options: [`&Sqrt;3`, `1/&Sqrt;3`, `2`, `1`],
        ans: "A",
      },
      {
        id: 5,
        question: `A man stands on a scale in a lift which descends with an accleration of g/5, where g is the acceleration due to gravity. If the man's true weight is W, the reading on the scale is`,
        options: [`1.2 W`, `W`, `0.9 W`, `0.8 W`],
        ans: "D",
      },
      {
        id: 6,
        question: `If the length of a simple pendulum is halved, its frequency is`,
        options: [
          `increased by a factor of 2`,
          `decreased by a factor of 2`,
          `increased by a factor of &Sqrt;2`,
          `decreased by a factor of &Sqrt;2`,
        ],
        ans: "C",
      },
      {
        id: 8,
        question: `A box of mass 10 kg rests on a plane inclined at an angle of 30&deg; to the horizontal. The coefficient of friction between the surface and the box is 0.2. If a force of 60 N is applied parallel to the plane in an attempt to slide the box up the plane, the box will`,
        options: [
          `accelerate up the plane`,
          `accelerate down the plane`,
          `remain at rest`,
          `slide down the plane at a uniform speed`,
        ],
        ans: "C",
      },
      {
        id: 9,
        question: `A body accelerates uniformly from rest for a time t. The kinetic energy of the body at t<br />
        I. is directly proportional to the displacement<br />
        II. is directly proportional to the square of the instantaneous velocity<br />
        III. is directly proportional to ${units("t", 2)}<br />
        IV. depends on the value of the acceleration<br />
        Which of the above statements is (are) correct?`,
        options: [
          `II only`,
          `I and II only`,
          `I, II and III only`,
          `I, II, III and IV`,
        ],
        ans: "D",
      },
      {
        id: 11,
        question: `A screw of pitch 3 mm is turned with the aid of a spanner of length 15 cm. If the efficiency of the screw is 70 percent, the effort required to lift a load of 660 kg with the screw is`,
        options: [`3 N`, `30 N`, `300 N`, `330 N`],
        ans: "B",
      },
      {
        id: 13,
        question: `A steel specimen and a plastic specimen of identical dimensions are subjected to the same tensile force. The plastic specimen shows a greater extension because<br/>
        I. plastic has a higher modulus of elasticity than steel<br/>
        II. steel has higher modulus of elasticity than plastic<br />
        III. steel has higher force constant than plastic<br/>
        IV. steel has higher density than plastic<br />
        Which of the above statements is (are) correct?`,
        options: [`I only`, `II only`, `I and IV only`, `II and III only`],
        ans: "D",
      },
      {
        id: 14,
        question: `An object of volume 200 ${units(
          "cm",
          3
        )} and relative density of 5 is suspended from a spring balance while fully immersed in water of density ${exp(
          3
        )} ${density}. The reading on the balance is`,
        options: [`10 N`, `8 N`, `5 N`, `6 N`],
        ans: "B",
      },
      {
        id: 15,
        question: `A fine steel wire mesh can be made to float on water. This can be explained by`,
        options: [
          `Archimedes' principle`,
          `Pascal's principle`,
          `The concept of surface tension`,
          `The principle of floatation`,
        ],
        ans: "C",
      },
      {
        id: 16,
        question: `The readings on the Celcius and the Fahrenheit scales are numerically equal at a temperature of`,
        options: [`-80&deg;`, `-40&deg;`, `-0&deg;`, `-40&deg;`],
        ans: "B",
      },
      {
        id: 17,
        question: `A glass flask has a capacity of 500 ${units(
          "cm",
          3
        )} at 100&deg;. If the coefficient of linear expansion of glass is 3.2 ${times} ${exp(
          -6
        )} ${units("&deg;C", -1)}, the capacity of the flask at 30 &deg; is`,
        options: [
          `500.336 ${units("cm", 3)}`,
          `500.112 ${units("cm", 3)}`,
          `499.888 ${units("cm", 3)}`,
          `499.664 ${units("cm", 3)}`,
        ],
        ans: "D",
      },
      {
        id: 18,
        question: `A fixed mass of a gas at a temperature of 27&deg;C is heated at constant volume until the pressure is doubled. The final temperature of the gas is`,
        options: [`327 &deg;C`, `163.5 &deg;C`, `54 &deg;C`, `13.5 &deg;C`],
        ans: "A",
      },
      {
        id: 19,
        question: `A glass bottle is filled with water, corked, and kept in a freezer. After all the water is frozen, the bottle is found to have cracked. This is because`,
        options: [
          `glass becomes weaker as the temperature decreases`,
          `glass is a poor conductor of heat`,
          `of the uneven contraction of the walls of the glass`,
          `the density of ice is less than that of water`,
        ],
        ans: "D",
      },
      {
        id: 20,
        question: `The following data is provided for water:<br />
        Specific heat capacity = 4.2 ${units("kJkg", -1, "&deg;C", -1)}<br />
        Specific latent heat of fusion = 335 ${units("kJkg", -1)}<br />
        Specific latent heat of vaporization = 2260 ${units("kJjg", -1)}<br/>
        The heat required to change one kilogram of ice at 0&deg;C to steam at 100&deg;C is`,
        options: [`3015 kJ`, `2599.2 kJ`, `755 kJ`, `420 kJ`],
        ans: "A",
      },
      {
        id: 21,
        question: `A room which measures 3 m ${times} 4 m ${times} 5 m is cooled from 30&deg;C to 25&deg;C. If the density and specific heat capacity of air are 1.3 ${units(
          "kgm",
          -3
        )} and 1.0 ${units(
          "kJkg",
          -1,
          "&deg;C",
          -1
        )} respectively, the amount of heat removed from the room is`,
        options: [`300 kJ`, `390 kJ`, `600 kJ`, `780 kJ`],
        ans: "B",
      },
      {
        id: 22,
        question: `The rate of evaporation of water from a lake will be high on a day when the`,
        options: [
          `temperature and relative humidity are high`,
          `temperature is low but the relative humidity is high`,
          `relative humidity is high`,
          `relative humidity is low`,
        ],
        ans: "D",
      },
      {
        id: 24,
        question: `Some ice crystals are held down at the bottom of a glass tube with a metal wire gauze. The tube is now filled with water and heated near the top. The water boil while the ice remains unmelted because<br/>
        I. water is a poor conductor of heat<br/>
        II. glass is a poor conductor of hear<br />
        III. cold water is denser than hot water<br/>
        IV. metal wire is a good insulator<br/>
        Which of the above statements are correct?`,
        options: [
          `I and II only`,
          `I and III only`,
          `II and IV only`,
          `I, II and III only`,
        ],
        ans: "D",
      },
      {
        id: 25,
        question: `Heat reaches the food which is being cooked in a saucepan chiefly by`,
        options: [
          `conduction and convection`,
          `conduction and radiation`,
          `convection and radiation`,
          `conduction and diffusion`,
        ],
        ans: "A",
      },
      {
        id: 26,
        question: `A tuning fork attached to avibrating diaphragm is placed close to the open end of a horizontal tube containing a small quantity of fine powder. A steady vibration is generated in the tube(whose other end is closed) such that the powder piles up at regular distances 2 cm apart in the tube. If the velocity of sound in air is 340 ${units(
          "ms",
          -1
        )}, the frequency of the sound wave is?`,
        options: [`85 Hz`, `170 Hz`, `8,500 Hz`, `17,000 Hz`],
        ans: "C", // PROVIDE Answers please
      },
      {
        id: 27,
        question: `Two sound waves have the same wavelengh in air.<br />
        Which of the following characteristics must also be common to both waves?<br />
        I. Pitch II. Intensity III. Amplitude IV. Frequency`,
        options: [
          `I only`,
          `II and III only`,
          `I and IV only`,
          `I, II and IV only`,
        ],
        ans: "C",
      },
      // answers from here on
      {
        id: 30,
        question: `An echo sounder uses sound signals generated on a boat at the surface to determine the depth of water. The echo from one such signal directed toward the sea bed is received 5 seconds later. If the speed of sound in water is 1400 ${units(
          "ms",
          -1
        )} the depth of water is?`,
        options: [`7,000 m`, `3,500 m`, `1,700 m`, `850 m`],
        ans: "B",
      },
      {
        id: 31,
        question: `Which of the following waves cannot be polarized?`,
        options: [`infra-red`, `yellow light`, `x-rays`, `sound`],
        ans: "D",
      },
      {
        id: 32,
        question: `A plane mirror is moved towards a stationary girl at a speed of 10 ${units(
          "cms",
          -1
        )}. The image moves towards the girl at a speed of`,
        options: [
          `40 ${units("cms", -1)}`,
          `30 ${units("cms", -1)}`,
          `20 ${units("cms", -1)}`,
          `10 ${units("cms", -1)}`,
        ],
        ans: "C",
      },
      {
        id: 33,
        question: `An object placed 15 cm from a spherical mirror forms an image 10 cm behind the mirror. The mirror is`,
        options: [
          `convex with focal length 30 cm`,
          `concave with focal length 30 cm`,
          `convex with focal length 6 cm`,
          `concave with focal length 6 cm`,
        ],
        ans: "A",
      },
      {
        id: 35,
        question: `A slide of width 2.5 cm is positioned 5.0 cm from the lens of a projector. If the width of the image is 100 cm, the distance from the lens to the screen is`,
        options: [`40 cm`, `200 cm`, `250 cm`, `500 cm`],
        ans: "B",
      },
      {
        id: 36,
        question: `A ray of light is incident at an angle of 48.6&deg; on one face of a rectangular glass block of refractive index 1.5. The angular deviation of the ray as it crosses the air/glass interface is [sin 48.6&deg; = 0.75]`,
        options: [`0&deg;`, `18.6&deg;`, `30.0&deg;`, `78.6&deg;`],
        ans: "B",
      },
      {
        id: 37,
        question: `A rainbow is viewed through a blue sheet of glass. The rainbow will appear`,
        options: [`white`, `yellow`, `blue`, `black`],
        ans: "C",
      },
      {
        id: 38,
        question: `A positive point charge B is placed near a positively charged metal sphere. As the charge B is moved closer to the sphere<br />
        I. its electric potential energy increases<br />
        II. its electric potential energy decreases<br />
        III. work is done by the point charge B<br />
        IV. work is done on the point charge B<br />
        Which of the above statements is(are) correct?`,
        options: [
          `I and IV only`,
          `II and III only`,
          `I and III only`,
          `II and IV only`,
        ],
        ans: "A",
      },
      {
        id: 39,
        question: `The unit newton per coulomb is also equivalet to the`,
        options: [`farad`, `volt`, `joule`, `volt per meter`],
        ans: "D",
      },
      {
        id: 40,
        question: `A parallel plate capacitor has its plates maintained at a potential difference V. Introducting a dielectric material between the plates will effectively`,
        options: [
          `decrease the charge on each plate`,
          `increase the charge on each plate`,
          `leave the charhe on each plate unchanged`,
          `decrease the capacitance of the capacitor`,
        ],
        ans: "C",
      },
      {
        id: 41,
        question: `A lamp is connected across a battery. A piece of low conductivity wire is now connected in series with it. The lamp will`,
        options: [
          `glow brighter`,
          `glow dimmer`,
          `remain unaffected`,
          `quickly burn out`,
        ],
        ans: "B",
      },
      {
        id: 42,
        question: `Upon starting a car a current of 125 A is drawn from the 12 V battery and the p.d. across its terminal drops to 8 V. The internal resistance of the battery is?`,
        options: [`0.096 &ohm;`, `0.064 &ohm;`, `0.032 &ohm;`, `0.016 &ohm;`],
        ans: "C",
      },
      {
        id: 44,
        question: `A 1.2 kW immersion heater is connected to a voltage supply of 240 V. The resistance of the heater element and the current drawn by the heater are, respectively`,
        options: [
          `5 &ohm;, 48 A`,
          `1200 &ohm;, 0.2 A`,
          `48 &ohm;, 5 A`,
          `0.2 &ohm;, 1200 A`,
        ],
        ans: "C",
      },
      {
        id: 45,
        question: `A freely suspended magnetic needle makes an angle of 0&deg; with the horizontal at a location X on the earth's surface. Which of the following statements is(are) correct about X?<br />
        I. X is located on the magnetic equator<br />
        II. X is located on a magnetic pole<br />
        III. The declination at X is zero<br />
        IV. The geographic and the magnetic meridians coincide at point X`,
        options: [`I only`, `II only`, `I and III only`, `I, III, and IV only`],
        ans: "A",
      },
      {
        id: 46,
        question: `One advantage of connecting electric cells in parallel is that the effective`,
        options: [
          `emf is increased`,
          `internal resistance is decreased`,
          `emf is decreased`,
          `internal resistance is increased`,
        ],
        ans: "B",
      },
      {
        id: 47,
        question: `The maximum current in a series R-L-C circuit is obtained when the`,
        options: [
          `impedance is zero`,
          `impedance is equal to the resistance`,
          `impedance is maximum`,
          `inductive reactance is zero`,
        ],
        ans: "B",
      },
      {
        id: 48,
        question: `In a series R-L-C circuit connected to an A.C supply of 130 V(rms), the voltages across the inductor and the capacitor are 80 V and 30 V respectively. The voltage across the resistor is`,
        options: [`20 V`, `50 V`, `100 V`, `120 V`],
        ans: "D",
      },
      {
        id: 49,
        question: `A metallic surface is exposed in turn to green, red and violet lights. The maximum kinetic energy of photoelectrons ejected from the surface increase in the order`,
        options: [
          `green, red, violet`,
          `violet, green, red`,
          `red, green, violet`,
          `violet, red, green`,
        ],
        ans: "C",
      },
      {
        id: 50,
        question: `A nucleus of ${isotope(
          3,
          1,
          "H"
        )} decays to form a nucleus of ${isotope(
          3,
          2,
          "He"
        )}. This is an example of`,
        options: [
          `an alpha decay`,
          `a beta decay`,
          `a gamma decay`,
          `a neutron decay`,
        ],
        ans: "B",
      },
    ],
  },
];

export { phyQuestions };
