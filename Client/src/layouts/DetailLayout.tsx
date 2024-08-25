import { Outlet, useLocation } from "react-router-dom"
import DetailLayoutSidebar from "../components/skillDetails/DetailLayoutSidebar"



const DetailLayout = () => {
  const location = useLocation();
  console.log(location)
  return (
    <>
      {/* mt-12 is required for the mobile screen as text was kept getting to the full hit and mt-0 on lg> as it was below the nav bar. */}
      <div className=" lg:mt-0 lg:grid grid- grid-cols-8 w-full bg-detailSectionBgNav "> 
        {/* divding the page into 8 colms and giving the first col to the first div for the navigation and second give for displaying the content */}
        {/* @first_div */}
        <div className="lg:block hidden border-r-[1px] border-gray-500/75">
          <DetailLayoutSidebar/>
        </div>

        {/* @second_div */}
        {/* expanding the second give to the 7 col, so inshort taking all the available space.  */}
        <div className="col-span-7 h-full" > 
          <div className="flex flex-col flex-grow-0 overflow-hidden h-full "> 
            <div className="hidden lg:block border-b-[1px] ">
              <div className=" flex flex-row gap-9 ml-8">
                <div>first</div>
                <div>second</div>
              </div>
            </div>
            <div className=" overflow-y-auto flex-1 min-h-0 lg:max-h-[573px] bg-detailSectionBgHero">
              <Outlet/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailLayout