import React from "react"

const Iframe = () => {


    return (
        <div className="block w-full">
            <iframe className="w-full min-h-[500px]" src="https://www.youtube.com/embed/477AMj7NHjw?si=kDnn2wXZnhdgtfnz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    )
}

export default Iframe