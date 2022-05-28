import React, { useEffect, useState } from 'react';
import ToolsDetail from './ToolsDetail';

const Tools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('https://morning-thicket-25612.herokuapp.com/tools')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    return (
        <div className='px-12 mt-12'>
            <h3 className='text-center text-3xl font-semibold mb-10'>Our Tools: {tools.length}</h3>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-4'>
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