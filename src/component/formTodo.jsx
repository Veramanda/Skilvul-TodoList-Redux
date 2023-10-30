import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addTodo, editTodo, deleteTodo, checkboxTodo, all, completed, incomplete } from '../redux/reducer/actions';


function FormTodo() {
  const [newTodo, setNewTodo] = useState('');
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);

  const handleAdd = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== '') {
      dispatch(
        addTodo({
          id: Math.floor(Math.random() * 100),
          title: newTodo,
          isDone: false,
        })
      );
    }
  };
  
  const handleInput = (e) => {
    setNewTodo(e.target.value);
  };

  const handleInputEdit = (e) => {
    setEditTitle(e.target.value);
  };

  const handleEdit = (item) => {
    setEditId(item.id);
    setEditTitle(item.title);
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleCheckbox = (id) => {
    dispatch(checkboxTodo(id));
  };
  const handleAll = () => {
    dispatch(all());
  };

  const handleCompleted = () => {
    dispatch(completed());
  };

  const handleIncomplete = () => {
    dispatch(incomplete());
  };

  const updateTodo = () => {
    if (editTitle.trim() !== '') {
      dispatch(
        editTodo({
          id: editId,
          title: editTitle,
        })
      );
      setEditId(null);
      setEditTitle('');
    }
  };

  return (
    <>
      <form  onChange={handleInput} value={newTodo}>
        <div className="grid sm:grid-cols-4 gap-2 sm:gap-4 py-4 px-[6px] m-3">
          <div className="relative w-full sm:col-span-3 gap-x-3">
              <input 
                type="text" 
                className="sm:col-span-3 flex items-center w-full font-serif py-2.5 px-4 rounded-[8px] border-[2px] border-solid border-[#D1D9E2] outline-cyan-500 bg-white overflow-hidden gap-x-2"
                required/>
          </div>
          <button  
            className="bg-cyan-500 font-semibold rounded-md text-white relative w-full py-2.5"
            onClick={handleAdd}>ADD</button>
        </div> 
      </form>

      <div className="pb-2">
        <button className="px-2 py-[4px] m-2 bg-cyan-500 text-white rounded-md font-semibold" onClick={handleAll}>
          All
        </button>
        <button className="px-2 py-[4px] m-2 bg-cyan-500 text-white rounded-md font-semibold" onClick={handleIncomplete}>
          Incomplete
        </button>
        <button className="px-2 py-[4px] m-2 bg-cyan-500 text-white rounded-md font-semibold" onClick={handleCompleted}>
          Completed
        </button>
      </div>

      {todos
        .map((item) => (
          <div key={item.id} className="p-2 border-b-2 border-black bg-cyan-300 m-4">
            {editId === item.id ? (
              <div>
                <input className="scale-[1.3] cursor-pointer pr-5" onChange={() => handleCheckbox(item.id)} checked={item.isDone} type="checkbox" />
                <input className="bg-cyan-300 outline-none " type="text" value={editTitle} onChange={handleInputEdit} />
                <button className="justify-items-end px-2 py-[4px]  bg-cyan-500 text-white rounded-md font-semibold" onClick={updateTodo}>
                  Update
                </button>
              </div>
            ) : (
              <div className="flex justify-between">
                <div className="flex justify-between px-1">
                  <input className="pl-2 scale-[1.3] cursor-pointer" onChange={() => handleCheckbox(item.id)} checked={item.isDone} type="checkbox" />
                  <p className="pl-5 font-serif" style={item.isDone===true?{textDecoration:"line-through"}:{textDecoration:'none'}}>{item.title} </p>
                </div>
                <div className="flex justify-end">
                  <span className="pr-2 cursor-pointer" onClick={() => handleEdit(item)}>✏️</span>
                  <span className="cursor-pointer" onClick={() => handleDelete(item.id)}>❌</span>
                </div>
              </div>
            )}
          </div>
        ))}
    </>
  );
}

export default FormTodo;