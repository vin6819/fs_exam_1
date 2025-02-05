import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [notes, setNotes] = useState([])
  const [curr, setCurr] = useState('');

  async function addNote() {
    if (curr === '') {
      return;
    }
    const content = {
      curr,
      date: Date.now()
    }
    try {
      const response = await axios.post('http://localhost:3000/savenote', content)
      console.log(response)
    } catch (error) {
      console.log(error);
    }
    
    setNotes([...notes, content]);
    setCurr('')
  }


  return (
    <>
      <div className='flex justify-between'>
        <h1>Notes App</h1>
        <button>Home</button>
        <button className='border-2 px-3 py-1'>Login</button>
      </div>
      <div className='h-auto flex m-3 flex-wrap justify-evenly'>
        {notes.map((note, idx) => (
          <div key={idx} className='m-1 border-2 p-2 rounded-md w-1/4 h-auto'>
            {note.curr}
          </div>
        ))}
      </div>
      <div className='border-2 p-4 rounded-lg'>
      <h1 className='text-lg mb-5'>Add Note</h1>
      <div className='flex justify-around'>
        <div className='w-1/2'>
        <textarea name="note_text" id="note_text" className='px-3 py-2 h-32 w-full overflow-scroll' onChange={(e) => setCurr(e.target.value)} value={curr}></textarea>
        <button className='border-2 px-3 py-1 mt-2' onClick={addNote}>ADD</button>
        </div>
        <h1 className='text-xl'>OR</h1>
        <div className='w-1/3'><button className='border-2 px-3 py-1'>Start Recording</button></div>
      </div>
      </div>
    </>
  )
}

export default App
