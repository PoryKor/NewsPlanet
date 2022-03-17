import React, { MouseEventHandler, useCallback, useState, useEffect, useMemo } from 'react'
import useTable from "../../hooks/useTable";
import TableFooter from "./TableFooter.jsx";

type BigTableProps = {
  somProps: [];
};

type SortTable = "ascn" | "desc";

type TableRowType = {
  id: string,
  title: string,
  last_name: string,
  email: string,
  gender: string,
  ip_address: string;
}

type SortKeys = keyof TableRowType

const headers: { key: SortKeys; label: string }[] = [
  { key: "id", label: "ID" },
  { key: "title", label: "title" },
  { key: "last_name", label: "Last name" },
  { key: "email", label: "Email" },
  { key: "gender", label: "Gender" },
];



async function generateData() {
  const data = new Array(100).fill(0).map((value, index) => ({ id: (Math.floor(Math.random() * 100000)).toString(), title: (Math.random() + 1).toString(36).substring(7), last_name: (Math.random() + 1).toString(36).substring(7), email: (Math.random() + 1).toString(36).substring(7), gender: (Math.random() + 1).toString(36).substring(7), ip_address: (Math.random() + 1).toString(36).substring(7) }))
  return data
}

function SortButton({ sortOrder, columnKey, sortKey, onClick, }: {
  sortOrder: SortTable;
  columnKey: SortKeys;
  sortKey: SortKeys;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      onClick={onClick}
      className={`${sortKey === columnKey && sortOrder === "desc"
        ? "sort-button sort-reverse"
        : "sort-button"
        }`}
    >
      ▲
    </button>
  );
}




const BigTable: React.FC<BigTableProps> = () => {
  const [data, setData] = useState<Array<TableRowType>>([]);
  const [dataSorted, setDataSorted] = useState<Array<TableRowType>>([]);
  const [isload, setIsload] = useState<Boolean>(false);
  const [sortKey, setSortKey] = useState<SortKeys>("last_name");
  const [sortOrder, setSortOrder] = useState<SortTable>("ascn");
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(dataSorted, page, 10);
  

  const factorial = useMemo(() => generateData(), []);


  useEffect(() => {
    factorial.then(res => {
      setIsload(true)
      setDataSorted(res)
      setData(res)
    })

  }, []);

  function sortData({
    tableData,
    sortKey,
    reverse,
  }: {
    tableData: TableRowType[];
    sortKey: SortKeys;
    reverse: boolean;
  }) {
    console.log()
    if (!sortKey) return tableData;

    const sortedData = data.sort((a, b) => {
      return a[sortKey] > b[sortKey] ? 1 : -1;
    });
    if (reverse) {
      setDataSorted(sortedData.reverse())
      return sortedData.reverse();
    }
    setDataSorted(sortedData)
    return sortedData;
  }

  const sortedData = useCallback(
    () => sortData({ tableData: data, sortKey, reverse: sortOrder === "desc" }),
    [data, sortKey, sortOrder]
  );

  function changeSort(key: SortKeys) {
    setSortOrder(sortOrder === "ascn" ? "desc" : "ascn");

    setSortKey(key);
  }

  const onSearchInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.value !== "") {


      const searchInTableValue = data.filter(tableData => {
        return tableData.id.includes(e.currentTarget.value) ||
          tableData.title.includes(e.currentTarget.value) ||
          tableData.last_name.includes(e.currentTarget.value) ||
          tableData.email.includes(e.currentTarget.value)
    })
      setData(searchInTableValue)
    } else
      factorial.then(res => {
        setIsload(true)
        setData(res)
      })
  }

  const onClickRegen = () => {
    setIsload(false)
    generateData().then(res => {
      setIsload(true)
      setData(res)
  })
}

const onSortButtonClick = (row:any) => {
  setDataSorted(sortedData())
  changeSort(row)
}


  return (
    <>
    <div style={{display:"flex"}}>
      <button onClick={onClickRegen}>Генерация</button>
      <input
        type="text"
        placeholder='Поиск'
        className='search_input'
        onChange={onSearchInputChange}></input>
        </div>
      <table>
        
        <thead>
          <tr>
            {headers.map((row) => {
              return (
                <td key={row.key}>
                  {row.label}{" "}
                  <SortButton
                    columnKey={row.key}
                    onClick={() => onSortButtonClick(row.key)}
                    {...{
                      sortOrder,
                      sortKey,
                    }}
                  />
                </td>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {slice.map((person:any) => {
            return (
              <tr key={person.id}>
                <td>{person.id}</td>
                <td>{person.title}</td>
                <td>{person.email}</td>
                <td>{person.gender}</td>
                <td>{person.ip_address}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </>
  )
}
export default BigTable;