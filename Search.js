import { useState } from "react";
function Search(){
    const [temp, setTemp] = useState(32); // initial temperature in Celsius
  const [isCelsius, setIsCelsius] = useState(true);

  const toggleUnit = () => {
    if (isCelsius) {
      setTemp((prev) => (prev * 9) / 5 + 32);
    } else {
      setTemp((prev) => ((prev - 32) * 5) / 9);
    }
    setIsCelsius(!isCelsius);
  };

return (

    <>
    <div class="container-fluid py-4" style={{backgroundColor: '#f5f5f5',height:'95px'}}>
  <div class="row justify-content-center align-items-center g-2">
    
    {/* <!-- Search Input + Button --> */}
    <div class="col-md-5 d-flex">
      <input type="text" class="form-control" placeholder="Search city"/>
      <button class="btn btn-dark ms-2">Search</button>
    </div>


    <div class="col-auto">
      <button class="btn btn-light">Different Weather?</button>
    </div>
      <div className="col-auto">
            <button className="btn btn-light">
              {isCelsius
                ? `Metric: ${temp.toFixed(1)} °C, m/s`
                : `Imperial: ${temp.toFixed(1)} °F, mph`}
            </button>
          </div>
    
    <div class="col-auto">
      <button
        className={`btn ${isCelsius ? "btn-dark" : "btn-light"} me-2`}
        onClick={() => {
          if (!isCelsius) {
            setTemp(((temp - 32) * 5) / 9);
            setIsCelsius(true);
          }
        }}
      >
        Celsius
      </button>
      <button
        className={`btn ${!isCelsius ? "btn-dark" : "btn-light"}`}
        onClick={() => {
          if (isCelsius) {
            setTemp((temp * 9) / 5 + 32);
            setIsCelsius(false);
          }
        }}
      >
        Fahrenheit
      </button>
    </div>
  </div>
</div>
    </>
);
}
export default Search;
