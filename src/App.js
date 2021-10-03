import {React, useEffect} from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";

function App() {
  return (
    <Window/>
  );
}

function Window(){
    useEffect(() => {
      AOS.init();
    }, []);

    return(
      <>
        <div className="intro-window">
          <div className="name-container">
            <div className="name">Adam Kasperek</div>
            <div className="title"><bold>Web Developer</bold></div>
          </div>
          <div class="custom-shape-divider-bottom-1633169821">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
              </svg>
          </div>
        </div>
        <div className="center-window">
            <div className="info" data-aos="fade-right">
                <h1>What do I do?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At augue eget arcu dictum varius duis at consectetur. Enim ut sem viverra aliquet eget sit amet tellus. Vel eros donec ac odio tempor orci dapibus. Lobortis feugiat vivamus at augue eget. Ut aliquam purus sit amet luctus venenatis lectus. Integer enim neque volutpat ac. Tortor posuere ac ut consequat. Vitae et leo duis ut diam. Placerat duis ultricies lacus sed turpis. Pharetra pharetra massa massa ultricies mi. Aliquet porttitor lacus luctus accumsan tortor. Nec feugiat nisl pretium fusce id velit ut tortor.</p>
            </div>
            <div className="info" data-aos="fade-left">
                <h1>What can I offer?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis nunc sed blandit libero. Vitae purus faucibus ornare suspendisse. Sollicitudin tempor id eu nisl nunc mi ipsum. Leo a diam sollicitudin tempor id eu nisl nunc. Iaculis urna id volutpat lacus. Nulla porttitor massa id neque aliquam. Nibh cras pulvinar mattis nunc sed. Id faucibus nisl tincidunt eget. Neque aliquam vestibulum morbi blandit cursus risus at. Proin sed libero enim sed faucibus turpis. Sed turpis tincidunt id aliquet risus feugiat. Enim nec dui nunc mattis enim ut. Turpis egestas pretium aenean pharetra magna. Et magnis dis parturient montes nascetur.</p>
            </div>
        </div>
      </>
    );
}

export default App;
