import React from 'react';
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

  return (
    <div>
      <div className='projects-container center-maxw'>
        <h1 className='projects-header' id='link-1'>
          Projects
        </h1>
        <div className='project-grid'>
          <div className='project'>
            <div className='project-name'>Sports Betting</div>
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
            <a target='_blank' href='https://sad-galileo-e2e41e.netlify.app'>
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
            <div className='project-name'>Lyric Finder</div>
            <a
              target='_blank'
              href='https://friendly-williams-19b648.netlify.app/'
            >
              <animated.div
                className='project-link project-link-3'
                onMouseOver={({ clientX: x, clientY: y }) =>
                  set3({ xys: calc(x, y) })
                }
                onMouseLeave={() => set3({ xys: [0, 0, 1] })}
                style={{ transform: props3.xys.interpolate(trans) }}
              ></animated.div>
            </a>
          </div>
          <div className='project'>
            <div className='project-name'>Trivia</div>
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
            <div className='project-name'>Simple Calculator</div>
            <a
              target='_blank'
              href='https://compassionate-jepsen-1d5b9f.netlify.app/'
            >
              <animated.div
                className='project-link project-link-8'
                onMouseOver={({ clientX: x, clientY: y }) =>
                  set8({ xys: calc(x, y) })
                }
                onMouseLeave={() => set8({ xys: [0, 0, 1] })}
                style={{ transform: props8.xys.interpolate(trans) }}
              ></animated.div>
            </a>
          </div>{' '}
          <div className='project'>
            <div className='project-name'>Covid Data</div>
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
          <div className='project'>
            <div className='project-name'>Tic Tac</div>
            <a
              target='_blank'
              href='https://hopeful-hopper-6ea178.netlify.app/'
            >
              <animated.div
                className='project-link project-link-4'
                onMouseOver={({ clientX: x, clientY: y }) =>
                  set4({ xys: calc(x, y) })
                }
                onMouseLeave={() => set4({ xys: [0, 0, 1] })}
                style={{ transform: props4.xys.interpolate(trans) }}
              ></animated.div>
            </a>
          </div>
        </div>
        <h1 className='projects-header' id='link-2'>
          My Blog
        </h1>
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
