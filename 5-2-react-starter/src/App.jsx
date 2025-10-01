import './App.css'
import StudentCard from './components/StudentCard'

function App() {
  return (
    <div className="app">
      <header className="dashboard-header">
        <h1>Student Information Dashboard</h1>
        <p>View and manage student details</p>
      </header>

      <main className="dashboard-main">
        <div className="cards-container">
          {<StudentCard name="Yazeed" id='202349310' dept="CS"/>}
        </div>
      </main>
    </div>
  )
}

export default App
