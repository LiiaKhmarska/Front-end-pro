import { Header } from "./Header"
export function ErrorPage() {
    return (
        <>
            <Header />
            <div>
                <h1>Something wrong</h1>
                <p style={{fontSize:'45px', color:'navy'}}>404</p>
        </div>
        </>
    )
}