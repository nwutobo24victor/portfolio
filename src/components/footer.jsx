import React from "react"

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <div className="block w-full text-white py-4">
            <div className="flex items-center justify-between">
                <p className="text-sm font-bold text-center">&copy; {year} Victor Charles Nwutobo.</p>

                <p className="flex items-center justify-center gap-4 text-white">
                    <a href="https://github.com/nwutobo24victor" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-all duration-300 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577v-2.234c-3.338.724-4.033-1.61-4.033-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.729.082-.729 1.204.084 1.837 1.236 1.837 1.236 1.07 1.835 2.807 1.305 3.492.997.108-.776.418-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.932 0-1.31.467-2.382 1.235-3.222-.124-.303-.535-1.52.117-3.165 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.403 11.5 11.5 0 0 1 3.003.403c2.29-1.552 3.296-1.23 3.296-1.23.653 1.645.242 2.862.118 3.165.77.84 1.233 1.912 1.233 3.222 0 4.61-2.807 5.63-5.48 5.922.43.37.814 1.103.814 2.222v3.293c0 .32.216.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                    </a>

                    <a href="https://www.linkedin.com/in/victor-nwutobo-091214201" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-all duration-300 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.024-3.037-1.85-3.037-1.853 0-2.136 1.446-2.136 2.939v5.667h-3.554V9h3.414v1.561h.049c.476-.9 1.636-1.848 3.368-1.848 3.598 0 4.264 2.368 4.264 5.452v6.287zM5.337 7.433c-1.144 0-2.07-.927-2.07-2.07s.926-2.07 2.07-2.07 2.07.927 2.07 2.07-.926 2.07-2.07 2.07zM6.76 20.452H3.913V9H6.76v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.729v20.542C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.271V1.729C24 .771 23.2 0 22.225 0z" />
                        </svg>
                    </a>

                    <a href="https://web.facebook.com/nwutobo.victor" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-all duration-300 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
                            <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.797.143v3.24l-1.919.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116c.729 0 1.326-.597 1.326-1.326V1.326C24 .597 23.403 0 22.675 0z" />
                        </svg>
                    </a>

                    <a href="https://x.com/DrVNCharles1" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-all duration-300 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
                            <path d="M20.188 3H23L15.437 10.75 24 21h-6.844l-5.313-6.594L5.75 21H2l8.125-8.875L0 3h7l4.875 6.094L20.188 3zm-2.25 16h1.5L7.688 5h-1.5L17.938 19z" />
                        </svg>
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Footer