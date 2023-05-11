import { Header } from "./layout/Header";
import { Contact } from './pagets/contact/Contact';
import { Home } from './pagets/home/Home';
import { Portfolio } from './pagets/portfolio/Portfolio';
import { Resume } from './pagets/resume/Resume';
import { useTransition, animated, useTrail } from 'react-spring';
import { Route, useLocation, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import "./App.css";
function App() {

  const anim1 = {
    opacity: 0,
    transform: 'matrix3d(-0.647818, -0.22026, 0, -0.00135007, -0.0194437, 0.0444112, 0, -4.69475e-05, 0, 0, 1, 0, 472, 153, 0, 1)',
  };
  const anim2 = {
    opacity: 0,
    transform: 'matrix3d(0.226336, 0.000406782, 0, -4.51414e-05, -0.574522, -0.139075, 0, -0.00100026, 0, 0, 1, 0, 481, 58, 0, 1)',
  };
  const anim3 = {
    opacity: 0,
    transform: 'matrix3d(0.0119705, 0.223857, 0, 3.19451e-05, -0.234049, 0.0249629, 0, 8.60789e-05, 0, 0, 1, 0, 524, 290, 0, 1)',
  };
  const anim4 = {
    opacity: 0,
    transform: 'matrix3d(-0.817088, -0.0604589, 0, -0.000502621, -0.192057, 0.0904502, 0, -0.000130944, 0, 0, 1, 0, 1527, 93, 0, 1)',
  };
  const anim5 = {
    opacity: 0,
    transform: 'matrix3d(0.140866, -0.0159757, 0, -3.99393e-05, 0.395098, 0.441075, 0, 0.00136512, 0, 0, 1, 0, 235, 438, 0, 1)',
  };
  const anim6 = {
    opacity: 0,
    transform: 'matrix3d(0.2416, 0.123371, 0, 0.00056907, 0.0680817, 0.242989, 0, 0.000104902, 0, 0, 1, 0, 731, 157, 0, 1)',
  };
  const anim7 = {
    opacity: 0,
    transform: 'matrix3d(-0.017529, 0, 0, -7.82543e-05, 0.0137593, 0.0527373, 0, 1.32174e-05, 0, 0, 1, 0, -621, 0, 0, 1)',
  };
  const anim8 = {
    opacity: 0,
    transform: 'matrix3d(0.0626322, 0, 0, 0.000135129, 0.00275595, 0.0688988, 0, -6.47698e-06, 0, 0, 1, 0, 0, 0, 0, 1)',
  };
  const anim9 = {
    opacity: 0,
    transform: 'matrix3d(0.998442, 0, 0, 0, -0.00552486, 0.0592158, 0, -4.30285e-06, 0, 0, 1, 0, -200, 340, 0, 1)',
  };
  const anim10 = {
    opacity: 0,
    transform: 'matrix3d(0.595634, -0.0155497, 0, -0.000410947, 0.53271, 0.00506296, 0, 0.00149278, 0, 0, 1, 0, -200, 49, 0, 1)',
  };

  const animationFrom = [anim1, anim2, anim3, anim4, anim5, anim6, anim7, anim8, anim9, anim10];
  const [activeAnimFrom, setActiveAnimFrom] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const len = animationFrom.length;
    setActiveAnimFrom(Math.floor(Math.random() * len));

  }, [location])

  const animatFrom = animationFrom[activeAnimFrom];


  const transitions = useTransition(location, (location) => location.pathname, {
    config: { duration: 700 },
    from: animatFrom,
    enter: {
      opacity: 1,
      transform: 'matrix3d(' +
        '1, 0, 0, 0,' +
        '0, 1, 0, 0,' +
        '0, 0, 1, 0,' +
        '0, 0, 0, 1)',
    },
    leave: animatFrom
  });

  return (
    <>
      <Header />
      <main className="containe " style={{ position: 'relative', overflowX: 'hidden', minHeight: '90vh' }}>
        {transitions.map(({ item, props, key }) => (
          <animated.div key={key} style={props}>
            <div className="primary-card">
              <Routes location={item}>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/resume" element={<Resume />} />
              </Routes>

            </div>

          </animated.div>
        ))}
      </main>
    </>
  );
}

export default App;
