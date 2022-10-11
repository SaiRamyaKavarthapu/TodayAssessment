import "./styles.css";
import questions from "./MockData";
import { useState, useId } from "react";
import Summary from "./Summary";

export default function App() {
  const [val, setVal] = useState({});
  const [sl, setSl] = useState(5);
  const [nexts, setNexts] = useState(false);
  const ukey = useId();
  const [tempt, setTempt] = useState([]);

  const handleChange = (e) => {
    if (e.target.type === "radio") {
      setVal({ ...val, [e.target.name]: e.target.value });
    } else if (e.target.type === "checkbox") {
      const localv = tempt.push(e.target.value);
      console.log("localv",localv)
      if (!tempt.includes(e.target.value)) setTempt(localv);
      
      setVal({ ...val, [e.target.name]: tempt });
      console.log("tempt",tempt)
    } else {
      setVal({ ...val, [e.target.name]: e.target.value });
    }
    console.log(val);
  };
  const append = (e) => {
    if(e === "+") setSl(sl+5) 
   else setSl(sl-5)
  };

  const handleNext = (e) => {
    setNexts(true);
  };
  return nexts ? (
    <Summary
      data={val}
      slc={sl}
      setNexts={setNexts}
      setVal={setVal}
      setSl={setSl}
    />
  ) : (
    <>  
      <div className="App">
        <div className="container-md">
          <h1 class="text-primary">Pain & Functional Description</h1>
          <p>
            The description of the current situation gives your Optimum Trainer
            a picture of and clues to the underlying causes of your problems
          </p>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              If you have problem with pain/aches, stiffness, weakness or
              functional problems, describe this/these below. (List the symptoms
              in descending order with the most troublesome first)
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              name="Title description"
              rows="3"
              onChange={handleChange}
            ></textarea>
          </div>

          {questions.values.slice(0, sl).map((e, i) => (
            <>
              <p className="text-start m-4" key={ukey}>
                {e.question + ""} {"  "}
                {e.options &&
                  e.options.map((option, index) => {
                    return (
                      <>
                        <div
                          className="form-check form-check-inline ms-3"
                          key={index}
                        >
                          <input
                            key={index + ukey}
                            className="form-check-input"
                            type={e.optionType}
                            name={e.question}
                            id={e.id}
                            value={option}
                            onChange={(event) => handleChange(event)}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={e.id}
                            key={index + ukey + 10}
                          >
                            {option}
                          </label>
                        </div>
                      </>
                    );
                  })}
              </p>
            </>
          ))}
          {sl <= questions.values.length ?   
          <div class="d-grid gap-2">
            <button
              type="button"
              className="btn btn-outline-danger mb-3"
              onClick={()=>{append("+")}}
            >
              +
            </button>
          </div>  : ""
        
          }
            {sl > 5 ?   
          <div class="d-grid gap-2">
            <button
              type="button"
              className="btn btn-outline-danger mb-3"
              onClick={()=>{append("-")}}
            >
              -
            </button>
          </div>  : ""
        
          }

          <div className="mb-3">
            <button
              type="button"
              className="btn btn-primary btn-sm ms-3"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
