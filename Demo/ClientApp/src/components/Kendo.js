import { useState } from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { orderBy } from '@progress/kendo-data-query';

const initialSort = [{
    field: 'ProductName',
    dir: 'asc'
}];
export default function Kendo() {
    const [sort, setSort] = useState(initialSort);
    const [tags, setTags] = useState([]);

    return <Grid style={{
        height: '300px'
    }} data={orderBy(tags, sort)} sortable={true} sort={sort} onSortChange={e => {
        setSort(e.sort);
    }}>
        <Column field="Portfolio" />
        <Column field="ProductLines" title="Product Lines" />
        <Column field="Programs" />
        <Column field="Scope" />
    </Grid>;
};