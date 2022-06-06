import { useRouter } from "next/router";
import React from "react";

const ClientProjectPage = () => {
  const router = useRouter();

  return (
    <>
      <h1>Client Project Page  #{router.query.id} </h1>
      <h2>Project ID = {router.query.clientprojectid}</h2>
    </>
  );
};

export default ClientProjectPage;
