import React from 'react'
import { IComponents } from './Recursion';

const RecursiveComponent: React.FC<IComponents> = ({ children, name }) => {

    return (
        <div className="box">{name}
          {(children ?? []).map((node: IComponents) => <RecursiveComponent key={node.id} {...node}/>)}
        </div>
    )
}

export default RecursiveComponent;