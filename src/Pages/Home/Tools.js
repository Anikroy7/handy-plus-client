import React, { useEffect, useState } from 'react';
import ToolsDetail from './ToolsDetail';

const Tools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/tools')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    return (
        <div className=''>
            <h3 className='text-center text-3xl font-semibold'>Our Tools: {tools.length}</h3>
            <div className='grid grid-cols-4 gap-4'>
                {
                    tools.map(tool => <ToolsDetail

                        key={tool._id}
                        tool={tool}
                    ></ToolsDetail>)
                }
            </div>
        </div >
    );
};

export default Tools;