import { useContext } from "react";
import myContext from "../../context/myContext";

const UserDetail = () => {
    const context = useContext(myContext);
    const { getAllUser } = context;

    return (
        <div className="py-5">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-semibold text-[#F42c37]">All Users</h1>
            </div>

            <div className="w-full overflow-x-auto shadow-sm border rounded-lg bg-white">
                <table className="w-full text-left">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="h-12 px-6 text-sm font-medium text-slate-700">S.No.</th>
                            <th className="h-12 px-6 text-sm font-medium text-slate-700">Name</th>
                            <th className="h-12 px-6 text-sm font-medium text-slate-700">Email</th>
                            <th className="h-12 px-6 text-sm font-medium text-slate-700">Uid</th>
                            <th className="h-12 px-6 text-sm font-medium text-slate-700">Role</th>
                            <th className="h-12 px-6 text-sm font-medium text-slate-700">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getAllUser.map((user, index) => (
                            <tr key={user.uid} className="border-t last:border-b hover:bg-gray-50 transition-colors">
                                <td className="h-12 px-6 text-sm text-slate-500">{index + 1}.</td>
                                <td className="h-12 px-6 text-sm text-slate-500 capitalize">{user.name}</td>
                                <td className="h-12 px-6 text-sm text-slate-500 cursor-pointer">{user.email}</td>
                                <td className="h-12 px-6 text-sm text-slate-500 cursor-pointer">{user.uid}</td>
                                <td className="h-12 px-6 text-sm text-slate-500 cursor-pointer capitalize">{user.role}</td>
                                <td className="h-12 px-6 text-sm text-slate-500 cursor-pointer">{user.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserDetail;
