// DataGridComponent.tsx
import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef, GridRowModel } from '@mui/x-data-grid';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const DataGridComponent: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Title', width: 300 },
    { field: 'body', headerName: 'Body', width: 600 },
  ];

  return (
    <div style={{ border: '1px solid #ddd', padding: 20, marginBottom: 20 }}>
      <h2>DataGrid Component</h2>
      <div style={{ height: 200, width: '100%' }}>
        <DataGrid rows={posts as GridRowModel[]} columns={columns} />
      </div>
    </div>
  );
};

export default DataGridComponent;
