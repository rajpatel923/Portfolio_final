import { Outlet } from "react-router-dom"



const DetailLayout = () => {
  return (
    <>
      {/* mt-12 is required for the mobile screen as text was kept getting to the full hit and mt-0 on lg> as it was below the nav bar. */}
      <div className="mt-12 lg:mt-0 lg:grid grid- grid-cols-8 w-full bg-detailSectionBgNav "> 
        {/* divding the page into 8 colms and giving the first col to the first div for the navigation and second give for displaying the content */}
        {/* @first_div */}
        <div className="lg:block hidden border-r-[1px] border-gray-500/75">Someting1</div>

        {/* @second_div */}
        {/* expanding the second give to the 7 col, so inshort taking all the available space.  */}
        <div className="col-span-7 h-full" > 
          <div className="flex flex-col flex-grow-0 overflow-hidden "> 
            <div className="hidden lg:block border-b-[1px] ">Header</div>
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