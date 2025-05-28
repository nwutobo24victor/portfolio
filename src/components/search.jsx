import React from "react"

const Search = ({ searchTerm, setSearchTerm }) => {


    return (
        <div className="lg:w-lg w-full p-3">
            <div className="bg-[#0A081F] text-white p-3 rounded-lg w-full flex gap-2">
                <span className="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        fill="currentColor" viewBox="0 0 24 24" >
                        <path d="M10.5 19c1.98 0 3.81-.69 5.25-1.83L20 21.42l1.41-1.41-4.25-4.25a8.47 8.47 0 0 0 1.83-5.25c0-4.69-3.81-8.5-8.5-8.5S2 5.81 2 10.5 5.81 19 10.5 19m0-15c3.58 0 6.5 2.92 6.5 6.5S14.08 17 10.5 17 4 14.08 4 10.5 6.92 4 10.5 4"></path>
                    </svg>
                </span>
                <input type="text" className="w-full border-0 focus:outline-none" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
            </div>
        </div>
    )
}

export default Search