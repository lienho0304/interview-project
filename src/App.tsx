import { Introduction } from './components/Introduction';
import Form from './components/Form/Form';
import './App.css';


function App() {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className='hidden lg:block w-1/4 bg-[#222323] text-white p-10'>
        <Introduction />
      </div>
      <div className='w-full lg:w-3/4 flex flex-col'>
        <div className='flex flex-1 ml-auto px-20 pt-10 text-xs items-center'>
          <span className='mr-2'>Logout</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-profile w-4 h-4zz">
            <circle cx="12" cy="7" r="4" />
            <path d="M5 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2" />
          </svg>
        </div>
        <Form />
      </div>
    </div>
  );
}

export default App;
