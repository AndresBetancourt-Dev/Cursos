import React from "react";

const UserIdPage = ({id}) => {
  return <div>The User Id is : {id}</div>;
};

export default UserIdPage;

/**
 * 
 * Allows that the pre-created html it's dynamic
 */
export async function getServerSideProps(context){
    const {params} = context;
    const userId = params.uid;

    return {
        props : {
            id : 'user-id-'+userId
        }
    }
}