function Zebrai({randColor}) {
    return (
        <>
        <h2 style={{
            color: randColor === "1" ? "red" : "blue"
        }}> Zebrai ir Bebrai
        </h2>
        </>
    )
        }
export default Zebrai;