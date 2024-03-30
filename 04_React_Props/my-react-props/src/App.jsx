import Student from "./Student.jsx";

function App() {
  return (
    <>
      <Student name="Sougata" age={20} isStudent={true} />
      <Student name="Ayon" age={21} isStudent={true} />
      <Student name="Sayan" age={40} isStudent={false} />
      <Student />
    </>
  );
}

export default App
