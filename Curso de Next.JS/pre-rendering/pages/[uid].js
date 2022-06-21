import React from "react";

const UserIdPage = ({id}) => {
  return <div>The User Id is : {id}</div>;
};

export default UserIdPage;

export async function getServerSideProps(context){
    const {params} = context;
    const userId = params.uid;

    return {
        props : {
            id : 'user-id-'+userId
        }
    }
}