import React from 'react';

const RecursiveComponent = ({ data }) => {
    return (
      <div style={{ paddingLeft: "20px" }}>
        {data.map((parent) => {
          return (
            <div key={parent.name}>
              {/* rendering folders */}
              {parent.type === "folder" && <button>{parent.name}</button>}
              
              {/* rendering files */}
              {parent.type === "file" && <span>{parent.name}</span>}
              
              <div>
                {parent.files && <RecursiveComponent data={parent.files} />}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

export default RecursiveComponent;