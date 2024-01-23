const Contact=()=>{
    return(
    
    <div className="w-6/12 m-auto">
        <h1 className="p-4 m-4">Contact Us</h1>
        <div>
        <form>
            <input className=" p-2 m-2 border border-black "placeholder="name" ></input>
            <input className=" p-2 m-2 border border-black"placeholder="description" ></input>
            <button className="bg-black text-white p-2 m-2 rounded-lg">Submit</button>
        </form>
        </div>
    </div>
    )
}
export default Contact;