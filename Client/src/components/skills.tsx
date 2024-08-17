import { useEffect, useState } from "react"
import Card from "./skillsCard/skillCard"
import axios from "axios"
import { Link} from "react-router-dom";

interface Skills{
  skillImage: string;
  skillTitle: string;
  _id: string;
  bgCoustomeColor:string;
}

function Skills() {
  const initializeDataType:Skills[] = [
    {
      skillImage: "",
      skillTitle: "",
      _id: "",
      bgCoustomeColor: ""
    }
  ];

  const [skills, setSkills] = useState<Skills[]>(initializeDataType);

  useEffect(() => {
    axios.get("/api/v1/users/getSkillTitle")
      .then((response) => {
        // Assuming response.data.data is an array
        if (response.data && response.data.data) {
          setSkills(response.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className=" mx-12 my-12">
      <div className="flex flex-col items-center text-center ">
        <h1 className="md:text-5xl text-4xl font-bold mb-4">Skills</h1>
        <p className=" max-w-[400px] p-2 mb-8 text-grayish_black ">Here are some of my favorite skills I use everyday to complete my work.</p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          skills.map((skill)=>{
            return <Link key={skill._id} to={`/skills/${skill.skillTitle}`}>
              <Card skillImage={skill.skillImage} skillTitle={skill.skillTitle} bgCoustomeColor={skill.bgCoustomeColor} profile={false}/>
            </Link>
          })
        }
      </div>
    </div>
  )
}

export default Skills