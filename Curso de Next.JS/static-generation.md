# Static Generated

Pre-generate a page (with data prepared on the server-side) during build time

Pages are prepared ahead to time and can be cached by the server / CDN serving the app

SSG

export async function getStaticProps(context){
    //Server side code
    {
        props,
        revalidate
    }
}

export async function getStaticPaths(context){
    {
       paths: [],
       fallback: true | false | 'blocking',
    }
}

## Incremental Static Generation

Pre-generate Page
Re-generate it on every request, at most every X seconds

Serve old page if re-generation is not needed yet,
Generate, store and serve, new page otherwise
