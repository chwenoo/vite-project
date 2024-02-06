import React, { useEffect, useState } from 'react'

const Count = () => {
    const [myCount, setMyCount] = useState(0)
    const [isSubmitted, setIsSubmitted] = useState(false)

    // const [selectedCategory, setSelectedCategory]

    useEffect(() => {
        console.log("Render in useEffect")
        setMyCount(myCount+1)
    }, [isSubmitted])

    // no dependency   render forever
    // [] dependency   render first time
    // [state] dependency   render every state change

    // category = ["all", "gradeA", "gradeB"]

    const submitHandler = () => {
        setIsSubmitted(!isSubmitted)
    }
  return (
    <div>
        My Count {myCount}
        <button type='button' onClick={submitHandler}>Submit</button>

    </div>
  )
}

export default Count