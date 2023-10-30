import FormTodo from "./component/formTodo"


function App() {

  return (
    <div className="justify-center text-center m-4">
      <h1 className="text-[32px] font-bold ">MY TODO LIST</h1>
      <div className="flex justify-center">
        <div className="w-full max-w-[700px] rounded-md bg-slate-200 mt-6">
          <FormTodo/>
        </div>
      </div>
    </div>
  )
}

export default App
