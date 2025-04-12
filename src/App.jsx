import { useState, useEffect } from 'react'
import './App.css'
import PocketBase from 'pocketbase'

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
      <div className="container">
        <h1 className="title">Expense Categories</h1>
        <table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Category Name</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id}>
                <td>{category.id}</td>
                <td>{category.name}</td>
                <td className="color-cell">
                  <span className="color-swatch" style={{backgroundColor: category.color}}></span>
                  {category.color}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
