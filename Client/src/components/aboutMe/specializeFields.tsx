import { useEffect, useState } from 'react'
import web_dev from '../../assets/web_dev.svg'
import axios from 'axios'


function SpecializeFields() {
  const initializeDataType = [
    {
      "fieldTitle":'',
      'icon':'',
      'fieldDesp':''
    }
  ]
  // const specializedField = [
  //   {
  //     "tittle": "Lorem ipsum dolor sit amet.",
  //     "icon": "https://www.svgrepo.com/show/530661/genetic-data.svg",
  //     "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium facilis ab, perferendis inventore vitae minus, aliquid alias aspernatur corrupti impedit quis dignissimos illum?"
  //   },
  //   {
  //     "tittle": "Lorem ipsum dolor sit amet.",
  //     "icon": "https://www.svgrepo.com/show/530661/genetic-data.svg",
  //     "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium facilis ab, perferendis inventore vitae minus, aliquid alias aspernatur corrupti impedit quis dignissimos illum?"
  //   },
  //   {
  //     "tittle": "Lorem ipsum dolor sit amet.",
  //     "icon": "https://www.svgrepo.com/show/530661/genetic-data.svg",
  //     "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium facilis ab, perferendis inventore vitae minus, aliquid alias aspernatur corrupti impedit quis dignissimos illum?"
  //   },
  //   {
  //     "tittle": "Lorem ipsum dolor sit amet.",
  //     "icon": "https://www.svgrepo.com/show/530661/genetic-data.svg",
  //     "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium facilis ab, perferendis inventore vitae minus, aliquid alias aspernatur corrupti impedit quis dignissimos illum?"
  //   }
  // ]

  const [specializedField,setspecializedFields] = useState(initializeDataType)

  useEffect(()=>{
    axios.get("/api/v1/users/specializedFields").then((data)=>{
      setspecializedFields(data.data.data)
    }).catch((err)=>{
      console.log(err)
    })
  }, [])
  return (
    <div className='mt-[6%]'>
      <div>
        <h2 className='text-3xl font-semibold text-white/9'>Specialized Fields</h2>
        <p className='text-lg font-[500px] text-white/60 mt-[2%]'>Here are my specializations for web development.</p>
      </div>

      <div className=' grid grid-cols-1 lg:grid-cols-2 mt-[4%] gap-10'>
        {
          specializedField?.map((field,index)=>{
            return (
              <div className="flex flex-col gap-4 justify-start" key={index}>
                <div className=" flex flex-row gap-4 items-center">
                  {/* //Todo to edit the src field  */}
                  <img src={field.icon ?web_dev : web_dev} className="w-8 h-8 text-secondary_tx_color"/>
                  <h2 className=' text-2xl font-semibold text-white/90 '>{field.fieldTitle}</h2>
                </div>
                <p className='text-lg font-[500px] text-white/60'>{field.fieldDesp}</p>
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default SpecializeFields