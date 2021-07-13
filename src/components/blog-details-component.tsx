import React from 'react'
import { useParams } from 'react-router';
import DataConverter from '../utils/data-converter';

interface ParamTypes {
    id: string;
}

export default function BlogDetailsComponent() {
    let { id } = useParams<ParamTypes>();

    let blogData = () => {
       let converter =  new DataConverter();
       return converter.getBlogsById(id);
    }

    return (
        <>
        <div className="navigation-header">
            <div>BLOGS</div>                
        </div>
        <div className="okr-container">
            <div className="header">{blogData()?.title}</div>
            <div className="body">{blogData()?.shortDescr}</div>
        </div>
        </>
    )
}
