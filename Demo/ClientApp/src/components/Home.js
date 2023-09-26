import { useEffect, useState } from 'react';
import axios from 'axios';

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
                <th scope="col">portfolio</th>
                <th scope="col">programs</th>
                <th scope="col">scope</th>
                <th scope="col">location</th>
                <th scope="col">agileAdoption</th>
                <th scope="col">teamFormation</th>
                <th scope="col">productLines</th>
                <th scope="col">businessLines</th>
                <th scope="col">startegicObjectives</th>
                <th scope="col">valueStream</th>
                <th scope="col">deliveryStreams</th>
                <th scope="col">continuousImprovement</th>
                <th scope="col">participantGroup</th>
            </tr>
        </thead>
        <tbody>
            {tags.map(t => <tr key={t.id}>
                <td>{t.portfolio}</td>
                <td>{t.programs}</td>
                <td>{t.scope}</td>
                <td>{t.location}</td>
                <td>{t.agileAdoption}</td>
                <td>{t.teamFormation}</td>
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