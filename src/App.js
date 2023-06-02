import logo from './logo.svg';
import './App.css';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import NepaliDate from 'nepali-date-converter';

const datesToAddClassTo = [{"09-02-2080": "Dad's bday"}, {"29-02-2080": "Asmi bday"}, {"02-03-2080": "Mom's bday"}, {"28-05-2080": "Father's day"}, {"12-11-2080": "Dada's bday"},  {"11-11-2080": "Sanu's bday"}];

function tileClassName({ date, view }) {
  // Add class to tiles in month view only
  if (view === 'month') {
    // Check if a date React-Calendar wants to check is on the list of dates to add class to
    if (datesToAddClassTo.find(dDate => (new NepaliDate(date) - new NepaliDate(Object.keys(dDate)[0])) === 0)) {
      return 'react-calendar__tile--event';
    }
  }
}


function tileContent({date, view}) {
  const nepaliDate = new NepaliDate(date).format('DD MMMM')
  if (view === 'month') {
    var key = '';
    var val = '';
    // Check if a date React-Calendar wants to check is on the list of dates to add class to
    if (datesToAddClassTo.find(dDate => {
      key = Object.keys(dDate)[0];
      val = Object.values(dDate)[0];
      const isEvent = (new NepaliDate(date) - new NepaliDate(key)) === 0;
      return isEvent;
    })) {
      return (<><div className="nepali-date">{nepaliDate}</div><div className='event-name'>{val}</div></>)
    } else {
      return (<div className="nepali-date">{nepaliDate}</div>)
    }
  }

}

function App() {
  return (
    <div className="App">
      <Calendar
        tileContent={tileContent} 
        tileClassName={tileClassName}
      />
    </div>
  );
}

export default App;
