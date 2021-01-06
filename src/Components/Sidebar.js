import React from 'react';
import './Sidebar.css';
import FiberManuRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sibebar__header">
                <div className="sidebar__info">
                    <h2>My work space</h2>
                    <h3>
                        <FiberManuRecordIcon />
                        Bishesh
                    </h3>
                </div>
                <CreateIcon />
            </div>
           
        </div>
    )
}

export default Sidebar
