import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const NUMBER_OF_PROJECTS = 10;

const ClientPage = () => {
  const router = useRouter();

  const loadProjectHandler = (project) => {
    router?.push(`/clients/${router?.query?.id}/${project}`);
  };

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
                pathname: `/clients/[id]/[clientprojectid]`,
                query: {
                  id: router?.query?.id,
                  clientprojectid: project + index,
                },
              }}
            >{`Project ${project + index}`}</Link>
              <button
                style={{marginLeft : 50}}
                onClick={() => loadProjectHandler(project + index)}
                type="button"
              >
                Programatically {project + index}
              </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ClientPage;
