import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

// PROJECT ANIMATION
const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.05
];
const trans = (x, y, s) => `perspective(600px) scale(${s})`;

export const Projects = () => {
  // PROJECT ANIMATION
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { duration: 50, mass: 1, tension: 170, friction: 26 }
  }));
  const [props1, set1] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { duration: 50, mass: 10, tension: 170, friction: 26 }
  }));
  const [props2, set2] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { duration: 50, mass: 5, tension: 350, friction: 40 }
  }));
  const [props3, set3] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { duration: 50, mass: 5, tension: 350, friction: 40 }
  }));
  const [props4, set4] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { duration: 50, mass: 5, tension: 350, friction: 40 }
  }));
  const [props5, set5] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { duration: 50, mass: 5, tension: 350, friction: 40 }
  }));
  const [props6, set6] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { duration: 50, mass: 5, tension: 350, friction: 40 }
  }));
  const [props7, set7] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { duration: 50, mass: 5, tension: 350, friction: 40 }
  }));
  const [props8, set8] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { duration: 50, mass: 5, tension: 350, friction: 40 }
  }));
  const [props9, set9] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { duration: 50, mass: 5, tension: 350, friction: 40 }
  }));

  // const [scrollStart, setScrollStart] = useState(0);
  let scrollState = [];

  window.addEventListener('scroll', () => {
    if (
      window.scrollY > scrollState[scrollState.length - 1] + 250 ||
      window.scrollY < scrollState[scrollState.length - 1] - 250
    ) {
      document.querySelectorAll('.description-text').forEach(i => {
        i.classList.remove('show');
      });
      document
        .querySelectorAll('.dbtn')
        .forEach(i => (i.innerText = 'Description'));
    }
  });

  const showDescription = e => {
    if (e.target.innerText === 'Description') {
      e.target.previousSibling.classList.add('show');
      e.target.innerText = 'Hide';
      scrollState.push(window.scrollY);
    } else {
      e.target.previousSibling.classList.remove('show');
      e.target.innerText = 'Description';
    }
  };

  return (
    <div>
      <div className='projects-container center-maxw'>
        <h1 className='projects-header' id='link-1'>
          View Projects
        </h1>
        <div className='project-grid'>
          <div className='project'>
            <div className='project-name'>Sports Betting</div>
            <div className='description-text-sb description-text'>
              This project is designed to be a real sports betting experience.
              <br />
              <br />
              Features:
              <br />
              <li>Betslip</li>
              <li>Sign up / Login form</li>
              <li>Filter through sports</li>
              <li>Keyframe animations</li>
            </div>
            <div onClick={showDescription} className='discription-sb dbtn'>
              Description
            </div>
            <a target='_blank' href='https://goofy-ritchie-d401d6.netlify.app/'>
              <animated.div
                className='project-link project-link-2'
                onMouseOver={({ clientX: x, clientY: y }) =>
                  set2({ xys: calc(x, y) })
                }
                onMouseLeave={() => set2({ xys: [0, 0, 1] })}
                style={{ transform: props2.xys.interpolate(trans) }}
              ></animated.div>
            </a>
          </div>
          <div className='project'>
            <div className='project-name'>Keyboard Tone JS</div>
            <div className='description-text-piano description-text'>
              This app can teach beginner piano skills. Looks and plays like a
              real keyboard.
              <br />
              <br />
              Features:
              <br />
              <li>Learn major scales and chords</li>
              <li>Learn notes by clicking</li>
              <li>Learn notes by Keydown</li>
              <br />
              Libraries:
              <br />
              <li>Tone JS</li>
            </div>
            <div
              onClick={showDescription}
              className='discription-keyboard dbtn'
            >
              Description
            </div>
            <a
              target='_blank'
              href='https://affectionate-booth-7c6f42.netlify.app/'
            >
              <animated.div
                className='project-link project-link-6'
                onMouseOver={({ clientX: x, clientY: y }) =>
                  set6({ xys: calc(x, y) })
                }
                onMouseLeave={() => set6({ xys: [0, 0, 1] })}
                style={{ transform: props6.xys.interpolate(trans) }}
              ></animated.div>
            </a>
          </div>
          <div className='project'>
            <div className='project-name'>Online Store</div>
            <div className='description-text-chairs description-text'>
              Online Sunglasses Store built with React.
              <br />
              <br />
              Features:
              <br />
              <li>Responsive design</li>
              <li>UseSpring react animations</li>
              <li>Component &amp; App level state use</li>
              <li>Shopping Cart</li>
            </div>
            <div onClick={showDescription} className='discription-chairs dbtn'>
              Description
            </div>
            <a
              target='_blank'
              href='https://mystifying-mahavira-4e8faa.netlify.app/'
            >
              <animated.div
                className='project-link project-link-1'
                onMouseOver={({ clientX: x, clientY: y }) =>
                  set1({ xys: calc(x, y) })
                }
                onMouseLeave={() => set1({ xys: [0, 0, 1] })}
                style={{ transform: props1.xys.interpolate(trans) }}
              ></animated.div>
            </a>
          </div>
          <div className='project'>
            <div className='project-name'>NBA Predictions</div>
            <div className='description-text-nba description-text'>
              I built this project for my friends to predict the upcoming NBA
              season. Click on team logos to choose playoff seeding.
              <br />
              <br />
              Features:
              <br />
              <li>Built with React</li>
              <li>
                Selected data stored in global state w/ React context hooks
              </li>
              <li>Form submission includes data</li>
              <br />
              Libraries:
              <li>React spring animations</li>
            </div>
            <div onClick={showDescription} className='discription-chairs dbtn'>
              Description
            </div>
            <a
              target='_blank'
              href='https://inspiring-kilby-dfe78c.netlify.app'
            >
              <animated.div
                className='project-link project-link-7'
                onMouseOver={({ clientX: x, clientY: y }) =>
                  set7({ xys: calc(x, y) })
                }
                onMouseLeave={() => set7({ xys: [0, 0, 1] })}
                style={{ transform: props7.xys.interpolate(trans) }}
              ></animated.div>
            </a>
          </div>{' '}
          <div className='project'>
            <div className='project-name'>Trivia</div>
            <div className='description-text-trivia description-text'>
              A fun quizz I made for my friends to test basketball knowledge.
              One of my earliest completed projects.
              <br />
              <br />
              Features:
              <li>Nice looking selection and animation</li>
              <li>Form submission with results</li>
            </div>
            <div onClick={showDescription} className='discription-chairs dbtn'>
              Description
            </div>
            <a
              target='_blank'
              href='https://heuristic-newton-d525bc.netlify.app/'
            >
              <animated.div
                className='project-link project-link-5'
                onMouseOver={({ clientX: x, clientY: y }) =>
                  set5({ xys: calc(x, y) })
                }
                onMouseLeave={() => set5({ xys: [0, 0, 1] })}
                style={{ transform: props5.xys.interpolate(trans) }}
              ></animated.div>
            </a>
          </div>
          <div className='project'>
            <div className='project-name'>Covid Data</div>
            <div className='description-text-covid description-text'>
              Get up to date Covid-19 data for all US States.
              <br />
              <br />
              Features:
              <li>HTTP request to Covid Data API</li>
              <li>Get case increase and total cases data</li>
              <li>Get death increase and total deaths data</li>
              <br />
              API:
              <li>Fetch API</li>
            </div>
            <div onClick={showDescription} className='discription-chairs dbtn'>
              Description
            </div>
            <a
              target='_blank'
              href='https://tender-feynman-0a5def.netlify.app/'
            >
              <animated.div
                className='project-link project-link-9'
                onMouseOver={({ clientX: x, clientY: y }) =>
                  set9({ xys: calc(x, y) })
                }
                onMouseLeave={() => set9({ xys: [0, 0, 1] })}
                style={{ transform: props9.xys.interpolate(trans) }}
              ></animated.div>
            </a>
          </div>
        </div>
        <h1 className='projects-header' id='link-2'>
          Blog Post
        </h1>
        <div className='description-text-blog description-text'>
          My blog post goes into depth on how I created a few of my projects. It
          also includes some helpful front end tips. That includes CSS tips and
          how to use the react smooth scrolling libray.
        </div>
        <div onClick={showDescription} className='discription-chairs dbtn'>
          Description
        </div>
        <a target='_blank' href='https://musing-gates-809017.netlify.app/'>
          <animated.div
            className='blog-link'
            onMouseOver={({ clientX: x, clientY: y }) =>
              set({ xys: calc(x, y) })
            }
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans) }}
          ></animated.div>
        </a>
      </div>
      <div className='line'></div>
    </div>
  );
};
export default Projects;
