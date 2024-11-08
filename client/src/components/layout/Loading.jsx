import React from "react"
// @ts-ignore
import loader from "../../assets/loader.svg"

function Loading() {
  return (
    <div className="w-full py-10 flex items-center justify-center">
      <img className="w-8 aspect-square" src={loader} />
    </div>
  )
}

export default Loading
