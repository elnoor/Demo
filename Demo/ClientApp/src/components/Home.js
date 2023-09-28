import { useEffect, useState } from "react";
import axios from "axios";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import { process } from "@progress/kendo-data-query";

const AgileAdoption = { 0: "Agile", 1: "Non Agile" };
const TeamFormation = {
  0: "Formed",
  1: "Forming",
  2: "Hot Mess",
  3: "Not Formed",
};

export default function Home() {
  const [tags, setTags] = useState([]);
  const [dataState, setDataState] = useState({});
  const [dataResult, setDataResult] = useState(process(tags, dataState));

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("https://localhost:7111/api/tags");
        const data = res.data.map((t) => ({
          ...t,
          agileAdoption: AgileAdoption[t.agileAdoption],
          teamFormation: TeamFormation[t.teamFormation],
        }));
        setTags(data);
        setDataResult(process(data, dataState));
      } catch (e) {
        console.error("Something went wrong", e);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid
      resizable={true}
      sortable={true}
      filterable={true}
      data={dataResult}
      {...dataState}
      onDataStateChange={(e) => {
        console.log(e.dataState);
        setDataState(e.dataState);
        setDataResult(process(tags, e.dataState));
      }}
    >
      <GridColumn field="id" title="#" />
      <GridColumn field="portfolio" title="Portfolio" />
      <GridColumn field="programs" title="Programs" />
      <GridColumn field="scope" title="Scope" />
      <GridColumn field="location" title="Location" />
      <GridColumn field="agileAdoption" title="Agile Adoption" />
      <GridColumn field="teamFormation" title="Team Formation" />
      <GridColumn field="productLines" title="Product Lines" />
      <GridColumn field="businessLines" title="Business Lines" />
      <GridColumn field="startegicObjectives" title="Startegic Objectives" />
      <GridColumn field="valueStream" title="Value Stream" />
      <GridColumn field="deliveryStreams" title="Delivery Streams" />
      <GridColumn
        field="continuousImprovement"
        title="Continuous Improvement"
      />
      <GridColumn field="participantGroup" title="Participant Group" />
    </Grid>
  );
}
