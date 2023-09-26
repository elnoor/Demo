import { useEffect, useState } from 'react';
import axios from 'axios';

const AgileAdoption = { 0: "Agile", 1: "Non Agile" }
const TeamFoundation = { 0: "Formed", 1: "Forming", 2: "Hot Mess", 3: "Not Formed" }

export default function Home() {
    const [tags, setTags] = useState([]);

    useEffect(() => {
        if (tags.length) return;

        (async () => {
            try {
                const res = await axios.get("https://localhost:7111/api/tags");
                setTags(res.data);
            } catch (e) {
                console.error("Something went wrong", e);
            }
        })()
    }, [tags])

    return (<table className="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Portfolio</th>
                <th scope="col">Programs</th>
                <th scope="col">Scope</th>
                <th scope="col">Location</th>
                <th scope="col">Agile Adoption</th>
                <th scope="col">Team Formation</th>
                <th scope="col">Product Lines</th>
                <th scope="col">Business Lines</th>
                <th scope="col">Startegic Objectives</th>
                <th scope="col">Value Stream</th>
                <th scope="col">Delivery Streams</th>
                <th scope="col">Continuous Improvement</th>
                <th scope="col">Participant Group</th>
            </tr>
        </thead>
        <tbody>
            {tags.map(t => <tr key={t.id}>
                <td>{t.id}</td>
                <td>{t.portfolio}</td>
                <td>{t.programs}</td>
                <td>{t.scope}</td>
                <td>{t.location}</td>
                <td>{AgileAdoption[t.agileAdoption]}</td>
                <td>{TeamFoundation[t.teamFormation]}</td>
                <td>{t.productLines}</td>
                <td>{t.businessLines}</td>
                <td>{t.startegicObjectives}</td>
                <td>{t.valueStream}</td>
                <td>{t.deliveryStreams}</td>
                <td>{t.continuousImprovement}</td>
                <td>{t.participantGroup}</td>
            </tr>)}</tbody>
    </table>)
};