import React from 'react'


export const getStaticProps = async () => {
    const res = await fetch('https://postgrid-data-api-server.onrender.com/colors');
    const data = await res.json();
  
    return {
      props: {
        colors: data
      }
    }
  }

const ColorsFetching = ({ colors }) => {
  return (
    <div>ColorsFetching
        <div>
            api color 
            <div>
              {colors && colors.map(color => (
                <div key={color.id}>
                  <p>{color.primaryColor},</p>

                </div>
              ))}
            </div>
          </div>
    </div>
  )
}

export default ColorsFetching