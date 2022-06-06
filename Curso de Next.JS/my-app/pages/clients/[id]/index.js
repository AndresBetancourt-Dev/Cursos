import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const NUMBER_OF_PROJECTS = 10;

const ClientPage = () => {
  const router = useRouter();
  return (
    <>
      <h1>
        Client Name :{" "}
        <span style={{ textTransform: "capitalize" }}>{router.query.id}</span>
      </h1>
      <ul>
        {[...Array(NUMBER_OF_PROJECTS)].fill(1).map((project, index) => (
          <li key={project + index}>
            <Link
              href={{
                pathname: "/clients/[id]/[clientprojectid]",
                query: {
                  id: router.query.id,
                  clientprojectid: project + index,
                },
              }}
            >{`Project ${project + index}`}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ClientPage;
