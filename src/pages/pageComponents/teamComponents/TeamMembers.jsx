import React, { useState } from "react";
import TeamButtons from "./TeamButtons";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

// Your provided expertInfo data
const expertInfo = [
    // IT Team
    { id: 1, name: 'Ashik Api', Image: 'https://ashikapi.netlify.app/assets/Ashik%20Api-DC2-S8J_.jpg', designation: 'Frontend Developer', team: 'IT Team' },
    { id: 2, name: 'Fazley Rabbi', Image: 'https://img.freepik.com/free-photo/close-up-portrait-handsome-smiling-young-man-white-t-shirt-blurry-outdoor-nature_176420-6305.jpg?semt=ais_hybrid&w=740&q=80', designation: 'Backend Developer', team: 'IT Team' },
    { id: 3, name: 'Shihab', Image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg', designation: 'UI/UX Designer', team: 'IT Team' },
    { id: 4, name: 'Shagor', Image: 'https://thumbs.dreamstime.com/b/serious-indian-professional-business-man-office-portrait-serious-young-ambitious-indian-businessman-project-leader-dressed-367980912.jpg', designation: 'Frontend Developer', team: 'IT Team' },
    { id: 5, name: 'Tarek', Image: 'https://i.pinimg.com/474x/4b/59/22/4b5922d22a239def14b8c8fb0e997eb3.jpg', designation: 'Backend Developer', team: 'IT Team' },

    // Survey Team
    { id: 6, name: 'Jamil', Image: 'https://thumbs.dreamstime.com/b/portrait-young-handsome-man-white-shirt-outdoor-portrait-young-handsome-man-white-shirt-outdoor-nice-appearance-131934608.jpg', designation: 'UI/UX Designer', team: 'Survey Team' },
    { id: 7, name: 'Rohan', Image: 'https://st3.depositphotos.com/4071389/12636/i/450/depositphotos_126362018-stock-photo-handsome-man-in-suit-jacket.jpg', designation: 'UI/UX Designer', team: 'Survey Team' },
    { id: 8, name: 'Anika', Image: 'https://www.freepik.com/free-photo/close-up-portrait-young-beautiful-woman-with-wonderful-smile_11593869.htm', designation: 'Survey Specialist', team: 'Survey Team' },
    { id: 9, name: 'Rahim', Image: 'https://www.pexels.com/photo/man-wearing-black-crew-neck-t-shirt-and-glasses-1062669/', designation: 'Survey Analyst', team: 'Survey Team' },
    { id: 10, name: 'Nabila', Image: 'https://www.pexels.com/photo/smiling-woman-standing-on-white-background-7972358/', designation: 'Survey Expert', team: 'Survey Team' },

    // Marketing Team
    { id: 11, name: 'Mila', Image: 'https://www.freepik.com/free-photo/business-woman-portrait-looking-at-camera_1559348.htm', designation: 'Marketing Specialist', team: 'Marketing Team' },
    { id: 12, name: 'Zahid', Image: 'https://images.pexels.com/photos/1352871/pexels-photo-1352871.jpeg', designation: 'Marketing Manager', team: 'Marketing Team' },
    { id: 13, name: 'Rita', Image: 'https://www.pexels.com/photo/woman-wearing-pink-blazer-standing-beside-a-window-7098754/', designation: 'Marketing Strategist', team: 'Marketing Team' },
    { id: 14, name: 'Irfan', Image: 'https://www.freepik.com/free-photo/business-man-with-pie-chart_2273447.htm', designation: 'Marketing Executive', team: 'Marketing Team' },
    { id: 15, name: 'Nashit', Image: 'https://www.pexels.com/photo/man-in-black-jacket-1922252/', designation: 'Marketing Head', team: 'Marketing Team' },

    // Developer Team
    { id: 16, name: 'Mehedi', Image: 'https://images.pexels.com/photos/1920536/pexels-photo-1920536.jpeg', designation: 'Full Stack Developer', team: 'Developer Team' },
    { id: 17, name: 'Sadia', Image: 'https://www.pexels.com/photo/female-programmer-typing-on-laptop-4709298/', designation: 'Software Developer', team: 'Developer Team' },
    { id: 18, name: 'Osman', Image: 'https://www.pexels.com/photo/smiling-man-wearing-white-shirt-3861475/', designation: 'App Developer', team: 'Developer Team' },
    { id: 19, name: 'Shamim', Image: 'https://www.freepik.com/free-photo/close-up-view-business-woman-working-computer_2302958.htm', designation: 'Web Developer', team: 'Developer Team' },
    { id: 20, name: 'Maruf', Image: 'https://images.pexels.com/photos/1637953/pexels-photo-1637953.jpeg', designation: 'Front-End Developer', team: 'Developer Team' },

    // Design Team
    { id: 21, name: 'Ruba', Image: 'https://www.pexels.com/photo/female-graphic-designer-using-drawing-tablet-3760791/', designation: 'Graphic Designer', team: 'Design Team' },
    { id: 22, name: 'Sami', Image: 'https://www.freepik.com/free-photo/close-up-of-a-male-graphic-designer-working-with-a-laptop-and-a-drawing-tablet-in-office_1505329.htm', designation: 'Visual Designer', team: 'Design Team' },
    { id: 23, name: 'Farhan', Image: 'https://www.pexels.com/photo/young-man-wearing-jacket-and-glasses-6707214/', designation: 'UX/UI Designer', team: 'Design Team' },
    { id: 24, name: 'Moin', Image: 'https://www.freepik.com/free-photo/business-man-wearing-blue-shirt-smiling-joyfully_1177259.htm', designation: 'UX/UI Designer', team: 'Design Team' },
    { id: 25, name: 'Shara', Image: 'https://www.pexels.com/photo/close-up-photo-woman-sitting-on-chair-3138252/', designation: 'Product Designer', team: 'Design Team' },

    // HR Team
    { id: 26, name: 'Arif', Image: 'https://www.pexels.com/photo/smiling-man-with-headphones-and-eyeglasses-on-4092129/', designation: 'HR Manager', team: 'HR Team' },
    { id: 27, name: 'Lubna', Image: 'https://www.pexels.com/photo/woman-wearing-yellow-sweater-3508727/', designation: 'HR Specialist', team: 'HR Team' },
    { id: 28, name: 'Shihab', Image: 'https://www.pexels.com/photo/portrait-of-a-woman-in-office-wear-1124970/', designation: 'Recruitment Officer', team: 'HR Team' },
    { id: 29, name: 'Tariq', Image: 'https://www.pexels.com/photo/man-wearing-black-shirt-4709389/', designation: 'HR Executive', team: 'HR Team' },
    { id: 30, name: 'Nazia', Image: 'https://www.pexels.com/photo/close-up-portrait-photo-of-woman-3709289/', designation: 'HR Assistant', team: 'HR Team' },
];

const TeamMembers = () => {
    const [selectedTeam, setSelectedTeam] = useState("IT Team");
    const [currentPage, setCurrentPage] = useState(1);

    // Filter the selected team members
    const teamMembers = expertInfo.filter(
        (member) => member.team === selectedTeam
    );

    // Paginate the members (4 per page)
    const membersPerPage = 4;
    const indexOfLastMember = currentPage * membersPerPage;
    const indexOfFirstMember = indexOfLastMember - membersPerPage;
    const currentMembers = teamMembers.slice(indexOfFirstMember, indexOfLastMember);

    const nextPage = () => {
        if (currentPage < Math.ceil(teamMembers.length / membersPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // Split the members into two halves for alternating layouts
    const firstHalf = currentMembers.slice(0, currentMembers.length / 2);
    const secondHalf = currentMembers.slice(currentMembers.length / 2);

    return (
        <div className="container mx-auto p-6 bg-gray-900">
            <TeamButtons setSelectedTeam={setSelectedTeam} selectedTeam={selectedTeam} />

            <div className="flex justify-center items-center pt-10 pb-20">
                <div>
                    {/* Title Section */}
                    <div className="mb-10 space-y-4">
                        <h1 className="p-2 text-4xl font-cursive text-[rgb(245,124,0)] font-bold">
                            Our Stylish Team Members
                        </h1>
                        <p className="p-4 text-gray-200">
                            This is the sample dummy text insert your desired text here
                            because this is dummy text
                        </p>
                    </div>

                    {/* First section: "even" layout (Image on the left, text on the right) */}
                    <div className="md:flex justify-normal overflow-hidden">
                        {firstHalf.map((member) => (
                            <div
                                key={member.id}
                                className="flex justify-center items-center transition-all duration-300  transform hover:scale-105"
                            >
                                <div className="md:w-64 md:h-64 w-40 h-40 object-cover bg-[rgb(63,63,63)] md:border-none border border-[rgb(245,124,0)]">
                                    <div className="text-center text-white p-2 space-y-4 overflow-hidden mt-1">
                                        <h1 className="text-2xl font-extrabold text-green-300 font-cursive">{member.name}</h1>
                                        <h2 className="font-semibold text-white text-opacity-50">{member.designation}</h2>
                                        <div className="flex justify-center items-center gap-4">
                                            <FaTwitter /><FaFacebookSquare /><FaLinkedinIn /> <FaInstagramSquare />
                                        </div>
                                        <p className="text-sm">
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                            Inventore, obcaecati.
                                        </p>
                                    </div>
                                </div>
                                <div className="md:w-64 md:h-64 w-40 h-40 object-cover ">
                                    <img
                                        className="w-full h-full "
                                        src={member.Image}
                                        alt={member.name}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Second section: "odd" layout (Text on the left, image on the right) */}
                    <div className="md:flex justify-normal overflow-hidden">
                        {secondHalf.map((member) => (
                            <div key={member.id} className="flex justify-center items-center transition-all duration-300  transform hover:scale-105">
                                <div className="md:w-64 md:h-64 w-40 h-40 object-cover">
                                    <img
                                        className="w-full h-full"
                                        src={member.Image}
                                        alt={member.name}
                                    />
                                </div>
                                <div className="md:w-64 md:h-64 w-40 h-40 object-cover bg-[rgb(38,38,38)]">
                                    <div className="text-center text-white p-2 space-y-4 mt-1">
                                        <h1 className="text-2xl font-extrabold text-green-300 font-cursive">{member.name}</h1>
                                        <h2 className="font-semibold text-white text-opacity-70">{member.designation}</h2>
                                        <div className="flex justify-center items-center gap-4">
                                            <FaTwitter /><FaFacebookSquare /><FaLinkedinIn /> <FaInstagramSquare />
                                        </div>
                                        <p className="text-sm">
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                            Inventore, obcaecati.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Pagination */}
            <div className=" flex justify-center gap-10">
                <button
                    onClick={prevPage}
                    disabled={currentPage === 1}
                    className="bg-gray-500 text-white px-4 py-2 rounded disabled:opacity-50"
                >
                    Previous
                </button>
                <button
                    onClick={nextPage}
                    disabled={currentPage === Math.ceil(teamMembers.length / membersPerPage)}
                    className="bg-gray-500 text-white px-4 py-2 rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default TeamMembers;
