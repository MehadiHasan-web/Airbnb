import { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa'; // Default icon for users

const people = [
  {
    id: 1,
    name: 'Tom Cook',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    name: 'Wade Cooper',
    avatar: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQIOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // Add more people as needed
];

const Example = () => {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);

  const handleSelectPerson = (person) => {
    setSelectedPerson(person);
  };

  return (
    <div className="user-selector">
      <div className="user-display">
        {selectedPerson.avatar ? (
          <img src={selectedPerson.avatar} alt={selectedPerson.name} className="user-avatar" />
        ) : (
          <FaUserCircle className="user-avatar" size={32} /> // Default icon if no avatar provided
        )}
        <span className="user-name">{selectedPerson.name}</span>
      </div>
      <div className="user-options"> {/* Placeholder for future dropdown/selection options */} </div>
    </div>
  );
};

export default Example;