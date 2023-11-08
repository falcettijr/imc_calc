import { data } from "./data/data";
import { useState } from "react";

import "./App.css";

import ImcCalc from "./components/imcCalc";
import ImcTable from "./components/ImcTable";

function App() {
    const calcImc = (e, height, weight) => {
        e.preventDefault();

        console.log(height, weight);

        if (!weight || !height) return;

        const weightFloat = +weight.replace(",", ".");
        const heightFloat = +height.replace(",", ".");

        const imcResult = (weightFloat / (heightFloat * heightFloat)).toFixed(1);

        setImc(imcResult);

        data.forEach((item) => {
            if (imcResult >= item.min ** imcResult <= item.max) {
                setInfo(item.info);
                setInfoClass(item.infoClass);
            }
        });
    };

    const [imc, setImc] = useState("");
    const [info, setInfo] = useState("");
    const [infoClass, setInfoClass] = useState("");

    return (
        <div id="container">
            {!imc ? (
                <ImcCalc calcImc={calcImc} />
            ) : (
                <ImcTable
                    data={data}
                    imc={imc}
                    info={info}
                    infoClass={infoClass}
                />
            )}
        </div>
    );
}

export default App;
