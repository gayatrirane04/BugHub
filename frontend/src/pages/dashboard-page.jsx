import {Calendar, ListChecks} from "lucide-react";
import React, {useState} from "react";
import PageTittle from "../components/PageTittle";
import {getAllTasks} from "../lib/getTasks";

export default function DashboardPage() {
    const [allTask, setAllTask] = useState([]);

    getAllTasks((data) => {
        setAllTask(data);
    });

    const date = new Date().toDateString();
    return (
        <>
            <div className=" px-4 py-4 mb-6 rounded text-white bg-dark400">
                <PageTittle />
            </div>

            <div className=" text-white mx-2 mb-6 p-4 rounded ">
                <h1 className="text-5xl font-bold">
                    Well come to Our Community!
                </h1>
                <p className="mt-4 text-sm leading-6">
                BugForge is a powerful and intuitive bug tracking platform designed to streamline software debugging and issue resolution. It empowers development teams to efficiently log, assign, and resolve bugs while ensuring clear communication and accountability.

With a centralized system, BugForge enables real-time updates, severity-based prioritization, and progress tracking, helping teams stay on top of software issues. Whether you're managing a small project or tackling enterprise-level debugging, BugForge ensures a smooth workflow, faster fixes, and higher software quality.

Forge a bug-free future with BugForge!🐞
                </p>
            </div>

            <div className="mx-2 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 text-white font-medium">
                <div className="bg-dark400 w-full p-6 flex items-center justify-center space-x-4 rounded">
                    <ListChecks size={80} />
                    <div>
                        <div>Total Bugs 🐞</div>
                        <div className="text-3xl font-black ">
                            {allTask.length}
                        </div>
                    </div>
                </div>
                {/* <div className="bg-dark400 w-full p-6 flex items-center justify-center space-x-4 rounded">
                    <Calendar size={80} />
                    <div>
                        <div>Today Date</div>
                        <div className="text-3xl font-black ">{date}</div>
                    </div>
                </div> */}

                {/* Time
                <div className=" w-full p-6 flex items-center justify-center space-x-4 rounded">
                    <DigitalClock />
                </div> */}
            </div>
        </>
    );
}
