

import React from 'react'

export default function Class() {

    const CardClick = async () => {
        try {
          const result = await fetch("http://localhost:7000/info/:id", {
            method: "post",
            mode: "cors",
            headers: {
              "Accept": "application/json",
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              classname: `${className}`,
              subject: `${subject}`,
              roomlink: `${roomLink}`,
              section: `${section}`,
              startDate: `${startDate}`,
              endDate: `${endDate}`
            })
          });
          console.log("Result:" + result)
        } catch (e) {
          console.log(e)
        } 
      };

    return (
        <div>
       <Card
              title={classname}
              ImageUrl={"https://etimg.etb2bimg.com/photo/75729614.cms"}
              body={subject}
            />
       </div>
    )
}
