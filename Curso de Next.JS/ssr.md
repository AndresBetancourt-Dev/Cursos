# Server-side Rendering

Sometimes you need to pre-render for every request OR you need access to the request object (e.g for cookies)

NextJs allows you to run "real server side code" as well

export async function getServerSideProps(){
    return {
        props,
        notFound,
        redirect -> destination,
        revalidate is not required because it will always run again
    }
}