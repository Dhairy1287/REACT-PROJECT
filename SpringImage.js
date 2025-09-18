// import spring from "./assets/spring1.jpg";
// import spring from "../public/spring1.jpg"
function SpringImage(){
    return(
        <>
  <div class="container-fluid p-0 position-relative">
    <img src={"/spring1.jpg"} alt="Spring Image" class="img-fluid full-screen-img"/>
    {/* <!-- Overlay text --> */}
    <div class="overlay-text position-absolute top-50 start-30 translate-middle-y text-start ps-5">
      <h1 class="headline">OpenWeather</h1>
      <h2 class="subheadline">Weather forecasts, nowcasts and<br/> history in a fast and elegant way</h2>
    </div>
  </div>
  </>
    );
}
export default SpringImage;