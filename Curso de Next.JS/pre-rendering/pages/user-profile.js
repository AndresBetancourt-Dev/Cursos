import React from "react";

const UserProfilePage = (props) => {
  return <h1>{props.username}</h1>;
};

export default UserProfilePage;

/**
 *
 * Only difference with StaticProps is
 * the timing, revalidation
 * and the properties within the context
 */


export async function getServerSideProps(context) {
  const { params, req, res } = context;

  console.log("Server side code run");
  /**
   * Access to full request,response objects aswell -> context
   */

  /**
   * Only executes on the server after deployment
   * Not statically generated
   */
  return {
    props: {
      username: "Andrés",
    },
  };
}
