import { useState, useEffect } from 'react'
import './App.css'
import  PocketBase from 'pocketbase'

function App() {
  const pb = new PocketBase('http://127.0.0.1:8090');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchdata(){
      const data = await pb.collection('categories').getFullList();
      console.log(data);
      setCategories(data);
    }
    fetchdata();
  }, []);

  return (
    <>
    <table className='table'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Color</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((category) => (
          <tr key={category.id}>
            <td>{category.id}</td>
            <td>{category.name}</td>
            <td style={{backgroundColor: category.color}}>{category.color}</td>
          </tr>
        ))}
      </tbody>
    </table>


    </>
  )
}

export default App
