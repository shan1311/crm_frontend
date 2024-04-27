import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EmployeeDetailsCards from './EmployeeDetailsCards';
import Header from './header';
import Side from './side';
import { Box } from '@mui/material';
function EmployeeDetailsComponent() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isSidebar] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://crm-backend-g73o.onrender.com/api/details/details');
                setData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <>
        <div className="app">
         <Side isSidebar={isSidebar}/>
        <main className="content">
        <Box sx={{ marginLeft: '20px' }}>
        <Header title="Employee Details" subtitle="" />
        </Box>   
            <EmployeeDetailsCards data={data} />
        
        </main>
        </div>
     </>
    );
}

export default EmployeeDetailsComponent;
