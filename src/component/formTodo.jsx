function FormTodo() {
  return (
    <>
      <form >
        <div className="grid sm:grid-cols-4 gap-2 sm:gap-4 py-4 px-[6px] m-3">
          <div className="relative w-full sm:col-span-3 gap-x-3">
              <input 
                type="text" 
                className="sm:col-span-3 flex items-center w-full font-serif py-2.5 px-4 rounded-[8px] border-[2px] border-solid border-[#D1D9E2] outline-cyan-500 bg-white overflow-hidden gap-x-2"
                required/>
          </div>
          <button  
            className="bg-cyan-500 font-semibold rounded-md text-white relative w-full py-2.5">ADD</button>
        </div> 
      </form>

      <div className="pb-2">
        <button className="px-2 py-[4px] m-2 bg-cyan-500 text-white rounded-md font-semibold">
          All
        </button>
        <button className="px-2 py-[4px] m-2 bg-cyan-500 text-white rounded-md font-semibold">
          Incomplete
        </button>
        <button className="px-2 py-[4px] m-2 bg-cyan-500 text-white rounded-md font-semibold">
          Completed
        </button>
      </div>
    </>
  );
}

export default FormTodo;