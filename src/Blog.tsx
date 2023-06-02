import './styles/Blog.css'

export default function Blog() {

    return (
        <>
            <h1 className='title'>Home</h1>
            <div className='card' id="bfp" onClick={() => {openLink("./blog/bfp.html")}}>bfp</div>
        </>
    )
}

function openLink(link: string) {
    if(link === "") { return }
    window.open(link, "_self");
} 