import { useEffect, useState } from "react";
import JobInfo from "./JobInfo";
import BtnContainer from "./BtnContainer";

const url = './db.json';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(1);

  // FETCHING DATA
  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();

    setJobs(newJobs);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchJobs();
  }, [])

  // LOADING
  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    )
  }

  return (
    <section className="jobs-center">
      <BtnContainer jobs={jobs} currentItem={currentItem} setCurrentItem={setCurrentItem} />
      <JobInfo jobs={jobs} currentItem={currentItem} />
    </section>
  );
};
export default App;
