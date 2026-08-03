import React, { useEffect, useState } from 'react';

// Minimal country data for selector
const countries = [
  { code: 'AU', name: 'Australia', dial: '+61', flag: '🇦🇺' },
  { code: 'US', name: 'United States', dial: '+1', flag: '🇺🇸' },
  { code: 'GB', name: 'United Kingdom', dial: '+44', flag: '🇬🇧' },
  { code: 'CA', name: 'Canada', dial: '+1', flag: '🇨🇦' },
  { code: 'NZ', name: 'New Zealand', dial: '+64', flag: '🇳🇿' },
  { code: 'IN', name: 'India', dial: '+91', flag: '🇮🇳' },
  // Add more as needed
];

type Country = typeof countries[0];

type PhoneInputProps = {
  name: string;
  value: string;
  onChange: (value: string) => void;
};

export const PhoneInput: React.FC<PhoneInputProps> = ({ name, value, onChange }) => {
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);
  const [search, setSearch] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  // Detect default country on mount based on browser locale
  useEffect(() => {
    const locale = typeof navigator !== 'undefined' ? navigator.language : '';
    const countryCode = locale.split('-')[1];
    const found = countries.find(c => c.code === countryCode);
    if (found) setSelectedCountry(found);
    else setSelectedCountry(countries[0]);
  }, []);

  // Extract the part after dialing code for display
  const numberPart = value?.replace(selectedCountry.dial, '') || '';

  const handleSelect = (c: Country) => {
    // Preserve digits when switching country
    const digits = numberPart.replace(/\D/g, '');
    const newValue = `${c.dial}${digits}`;
    setSelectedCountry(c);
    onChange(newValue);
    setShowDropdown(false);
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, '');
    onChange(`${selectedCountry.dial}${digits}`);
  };

  const filtered = countries.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) || c.dial.includes(search)
  );

  return (
    <div className="flex items-center gap-2">
      {/* Country selector */}
      <div className="relative">
        <button
          type="button"
          onClick={() => setShowDropdown(!showDropdown)}
          className="flex items-center gap-1 rounded-2xl border border-foreground/15 bg-background px-3 py-2 text-sm focus:outline-none focus:border-foreground/40"
        >
          <span>{selectedCountry.flag}</span>
          <span>{selectedCountry.dial}</span>
          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.08 1.04l-4.25 4.65a.75.75 0 01-1.08 0l-4.25-4.65a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>
        </button>
        {showDropdown && (
          <div className="absolute left-0 z-10 mt-1 w-56 max-h-60 overflow-auto rounded-2xl border border-foreground/15 bg-background shadow-lg">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full rounded-2xl border-b border-foreground/15 bg-background px-3 py-2 text-sm focus:outline-none"
            />
            <ul className="py-1">
              {filtered.map(c => (
                <li key={c.code}>
                  <button
                    type="button"
                    onClick={() => handleSelect(c)}
                    className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-foreground/5"
                  >
                    <span>{c.flag}</span>
                    <span>{c.name} ({c.dial})</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {/* Phone number input */}
      <input
        id={name}
        name={name}
        type="tel"
        value={numberPart}
        onChange={handleNumberChange}
        placeholder="123 456 7890"
        className="flex-1 rounded-2xl border border-foreground/15 bg-background px-5 py-4 text-lg outline-none placeholder:text-foreground/40 focus:border-foreground/40"
      />
    </div>
  );
};
