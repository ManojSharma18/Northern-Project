import { useState} from 'react';
import { Calendar } from 'react-date-range';
import format from 'date-fns/format';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import DateRange from './dateRange';
import DateRangeComp from './dateRange';
import { AppBar, Button } from '@mui/material';
import ContainedButtons from './button';
import DatePicker from 'react-datepicker';




  
  const CalendarComp = () => {
  const [date, setCalendar] = useState('')
  const [id, setId] = useState('');
  const [status, setStatus] = useState('');
  


  const [open , setOpen] = useState(true)
    const handleSelect = (date) => {
      setCalendar(format(date,'yyyy-MM-dd'))
    }

    const handleClick =(e) => {
      e.preventDefault()
      const employee={id,date,status}
      console.log(employee)
      fetch("http://localhost:8080/employee/add",{
          method:"POST",
          headers:{"Content-type":"application/json"},
          body:JSON.stringify(employee)
      }).then(() =>{
          console.log("new employee added",employee)

          window.location.reload();
          
      })
  }

  
  const handleRadioChange = (event) => {
    setStatus(event.target.value);
  };

  const handleDateChange = (event) => {
    setCalendar(event.target.value);
  };

  

  return (
    <form  >
    <div className='container'> 
    <div style={{ float: 'left' , background:'skyblue'}} className='column'  >
      <div className='calenderWrap'>
      <h3 >Select date</h3>
      <input
      value={date}
      onClick={ () => setOpen(open => !open)}
      onChange={handleDateChange}
      />
  
      {open && <Calendar 
date = {new Date() }
onChange = {handleSelect}
/>}
</div>
<br/>
      <button type='submit' onClick={handleClick} className='form'>SUBMIT</button>
      <button type="submit" className='form'>RESET</button>
<br/> <br/>
<hr/>
<h3>Select date range</h3>
<DateRangeComp id={id} status={status} />
</div>
    <div style={{background: 'skyblue' }}  className='column'>
       <h1 className='head'>NORTHERN TRUST</h1>
       <img src="th.jpg" alt='Northern Trust logo' height="150px" width="200px"/>
     </div>
     <div className='column'  style={{background: 'skyblue' }}>
         <h1 className='head'>Employee Details</h1>
         Employee Id <input type="text" placeholder="Employee id" name="Enter Name" value={id} onChange={(event) => setId(event.target.value)}/><br/>
         <h3> * Compliance Type</h3>
         <div className='align'>
         <div className='align'>
         <label>
         <input type="radio" name="comp" value="Work From Home" checked={status ==="Work From Home"  } onChange={handleRadioChange} />
         WFH
        </label>
        </div>
 <div className='align'>
   <label>
     <input type="radio" name="comp"  value="Work From Office" checked={status === "Work From Office"} onChange={handleRadioChange}/>
     WFO
   </label>
 </div>
 <div>
   <label>
     <input type="radio" name="comp" value=" sick leave" checked={status === " sick leave"} onChange={handleRadioChange}/>
     sick leave
   </label>
 </div>
 <div>
   <label>
     <input type='radio' name='comp' value=" Anual leave" checked={status === " Anual leave"} onChange={handleRadioChange}/>
     Anual leave
   </label>
 </div>
 <div>
   <label>
     <input type='radio' name='comp' value="Bank Holiday" checked={status === "Bank Holiday" } onChange={handleRadioChange}/>
     Bank Holiday
   </label>
 </div>
         <h5 className='red'>Compliance Type is Required</h5>
         <h3 align='center'> * Date Range</h3>
         <div className='align'>
           <div>
           <label><input type="radio"  name="comp1" value="Date"/>Date</label>
             </div>
         <div>
         <label><input type="radio" name="comp1" value="Weekday_Range"/> Weekday_Range</label>
         </div>
         <h5 className='red'>Date Range is Required</h5>
         </div>
        </div>
     </div>
    </div>
    </form>
   );
 };



export default CalendarComp;
