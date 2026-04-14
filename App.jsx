import React, { useState } from 'react'

const App = () => {

  const [note, setNote] = useState('')
  const [text, setText] = useState('')
  const [task, setTask] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!note || !text) return alert("Plz Fill Note...")

    setTask([...task, { note, text }])
    setNote('')
    setText('')
  }

  const deleteNote = (idx) => {
    const delNote = [...task]
    delNote.splice(idx, 1)
    setTask(delNote)
  }

  return (
    <div className='min-h-screen w-full bg-linear-to-br from-black via-gray-900 to-black text-white lg:flex lg:items-start'>

      {/* LEFT SIDE FORM */}
      <form
        onSubmit={handleSubmit}
        className='flex flex-col justify-start p-10 gap-6 lg:w-1/2 lg:sticky lg:top-0'
      >

        <h1 className='text-4xl font-extrabold text-center mb-3 tracking-wide'>
          Add Notes ✍️
        </h1>

        <input
          type="text"
          value={note}
          placeholder="Enter note title"
          onChange={(e) => setNote(e.target.value)}
          className='px-5 py-3 border border-gray-700 rounded-xl bg-white/5 backdrop-blur-md focus:ring-2 focus:ring-blue-500 outline-none transition'
        />

        <textarea
          value={text}
          placeholder="Write your note..."
          onChange={(e) => setText(e.target.value)}
          className='px-5 py-3 h-36 border border-gray-700 rounded-xl bg-white/5 backdrop-blur-md focus:ring-2 focus:ring-blue-500 outline-none resize-none transition'
        />

        <button
          type="submit"
          className='bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl font-semibold shadow-md transition active:scale-95'
        >
          Add Note 🚀
        </button>

      </form>

      {/* RIGHT SIDE NOTES */}
      <div className='lg:w-1/2 lg:border-l border-gray-800 p-10 flex flex-col'>

        <h1 className='text-4xl font-extrabold text-center mb-5 tracking-wide'>
          Your Notes 📒
        </h1>

        {/* NOTES LIST */}
        <div className='flex flex-wrap justify-start content-start h-full gap-6 overflow-y-auto pr-2'>

          {/* EMPTY STATE */}
          {task.length === 0 && (
            <p className='text-gray-500 text-center w-full text-lg'>
              No notes yet... Start adding 🚀
            </p>
          )}

          {/* NOTES CARDS */}
          {task.map((elem, idx) => (
            <div
              key={idx}
              className='w-48 h-56 p-4 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/10 shadow-xl hover:scale-95 hover:shadow-2xl transition flex flex-col justify-between'
            >
              <h3 className='text-center text-lg font-bold text-white wrap-break-word'>
                {elem.note}
              </h3>

              <p className='mt-2 text-sm text-gray-300 flex-1 overflow-y-auto wrap-break-word'>
                {elem.text}
              </p>

              <button 
                onClick={() => deleteNote(idx)}
                className='bg-red-500 text-xs text-white w-full font-semibold hover:bg-red-600 px-3 py-2 rounded-xl transition active:scale-95'
              >
                Delete
              </button>

            </div>
          ))}

        </div>
      </div>

    </div>
  )
}

export default App