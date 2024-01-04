import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addClientStart } from "../redux/client/clientSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AddClient() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  useEffect(() => {
    if (!currentUser) {
      navigate("/signin");
    }
  }, [currentUser, navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  console.log(formData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/client/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          userRef: currentUser._id,
        }),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setError(true);
        setLoading(false);
        return;
      }
      dispatch(addClientStart(data));
      setLoading(false);
      setError(false);
      navigate("/profile");
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Dodaj klienta</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="imię"
          className="border p-3 rounded-lg"
          id="firstName"
          onChange={handleChange}
          value={formData.firstName}
        />
        <input
          type="text"
          placeholder="nazwisko"
          className="border p-3 rounded-lg"
          id="lastName"
          onChange={handleChange}
          value={formData.lastName}
        />
        <input
          type="text"
          placeholder="email"
          className="border p-3 rounded-lg"
          id="email"
          onChange={handleChange}
          value={formData.email}
        />
        <input
          type="text"
          placeholder="telefon"
          className="border p-3 rounded-lg"
          id="phoneNumber"
          onChange={handleChange}
          value={formData.phoneNumber}
        />
        <button
          onClick={handleSubmit}
          type="submit"
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95"
        >
          Dodaj klienta
        </button>
      </form>
    </div>
  );
}
