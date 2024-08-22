import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import Loader from "../../components/loader/Loader";
import { collection, onSnapshot, query, where, addDoc } from "firebase/firestore";
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    const navigate = useNavigate();

    const [userLogin, setUserLogin] = useState({
        email: "",
        password: ""
    });

    const userLoginFunction = async () => {
        if (userLogin.email === "" || userLogin.password === "") {
            return toast.error("All Fields are required");
        }

        setLoading(true);
        try {
            const users = await signInWithEmailAndPassword(auth, userLogin.email, userLogin.password);
            await getUserData(users.user.uid);
        } catch (error) {
            console.error(error);
            setLoading(false);
            toast.error("Login Failed");
        }
    }

    const googleLoginFunction = async () => {
        setLoading(true);
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            await getUserData(result.user.uid);
        } catch (error) {
            console.error(error);
            setLoading(false);
            toast.error("Google login failed. Please try again.");
        }
    }

    const getUserData = async (uid) => {
        try {
            const q = query(
                collection(fireDB, "user"),
                where('uid', '==', uid)
            );
            const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
                let user;
                QuerySnapshot.forEach((doc) => user = doc.data());
                if (user) {
                    localStorage.setItem("users", JSON.stringify(user));
                    toast.success("Login Successful");
                    setLoading(false);
                    if (user.role === "user") {
                        navigate('/user-dashboard');
                    } else {
                        navigate('/admin-dashboard');
                    }
                } else {
                    // If user doesn't exist in Firestore, create a new user document
                    createNewUser(uid);
                }
            });
            return () => unsubscribe();
        } catch (error) {
            console.error(error);
            setLoading(false);
            toast.error("Error fetching user data");
        }
    }

    const createNewUser = async (uid) => {
        try {
            const userObject = {
                uid: uid,
                email: auth.currentUser.email,
                name: auth.currentUser.displayName || "",
                role: "user",
                time: new Date(),
                date: new Date().toLocaleString(
                    "en-US",
                    {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                    }
                ),
            };
            await addDoc(collection(fireDB, "user"), userObject);
            localStorage.setItem("users", JSON.stringify(userObject));
            toast.success("New user created and logged in successfully");
            setLoading(false);
            navigate('/user-dashboard');
        } catch (error) {
            console.error(error);
            setLoading(false);
            toast.error("Error creating new user");
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            {loading && <Loader />}
            <div className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Log In</h2>
                <div className="space-y-4">
                    <div>
                        <label htmlFor="email" className="text-sm font-medium text-gray-700 block mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            value={userLogin.email}
                            onChange={(e) => setUserLogin({ ...userLogin, email: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-200"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="text-sm font-medium text-gray-700 block mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            value={userLogin.password}
                            onChange={(e) => setUserLogin({ ...userLogin, password: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-200"
                            required
                        />
                    </div>
                </div>
                <button
                    onClick={userLoginFunction}
                    className="w-full mt-6 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-200"
                >
                    Log In
                </button>
                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">
                                Or continue with
                            </span>
                        </div>
                    </div>
                    <button
                        onClick={googleLoginFunction}
                        className="mt-4 w-full flex items-center justify-center bg-white border border-gray-300 rounded-md shadow-sm px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-200"
                    >
                        <FcGoogle className="w-5 h-5 mr-2" />
                        Log in with Google
                    </button>
                </div>
                <p className="mt-8 text-center text-sm text-gray-600">
                    Don't have an account?{" "}
                    <Link
                        to="/signup"
                        className="font-medium text-red-600 hover:text-red-500"
                    >
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;