import { TextField } from '@mui/material';
import React from 'react'
import { BsFillSearchHeartFill } from 'react-icons/bs';
import { useFormik } from 'formik';

const SearcBar = () => {
    const {
        handleChange,
        handleBlur,
        values,
        handleSubmit,
        resetForm,
      } = useFormik({
        initialValues: {
          email: '',
        },
        onSubmit: async (data) => {
          try {
            console.log(data);
            resetForm();
            // You can handle form submission here
          } catch (error) {
            // Handle any errors here
          }
        },
      });
    
      const [searchQuery, setSearchQuery] = useState('');
    
      const handleSearch = () => {
        // Check if the searchQuery is not empty before performing the search
        if (searchQuery.trim() !== '') {
          // Perform your search action here
        }
      };
    
      const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
      };
    
      const handleKeyDown = (e) => {
        // Listen for the Enter key press (key code 13) and trigger search
        if (e.key === 'Enter') {
          handleSearch();
        }
      };
 
    
        
      
        return (
          <div>
            <div className="hidden lg:block">
              <form className="" onSubmit={handleSubmit}>
                <TextField
                  label="Enter Your Email Address"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="email"
                  InputLabelProps={{ style: { color: 'white' } }} // Change the label color to white
                  InputProps={{ classes: { input: 'white-input' } }} // Apply a CSS class for input styling
                />
                <div>
                  <button
                    type="submit"
                    className="bg-[#FF8601] rounded-[50px] lg:rounded-full p-4 mt-4 font-medium lg:w-full text-white"
                  >
                    Subscribe Now
                  </button>
                </div>
              </form>
              <button
                type="button"
                onClick={handleSearch}
                className="absolute right-0 top-0 mt-2 mr-2"
              >
                <BsFillSearchHeartFill className="text-xl mt-1" />
              </button>
            </div>
            <div className="block lg:hidden">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="py-2 px-4 border border-gray-300 rounded-[30px] w-28 focus:outline-none focus:border-black"
                  value={searchQuery}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                />
                <button
                  onClick={handleSearch}
                  type="button"
                  className="absolute right-0 top-0 mt-1 mr-2 p-2 rounded-full  hover:bg-gray-300 transition duration-300"
                >
                  <BsFillSearchHeartFill className="text-lg" />
                </button>
              </div>
            </div>
          </div>
        );
      

}

export default SearcBar