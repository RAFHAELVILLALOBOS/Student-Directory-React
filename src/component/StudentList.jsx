const StudentList = ({ data }) => {
  return (
      
      <section id="studentList">
      {data.map((student) => (
        <article key={student.id}>
          <h1>{student.name}</h1>
          <p>{student.program}</p>
          <button>Delete</button>
        
        </article>
      ))}
      
         
        <div className="card-grid" id="grid"></div>
        
    </section>
    
  )
}

export default StudentList;