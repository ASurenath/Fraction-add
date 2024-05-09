import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Fraction from "../Components/Fraction";

function Frame2({ num1, denom1, num2, denom2, lcm, setFrameNo }) {
  const [step, setStep] = useState(0);
  const [newNum1, setNewNum1] = useState("?");
  const [newNum2, setNewNum2] = useState("?");
  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }, [step]);

  console.log("frame2 step", step);
  const increaseStep = () => {
    if (step == 3) {
      findNewNums();
    }
    if (step == renderList.length - 1) {
      setFrameNo(3);
    }
    setStep(step + 1);
  };
  const findNewNums = () => {
    setNewNum1(num1 * (lcm / denom1));
    setNewNum2(num2 * (lcm / denom2));
    return <div> test</div>;
  };

  const renderList = [
    // //step0
    <>
      <p className="appear  fs-2 text-center">{`LCM of ${denom1} and ${denom2} is ${lcm}.`}</p>
      <p className="appear  fs-2 text-center">{`${num1}/${denom1} + ${num2}/${denom2} =${newNum1}/${lcm} + ${newNum2}/${lcm}.`}</p>
      <p className="appear  fs-2 text-center">{`Now, we need to find the numerators.`}</p>
    </>,
    ////step1
    <>
      <div className="outer-grid appear mb-3">
        <div>
          <h1>
            {num1}/{denom1}
          </h1>
        </div>
        <Fraction num={num1} denom={denom1} color={"blue"} />
      </div>
      <h1 className="text-center appear">
        <i className="fa-solid fa-arrow-down"></i>
      </h1>
      <div className="outer-grid appear mb-3">
        <div>
          <h1>
            {newNum1}/{lcm}
          </h1>
        </div>
        <Fraction
          className="appear"
          num={num1}
          denom={denom1}
          split={lcm / denom1}
          color={"blue"}
        />
      </div>
    </>,
    ////step2
    <>
          <p className="appear  fs-2 text-center">{denom1==lcm?
          <>{num1}/{denom1} already has {lcm} as denominator </>
          :<>
To convert {num1}/{denom1} to a fraction with {lcm} as denominator, we need to multiply both the numerator and denominator by LCM/denominator, that is,{lcm}/{denom1}={lcm/denom1}.
If you look at the picture, you can see that we divided each section into {lcm/denom1} parts to make the total number of sections equal to {lcm}.
          </>}
          </p>
          

    </>,
    <>
      <h1 className="text-center appear">and</h1>
      <div className="outer-grid appear mb-3">
        <div>
          <h1>
            {num2}/{denom2}
          </h1>
        </div>
        <Fraction num={num2} denom={denom2} color={"yellow"} />
      </div>
      <h1 className="text-center appear">
        <i className="fa-solid fa-arrow-down"></i>
      </h1>
      <div className="outer-grid appear mb-3">
        <div>
          <h1>
            {newNum2}/{lcm}
          </h1>
        </div>
        <Fraction
          className="appear"
          num={num2}
          denom={denom2}
          split={lcm / denom2}
          color={"yellow"}
        />
      </div>
    </>,
    ////step3
    <>
    <p className="appear  fs-2 text-center">{denom2==lcm?
    <>{num2}/{denom2} already has {lcm} as denominator </>:
    <>
To convert {num2}/{denom2} to a fraction with {lcm} as denominator, we need to multiply both the numerator and denominator by LCM/denominator, that is,{lcm}/{denom2}={lcm/denom2}.
If you look at the picture, you can see that we divided each section into {lcm/denom2} parts to make the total number of sections equal to {lcm}.
          </>}</p>

</>,

    ////step4
    <>{/* findNewNums */}</>

  ];
  return (
    <div className="frame2">
      {renderList.map((i, index) => (
        step>=index&&<React.Fragment key={index}>{renderList[index]}</React.Fragment>
      ))}
      {step < renderList.length && (
        <div className="text-center">
          <Button variant="primary" onClick={increaseStep}>
            <h1>
              <i className="fa-solid fa-angle-down mx-5"></i>
            </h1>
          </Button>
        </div>
      )}
    </div>
  );
}

export default Frame2;
