import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-50 py-10 shadow-lg border-t border-gray-200">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 space-y-8 md:space-y-0">
                {/* Logo and Copyright Section */}
                <div className="text-center md:text-left">
                    <h1 className="text-3xl font-bold text-gray-800">
                        <span className="inline-block  py-2">
                            Job<span className="text-blue-500">Hub</span>
                        </span>
                    </h1>
                    <div className="mt-4 text-gray-500 text-sm">
                        © 2024 JobHub. All rights reserved.
                    </div>
                </div>

                {/* Social Media Links */}
                <div className="flex space-x-6">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-100 rounded-full text-gray-400 hover:text-white hover:bg-emerald-400 transition-colors duration-200"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path d="M22.675 0H1.325C.595 0 0 .595 0 1.325v21.35C0 23.405.595 24 1.325 24h11.475v-9.293H9.691v-3.622h3.108V8.413c0-3.08 1.892-4.754 4.657-4.754 1.325 0 2.464.099 2.795.143v3.241h-1.918c-1.505 0-1.796.716-1.796 1.764v2.312h3.587l-.467 3.622h-3.12V24h6.116C23.405 24 24 23.405 24 22.675V1.325C24 .595 23.405 0 22.675 0z" />
                        </svg>
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-100 rounded-full text-gray-400 hover:text-white hover:bg-emerald-400 transition-colors duration-200"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.949.563-2.004.974-3.127 1.195-.896-.955-2.173-1.555-3.591-1.555-2.717 0-4.917 2.198-4.917 4.917 0 .385.044.761.127 1.122-4.083-.205-7.702-2.158-10.126-5.127-.423.724-.666 1.561-.666 2.475 0 1.708.869 3.215 2.188 4.099-.807-.026-1.566-.247-2.228-.616v.062c0 2.385 1.693 4.374 3.946 4.829-.413.111-.849.171-1.296.171-.317 0-.626-.031-.929-.088.626 1.956 2.444 3.379 4.6 3.42-1.68 1.319-3.808 2.104-6.115 2.104-.398 0-.79-.023-1.175-.069 2.179 1.398 4.768 2.215 7.548 2.215 9.051 0 14-7.498 14-14 0-.213-.005-.426-.014-.637.961-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-100 rounded-full text-gray-400 hover:text-white hover:bg-emerald-400 transition-colors duration-200"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path d="M19.998 3A1.91 1.91 0 0020 1.82 1.91 1.91 0 0018.178 0H1.818C.816 0 0 .825 0 1.82v20.36C0 23.18.816 24 1.818 24h16.36C19.18 24 20 23.18 20 22.18V1.82A1.822 1.822 0 0019.998 3zM5.941 20.06H2.881V8.94h3.06v11.12zM4.414 7.742a1.76 1.76 0 01-1.754-1.76 1.76 1.76 0 011.754-1.76c.967 0 1.753.793 1.753 1.76a1.76 1.76 0 01-1.753 1.76zm14.588 12.318h-3.06v-5.932c0-1.41-.03-3.226-1.965-3.226-1.967 0-2.268 1.535-2.268 3.12v6.038h-3.06V8.94h2.94v1.531h.04c.409-.779 1.41-1.602 2.906-1.602 3.107 0 3.68 2.042 3.68 4.7v6.49z" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
