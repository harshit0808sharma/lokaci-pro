"use client";
import { useContext, useState } from "react";
import { MdVideoLibrary } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { BsCameraVideo } from "react-icons/bs";
import { HomeContext } from "../context/HomeContext";
import salonImg from '../../public/assets/images/salonImg4.png'

const VideoSection = () => {
    const { videoData } = useContext(HomeContext);
    const [error, setError] = useState(false);
    const { url, title, description, duration, category } = videoData || {};
    return (
        <>
            <section className="min-h-screen bg-gray-50 py-20 px-6 flex flex-col items-center">
                <div className="max-w-4xl w-full bg-white shadow-lg rounded-xl overflow-hidden">
                    {/* Video or fallback */}
                    <div className="relative bg-black">
                        {!url || error ? (
                            <div className="h-72 flex flex-col items-center justify-center text-white">
                                <MdVideoLibrary size={80} className="mb-4" />
                                <p className="text-lg">Video not available</p>
                            </div>
                        ) : (
                            <div className="w-full aspect-video">
                                <video
                                    className="w-full h-full object-cover"
                                    controls
                                    onError={() => setError(true)}
                                    poster={salonImg.src}
                                >
                                    <source src={url} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>

                        )}
                    </div>

                    {/* Details */}
                    <div className="p-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                            <BsCameraVideo /> {title || "Untitled Demo"}
                        </h2>

                        <p className="text-gray-700 mb-4">{description || "No description available."}</p>

                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
                            {category && (
                                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                                    🎯 Category: {category}
                                </span>
                            )}
                            {duration && (
                                <span className="flex items-center gap-1 bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                                    <FaRegClock /> {duration}
                                </span>
                            )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4">
                            <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition cursor-pointer">
                                📅 Book a Live Demo
                            </button>
                            <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-100 cursor-pointer transition">
                                🕒 Watch Later
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default VideoSection;