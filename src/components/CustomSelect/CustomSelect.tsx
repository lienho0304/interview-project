import React, { useState, useEffect } from 'react';
import './CustomSelect.css';

interface Option {
  label: string;
  value: string;
}

interface CustomSelectProps {
  options: Option[];
  value: Option[];
  onChange: (selectedOptions: Option[]) => void;
  placeholder?: string;
  index: number;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, value, onChange, placeholder, index }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOptions, setSelectedOptions] = useState<Option[]>(value);
  const [customOption, setCustomOption] = useState<string>('');
  const [isEdit, setIsEdit] = useState<boolean>(false);

  useEffect(() => {
    setSelectedOptions(value);
  }, [value]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (!(event.target as HTMLElement).closest(`.custom-select${index}`)) {
      setIsOpen(false);
    }
  };

  const handleOptionClick = (option: Option) => {
    const newSelectedOptions = selectedOptions.some(o => o.value === option.value)
      ? selectedOptions.filter(o => o.value !== option.value)
      : [...selectedOptions, option];
    setSelectedOptions(newSelectedOptions);
    onChange(newSelectedOptions);
  };

  const handleCustomOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomOption(e.target.value);
    const updatedOptions = value.filter(o => o.value !== 'other');
    if (e.target.value.trim()) {
      updatedOptions.push({ label: e.target.value, value: 'other' });
    }
    onChange(updatedOptions);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative">
      <div className={`select-input custom-select${index}`} onClick={toggleDropdown}>
        <div>{selectedOptions.length ? selectedOptions.map(option => option.label).join(', ') : placeholder}</div>
        <div>
          <svg className={`arrow-icon w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      {isOpen && (
        <div className={`select-dropdown custom-select${index}`}>
          <div className="p-2">
            {options.map(option => {
              if (option.value === 'other') return (
                <div className={`dropdown-item ${selectedOptions.some(o => o.value === option.value) ? 'bg-gray-100' : ''}`} onClick={() => setIsEdit(true)}>
                  {isEdit ? <input
                    type="text"
                    placeholder="Other"
                    value={customOption}
                    onChange={handleCustomOptionChange}
                    className={`w-full  focus:outline-none ${selectedOptions.some(o => o.value === option.value) ? 'bg-gray-100' : ''}`}
                  /> :
                    <span>{option.label}</span>}

                  <input
                    type="checkbox"
                    checked={value.some(o => o.value === 'other')}
                    readOnly
                    className="h-5 w-5"
                  />
                </div>);
              return (
                <div
                  key={option.value}
                  className={`dropdown-item hover:bg-gray-100 ${selectedOptions.some(o => o.value === option.value) ? 'bg-blue-50' : ''}`}
                  onClick={() => handleOptionClick(option)}
                >
                  <span>{option.label}</span>
                  <input
                    type="checkbox"
                    checked={selectedOptions.some(o => o.value === option.value)}
                    readOnly
                    className="h-4 w-4"
                  />
                </div>
              );
            })}
          </div>
        </div>
      )
      }
    </div >
  );
};

export default CustomSelect;
