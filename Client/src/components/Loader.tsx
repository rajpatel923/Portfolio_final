import React from 'react'

const Loader = () => {
  return (
    <div className="flex-1 h-full flex-col gap-4 w-full flex items-center justify-center">
        <div className="text-center">
  <div
    className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-icon_color mx-auto"
  />
  <h2 className="text-zinc-900 dark:text-white mt-4">Loading...</h2>

</div>

  </div>


  )
}

export default Loader