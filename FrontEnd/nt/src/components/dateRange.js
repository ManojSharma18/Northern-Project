import { useState} from 'react';
import { DateRange } from 'react-date-range';
import format from 'date-fns/format';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { addDays } from 'date-fns';
import ContainedButtons from './button';

const DateRangeComp = ({ id, status }) => {


    const [range, setRange] = useState(
        [
            {
                startDate : new Date(),
                endDate : addDays(new Date(),7),
                key : 'selection'
            }
        ]
    )


      
    const [open , setOpen] = useState(true)



    const handleRangeChange = (updatedRange) => {
        setRange([updatedRange.selection]);
      };
      
      const handleReset = (event) => {
        event.preventDefault();
        setRange([
          {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
          },
        ]);
      };

      const handleClick =  (e) => {
        e.preventDefault();
      
        
        const start_date = range[0].startDate;
        const end_date = range[0].endDate;
      
        // Create an array of dates between the start and end dates
        const dates = [];
        let currentDate = start_date;
        while (currentDate <= end_date) {
          dates.push(format(currentDate, "yyyy-MM-dd"));
          currentDate = addDays(currentDate, 1);
        }
      
        console.log("Selected dates:", dates[0] , dates[dates.length-1]);
      
      const date_range={id,start_date,end_date,status}
      console.log(date_range)
      fetch("http://localhost:8080/date_range/adds",{
          method:"POST",
          headers:{"Content-type":"application/json"},
          body:JSON.stringify(date_range)
      }).then(() =>{
          console.log("new employee added",date_range)

          window.location.reload();
          
      }).catch((error) => console.error(error));
      };
    
    
      
    return (
      <div > 
      <div style={{ background:'skyblue'}} >
        <div className='calenderWrap'>
        <input
        value={`${format(range[0].startDate,"yyyy-MM-dd")} to ${format(range[0].endDate,"yyyy-MM-dd")}`}
        onClick={ () => setOpen(open => !open)}
        readOnly
        />

        { open && <DateRange 
        onChange={handleRangeChange}
        editableDateInputs={true}
        moveRangeOnFirstSelection = {false}
        ranges={range}
        months={1}
        direction='horizontal'
  />}
  
  </div>
  <br/>
  <button type='submit' onClick={handleClick} className='form'>SUBMIT</button>
      <button type="submit" className='form'>RESET</button>
  </div>
  </div>
  );
  };

  export default DateRangeComp;
