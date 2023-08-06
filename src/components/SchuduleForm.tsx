import { useState } from 'react';

export const SchuduleForm = () => {
  const specialty = [
    { value: '', text: '-> Choose a specialty <-', disabled: true },
    { value: 'SIT', text: 'Software and Internet technologies' },
    { value: 'KST', text: 'Computer systems and technology' },
  ];

  const groups = [
    { value: '', text: '-> Choose a group <-', disabled: true },
    { value: 1, text: 'I' },
    { value: 2, text: 'II' },
    { value: 3, text: 'III' },
    { value: 4, text: 'IV' },
    { value: 5, text: 'V' },
  ];
  const courses = [
    { value: '', text: '-> Choose a course <-', disabled: true },
    { value: 1, text: '1' },
    { value: 2, text: '2' },
    { value: 3, text: '3' },
    { value: 4, text: '4' },
    { value: 5, text: '5' },
  ];
  const handleChangeSpecialty = (event: any) => {
    setSelectedSpecialty(event.target.value);
  };
  const handleChangeGroup = (event: any) => {
    setSelectedGroup(event.target.value);
  };
  const handleChangeCourse = (event: any) => {
    setSelectedCourse(event.target.value);
  };

  const [selectedSpecialty, setSelectedSpecialty] = useState('SIT');
  const [selectedGroup, setSelectedGroup] = useState(2);
  const [selectedCourse, setSelectedCourse] = useState(1);
  return (
    <div className="flex min-h-screen justify-center items-center ">
      <div className="flex bg-slate-400 w-auto p-5  justify-center rounded-lg">
        <form
          action="
          "
        >
          <div className="flex flex-col gap-5">
            <div className="flex gap-5 justify-center w-full">
              <div className="flex flex-col gap-1">
                <label
                  htmlFor=""
                  className="tracking-widest font-lilita text-lg"
                >
                  Specialty
                </label>
                <select
                  value={selectedSpecialty}
                  onChange={handleChangeSpecialty}
                  className="p-1 w-72"
                >
                  {specialty.map((option) => (
                    <option
                      disabled={option.disabled}
                      key={option.value}
                      value={option.value}
                    >
                      {option.text}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor=""
                  className="tracking-widest font-lilita text-lg"
                >
                  Group
                </label>
                <select
                  value={selectedGroup}
                  onChange={handleChangeGroup}
                  className="p-1 outline-none border-none w-72"
                >
                  {groups.map((option) => (
                    <option
                      disabled={option.disabled}
                      key={option.value}
                      value={option.value}
                    >
                      {option.text}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor=""
                  className="tracking-widest font-lilita text-lg"
                >
                  Course
                </label>
                <select
                  value={selectedCourse}
                  onChange={handleChangeCourse}
                  className="p-1 w-72"
                >
                  {courses.map((option) => (
                    <option
                      disabled={option.disabled}
                      key={option.value}
                      value={option.value}
                    >
                      {option.text}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button
              className="bg-indigo-500 text-white active:bg-indigo-600 font-bold uppercase text-xl px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
            >
              Check schudule
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
