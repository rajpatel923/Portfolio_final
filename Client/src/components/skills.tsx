import Card from "./skillsCard/skillCard"

function Skills() {
  return (
    <div className=" mx-10 mt-10">
      <div className="flex flex-col items-center text-center ">
        <h1 className="md:text-5xl text-4xl font-bold mb-4">Skills</h1>
        <p className=" max-w-[400px] p-2 mb-8 text-grayish_black ">Here are some of my favorite skills I use everyday to complete my work.</p>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>

      </div>
    </div>
  )
}

export default Skills