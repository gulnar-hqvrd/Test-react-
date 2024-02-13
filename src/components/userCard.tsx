import React from "react";

interface UserCardInterface {
    gender?: string;
    name: {
      title: string;
      first: string;
      last: string;
    };
    email?: string;
    phone?: string;
    cell?: string;
    id?: {
      name: string;
      value: string;
    };
  
}

type UserProps1 = {
    data:UserCardInterface
}

export const UserCard: React.FC<UserProps1> = ({data}) =>{
    return (
        <>
        <div className="card">
        <div className="container">
            {data.id && <p>ID : {`${data.id.name} ${data.id.value}`}</p>}
            <p>
                Name : {data.name.title} {data.name.first} {data.name.last}{" "}
            </p>

            {data.gender && <p>Gender : {data.gender}</p>}
            {data.phone && <p>Phone : {data.phone}</p>}
            {data.cell && <p>Cell Phone : {data.cell}</p>}
            {data.email && <p>Email : {data.email}</p>}
        </div>
        </div>
        </>
    )
}