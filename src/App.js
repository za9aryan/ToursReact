import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState();

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await fetch(url);
      const response = await data.json();
      setLoading(false);
      setTours(response);
    } catch (err) {
      console.log(err);
      fetchData();
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  if (tours?.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={() => fetchData()}>
            refresh
          </button>
        </div>
      </main>
    );
  }
  return <div>{tours && <Tours tours={tours} removeTour={removeTour} />}</div>;
}

export default App;
