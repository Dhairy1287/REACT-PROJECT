import { useState, useEffect } from "react";

function WeatherApp() {
  const [city, setCity] = useState("Rajkot");
  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_KEY = "d35bda7b4430d06863b82b9153e2cde8";

  const fetchWeather = async () => {
    setLoading(true);
    setErr(null);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},in&appid=${API_KEY}&units=metric`
      );
      if (!res.ok) throw new Error("City not found");
      const json = await res.json();
      setData(json);
    } catch (error) {
      setErr(error.message || "Something went wrong while fetching API...");
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []); // fetch on first load

  return (
    <div style={{ fontFamily: "Arial", maxWidth: 600, margin: "0 auto" }}>
      <h1>Weather App</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchWeather();
        }}
      >
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          style={{ padding: "8px", marginRight: "8px" }}
        />
        <button type="submit" style={{ padding: "8px" }}>
          Get Weather
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {err && <p style={{ color: "red" }}>{err}</p>}

      {data && (
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "20px",
            textAlign: "left",
          }}
        >
          <thead>
            <tr style={{ background: "#f0f0f0" }}>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>Field</th>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>City</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{data.name}</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Temperature</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                {data.main?.temp} °C
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Feels Like</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                {data.main?.feels_like} °C
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Humidity</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                {data.main?.humidity} %
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Weather</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                {data.weather?.[0]?.description}
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Wind Speed</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                {data.wind?.speed} m/s
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default WeatherApp;


