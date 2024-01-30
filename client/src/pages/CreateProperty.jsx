import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function CreateProperty() {
  const [formData, setFormData] = useState({
    parking: false,
    furnished: false,
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const [estateAgent, setEstateAgent] = useState("");
  const [estateAgency, setEstateAgency] = useState("");
  const [estateAgents, setEstateAgents] = useState([]);
  const [estateAgencies, setEstateAgencies] = useState([]);
  const [ready, setReady] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    console.log(e.target.value);
    if (e.target.id === "parking" || e.target.id === "furnished") {
      setFormData({
        ...formData,
        [e.target.id]: e.target.checked,
      });
      return;
    }
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleEstateAgentChange = (event) => {
    setEstateAgent(event.target.value);
  };

  const handleEstateAgencyChange = (event) => {
    setEstateAgency(event.target.value);
  };

  const fetchEstateAgents = async () => {
    await fetch("/api/user/estate-agent/all").then((res) =>
      res.json().then((data) => setEstateAgents(data))
    );
  };

  const fetchEstateAgencies = async () => {
    await fetch("/api/estate-agency/all").then((res) =>
      res.json().then((data) => setEstateAgencies(data))
    );
  };

  useEffect(() => {
    fetchEstateAgents();
    fetchEstateAgencies();
    setReady(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/property/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          agent: estateAgent,
          agency: estateAgency,
        }),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      //navigate("/sign-in");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">
        Dodaj nieruchomość
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Adres nieruchomości"
          className="border p-3 rounded-lg"
          id="address"
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Powierzchnia (m²)"
          className="border p-3 rounded-lg"
          id="area"
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Liczba pokoi"
          className="border p-3 rounded-lg"
          id="numberOfRooms"
          onChange={handleChange}
        />
        <div className="flex gap-2">
          <input
            type="checkbox"
            id="parking"
            className="w-5"
            onChange={handleChange}
            checked={formData.parking}
          />
          <span>Miejsce parkingowe</span>
        </div>
        <div className="flex gap-2">
          <input
            type="checkbox"
            id="furnished"
            className="w-5"
            onChange={handleChange}
            checked={formData.furnished}
          />
          <span>Wykończony</span>
        </div>
        <label className="p-3 max-w-lg mx-auto">Agent nieruchomości</label>
        <select
          id="agent"
          value={estateAgent}
          onChange={handleEstateAgentChange}
          className="border p-3 rounded-lg"
        >
          <option value="" className="text-center">
            -- Wybierz --
          </option>
          {estateAgents?.map((estateAgent) => (
            <option key={estateAgent._id} value={estateAgent._id}>
              {estateAgent.firstName} {estateAgent.lastName}
            </option>
          ))}
        </select>

        <label className="p-3 max-w-lg mx-auto">Agencja nieruchomości</label>
        <select
          id="agency"
          value={estateAgency}
          onChange={handleEstateAgencyChange}
          className="border p-3 rounded-lg"
        >
          <option value="" className="text-center">
            -- Wybierz --
          </option>
          {estateAgencies?.map((estateAgency) => (
            <option key={estateAgency._id} value={estateAgency._id}>
              {estateAgency.name}
            </option>
          ))}
        </select>
        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80 mt-3"
        >
          {loading ? "Ładowanie..." : "Dodaj nieruchomość"}
        </button>
      </form>
    </div>
  );
}
