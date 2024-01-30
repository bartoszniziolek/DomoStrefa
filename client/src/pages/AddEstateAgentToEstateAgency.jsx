import { useState, useEffect } from "react";

const AddEstateAgentToEstateAgency = () => {
  const [estateAgent, setEstateAgent] = useState("");
  const [estateAgency, setEstateAgency] = useState("");
  const [estateAgents, setEstateAgents] = useState([]);
  const [estateAgencies, setEstateAgencies] = useState([]);
  const [ready, setReady] = useState(false);

  const handleEstateAgentChange = (event) => {
    setEstateAgent(event.target.value);
  };

  const handleEstateAgencyChange = (event) => {
    setEstateAgency(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await fetch("/api/user/set-estate-agent-to-estate-agency", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        estateAgentId: estateAgent,
        estateAgencyId: estateAgency,
      }),
    });
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

  return (
    ready && (
      <div className="p-3 max-w-lg mx-auto">
        <h1 className="text-3xl text-center font-semibold my-7">
          Przypisz agenta do agencji
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="p-3 max-w-lg mx-auto">Agent nieruchomości</label>
          <select
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
            type="submit"
            className="bg-slate-700 text-white p-3 mt-7 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
          >
            Zapisz
          </button>
        </form>
      </div>
    )
  );
};

export default AddEstateAgentToEstateAgency;
