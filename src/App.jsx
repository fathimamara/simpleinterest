
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const [Principle, setPrinciple] = useState("")
  const [rate, setRate] = useState("")
  const [year, setYear] = useState("")
  const [isPrinciple, setIsPrinciple] = useState(true)

  const [isRate, setIsRate] = useState(true)
  const [isYear, setIsYear] = useState(true)
  const [Interest, setInterest] = useState(0)

  const validate = (e) => {

    // console.log(e.target.value);
    const { name, value } = e.target
    console.log(name);
    console.log(value);
    //match(regExp)-match -return array when values matches with regular expression
    //else return null
    //^[0-9]$
    // console.log(value.match('^[0-9]*$'));

    if (!!value.match('^[0-9]*$')) {
      if (name == 'principle') {
        setPrinciple(value)
        setIsPrinciple(true)
      }
      else if (name == 'rate') {
        setRate(value)
        setIsRate(true)

      }
      else {
        setYear(value)
        setIsYear(true)

      }

    }

    else {

      if (name == 'principle') {
        setPrinciple(value)
        setIsPrinciple(false)
      }
      else if (name == 'rate') {
        setRate(value)
        setIsRate(false)

      }
      else {
        setYear(value)
        setIsYear(false)

      }
    }


  }
  const handleReset = () => {
    setPrinciple("")
    setRate("")
    setYear("")
    setIsPrinciple(true)
    setIsRate(true)
    setIsYear(true)
    setInterest(0)
  }
  const calculate = () => {
    setInterest((Principle * rate * year) / 100)
  }
  return (
    <>
      <div className='bg-dark d-flex justify-content-center align-items-center' style={{ height: "100vh", width: "100%" }}>
        <div className='bg-light p-4 rounded-2' style={{ width: '500px' }}>
          <h1>Simple Intrest Calculator</h1>
          <p>calculate your simple intrest app</p>
          <div className='bg-warning p-3 mt-4 d-flex justify-content-center align-items-center rounded flex-column' style={{ height: '150px' }}>
            <h1>₹{Interest}</h1>
            <p>Total simple intrest </p>

          </div>
          <div className='my-3'>
            <TextField id="outlined-basic" className='w-100' value={Principle} name='principle' label="Principle amount" variant="outlined" onChange={(e) => validate(e)} />
            {isPrinciple == false && <p className='text-danger'>*Invalid input</p>}
          </div>
          <div className='my-3'>
            <TextField id="outlined-basic" className='w-100' value={rate} name='rate' label="Rate of intrest" variant="outlined" onChange={(e) => validate(e)} />
            {isRate == false && <p className='text-danger'>*Invalid input</p>}
          </div>
          <div className='my-3'>
            <TextField id="outlined-basic" className='w-100' value={year} name='year' label="Year(y)" variant="outlined" onChange={(e) => validate(e)} />
            {isYear == false && <p className='text-danger'>*Invalid input</p>}
          </div>
          <div className='mb-3'>
            <Button disabled={isPrinciple && isRate&& isYear? false: true} variant="contained" style={{ width: '190px' }} color='success' className='p-3' onClick={calculate}>Calculate</Button>
            <Button variant="outlined" style={{ width: '190px' }} color='success' className='p-3' onClick={handleReset}>Reset</Button> </div>

        </div>
      </div>
    </>
  )
}

export default App
