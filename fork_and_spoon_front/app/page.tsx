import HomeContent from "./src/_partials/HomeContent";
import api from "./src/utils/api";

async function statusApi(): Promise<boolean> {
  try{
    const response = await fetch(api + "/status")
    return response.status === 200
  } catch (error) {
    return false
  }
}

export default async function Home() {
  const apiStatus = await statusApi();
  return (
    <>
      { apiStatus ? <HomeContent /> : <h1>API is not running</h1> }
    </>
  );
}
