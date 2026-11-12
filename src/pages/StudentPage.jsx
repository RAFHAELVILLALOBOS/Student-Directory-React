import { useState } from "react";
import Header from '../component/Header';
import FormContainer from '../component/FormContainer';
import StudentList from '../component/StudentList';

function StudentPage() {
      const [data,setData] = useState([]);

    const getData = async () => {
      const response = await fetch('http://127.0.0.1:3000/student/all');
        
      if (!response.ok) {
        throw new Error(response.status);
      }

        const data = await response.json();
        return data;
    }

    getData().then((result) => {
    setData(result)
    }).catch((error) => {
        console.log(e)
    })

  return (
    <>

      <Header />
      <FormContainer />
      <StudentList data={data} />

    </>
  )
}

export default StudentPage;