import Link from "next/link";
import React from "react";

const ClientsPage = () => {
  const clients = [
    { id: "andres", name: "Andrés" },
    { id: "max", name: "Maximillian" },
  ];
  return (
    <>
      <h1>Clients Page</h1>
      <ul>
        {clients.map(({ id, name }) => (
          <li key={id}>
            <Link href={`/clients/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ClientsPage;
