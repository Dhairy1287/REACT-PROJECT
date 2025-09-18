import { useState, useEffect } from "react";

export default function WeatherDashboard() {
  const [city, setCity] = useState("Rajkot");
  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isCelsius, setIsCelsius] = useState(true);

  const API_KEY = "d35bda7b4430d06863b82b9153e2cde8";

  const fetchWeather = async () => {
    if (!city.trim()) return;
    setLoading(true);
    setErr(null);
    try {
      const units = isCelsius ? "metric" : "imperial";
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`
      );
      if (!res.ok) throw new Error("City not found");
      const json = await res.json();
      setData(json);
    } catch (error) {
      setErr(error.message || "Something went wrong while fetching API...");
      setData(null);
    } 
  };

  
  useEffect(() => {
    fetchWeather();
  }, [isCelsius]);

  return (
    <div style={{ fontFamily: "Arial", maxWidth: 700, margin: "0 auto" }}>
      <h1>🌦 Weather Dashboard</h1>

      {/* Search Section */}
      <div
        className="container-fluid py-4"
        style={{ backgroundColor: "#f5f5f5", borderRadius: "8px" }}
      >
        <div className="row justify-content-center align-items-center g-2">
          <div className="col-md-6 d-flex">
            <input
              type="text"
              className="form-control"
              placeholder="Search city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <button className="btn btn-dark ms-2" onClick={fetchWeather}>
              Search
            </button>
          </div>

          <div className="col-auto">
            <button
              className={`btn ${isCelsius ? "btn-dark" : "btn-light"} me-2`}
              onClick={() => setIsCelsius(true)}
            >
              Celsius
            </button>
            <button
              className={`btn ${!isCelsius ? "btn-dark" : "btn-light"}`}
              onClick={() => setIsCelsius(false)}
            >
              Fahrenheit
            </button>
          </div>
        </div>
      </div>

      {/* Result Section */}
      {loading && <p>Loading...</p>}
      {err && <p style={{ color: "red" }}>{err}</p>}

      {data && (
        <div style={{ marginTop: "20px" }}>
          {/* Card-like Display */}
          <div
            style={{
              background: "#fff7e6",
              padding: "16px",
              borderRadius: "10px",
              boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
              marginBottom: "20px",
            }}
          >
            <h2 style={{ margin: "0 0 10px 0" }}>
              {data.name}, {data.sys?.country}
            </h2>
            <p style={{ margin: "0" }}>
              <b>
                Feels like {data.main?.feels_like}°{isCelsius ? "C" : "F"}.{" "}
                {data.weather?.[0]?.description}
              </b>
            </p>
            <small>
              Wind: {data.wind?.speed} {isCelsius ? "m/s" : "mph"}
            </small>
          </div>

          {/* Detailed Table */}
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              textAlign: "left",
            }}
          >
            <thead>
              <tr style={{ background: "#f0f0f0" }}>
                <th style={{ border: "1px solid #ccc", padding: "8px" }}>
                  Field
                </th>
                <th style={{ border: "1px solid #ccc", padding: "8px" }}>
                  Value
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                  Temperature
                </td>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                  {data.main?.temp}°{isCelsius ? "C" : "F"}
                </td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                  Humidity
                </td>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                  {data.main?.humidity}%
                </td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                  Pressure
                </td>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                  {data.main?.pressure} hPa
                </td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                  Visibility
                </td>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                  {data.visibility / 1000} km
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
