import React from 'react';
import RecursiveComponent from './RecursiveComponent';

export interface IComponents {
    id: number,
    name: string,
    children?: IComponents[]
}
  
export const components: IComponents = {
    id: 1,
    name: "One",
    children: [{
      id: 2,
      name: "Two",
      children: [{
          id: 3,
          name: "Three"
        }]
  }]
};

const Recursion: React.FC = () => {

    return (
        <div className="App-wrapper">
            <RecursiveComponent {...components} />
        </div>
    )
}

export default Recursion;