import { useContext } from "react";
import Benefits from "../../Components/Benefits/Benefits";
import Intro from "../../Components/Intro/Intro";
import TariffsField from "../../Components/Tariffs/Tariffs";
import { AuthContext } from "../../Providers/AuthProvider";

function MainPageBody() {
  const {isAuth, setAuth} = useContext(AuthContext);
  return (
    <>
      <main className="main">
        <Intro isAuth={isAuth}/>
        <Benefits />
        <TariffsField />
      </main>
    </>
    
  );
}

export default MainPageBody;
