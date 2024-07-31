function SpecializeFields() {
  const specializedField = [
    {
      "tittle": "Lorem ipsum dolor sit amet.",
      "icon": "https://www.svgrepo.com/show/530661/genetic-data.svg",
      "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium facilis ab, perferendis inventore vitae minus, aliquid alias aspernatur corrupti impedit quis dignissimos illum?"
    },
    {
      "tittle": "Lorem ipsum dolor sit amet.",
      "icon": "https://www.svgrepo.com/show/530661/genetic-data.svg",
      "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium facilis ab, perferendis inventore vitae minus, aliquid alias aspernatur corrupti impedit quis dignissimos illum?"
    },
    {
      "tittle": "Lorem ipsum dolor sit amet.",
      "icon": "https://www.svgrepo.com/show/530661/genetic-data.svg",
      "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium facilis ab, perferendis inventore vitae minus, aliquid alias aspernatur corrupti impedit quis dignissimos illum?"
    },
    {
      "tittle": "Lorem ipsum dolor sit amet.",
      "icon": "https://www.svgrepo.com/show/530661/genetic-data.svg",
      "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium facilis ab, perferendis inventore vitae minus, aliquid alias aspernatur corrupti impedit quis dignissimos illum?"
    }
  ]
  return (
    <div className=''>
      <div>
        <h2>Specialized Fields</h2>
        <p>Here are my specializations for web development.</p>
      </div>

      <div className=' grid grid-cols-1 lg:grid-cols-2 mb-20'>
        {
          specializedField.map((field,index)=>{
            return (
              <div className="flex flex-col gap-4 p-6 mt-2" key={index}>
                <div className=" flex flex-row gap-4 items-center">
                  <img src={field.icon} className="w-12 h-12 text-white bg-white"/>
                  <h2>{field.tittle}</h2>
                </div>
                <p>{field.description}</p>
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default SpecializeFields