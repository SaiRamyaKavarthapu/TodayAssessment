
const Summary = ({ data, slc, setNexts, setVal, setSl }) => {
  console.log("daa", data, "slc", slc);
  const show = Object.keys(data).map((e, i) => (
    <>
      <tr key={i}>
        <th scope="row">{i}</th>
        <td>{e}</td>
        <td>{data[e]}</td>
      </tr>
    </>
  ));
  
  const handleBack = () => {
    setNexts(false);
    setVal(data);
    setSl(slc);
  };

  return (
    <>
     
      <div className="container-md">
        <h1>Summary</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Questions</th>
              <th scope="col">Answers</th>
            </tr>
          </thead>
          <tbody>{show}</tbody>
        </table>
        <div className="mb-3">
          <button
            type="button"
            className="btn btn-primary btn-sm "
            onClick={handleBack}
          >
            Back
          </button>
        </div>
      </div>
    </>
  );
};

export default Summary;
