import killjoy from "../assets/killjoy.svg";
import brimstone from "../assets/brimstone.svg";
import raze from "../assets/raze.png";
import reyna from "../assets/reyna.png";
import yoru from "../assets/yoru.svg";

const Body = () => {
  return (
    <>
      <div id="containerBody">
        <div id="informs">
          <div className="memojis" id="memojisLeft">
            <img src={killjoy} alt="KillJoy" />
          </div>
          <div id="container-child">
            <div id="description">
              <p>Apple</p>
              <h1>Melhor site para criar memoji. Fácil, simples e rápido.</h1>
            </div>

            <div id="buttons">
              <button id="createMemoji">criar memoji</button>
              <button id="library">ver biblioteca</button>
            </div>
          </div>
          <div className="memojis" id="memojisRight">
            <img src={brimstone} alt="KillJoy" />
          </div>
        </div>
      </div>
      <div id="memojisDown">
        <img className="finalMemojis" src={yoru} alt="KillJoy" id="yoru" />
        <img className="finalMemojis" src={raze} alt="KillJoy" id="raze" />
        <img className="finalMemojis" src={reyna} alt="KillJoy" />
      </div>

        <div id="informsBaseboard">
            <div id="informe1" className="baseboard">
                <h5>Bill gates</h5>
                <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                scelerisque nisl quis viverra tincidunt. ”
                </p>
            </div>
            <div id="informe2" className="baseboard">
                <h5>Bill gates</h5>
                <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                scelerisque nisl quis viverra tincidunt. ”
                </p>
            </div>
        </div>
    </>
  );
};

export default Body;
