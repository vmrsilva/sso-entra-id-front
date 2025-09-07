import { useState } from 'react';
import { useStudents } from '../hooks/use-student'
import { Forecast } from '../services/student-api'
// import StudentFormModal from '../components/students/student-form-modal';


function StudentsPage() {
  // const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  // const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  // const [selectedStudent, setSelectedStudent] = useState<Forecast | null>(null);
  const { data: students, isLoading, error } = useStudents()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Ocorreu um erro: {error.message}</div>

  // const handleCreateClick = () => {
  //   setSelectedStudent(null);
  //   setIsFormModalOpen(true);
  // };

  // const handleEditClick = (student: Forecast) => {
  //   setSelectedStudent(student);
  //   setIsFormModalOpen(true);
  // };

  // const handleDeleteClick = (student: Forecast) => {
  //   setSelectedStudent(student);
  //   setIsDeleteModalOpen(true);
  // };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Temperaturas</h1>
      {/* <button className="btn btn-primary mb-4" onClick={handleCreateClick}>
        Create New Student
      </button> */}
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>Data</th>
              <th>Situação</th>
              <th>Cº</th>
              <th>Fº</th>

            </tr>
          </thead>
          <tbody>
            {students?.map((forecast: Forecast) => (
              <tr key={forecast.id}>
                  <td>{forecast.id}</td>
                <td>{forecast.date.toString()}</td>
                <td>{forecast.summary}</td>
                <td>{forecast.temperatureC}</td>
                <td>{forecast.temperatureF}</td>
{/*   
                <td>
                  <button className="btn btn-primary mr-2" onClick={() => handleEditClick(forecast)}>Edit</button>
                  <button onClick={() => handleDeleteClick(forecast)}>Delete</button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <StudentFormModal
        isOpen={isFormModalOpen}
        onClose={() => setIsFormModalOpen(false)}
        student={selectedStudent}
      /> */}
      {/* <StudentDeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        forecast={selectedStudent}
      /> */}
    </div>
  )
}

export default StudentsPage