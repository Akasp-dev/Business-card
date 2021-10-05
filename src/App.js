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
          <div class="custom-shape-divider-bottom-1633418799">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
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
