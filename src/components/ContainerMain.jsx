export default function ContainerMain({children}){
    return(
        <main className="d-flex justify-content-center">
            <section className="container-main d-flex flex-column gap-2 m-4 p-4 justify-content-center align-items-center border border-black rounded shadow text-center">
                {children}
            </section>    
        </main>
    )
}